// write input validation function for accessor methods

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
	{// if input age is less than the decay age, _isRotten = false  use checkrot
		this._age = _age;
		if (this.checkRot())
		{
			this.setIsRotten = true;
		}
		else
		{
			this.setIsRotten = false;
		}
	}}
);

Object.defineProperty(Fruit.prototype,"setIsRotten",
	{
	set: 
	function (_isRotten)
	{
		this._isRotten = _isRotten;
	}}
);

Object.defineProperty(Fruit.prototype,"setDecayAge",
	{
	set: 
	function (_decayAge)
	{
		this.decayAge = _decayAge;
	}}
);

Object.defineProperty(Fruit.prototype,"getDecayAge",
	{
	get: 
	function()
	{
		return this._decayAge;
	}}
);

Fruit.prototype.IncrAge = function ()
{
	this._age++;
	console.log("Apple is 1 week older");
	if(this.checkRot())
	{
		this.setIsRotten = true;
	};
};

Fruit.prototype.resetAge = function () 
{
	this.setAge = 0;
	this.setIsRotten = false;
	console.log("age reset to 0");
};

Fruit.prototype.checkRot = function ()
{// !!!! change to a getter for the _isRotten property !!!!
	if(this.getAge > this.getDecayAge)
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

var fruitMenu = 
	{
		"granny smithy": 'apple',
		"fuji": 'apple',
		"gala": 'apple',
		"navel": 'orange',
		"valencia": 'orange',
	};

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

function pickOranges(numOranges, orangeCultivar)
{// Factory function for apples.  returns array of apple objects.
	var tempOrange;
	var orangeWeight;
	var orangeCultivar;
	var maxSize = 12;
	var orangeBasket = [];
	orangeBasket.length = maxSize;
	
	if(numOranges>maxSize)
	{
		return console.log("You can only pick 12 apples at a time.");
	}
	
	for(var i=0; i<numOranges; i++)
	{
		tempOrange = new Orange();
		tempOrange.setWeight = prompt("Enter weight for orange "+(i+1)+":");
		tempOrange.setCultivar = orangeCultivar;
		orangeBasket[i] = tempOrange;
	}		
	return orangeBasket;
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

var basket1 = pickApples(1,"granny smith");
var basket2 = pickOranges(1, "navel");
console.dir(basket1);
console.dir(basket1[0]);
console.dir(basket2);
console.dir(basket2[0]);
