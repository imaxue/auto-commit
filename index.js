const { execFile,execSync } = require('child_process');
// execFile('git', ['status'], (error, stdout, stderr) => {
//     if (error) {
//         throw error;
//     }
//     console.log(stdout);
// });


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