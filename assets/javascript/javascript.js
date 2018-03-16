 //portfolio//
/////////////

//portfolio variable objects

var project = [
	{
		name : "Digital Sin-Eater",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit ipsam voluptatem tempora cumque modi, sapiente facilis obcaecati soluta. Nobis quo error quaerat magnam omnis maxime consectetur possimus eius fuga?",
		gif : "../img/projectExamples/test.png",
		link : "https://digitalsineater.herokuapp.com/"
	},
	{
		name : "Execute Order:66",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit ipsam voluptatem tempora cumque modi, sapiente facilis obcaecati soluta. Nobis quo error quaerat magnam omnis maxime consectetur possimus eius fuga?",
		gif : "../img/projectExamples/test.png",
		link : "https://wmccrory.github.io/week4Game/"		
	},
	{
		name : "Questions of the Void",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit ipsam voluptatem tempora cumque modi, sapiente facilis obcaecati soluta. Nobis quo error quaerat magnam omnis maxime consectetur possimus eius fuga?",
		gif : "../img/projectExamples/test.png",
		link : "https://wmccrory.github.io/triviaGame/"		
	},
	{
		name : "Dredd's Game",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit ipsam voluptatem tempora cumque modi, sapiente facilis obcaecati soluta. Nobis quo error quaerat magnam omnis maxime consectetur possimus eius fuga?",
		gif : "../img/projectExamples/test.png",
		link : "https://wmccrory.github.io/hangmanGame/"		
	},
	{
		name : "memes overboard!",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit ipsam voluptatem tempora cumque modi, sapiente facilis obcaecati soluta. Nobis quo error quaerat magnam omnis maxime consectetur possimus eius fuga?",
		gif : "../img/projectExamples/test.png",
		link : "https://wmccrory.github.io/memesOverboard/"		
	},
	{
		name : "tourStalkr",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit ipsam voluptatem tempora cumque modi, sapiente facilis obcaecati soluta. Nobis quo error quaerat magnam omnis maxime consectetur possimus eius fuga?",
		gif : "../img/projectExamples/test.png",
		link : "https://wmccrory.github.io/tourTrackr/"		
	},
	{
		name : "friendFINDer",
		description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis impedit ipsam voluptatem tempora cumque modi, sapiente facilis obcaecati soluta. Nobis quo error quaerat magnam omnis maxime consectetur possimus eius fuga?",
		gif : "../img/projectExamples/test.png",
		link : "https://lawofthejungle.herokuapp.com/"		
	},
]

 //function bank//
/////////////////

//getting word variable to use in page
function splashTextInsert () {
	var splashWords = ["html5 ", "css3 ", "javascript ", "jQuery ", "handlebars ", "reactJS ", "angularJS ", "the grid ", "flexbox ", "mongoDB ", "mySQL ", "git ", "nodeJS ", "php "];
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
	$("#modalContentName").empty()
	$("#modalContentName").html("<h2>" + data.name)
}


 //website progression//
///////////////////////

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

	$("#modal").fadeIn(1000);
});

$("#modalBackground").on("click", function() {
	$("#modal").fadeOut(1000);
})

$("#modalClose").on("click", function() {
	$("#modal").fadeOut(1000);
})