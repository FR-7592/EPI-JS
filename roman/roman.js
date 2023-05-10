

function toRoman(number)
{
    if (number>=1000)
    {
	return "M" + toRoman( number - 1000);
    }
    if (number>=900)
    {
	return "CM" + toRoman( number -900);
    }
    if (number>=500)
    {
	return "D" + toRoman( number -500);
    }
    if (number>=400)
    {
	return "CD" + toRoman( number -400);
    }
    if (number>=100)
    {
	return "C" + toRoman( number - 100);
    }
    if (number>=90)
    {
	return "XC" + toRoman( number -90);
    }
    if (number>=50)
    {
	return "L" + toRoman( number -50);
    }
    if (number>=40)
    {
	return "XL" + toRoman( number -40);
    }
    if (number>=10)
    {
	return "X" + toRoman( number -10);
    }
    if (number>=9)
    {
	return "IX" + toRoman( number -9);
    }
    if (number>=5)
    {
	return "V" + toRoman( number -5);
    }
    if (number>=4)
    {
	return "IV" + toRoman( number -4 );
    }
    if (number>=1)
    {
	return "I" + toRoman( number - 1 );
    }
    return "";

}
function test_int(romanString,index,romanVal)
{
    return ((index < romanString.length -1) && (romanString[index] === romanVal[0]) && (romanString[index+1] === romanVal[1]));

}

function fromRoman(romanString)
{
    let index  = 0;
    let res = 0;
    while((index < romanString.length ) && (romanString[index] === "M"))
    {
	res+=1000;
	index++;
    }
    if((index < romanString.length ) && (romanString[index] === "D"))
    {
	index++;
	res+=500;
    }
    if(test_int(romanString,index,"CM"))
    {
	index+=2;
	res+=900;
    }
    if(test_int(romanString,index,"CD"))
    {
	index+=2;
	res+=400;
    }
    while((index < romanString.length ) && (romanString[index] === "C"))
    {
	res+=100;
	index++;
    }
    if((index < romanString.length ) && (romanString[index] === "L"))
    {
	index++;
	res+=50;
    }
    if(test_int(romanString,index,"XC"))
    {
	index+=2;
	res+=90;
    }
    if(test_int(romanString,index,"XL"))
    {
	index+=2;
	res+=40;
    }
    while((index < romanString.length ) && (romanString[index] === "X"))
    {
	res+=10;
	index++;
    }
    if((index < romanString.length ) && (romanString[index] === "V"))
    {
	index++;
	res+=5;
    }
    if(test_int(romanString,index,"IX"))
    {
	index+=2;
	res+=9;
    }
    if(test_int(romanString,index,"IV"))
    {
	index+=2;
	res+=4;
    }
    while((index < romanString.length ) && (romanString[index] === "I"))
    {
	res+=1;
	index++;
    }

    return res;
}

//console.log(fromRoman("MM"));
/*
for ( let i = 1 ; i<= 9999; i++)
	{
	    let roman = toRoman(i);
	    console.log(i,roman, fromRoman(roman));
	}
*/
module.exports = 
{
    toRoman,
    fromRoman,

}

