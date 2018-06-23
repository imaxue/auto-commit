const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path')

let file = path.resolve('data.txt');

fs.writeFileSync(file, Date.now() + '\n\r', {flag: 'a'}, 'utf8');

execSync('git add .', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

execSync('git commit -m "update"', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

execSync('git push', (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});