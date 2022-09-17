//valueAsNumber is the key  
 
 
// ------------------------------------------------

 let x = Math.floor((Math.random() * 20) + 1);

 console.log(x);

 let title = document.getElementById("title");

 let message = document.getElementById("message");

 let score = document.getElementById("score");

 let highScore = document.getElementById("high-score");

 let btnAgain = document.getElementById("button_again");

 let checkBtn = document.getElementById("button");

 let helpBtn = document.querySelector(".help");

 let arr = [];

 let max = 0;

 console.log(localStorage.getItem('save'));

 

 

 

 

 








 function help () {

  
   
   // this function will show the help window
 }

 helpBtn.addEventListener('click', help)

 

 
 document.getElementById("button").onclick = function () {

    let number = document.getElementById("user_input").valueAsNumber;


    if ((Number(score.textContent) <=0)) {

      document.body.style.backgroundColor="red";
    
      title.textContent="You Have LOST !!";
    
      square.textContent=x;
    
      message.textContent = "LOSER !";
          
    }


    else if (number === x) {

       document.body.style.backgroundColor="green";

       title.textContent="You Have Won !!";

       square.textContent=x;

       message.textContent ="Your guess is CORRECT";

        checkBtn.style.display="none";
                                
    }   
    
    else if (number < x ) {
            score.textContent= Number(score.textContent)-1;
               
              if ((x-number <= 2)) {message.textContent="Try a littel Higher";}

              else {message.textContent="Your guess is too Low !!"}

              

 }

          else {
            score.textContent= Number(score.textContent)-1;

            if ((x-number >= -2)) {message.textContent="Try a littel Lower";}

            else {message.textContent="Your guess is too High !!"}

            

            

          }
}




// Again button

document.getElementById("button_again").onclick = function() {

  

location.reload();
 
}













// console.log(localStorage.getItem("save"));

// highScore.textContent ="🥇 Highscore:" + localStorage.getItem("save");

  









 







