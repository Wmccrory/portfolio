
function splashTextInsert () {
	var splashWords = ["html ", "css ", "javascript ", "jQuery ", "handlebars ", "reactJS ", "angularJS ", "the grid ", "flexbox ", "mongoDB ", "mySQL ", "git ", "node ", "php "];
	var i = Math.floor(Math.random() * splashWords.length);	
	splitWord = splashWords[i].split("");

	x = 0;
	wordLoader()
}

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

splashTextInsert()

$(".project").on("click", function() {
	console.log($(this).attr("id"));
});