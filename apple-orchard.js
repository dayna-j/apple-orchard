function Fruit() {// Fruit class
	this._age = 0;
	}

Fruit.prototype.checkRot = function () {
	if(this.getAge() > 3){
		console.log("this piece of fruit is rotten..");
	}
	else {
		console.log("It's still fresh enough to eat.")
	}
};

Fruit.prototype.fruitMsg = function () {
	console.log("I am fruit");
}

Fruit.prototype.getAge = function () {
	return this._age;
};

Fruit.prototype.IncrAge = function () {
	this._age++;
	console.log("Apple is 1 week older");
}

Fruit.prototype.resetAge = function () {
	this._age = 0;
	console.log("age reset to 0");
	};

function Apple(weight, cultivar) {// Apple class
	this.weight = weight;
	this.cultivar = cultivar;
}

Apple.prototype = new Fruit();

function pickApples(){// Factory function for apples.  returns array of apple objects.
	var numApples;
	var tempApple;
	var appleWeight;
	var appleCultivar;
	var maxSize = 12;
	var appleBasket = [];
	appleBasket.length = maxSize;
	numApples = prompt("How many apples would you like to pick?");

	while(numApples>maxSize)
	{
		alert("Your basket can only hold 12 apples..");
		numApples = prompt("How many apples would you like to pick?");
	}
	
	for(var i=0; i<numApples; i++)
	{
		appleWeight = prompt("Enter weight for Apple "+i+": ");
		appleCultivar = prompt("Enter cultivar for apple "+i+": ");
		tempApple = new Apple(appleWeight, appleCultivar);
		appleBasket[i] = tempApple;
	}		
	return appleBasket;
}