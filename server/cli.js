const readline = require('readline');
const db = require('./db/db');
const gallery = require('./script/gallery');
const experience = require('./script/experience');
function commandline () {
    db.serialize(() => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'admin@portfolio>> '
        });
        console.log('\nConnected to SQLite database.');
        rl.prompt();

        rl.on('line', (line) => {
            const input = line.match(/(?:[^\s"]+|"[^"]*")+/g)?.map(arg =>
                arg.replace(/^"|"$/g, "")
                ) || [];

            /*Allows user to use commands in the cmd line
            - help: Shows commands and usage
            - gallery: Allows the upload of gallery images into the database
            - project: Allows the entry of project info
            - projectimage: Allows entry of project image info into db
            - experience: Enter info into db about experience
            - close: Closes server
            */
            switch(input[0]) {
                case 'help':
                    console.log("In progress");
                    break;
                case 'gallery':
                    gallery(input[1], input[2], input[3]);
                    break;
                case 'project':
                    console.log("In progress");
                    break;
                case 'projectimage':
                    console.log("In progress");
                    break;
                case 'experience':
                    console.log("In progress");
                    experience(input[1], input[2], input[3], input[4], input[5], input[6], input[7]);
                    break;
                case 'exit':
                    console.log("Closing connection...");
                    rl.close();
                    process.exit();
                default:
                    console.log('Incorrect Usage: type help to get help.');
                    break;
            }
            console.log("\n");
            rl.prompt();
        });

        rl.on('SIGINT', () => {
            console.log('\nExiting...');
            rl.close();
            process.exit();
        });

});
}   
 module.exports = commandline;