//function to display boxes
function grid() {
    
    var boxes = document.getElementById("board").children;
    
    //loop for each box
    for (let x=0;x<boxes.length;x++){
        
        boxes[x].setAttribute("class","square");
        boxes[x].setAttribute("onClick","position()");
        boxes[x].setAttribute("onmouseover","hoverStyle()");
        boxes[x].setAttribute("onmouseout","hoverOff()");        
        
    }
    
    let butn = document.getElementsByTagName("button");
    butn[0].addEventListener("click", restart);
}

window.onload=grid;

//global variable
var xoxo =0;


//box functions
function position() {
    
    //box assignment
    let boxes = window.document.getElementById("board").children;
    

    //box checking
    for(var x=0; x<boxes.length; x++) {
        let box = boxes[x];

        box.onclick = function() {
            
            if(xoxo%2 == 0 && box.innerHTML == ""){
                box.innerHTML = "X";
                box.classList.add("square","X");
                winner();
                xoxo +=1;
            }
            else if(xoxo%2 == 1 && box.innerHTML == ""){
                box.innerHTML = "O";;
                box.classList.add("square","O");
                winner();
                xoxo +=1;
            }
        };

    }
    
}


//hover function
function hoverStyle() {
    
    //box assignment
    let boxes = window.document.getElementById("board").children;

    //box checking
    for(var x=0; x<boxes.length; x++) {
        let box = boxes[x];

        box.onmouseover = function() {
           
            box.classList.add("hover");
           
        };

    }
    
}


//hover-off function
function hoverOff() {
    
    //box assignment
    let boxes = window.document.getElementById("board").children;

    //box checking
    for(var x=0; x<boxes.length; x++) {
        let box = boxes[x];

        box.onmouseout = function() {
           
            box.classList.remove("hover");
           
        };

    }
    
}


//fuction that determines who won X or O 
function Winner() {
    
    //div assignment
    let stat = document.getElementById("status");
    
    //box assignment
    let boxes = window.document.getElementById("board").children;
    
    for(var x=0;x<boxes.length;x++) {
        
        boxes[x].removeAttribute("onClick");
        
    }
    
    //checking who won
    if(xoxo%2==0) {
        
        stat.innerHTML = "Congratulations! X is the Winner!";
        stat.classList.add("you-won");
    }
    else if(xoxo%2==1) {
        
        stat.innerHTML = "Congratulations! O is the Winner!";
        stat.classList.add("you-won");
    }
    
}





//function to determine the winner
function winner() {
    
    //box assignment
    let boxes = window.document.getElementById("board").children;
    
    var box1 = boxes[0], box2 = boxes[1], box3 = boxes[2],
        box4 = boxes[3], box5 = boxes[4], box6 = boxes[5],
        box7 = boxes[6], box8 = boxes[7], box9 = boxes[8];
    
    //check who won
    if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        
        Winner();
    }
    else if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        
        Winner();
    }
    else if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        
        Winner();
    }
    else if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        
        Winner();
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        
        Winner();
    }
    else if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        
        Winner();
    }
    else if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        
        Winner();
    }
    else if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        
        Winner();
    }
    else if(box1.innerHTML!=="" && box2.innerHTML!=="" && box3.innerHTML!=="" && box4.innerHTML!=="" && box5.innerHTML!=="" &&
           box6.innerHTML!=="" && box7.innerHTML!=="" && box8.innerHTML!=="" && box9.innerHTML!=="")
    {
        //div assignment
        let stat = document.getElementById("status");
        stat.innerHTML = "Game Draw!";
        stat.classList.add("you-won");
           
    }
    
}


    

//function to restart the game
function restart() {
    
    //restart counter
    xoxo = 0;
    
    //reset all the boxes
    let boxes = window.document.getElementById("board").children;
      
    var box1 = boxes[0], box2 = boxes[1], box3 = boxes[2],
        box4 = boxes[3], box5 = boxes[4], box6 = boxes[5],
        box7 = boxes[6], box8 = boxes[7], box9 = boxes[8];
    
    for(var x=0;x<boxes.length;x++) {
        
        boxes[x].innerHTML = "";
        boxes[x].setAttribute("onClick", "position()");
        boxes[x].classList.remove("X");
        boxes[x].classList.remove("O");
    }
    
    //restart status area
    let stat = document.getElementById("status");
    stat.classList.remove("you-won");
    stat.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    
}


