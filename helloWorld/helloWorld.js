function helloWorld()
{
    console.log('Hello World!');
}
function factorial(n)
{
    if(n === 0 || n === 1) 
    {
	return 1;
    }
    return n*factorial(n-1);
}
/*
helloWorld();
let fact_5 = factorial(5);
console.log(`factorial(5) = ${fact_5}`);
*/
module.exports= {
    helloWorld,
    factorial,
}
