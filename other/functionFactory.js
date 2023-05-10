class InvalidArgumentError extends Error{
    constructor(message) {
        super(message);
        this.name = 'InvalidArgumentError';
    }
}
function makeConcatenator(a) {
    if (typeof (a) != 'string')
    {
        throw new InvalidArgumentError('error not String');
    }
    return function (b) {
        if (typeof (b) != 'string') {
            throw new InvalidArgumentError('b error not String');
        }
        return a + b;
    }
}

module.exports ={
    makeConcatenator
}
/*
console.log(makeConcatenator('hello')(  ))*/