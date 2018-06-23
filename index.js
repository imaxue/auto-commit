const { execFile } = require('child_process');
const child = execFile('git', ['status'], (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
    console.log(stdout);
});

child.on('exit',(error)=>{
    console.log(error);
})