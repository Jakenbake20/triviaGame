var quizQuestions = [
    {
        question: "At the beginning of the series, how many children did Ned and Catelyn Stark have?",
        choices:["Two", "Three", "Five", "Twelve"],
        correctAnswer: "Five"
    },

    {
        question: "Who was the first person in the series to be called King of the Nort",
        choices:["Robb Stark", "Bran Stark", "Edmure Tully", "Hodor"],
        correctAnswer: "Robb Stark"
    },

    {
        question: "How does Daenerys hatch her dragon eggs?",
        choices:["A funeral pyre", "She sits on them", "She throws them off a cliff", "She makes scrambled eggs with them"],
        correctAnswer: "A funeral pyre"
    }
];

//Initial values
var counter = 30;
var currentQuestion = 0;
var scrore = 0;
var lost = 0;
var timer;

//Display the queston and the choices in the browser
function loadQuestion(){
    
    var question = quizQuestions[currentQuestion].question;
    var choices =  quizQuestions[currentQuestion].choices;

    $('#timer').html('Timer: '+ counter);
    $('#game').html('
    <h4>' + question + '</h4>
    ');
    // $('#answers').html('<p>' + $(loadChoices) + '</p>')
}    
        
    
 


function loadChoices(choices) {
    var result = '';

    for (var i = 0; i < choices.length; i++){
        result += '<p class ="choice" data-answer="${choices[i]}">${choices[i]}</p>';
    }

    return result;
}


loadQuestion();