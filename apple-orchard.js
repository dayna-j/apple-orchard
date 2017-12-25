function Fruit() {// Fruit "base-class"
	this._age = 0;
	this._weight = 0;
	this._cultivar = "";
}

Object.defineProperty(Fruit.prototype,"getWeight",{
	get: 
	function(){
		return this._weight;
	}}
);

Object.defineProperty(Fruit.prototype,"setWeight",{
	set: 
	function (weight)
	{
		this._weight = weight;
	}}
);

Object.defineProperty(Fruit.prototype,"getCultivar",{
	get: 
	function(){
		return this._cultivar;
	}}
);

Object.defineProperty(Fruit.prototype,"setCultivar",{
	set: 
	function (cultivar)
	{
		this._cultivar = cultivar;
	}}
);


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

Fruit.prototype.checkRot = function () {
	if(this.getAge() > 3){
		console.log("this piece of fruit is rotten..");
	}
	else {
		console.log("It's still fresh enough to eat.")
	}
};

function Orange(){// Orange class inherits from Fruit
}

function Apple() {// Apple class inherits from Fruit
}

Apple.prototype = new Fruit();
Orange.prototype = new Fruit();

function pickApples(numApples, appleCultivar){// Factory function for apples.  returns array of apple objects.
	var tempApple;
	var appleWeight;
	var appleCultivar;
	var maxSize = 12;
	var appleBasket = [];
	appleBasket.length = maxSize;
	
	if(numApples>12){
		return console.log("You can only pick 12 apples at a time.");
	}
	
	for(var i=0; i<numApples; i++)
	{
		tempApple = new Apple();
		tempApple.setWeight = prompt("Enter weight for apple "+(i+1)+":");
		tempApple.setCultivar = appleCultivar;
		appleBasket[i] = tempApple;
	}		
	return appleBasket;
}

var basket = pickApples(3,"granny smith");
console.dir(basket);
