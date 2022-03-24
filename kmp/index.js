let next = [];
next[0] = -1;

let part = 'acacacacac';

for(let i = 1, j = -1; part[i]; ++i) {
    console.log(j, part[j+1],  part[i]);
    while(j != -1 && part[j+1] !== part[i]) {
        console.log(next[j]);
        j = next[j];
    }
    if(part[j+1] === part[i]) j++;
    next[i] = j;
}

console.log(next);