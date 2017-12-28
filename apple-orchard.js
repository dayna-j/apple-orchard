//function inputValidator(input){
//	do {
//		tempWeight = prompt("Enter weight for apple "+(i+1)+":");
//	  // weight must be greater or equal 1, must be a number and cannot be empty string 			
//	} while( tempWeight < 1 || isNaN(tempWeight) || !tempWeight.length );
//}

function Fruit()
{//Fruit "base-class"
	this._age = 0;
	this._weight = 0;
	this._cultivar = "";
	this._isRotten = false;
	this._decayAge = 3;
}

Object.defineProperty(Fruit.prototype, "getWeight",
	{
	get: 
	function()
	{
		return this._weight;
	}}
);

Object.defineProperty(Fruit.prototype,"setWeight",
    {//input validation:  test for NaN, cannot be empty
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
	}
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
		"honeycrisp": 'apple',
		"red delicious": 'apple',
		"navel": 'orange',
		"valencia": 'orange',
	};

function pickApples(numApples, appleCultivar)
{// Factory function for apples.  returns array of apple objects.
	var tempApple;
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
		
		do {
		tempApple.setWeight = prompt("Enter weight for apple "+(i+1)+":");
		// weight must be greater or equal 1, must be a number and cannot be empty string 			
		} while( tempApple.getWeight < 1 || isNaN(tempApple.getWeight) || !tempApple.getWeight.length );

		tempApple.setCultivar = appleCultivar;
		appleBasket[i] = tempApple;
	}		
	return appleBasket;
}

function pickOranges(numOranges, orangeCultivar)
{// Factory function for apples.  returns array of apple objects.
	var tempOrange;
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
		
		do {
			tempOrange.setWeight = prompt("Enter weight for orange "+(i+1)+":");
		// weight must be greater or equal 1, must be a number and cannot be empty string 			
		} while( tempOrange.getWeight < 1 || isNaN(tempOrange.getWeight) || !tempOrange.getWeight.length );
		
		tempOrange.setCultivar = orangeCultivar;
		orangeBasket[i] = tempOrange;
	}		
	return orangeBasket;
}

// Object agnostic picking function.  
function pickFruit(numFruit, cultivar)
{

	if(fruitMenu[cultivar])
	{
	switch(fruitMenu[cultivar])
	{
		case "apple":
			return pickApples(numFruit, cultivar);
		case "orange":
			return pickOranges(numFruit, cultivar);
    }
	}
	else {console.log("We don't have that in stock..");}
}

//var basket1 = pickApples(1,"granny smith");
//var basket2 = pickOranges(1, "navel");
var basket1 = pickFruit(2,'honeycisp');
console.dir(basket1);
console.dir(basket1[0]);
//console.dir(basket2);
//console.dir(basket2[0]);


