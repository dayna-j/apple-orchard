function Fruit() {
	this.__age = 0;
	this.fruitMsg = function () {
		console.log("I am fruit!");
	}
	
	this.getAge = function (){
		return this.__age;
	}
	
	this.incrAge = function (){
		this.__age++;
		console.log("Apple is 1 week older")
	}
	
	this.reSetAge = function (){
		this.__age = 0;
		console.log("age reset to 0");
	}
// all fruit rots; implement rotting method that checks the age of the fruit
}

Fruit.prototype.checkRot = function () {
	if(this.getAge > 3){console.log("this piece of fruit is rotten..")}
	else {console.log("It's still fresh enough to eat.")}
};


function Apple(weight, cultivar) {
	this.weight = weight;
	this.cultivar = cultivar;
//	this.__age = 0;

//	this.getAge = function(){
//		return this.__age;
//	}
//	
//	this.incrAge = function(){
//		this.__age++;
//		console.log("Apple is 1 week older")
//	}
//	
//	this.reSetAge = function(){
//		this.__age = 0;
//		console.log("age reset to 0");
//	}

}

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
		tempApple = Object.setPrototypeOf(tempApple, Fruit);
		appleBasket[i] = tempApple;
	}		
	return appleBasket;
}