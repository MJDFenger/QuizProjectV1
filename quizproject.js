let currentQuestion = 0;
let score = 0;
let hintsLeft = 2; //lets user see 2 hints
let timeLeft = -1;
let timer; //this will be the timer function
let qStartBox = 0;

let questions = [
   {
	"question": "In what span of time do the majority of the series’ events take place?",
	"a": "2570 - 2599",
	"b": "2258 - 2262",
	"c": "2258 - 3262",
	"d": "2082 - 2101",
	"image":"quizimages/q1.jpg",
	"answer": "b",
	"hint": "It's more than a century away, but not too far."
   },
   {
	"question": "Why does the series take place on Babylon 5, and not one of the four other stations of the same name?",
	"a": "It’s the largest one.",
	"b": "That one just happened to be where the interesting stuff happened.",
	"c": "Babylon 5 is the primarily human-populated one.",
	"d": "All the other Babylon stations were destroyed.",
	"image":"quizimages/q1.jpg",
	"answer": "d",
	"hint": "What's left of Babylon 4 becomes relevant to the plot."
   },
   {
	"question": "Which of these characters was not a telepath?",
	"a": "Alfred Bester",
	"b": "Susan Ivanova",
	"c": "Michael Garibaldi",
	"d": "Lyta Alexander",
	"image":"quizimages/q1.jpg",
	"answer": "c",
	"hint": "Ivanova's the trick answer."
   },
   {
	"question": "Which of these two powerful species were antagonists?",
	"a": "The Shadows",
	"b": "The Vorlons",
	"c": "Both",
	"d": "Neither",
	"image":"quizimages/q1.jpg",
	"answer": "c",
	"hint": "Space Demons and Space Fey/Angels. How long can either stay allied with mortals?"
   },
   {
	"question": "The Centauri had an ongoing enmity with...",
	"a": "The Narn",
	"b": "The Minbari",
	"c": "The Humans",
	"d": "The Vorlons",
	"image":"quizimages/q1.jpg",
	"answer": "a",
	"hint": "The Narn and Centauri ambassadors spent much of season 1 scheming against each other."
   },
   {
	"question": "Which of the following was not included in the show?",
	"a": "Jack the Ripper, kept alive by alien technology.",
	"b": "Mushroom-like aliens who caused problems in the station's Medlab.",
	"c": "An alien hunter of souls.",
	"d": "Technologically powered mages with skills of illusion and prophecy.",
	"image":"quizimages/q1.jpg",
	"answer": "b",
	"hint": "The series was just fine with historical references and fantasy-like elements."
   },
   {
	"question": "Why was Captain Sheridan known to many people as 'Starkiller?'",
	"a": "His past as a bounty hunter",
	"b": "His tactics brought down a Minbari warship called the Black Star",
	"c": "He played a critical role in defeating the Shadows",
	"d": "A nuclear physics experiment he led that went horribly wrong",
	"image":"quizimages/q1.jpg",
	"answer": "b",
	"hint": "His career was only in the military."
   },
   {
	"question": "Which of these characters was not removed from the show because of external circumstances?",
	"a": "Commander Sinclair",
	"b": "Susan Ivanova",
	"c": "Talia Winters",
	"d": "Captain Lochley",
	"image":"quizimages/q1.jpg",
	"answer": "d",
	"hint": "One replaced another in the final season"
   },
   {
	"question": "When did the series originally air?",
	"a": "1982 - 1987",
	"b": "1994 - 1998",
	"c": "1978 - 1988",
	"d": "1997 - 2000",
	"image":"quizimages/q1.jpg",
	"answer": "b",
	"hint": "It's more than a century away, but not too far."
   },
   {
	"question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
	"a": "The Ferengi",
	"b": "The Cardassians",
	"c": "The Borg",
	"d": "The Romulans",
	"image":"quizimages/q2.jpg",
	"answer": "c",
	"hint": "It's more than a century away, but not too far."
   }
 ];
 
 
 function loadQuestion() {
	 qStartBox = 0;
	 
	 if (timeLeft >= 0) {
		 clearInterval(timer);
	 }
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	//load number of remaining hints
	document.getElementById("hint").innerHTML = "Hint (" + hintsLeft + " remaining)";
	
	//load timer at 20 seconds
	document.getElementById("countdown").innerHTML = "20";
	// display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       message = "Correct! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect. Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
		endMessage();	
	} else {
		document.getElementById("lightbox").style.display = "block";
		document.getElementById("message").innerHTML = message;
       loadQuestion();
    }


    
    // show the lightbox
    
  
 }  // markIt
 
 function closeLightBox() {
	 if (currentQuestion < questions.length) {
    document.getElementById("lightbox").style.display = "none";
	 }
	
	//if a new question is loaded, start timer when lightbox closes
	if (currentQuestion <= questions.length - 1 && qStartBox == 0) {
		startTimer();
		qStartBox++;
	}
 } // closeLightbox
 
 function startTimer() {
	 timeLeft = 20; //seconds
	 timer = setInterval( function(){
		 document.getElementById("countdown").innerHTML = timeLeft;
		 
		 if (timeLeft <= 0) {
			 clearInterval(timer);
			 
			 if (currentQuestion <= questions.length){
				 loadQuestion();
				 let message = "Time over. Moving to next question.";
				 document.getElementById("lightbox").style.display = "block";
				 document.getElementById("message").innerHTML = message;
			} else {
				endMessage();
			}
			currentQuestion++;
			 
			 
		 }
		 timeLeft--;
	 }, 1000);
 }
 
 function showHint() {
	let message = "";
	if (hintsLeft > 0) { //checks user has some hints left
		message = questions[currentQuestion].hint;
		hintsLeft--;
	}
	else{
		message = "Sorry, all your hints have been used up.";
	}
	document.getElementById("lightbox").style.display = "block";
	document.getElementById("message").innerHTML = message;
	//show the number of hints left
	document.getElementById("hint").innerHTML = "Hint (" + hintsLeft + " remaining)";
 }//showHint
 
 function endMessage() {
	 let message = "";
       // create a special message
	   if (score == questions.length) {
       message = "You got all of them right! Either you know a lot, or you've done this before...";
	   }
	   else if (score > (questions.length / 2) ) {
		   message = "You got " + score + " of " + questions.length + " questions right, but you could improve your knowledge.";
	}
		else if (score <= (questions.length / 2), score > 0 ) {
			message = "You answered " + score + " of " + questions.length + " questions correctly. That's not great, but it could be worse.";
		} 
		else {
			message = "None of those answers were right. I'm ashamed of you.";
		}
		//make the retry button
		let retry = document.createElement("button");
		retry.setAttribute(onclick, "location.reload()");
		retry.innerHTML = "retry?";
		
		//show the lightbox
		document.getElementById("lightbox").style.display = "block";
		document.getElementById("message").innerHTML = message + retry;
}
 
 
 
 
 
 
 
   
