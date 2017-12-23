function Fruit()
{
	this.fruitMsg = function(){
		console.log("I am fruit");
	}
	
}

function Apple(weight, cultivar)
{
	this.weight = weight;
	this.cultivar = cultivar;
	this.age = 0;

	this.getAge = function(){
		return this.age;
	}
	
	this.incrAge = function(){
		this.age++;
		console.log()
	}
	
	this.reSetAge = function(){
		this.age = 0;
		console.log("age reset to 0");
	}

}

function pickApples()
{
	var numApples;
	var tempApple;
	var maxSize = 12;
	var appleBasket = []
	appleBasket.length = maxSize;
	numApples = prompt("How many apples would you like to pick?");

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
		Object.setPrototypeOf(tempApple, Fruit);
		appleBasket[i] = tempApple;
	}		
	return appleBasket;
}
