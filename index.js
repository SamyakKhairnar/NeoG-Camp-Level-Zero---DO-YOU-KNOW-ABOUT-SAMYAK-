const chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0 ;

var userName = readlineSync.question("What's Your Name ? : ");

console.log("\nHello "+userName+" ,\n");
console.log(chalk.green.bgMagenta.bold('Welcome to DO YOU KNOW ABOUT Samyak Quiz\n'));

function play(question,answer){
  var userAns = readlineSync.question(question);
  if (userAns.toLowerCase()===answer.toLowerCase()){
    console.log("Correct !");
    score = score + 1;
    console.log("Your Score is : ",score,"\n");
  }else{
    console.log("Wrong !\n");
  }
}

var topScore = [{
  name : "Samyak",
  score : 5,
},{
  name : "Sangram",
  score : 5,
},{
  name : "Rahul",
  score : 4,
}]

var questions = [{
  question: "Where Do I Live ? : ",
  answer: "Pune",
},{
  question: "Which Bike Do I Have ? : ",
  answer: "Pulsar",
},{
  question: "What's My Education Background ? : ",
  answer: "Commerce",
},{
  question: "WHat's My Lastname ? : ",
  answer: "Khairnar",
},{
  question: "What's My Hometown ? : ",
  answer: "Dhule",
}]

for(var i=0;i<questions.length;i++){
  var currentQues = questions[i];
  play(currentQues.question,currentQues.answer);
}

console.log("____________________\n Top Scores :-");

for(var i=0;i<topScore.length;i++){
  var current = topScore[i];
  console.log("Name : ",current.name);
  console.log("Score : ",current.score);
  console.log();
}