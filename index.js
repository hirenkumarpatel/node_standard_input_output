/**standard question array to hold our questions */
const questions=[
    "Your Name?",
    "Your Lastname?",
    "Your City?"
];

/**process module is global module use to handle process methods */
const askQuestion=(i=0)=>{
    process.stdout.write(`\n${questions[i]} >`);
}

askQuestion();

//using stdin.on to retrive data from terminal and print it out
process.stdin.on("data",data=>{
    //outputing the data
    process.stdout.write(`Result: ${data.toString()}\n`);
    //exit the input stream or will continue to listen data from user
    process.exit();
});
