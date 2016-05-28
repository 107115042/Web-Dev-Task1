countdown();
	
function countdown(){
	
	//Setting Event Date&Time
	
	var event_date = new Date("September 5 2016 00:00:00");
	
	//Obtaining current Date&Time
	var current_date = new Date();
	
	
	//Calculating millisec's difference between event and current time
	var ms_diff = event_date - current_date;
	
	
	var day = 24*60*60*1000;
	var hour = 60*60*1000;
	var minute = 60*1000;
	var second = 1000;

	//Converting milliseconds to Days,Hours,Minutes,Seconds
	var remaining_days = parseInt(ms_diff/day);
	var remaining_hours =  parseInt((ms_diff%day)/hour);
	var remaining_minutes =  parseInt(((ms_diff%day)%hour)/minute);
	var remaining_seconds =  parseInt((((ms_diff%day)%hour)%minute)/second);

	//Sending Days,Hours,Minutes,Seconds to HTML to display
	document.getElementById("days").innerHTML = remaining_days;
	document.getElementById("hours").innerHTML = remaining_hours ;
	document.getElementById("minutes").innerHTML = remaining_minutes ;
	document.getElementById("seconds").innerHTML = remaining_seconds ;
	
	//Calling the function to update the time for every second
	setTimeout(countdown,1000);
	
}
