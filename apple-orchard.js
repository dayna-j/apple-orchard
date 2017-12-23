function Fruit() {
	this.__age = 0;
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
	return this.__age;
}

Fruit.prototype.IncrAge = function () {
	this.__age++;
	console.log("Apple is 1 week older")
}

Fruit.prototype.reSetAge = function () {
	this.__age = 0;
	console.log("age reset to 0");
	}





function Apple(weight, cultivar) {
	this.weight = weight;
	this.cultivar = cultivar;
}

Apple.prototype = new Fruit();

function pickApples()
{
	var numApples;
	var tempApple;
	var maxSize = 12;
	var appleBasket = []
	appleBasket.length = maxSize;
	var numApples = prompt("How many apples would you like to pick?");

	while(numApples>maxSize)
	{
		alert("Your basket can only hold 12 apples..");
		numApples = prompt("How many apples would you like to pick?");
	}
	
	for(i=0; i<numApples; i++)
	{
		appleWeight = prompt("Enter weight for Apple "+i+": ");
		appleCultivar = prompt("Enter cultivar for apple "+i+": ");
		tempApple = new Apple(appleWeight, appleCultivar);
		appleBasket[i] = tempApple;
	}		
	return appleBasket;
}