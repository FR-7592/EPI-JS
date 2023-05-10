
function str_sup(s1,s2)
{
    let index = 0;
    if(s2===null)
    {
	return s1 !== null;
    }
    while( index < s1.length && index < s2.length)
    {
	if(s1[index]>s2[index])
	{
	    return true;
	}
	if(s1[index]<s2[index])
	{
	    return false;
	}
	index++;
    }
    return s1.length > s2.length;
}
function type_order(elt)
{
    if(typeof elt === 'number')
    {
	return 0;
    }
    if(typeof elt === 'string')
    {
	return 1;
    }
    if(typeof elt === 'object' && elt instanceof Array)
    {
	return 2;
    }
    return 3;

}
function gen_sup(elt1,elt2) // true => elt1 > elt2
{
    if(typeof elt1 !== typeof elt2)
    {
	return (type_order(elt1) > type_order(elt2));
    }
    if(typeof elt2 === 'number')
    {
	return elt1>elt2;
    }
    if(typeof elt2 === 'string')
    {
	return str_sup(elt1,elt2);
    }
    if(typeof elt2 === 'object' && elt2 instanceof Array && elt1 instanceof Array )
    {
	sortArray(elt1);
	sortArray(elt2);
	return gen_sup(elt1[0],elt2[0]);
    }
    if(typeof elt2 === 'object')
    {
	return obj_sup(elt1,elt2);
    }
    
    return false;
}

function get_min_attribute(obj)
{
    let min = null;
    for (let key in obj)
    {
	if(min === null)
	{
	    min =key;
	}
	else
	{
	    if(str_sup(min,key))
	    {
		min =key;
	    }
	}
	//console.log(key,obj[key]);
    }
    return min;
}


let a = {b:"STR", c: 5};
let b = {a:10, c: 6};
let b2 = {};

function obj_sup(obj1,obj2)
{
    if(obj1 === null || obj2 === null)
    {
	return false;
    }
    if(obj1.length === 0)
    {
	return false;
    }
    if(obj2.length === 0)
    {
	return true;
    }

    att1 = get_min_attribute(obj1);
    att2 = get_min_attribute(obj2);
    //console.log(obj1,att1,obj2,att2 );
    if(str_sup(att1,att2))
    {
	return true;
    }
    if(att1 === att2)
    {
	return gen_sup(obj1[att1],obj2[att2]);
    }
    return false;
}
function sortArray(array)
{
    for(let i = 0; i< array.length;i++)
    {
	for(let j = i+1; j< array.length;j++)
	{
	    if(gen_sup(array[i],array[j]))
	    {
		let temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	    }
	}
    }
    //console.log(array);
    return array;
}
/*
console.log(sortArray([7,4,5,[3,2],10,25,2,[2,1] ]));
console.log(sortArray([7,4,b,"b",5,"a",25,a,2, b2]));
let array = ["hello", "a", 10, 2];
console.log(sortArray(array))

//console.log(obj_sup(a,b));*/
module.exports = {str_sup ,gen_sup,obj_sup ,get_min_attribute,sortArray };
