function my_pow(a,b)
{
//console.log(a,b);
    let res  = 1;
    while(b>0)
    {
	res*=a;
	b--;
    }
    return res;
}
function ndigits(n)
{
    if(n<10)
    {
	return 1;
    }
    return 1 + ndigits(n/10);
}

function armstrongNumber(number)
{
    if(typeof number !=="number" || isNaN(number) )
    {
	//console.log('Not a number');
	return false;
    }
    if(number < 0)
    {
	return false;
    }
    let ndigit = ndigits(number);
    let sum  = 0;
    let numcpy = number;
    let i = 0;
    while(i<ndigit)
    {
	sum += my_pow(numcpy%10, ndigit);
	//console.log(sum, numcpy%10, ndigit);
	numcpy = (numcpy- numcpy%10 ) /'10';
	i++;
    }
    return (sum === number);
}
//console.log(armstrongNumber('NaN'));
//console.log(armstrongNumber(-1));
module.exports =
{
    my_pow,
    ndigits,
    armstrongNumber,
}
