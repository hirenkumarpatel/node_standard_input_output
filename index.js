/**standard question array to hold our questions */
const questions = ["Your Name?", "Your Lastname?", "Your City?"];

/**process module is global module use to handle process methods */
const askQuestion = (i = 0) => {
  process.stdout.write(`\n${questions[i]} >`);
};

askQuestion();

//using stdin.on to retrive data from terminal and print it out
/*process.stdin.on("data",data=>{
    //outputing the data
    process.stdout.write(`Result: ${data.toString()}\n`);
    //exit the input stream or will continue to listen data from user
    process.exit();
});
*/

//filling new array with dynamic answers
const answers = [];
//retriving data from input stream and using callback function for further manipulation
process.stdin.on("data", data => {
  //pushing new value to answers array
  answers.push(`${data.toString().trim()}`);
  if (questions.length > answers.length) {
    askQuestion(answers.length);
  } else {
    process.exit();
  }
});

//handling exit handler
process.on("exit", () => {
  const [name, lastname, city] = answers;
  console.log(`Hey ${name} ${lastname}, How is your ${city} city?`);
});
