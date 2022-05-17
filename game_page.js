player_1_name= localStorage.getItem("player1_name");
player_2_name= localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML= player_1_name + ": ";
document.getElementById("player2_name").innerHTML= player_2_name + ": ";

question_turn= "player1";
answer_turn= "player2" ;

player_1_score=0;
player_2_score=0;

document.getElementById("player1_score").innerHTML= player_1_score;
document.getElementById("player2_score").innerHTML= player_2_score;

document.getElementById("player_question").innerHTML= "Question Turn -" + player_1_name;
document.getElementById("player_answer").innerHTML= "Answer Turn -" + player_2_name;

function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    c1=word.charAt(1);
    console.log(c1);
    x=Math.floor(word.length/2);
    c2=word.charAt(x);
    y=word.length-1;
    c3=word.charAt(y);
    r1=word.replace(c1,"_");
    r2=r1.replace(c2,"_");
    r3=r2.replace(c3,"_");
    console.log(r1);
    console.log(r2);
    console.log(r3);

    question_word= "<h4 id='word_display' > Q. "+ r3 + "</h4>"  ;
    input_box= "<br> Answer : <input type='text' id='input_check_box' placeholder=' Answer here ' >" ;
    check_button= "<br><br> <button class='btn btn-info' onclick='check()' >Check</button> ";
    row= question_word + input_box + check_button;
    document.getElementById("output").innerHTML= row ;
    document.getElementById("word").value= "";
}
function check(){
    get_answer= document.getElementById("input_check_box").value;
    answer= get_answer.toLowerCase();
    if (answer == word ){
        if (question_turn == "player1"){

            player_2_score= player_2_score + 1;
            document.getElementById("player2_score").innerHTML= player_2_score;

        }
        else{
            player_1_score= player_1_score + 1;
            document.getElementById("player1_score").innerHTML= player_1_score;   
        }
    }
    if(question_turn == "player1"){
        question_turn= "player2";
        document.getElementById("player_question").innerHTML= "Question Turn -" + player_2_name;
    }
    else{
        question_turn= "player1";
        document.getElementById("player_question").innerHTML= "Question Turn -" + player_1_name;
    }
    if(answer_turn == "player1"){
        answer_turn= "player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn -" + player_2_name;
    }
    else{
        answer_turn= "player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn -" + player_1_name;
    }
    document.getElementById("output").innerHTML="";
   
}