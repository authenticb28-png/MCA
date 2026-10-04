#!/usr/bin/env python3
"""verify.py - check the exam-prep site before trusting it.

  python3 verify.py            text checks + data/schema checks (needs node)
  python3 verify.py --browser  also opens every page in headless Chromium (needs Playwright)

Text checks: banned filler phrases and "${" in data files; every subtopic, diagram id
and code id listed in COVERAGE.md exists in the data.
Data checks (docs/check_data.js): answer keys in range, >= 3 practice per subtopic,
sourceLine on researched/extra topics, valid SVGs, diagram references resolve,
mock papers total 100 marks, extras present.
"""
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent
DATA = sorted((ROOT / "data").glob("*.js"))
BANNED = re.compile(r"…|\.\.\.|etc\.|and so on|TODO|rest of|similar to above")


def text_checks():
    errs = []
    corpus = ""
    for f in DATA:
        src = f.read_text(encoding="utf-8")
        corpus += src
        for n, line in enumerate(src.splitlines(), 1):
            if BANNED.search(line):
                errs.append(f"{f.name}:{n}: banned phrase: {line.strip()[:90]}")
        if "${" in src:
            errs.append(f"{f.name}: contains '${{' (template literal injection)")
    cov = (ROOT / "COVERAGE.md").read_text(encoding="utf-8")
    for sid in re.findall(r"^\| (\d+\.[0-9E]+) \|", cov, re.M):
        if f"id: '{sid}'" not in corpus:
            errs.append(f"COVERAGE subtopic {sid} not found in data")
    for kind in ("D", "C"):
        for ref in sorted(set(re.findall(rf"\b{kind}\d+\.[0-9E]+[a-z]\b", cov))):
            if f"'{ref}'" not in corpus:
                errs.append(f"COVERAGE {ref} not found in data")
    return errs


def run(cmd):
    try:
        r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=600)
    except FileNotFoundError:
        return 1, f"{cmd[0]} not found"
    return r.returncode, (r.stdout + r.stderr).strip()


def main():
    ok = True
    errs = text_checks()
    print("[text]", "OK" if not errs else "\n".join(errs))
    ok &= not errs
    code, out = run(["node", "docs/check_data.js"])
    print("[data]", out)
    ok &= code == 0
    if "--browser" in sys.argv:
        code, out = run(["node", "docs/smoke.js"])
        print("[browser]", out)
        ok &= code == 0
    print("PASS" if ok else "FAIL")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
