const quizData = [
    {
        question: "Kto je otcem Spytihněva I. a Vratislava I.?",
        a: "Bořivoj I.",
        b: "Břetislav I.",
        c: "Vladislav I.",
        d: "Miloš Zeman",
        correct: "a",
    },
    {
        question: "Boleslav III. měl přívlastek",
        a: "Ryšavý",
        b: "Pobožný",
        c: "Ukrutný",
        d: "Vysmátý",
        correct: "a",
    },
    {
        question: "Ženou Oldřicha byla",
        a: "Božena Němcová",
        b: "neurozená selka Božena",
        c: "Ludmila",
        d: "Eliška",
        correct: "b",
    },
    {
        question: "Kto založil kostol svatého Víta na Pražském Hradě?",
        a: "Karel IV",
        b: "Přemysl Otakar I",
        c: "sv. Václav",
        d: "Bořivoj I.",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const result = document.getElementById('resultquestion')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
let answers= []; 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
/* 
 */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text">${question.c}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="d" class="answer">
                    <label for="d" id="d_text">${question.d}</label>
                  </li>
                  <li>
                  <h4>Vybral jsi: ${question[quizData[i].correct]}</h4>
                  <h4>Správná odpověď: ${question[answers[i]]}</h4>

                
                  </li>
                  
                </ul>
              </div>`
                
                )

//                 result.classList.add("correct")
// /* 
                

                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         


            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z${quizData.length}.</h2>
               

                
                
               
    
                ${results}


                

                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
})