
function splashTextInsert () {
	var splashWords = ["html", "css", "javascript", "jQuery", "handlebars", "reactJS", "angularJS", "the grid", "flexbox", "mongoDB", "mySQL", "git", "node", "php"];
	var i = Math.floor(Math.random() * splashWords.length);	
	splitWord = splashWords[i].split("");

	x = 0;
	wordLoader()
}

function wordLoader() {
	if (splitWord.length === 0) {
		console.log("test");
		setTimeout(function() {
			splashTextInsert()
		}, 1000);
	} else if (x <= splitWord.length && x>=0) {
		setTimeout(function() {
			$("#splashLoader").append(splitWord[x]); 
			x++;
			wordLoader();
		}, 500);
	} else if (x > splitWord.length && x>=0) {

		setTimeout(function() {
			$("#splashLoader").empty();
			splitWord.pop();
			$("#splashLoader").text(splitWord.join(""));
			--x;
			wordLoader();
			console.log(x);
		}, 500);
	}
}

splashTextInsert()