const generateJoke = () => {
	const URL = "https://official-joke-api.appspot.com/random_joke";
	const body = document.querySelector("body");
	const setUp = document.createElement("p");
	const punchline = document.createElement("p");

	fetch(URL)
		.then((response) => response.json())
		.then((joke) => {
			setUp.innerText = joke.setup;
			punchline.innerText = joke.punchline;
			body.appendChild(setUp);
			body.appendChild(punchline);
		});
};

generateJoke();
// in developer tools console in browser, calling addRecipe with a title and array of steps adds the recipe title as a p tag and an ordered list of steps
