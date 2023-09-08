const addRecipe = (title, steps) => {
	const body = document.querySelector("body");
	const recipeTitle = document.createElement("p");
	const recipeListEl = document.createElement("ol");

	recipeTitle.innerText = title;

	steps.map((step) => {
		let recipeStep = document.createElement("li");
		recipeStep.innerText = step;
		recipeListEl.appendChild(recipeStep);
	});

	body.appendChild(recipeTitle);
	body.appendChild(recipeListEl);
};

// in developer tools console in browser, calling addRecipe with a title and array of steps adds the recipe title as a p tag and an ordered list of steps
