"use strict";

const { toRoman, fromRoman } = require("./roman");

describe ( "Roman", () => 
{
    test("XVI", () => {
	expect(toRoman(16)).toEqual("XVI");
    }
    )
    test("2013", () => {
	expect(toRoman(2013)).toEqual("MMXIII");
    }
    )
    test("MM" , () => {
	expect(fromRoman("MM")).toEqual(2000);
    }
    )
    
    test("MMXIII" , () => {
	expect(fromRoman("MMXIII")).toEqual(2013);
    }
    )
    test("MCM" , () => {
	expect(fromRoman("MCM")).toEqual(1900);
    }
    )
    test("Giga test" , () => {
	for ( let i = 1 ; i<= 9999; i++)
	{
	    expect(fromRoman(toRoman(i))).toEqual(i);
	}
	
    }
    )


})
