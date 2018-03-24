 //portfolio//
/////////////

//portfolio variable objects

var project = [
	{
		name : "Digital Sin-Eater",
		description : "Digital Sin-Eater is the Uber of 16th century Christian ritual magic. Much like the actual \"sin-eater\" ritual, users can enter sins which, while they don't want to bear the burden of, they don't want to have to do any actual penance. <br><br>Other users can then browse the list of uploaded sins and choose sins to \"eat\". <br><br>I personally find long forgotten religious mythos fascinating, and I thought it would be interesting to see how a very old Puritanical ritual might function in the digital age. The end result being the anachronistic Digital Sin-Eater.",
		gif : "assets/img/projectExamples/sineater.gif",
		link : "https://digitalsineater.herokuapp.com/"
	},
	{
		name : "Execute Order:66",
		description : "The instructions were simple: \"Make a Star Wars fighting game\". Rather than going with the standard \"Luke vs Darth Vader vs Obi Wan\" paradigm, I decided to use what I consider the most macabre and unintentionally funny scene in all of Star Wars; the scene where Anakin goes to the Jedi Temple to slaughter all the younglings. <br><br>The actual gameplay is fairly simple, select your character and then select your opponents, beat all the opponents and win. What makes it entertaining is using the philosophy behind fighting games and having each character have an 'ending scene' and win/loss 'cutscenes'. <br><br>Each character can win depending on the order in which opponents are picked, and each character can lose if they don't pick the correct order.",
		gif : "assets/img/projectExamples/order66.gif",
		link : "https://wmccrory.github.io/week4Game/"		
	},
	{
		name : "Questions of the Void",
		description : "The purpose of this project was to showcase the setTimeout method in javascript. Since the project revolved around time, I chose a video game character whose entire concept is based around time mechanics. I also wanted to give it the feel of an actual trivia 'program', so I designed it to function much like an actual video game. <br><br>This project makes liberal use of the jQuery .animate() method. <br><br>WARNING: This project autoplays sound on load.",
		gif : "assets/img/projectExamples/triviaGame.gif",
		link : "https://wmccrory.github.io/triviaGame/"		
	},
	{
		name : "Dredd's Game",
		description : "With Dredd's Game I wanted to evoke the look and feel of an old school web game, the kind a publisher might put up on their website for promotion. <br><br> With that in mind, I developed it with the intention of mimicking what a website might look like in the dystopian world of Judge Dredd. It follows a pretty simple 'Header' 'Exposition' 'Game' 'Footer' format.",
		gif : "assets/img/projectExamples/hangmanGame.gif",
		link : "https://wmccrory.github.io/hangmanGame/"		
	},
	{
		name : "memes overboard!",
		description : "Imagine for a moment that you were an illegal meme smuggler, and you had to jettison your cargo all at once or else face serious prison time... <br><br>memes overboard! is a pretty simple web app that uses the giphy api to show gifs that a user might be interested in. The hook is in the perceived storytelling inherent within the app. To achieve that, the gifs all spew out from the boat in a random chaotic pattern. On click they begin flailing wildly, much like actual jettisoned cargo would look like in water. Users can search for relevant gifs or they can search for presets, my personal favorite being the smoking crab.",
		gif : "assets/img/projectExamples/memesOverboard.gif",
		link : "https://wmccrory.github.io/memesOverboard/"		
	},
	{
		name : "tourStalkr",
		description : "I've noticed that it's very easy to find upcoming tour dates for bands, but it's nearly impossible to 'visualize' the data. So I created tourStalkr, a webapp that lets users not only see one band's tour on a map, but lots of bands! <br><br>Users can enter the name of any band that's currently on tour, which the app uses to get data from the BandsinTown API and plot their tour out over a google map. The points are numbered in order of the closest upcoming show to the furthest. As users add more bands, the plot points are reordered to account for the new data. <br><br>As more and more bands are entered, you can begin to see patterns in the routes and areas bands like to play in. Pretty neat, at least I think so!",
		gif : "assets/img/projectExamples/tourStalkr.gif",
		link : "https://wmccrory.github.io/tourTrackr/"		
	},
	{
		name : "friendFINDer",
		description : "friendFINDer is pretty much your standard 'Answer questions, receive match' web app. I thought it would be funny if as you answered the questions, you slowly realized they all revolved around the movie \"Black Panther\" and as you scrolled down further you would see a giant picture of him. <br><br>As for the mechanics, every answer is tied to a numerical value that upon submission compares it to an array of other users and returns the user that has the most similar answers. <br><br>The user image is stored in the actual javascript user array as a base64 string, which doesn't exactly scale, but works for demonstration purposes.",
		gif : "assets/img/projectExamples/friendFinder.gif",
		link : "https://lawofthejungle.herokuapp.com/"		
	},
	{
		name : "Cache-ual Corner",
		description : "Cache-ual Corner is designed to be a very no-frills, persistant chatroom. The trappings of modern chatroom designed were intentionally avoided to give the site the feeling of what chatrooms 'used to be'. <br><br> The styling is designed to be very modular. The structure of the site is coded in a css file, and then a 'skin' css file is overlayed on top of it. <br><br>Users can then go into their personal settings and change everything from their screen name, to avatars and font color, to what 'skin' they would like to be displayed. This allows users to customize their experience, and add personality to their profiles. <br><br>Users and chat messages are stored in a persistant database, so admins can go in and remove any problem users and review what has been taking place even while they have been away.",
		gif : "assets/img/projectExamples/cacheualCorner.gif",
		link : "https://cacheualcorner.herokuapp.com/"		
	},
]

 //function bank//
