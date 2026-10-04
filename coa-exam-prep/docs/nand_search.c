#include <stdio.h>
#include <stdlib.h>
typedef unsigned short u16;
u16 sig[32]; int n; u16 target; int found=0;
int pa[32],pb[32];
void dfs(int k,int maxg,int minpair){
  if(found) return;
  if(k==maxg) return;
  int N=n; 
  for(int i=0;i<N;i++) for(int j=i;j<N;j++){
    int pidx=i*32+j;
    if(0 && pidx<minpair) continue;
    u16 v=(u16)~(sig[i]&sig[j]);
    int dup=0; for(int t=0;t<N;t++) if(sig[t]==v){dup=1;break;}
    if(dup) continue;
    sig[n]=v; pa[n]=i; pb[n]=j; n++;
    if(v==target){found=k+1; printf("found with %d gates:\n",k+1); for(int g=4;g<n;g++) printf(" g%d = NAND(s%d,s%d)\n",g,pa[g],pb[g]); n--; return;}
    dfs(k+1,maxg,pidx);
    n--; if(found) return;
  }
}
int main(int argc,char**argv){
  // inputs A,B,C,D as 16-row truth tables (row r: A=bit3..D=bit0)
  u16 A=0,B=0,C=0,D=0; for(int r=0;r<16;r++){ if(r&8)A|=1<<r; if(r&4)B|=1<<r; if(r&2)C|=1<<r; if(r&1)D|=1<<r; }
  target=(u16)((A|B)&(C|D));
  if(argc>1) target=(u16)strtol(argv[1],0,0);
  for(int g=1;g<=9 && !found;g++){ n=4; sig[0]=A;sig[1]=B;sig[2]=C;sig[3]=D; dfs(0,g,0); if(!found) printf("no solution with %d gates\n",g); fflush(stdout);}
}
