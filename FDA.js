var file = process.argv[2];
var fs = require('fs');
var input = fs.readFileSync(file).toString();
t = 'he';
m=t.length;
alph= new Array();
for(i=0;i<m;i++)
    alph[t.charAt(i)]=0
del=new Array(m+1)
for(j=0;j<=m;j++)
    del[j]=new Array()
for(i in alph)
    del[0][i]=0
for(j=0;j<m;j++){
    prev=del[j][t.charAt(j)]
    del[j][t.charAt(j)]=j+1
    for(i in alph)
        del[j+1][i]=del[prev][i]
}
state = 0;
positions = new Array();
for (i = 0; i < input.length; i++){
    if (input.charAt(i) in alph)
        state = del[state][input.charAt(i)]
    else
        state = 0
    if (state == m)
        positions.push(i - m + 1)
}
console.log(positions)