/////////////////

//getting word variable to use in page
function splashTextInsert () {
	var splashWords = ["html ", "css ", "modals ", "APIs ", "javascript ", "jQuery ", "handlebars ", "reactJS ", "responsive", "the grid ", "flexbox ", "mongoDB ", "mySQL ", "git ", "github ", "nodeJS ", "php "];
	var i = Math.floor(Math.random() * splashWords.length);	
	splitWord = splashWords[i].split("");

	x = 0;
	wordLoader()
}

//actually displaying the word in the splash page
function wordLoader() {
	if (splitWord.length === 0) {
		setTimeout(function() {
			splashTextInsert()
		}, 1000);
	} else if (x <= splitWord.length && x>=0) {
		setTimeout(function() {
			$("#splashLoader").append(splitWord[x]); 
			x++;
			wordLoader();
		}, Math.floor(Math.random() * 400) + 100);
	} else if (x > splitWord.length && x>=0) {

		setTimeout(function() {
			$("#splashLoader").empty();
			splitWord.pop();
			$("#splashLoader").text(splitWord.join(""));
			--x;
			wordLoader();
		}, 200);
	}
}

//portfolio project display//
function projectDisplay (data) {
	$("#modalContentName").empty();
	$("#modalContentName").html("<h2>" + data.name);

	$("#modalContentDescription").empty();
	$("#modalContentDescription").html("<p>" + data.description);

	$("#modalContentGif").removeAttr("src");
	$("#modalContentGif").attr("src", data.gif)

	$("#modalContentLink").removeAttr("href");
	$("#modalContentLink").attr("href", data.link);
}


 //website progression//
///////////////////////

//console logging for laughs
console.log("I know why you're here: The 'font color to purple' showing up as red is intentional.");

//initializing typing animation for splash page

splashTextInsert()

//portfolio onClick events

$(".project").on("click", function() {
	var modalDisplay = $(this).attr("id");

	if (modalDisplay === "sineater") {
		projectDisplay(project[0])
	}
	else if (modalDisplay === "starwarsGame") {
		projectDisplay(project[1])
	}
	else if (modalDisplay === "triviaGame") {
		projectDisplay(project[2])
	}
	else if (modalDisplay === "hangmanGame") {
		projectDisplay(project[3])
	}
	else if (modalDisplay === "memesOverboard") {
		projectDisplay(project[4])
	}
	else if (modalDisplay === "tourStalkr") {
		projectDisplay(project[5])
	}
	else if (modalDisplay === "friendFinder") {
		projectDisplay(project[6])
	}
	else if (modalDisplay === "cacheualCorner") {
		projectDisplay(project[7])
	}

	$("#modal").fadeIn(1000);
});

$("#modalBackground").on("click", function() {
	$("#modal").fadeOut(1000);
})

$("#modalClose").on("click", function() {
	$("#modal").fadeOut(1000);
})