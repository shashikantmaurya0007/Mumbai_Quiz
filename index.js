let input=require('readline-sync');
var style=require('chalk');

let name=input.question(style.blue("enter your name Gentleman?"));
console.log(style.green(name)+' welcome here')
console.log(chalk.red("!!please write the whole option as answer not the 'a,b,c,d'!!"));
var highScores = [
  {
    name: "rahul",
    score: 3
  },
  {
    name: "ravi",
    score: 2
  }
]
const mumbai=[
{
  question:"Which is the most famous festival of mumbai?",
  option:["Ganpati","holi","durgapuja","eid"],
  answer:"Ganpati"

},{  question:"Which is the most famous street food of mumbai?",
  option:["chole","vada-pav","momos","biryani"],
  answer:"vada-pav"        },{     question:"Which is the most famous sports of mumbai?",
  option:["cricket","hockey","badmintion","rugby"],
  answer:"cricket"      },{      question:"What is tag line of mumbai?",
  option:["city of color","city of lights","people city","city of dream"],
  answer:"city of dream"          },{      
     question:"The worst incident happened in  mumbai?",
  option:["26/11","9/11","2/13","4/12"],
  answer:"26/11"
  }




]


let score=0;

for (let i=0;i<mumbai.length;i++)

{
console.log(style.red(mumbai[i].question));
mumbai[i].option.map((j)=>
{style.green(console.log(j));})
var answer=input.question(style.green("enter the answer"));
if(answer.toLowerCase()==mumbai[i].answer.toLowerCase())
{
    score+=1;
  console.log(style.green("correct answer your current score is  "+score));

}
else
{
   console.log(style.green("wrong answer your current score is"+score));
}






}


console.log(style.red("thank you for taking part in the quiz"+style.green("you scored"+score+"  "+ (score/5)*100+"%" )))
console.log("--- High scores Board ----")
for(var i = 0; i < highScores.length; i++ ){
  var currentHighscorePerson = highScores[i]
  console.log(currentHighscorePerson.name + "   " + currentHighscorePerson.score)
}
console.log(chalk.bold.green("if your score is above these people send me teh screenshot i will update in database"));