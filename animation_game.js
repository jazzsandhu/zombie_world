window.onload = pageReady;
function pageReady(){
	var audioply = document.getElementById("audio");
	//below var to store the vlaue of jump and move forward of zombie 
	//then relate these things to the fucntion
	var up = document.getElementById("jump");
	up.onclick = doThis;
	var right =document.getElementById("walk")
	right.onclick = doThat;
	//below var is to play with zombie
	var ani = document.getElementById("zombie");
	//below is for dragon
	var powerUp = document.getElementById("power");
	//below is to show the start and display the score
	var show = document.getElementById("start");
	//below is to send message after some time
	var showUpm = setTimeout(send, 2000);
	//function to send start go msg
	function send(){
		show.innerHTML = "Go!!!";
	}
	
	//below two function to add and remove class
	//for animation on zombie
	var i=0;
 	function doThis(){
 		audioply.play();
		ani.classList.add('go');
		powerUp.classList.remove('power1');
		right.style.borderLeftColor = "red";
		up.style.borderBottomColor = "blue";
		i++;
		//to show the score continously
	    var number = document.getElementById("scorenumber");
	    number.innerHTML = i * 100 /5 ;
	    //for display the score
	    var scoreshow = setTimeout(sendscore, 30000);
	    function sendscore(){
		show.innerHTML = "Yeah...your score is "+ i * 100 /5;
	    }


	}
	var j=0;
	function doThat(){
		ani.classList.remove('go');
		powerUp.classList.add('power1');
		right.style.borderLeftColor ="blue";
		up.style.borderBottomColor ="red";
		j++;

	}
	
	//msg for game over after 30 sec.
	var msg = setInterval(sendMsg,33000);
	function sendMsg(){
		alert("Game Over");
	}
	//start the game again
	var again = document.getElementById("play");
	again.onclick = letsplay;
	function letsplay(){
		location.reload();
	}

	

}

