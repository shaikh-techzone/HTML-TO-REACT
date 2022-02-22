alert("WELCOME TO THE GAME")
alert(" Enter R for Rock , S for Scissor , P for paper")
var player1 = prompt("Enter R , P , S")
var player2 = prompt("Enter R , P , S")

// alert(" Enter R for Rock , S for Scissor , P for paper")

if(player1=="R",player2=="S"){
    alert("Player1 Wins")
}
else if(player1=="R",player2=="P"){
    alert("Player2 Wins")
}
else if(player1=="R",player2=="R"){
    alert("DRAW")
}
else if(player1=="P",player2=="R"){
    alert("Player1 Wins")
}
else if(player1=="P",player2=="S"){
    alert("Player2 Wins")
}
else if(player1=="P",player2=="P"){
    alert("DRAW")
}
else if(player1=="S",player2=="P"){
    alert("Player1 Wins")
}
else if(player1=="S",player2=="R"){
    alert("Player2 Wins")
}
else if(player1=="S",player2=="S"){
    alert("DRAW")
}
else{
    alert("Enter Correct Value")
}