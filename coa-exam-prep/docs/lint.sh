#!/bin/sh
# quick banned-phrase scan of data files
grep -n -E '…|\.\.\.|etc\.|and so on|TODO|rest of|similar to above' "$(dirname "$0")"/../data/*.js | cut -c1-160
