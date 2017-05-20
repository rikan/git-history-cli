
let program = require('commander');
let loader = require('../lib/repo-map');
program
    .usage('[entry]')
    .parse(process.argv);


let ghcMap = loader.loadGhcRepo();
console.log();
for (let k in ghcMap) {
    if (ghcMap.hasOwnProperty(k)) {
        console.log(k + ' ' + ghcMap[k]);
        console.log();
    }
}