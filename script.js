const quizData =[
    {
        question : "پر طرفدارترین زبان برنامه نویسی 2019 چیست ؟",
        a : "Java",
        b : "Java script",
        c : "Python",
        d : " C#",
        correct : "b"
    },    {
        question : "زبان جاوا اسکریپت در چه سالی ظهور یافته ؟",
        a : "1999",
        b : "1995",
        c : "2000",
        d : "2004",
        correct : "b",
    } ,    {
        question : "کدام گزینه فریم ورک جاوااسکریپ است ؟",
        a : "CHERRYPY",
        b : "DJANGO",
        c : "MangoBe",
        d : "React",
        correct : "d",
    } ,   {
        question : "محبوب ترین فریم ورک جاوااسکریپت کدام است ؟",
        a : "Angular.js ",
        b : "Vue.js ",
        c : "Gatsby",
        d : "React",
        correct : "d",
    }    
];  

const body       = document.getElementsByTagName("body")
const answerEls  =  document.querySelectorAll(".answer");
const quiz       =  document.getElementById("qiuz");
const questionEl =  document.getElementById("question")
const a_text     =  document.getElementById("a-text")
const b_text     =  document.getElementById("b-text")
const c_text     =  document.getElementById("c-text")
const d_text     =  document.getElementById("d-text")
const submitBtn  =  document.getElementById("submitBtn")

function loadQuiz(){
    deSelectAnswers();
    const currentQuestionData = quizData[currentQuestion]
    questionEl.innerText      =  currentQuestionData.question;
    a_text.innerText          =  currentQuestionData.a;
    b_text.innerText          =  currentQuestionData.b;
    c_text.innerText          =  currentQuestionData.c;
    d_text.innerText          =  currentQuestionData.d;
} 

let currentQuestion = 0;
let score = 0


loadQuiz()


function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer= answerEl.id;
        }
    })
    return answer

}
function deSelectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
        }
    )

}



submitBtn.addEventListener("click",()=>{  
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuestion].correct){
            score++
        }            
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz()
        
        }else{
            alert(`امتیاز شما : ${score}/${ quizData.length}`)
            
        }
    }



})
























