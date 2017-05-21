let commands = require('../lib/command').commands;

let program = require('commander');
program
    .usage('[entry]')
    .option('-t, --text [text]', 'Only show commits with a commit message containing the string')
    .option('-n, --number [number]', 'Show only the last n commits')
    .option('-b, --branch [branch]', 'Show only the branch commits')
    .option('-p, --pretty', 'Show pretty commits')
    .option('-s, --since [since]', 'Limit the commits to those made before the specified date')
    .option('-u, --until [until]', 'Limit the commits to those made after the specified date')
    .parse(process.argv);


if (!program.args || !program.args.length) {
    console.log('need specify the repo url');
    return;
}
let out = commands.showHistory(program.args[0], {
    number: program.number,
    pretty: program.pretty,
    text: program.text,
    branch: program.branch,
    until: program.until,
    since: program.since,
});

console.log();
console.log(out);