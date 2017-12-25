// add getter/setter for decayAge??

function Fruit() 
{//Fruit "base-class"
	this._age = 0;
	this._weight = 0;
	this._cultivar = "";
	this._isRotten = false;
	this._decayAge = 3;
}

Object.defineProperty(Fruit.prototype,"getWeight",
	{
	get: 
	function()
	{
		return this._weight;
	}}
);

Object.defineProperty(Fruit.prototype,"setWeight",
    {
	set: 
	function (weight)
	{
		this._weight = weight;
	}}
);

Object.defineProperty(Fruit.prototype,"getCultivar",
	{
	get: 
	function(){
		return this._cultivar;
	}}
);

Object.defineProperty(Fruit.prototype,"setCultivar",
	{
	set: 
	function (_cultivar)
	{
		this._cultivar = _cultivar;
//		console.log("cultivar set");
	}}
);

Object.defineProperty(Fruit.prototype,"getAge",
	{
	get: 
	function()
	{
		return this._age;
	}}
);

Object.defineProperty(Fruit.prototype,"setAge",
	{
	set: 
	function (_age)
	{// if input age is less than the decay age, _isRotten = false
		this._age = _age;
		if (this.getAge < this._decayAge)
		{
			this.setIsRotten = false;
			console.log("Fruit is no longer rotten");
		}
	//  if input age is greater than decay age, _isRotten = true;  use checkrot instead????
		if (this.getAge >= this._decayAge)
		{
			this.setIsRotten = true;
			console.log("");
		}
	}}
);

Object.defineProperty(Fruit.prototype,"setIsRotten",
	{
	set: 
	function (_isRotten)
	{
//		console.log("The fruit is now Rotten..");
		this._isRotten = _isRotten;
	}}
);

Fruit.prototype.IncrAge = function () // !!!!!!!!!!!!
{
	this._age++;// increment age
	console.log("Apple is 1 week older");
	if(this.checkRot())
	{
		this.setIsRotten = true;
	};
};

Fruit.prototype.resetAge = function () 
{
	this._age = 0;
	this.setIsRotten = false;
	console.log("age reset to 0");
};

Fruit.prototype.checkRot = function () 
{// !!!!change to a getter for the _isRotten property.!!!!
	if(this.getAge > this._decayAge)
	{
		console.log("this piece of fruit is rotten..");
		return true;
		
	}
	else 
	{
		console.log("It's still fresh enough to eat.")
		return false;
	}
};

function Orange()
{// Orange class inherits from Fruit
	var _species = 'orange';
}

function Apple() 
{// Apple class inherits from Fruit
	var _species = 'apple';
}

Apple.prototype = new Fruit();
Orange.prototype = new Fruit();

function pickApples(numApples, appleCultivar)
{// Factory function for apples.  returns array of apple objects.
	var tempApple;
	var appleWeight;
	var appleCultivar;
	var maxSize = 12;
	var appleBasket = [];
	appleBasket.length = maxSize;
	
	if(numApples>maxSize)
	{
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

function pickFruit(typeFruit, numFruit, cultivar)
{
// !!!! Generalized ' pick ' function.  create up to 12 of any fruit object !!!!
	var tempFruit, fruitWeight, cultivar;
	
	var fruitBasket = [];
	var maxSize = 12;
	fruitBasket.length = maxSize;
	
	if(numFruit>maxSize){
		return console.log("You can only pick 12 pieces of fruit at a time.");
	}
}

var basket = pickApples(1,"granny smith");
console.dir(basket);
console.dir(basket[0]);
