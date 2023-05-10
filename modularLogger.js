function logger()
{
    return function (date){
        return function(importance){
            return function (message) {
                    return console.log(`[${date.getHours()}:${date.getMinutes()}]` + `[${importance}] - ` + `${message}`);
            }
        }
    }
}

/*
let loggerFactory = logger();
let logNow = loggerFactory(new Date());

let logInfoNow = logNow("INFO");
let logDebugNow = logNow("DEBUG");

logInfoNow("This is the message"); // [10:34] [INFO] -  This is the message
logDebugNow("This is a debug message"); // [10:34] [DEBUG] - This is a debug message

loggerFactory(new Date())("ERROR")("This is an error message"); // [10:35] [ERROR] - This is an error message
loggerFactory(new Date())("ERROR")("This is an error message"); // [10:35] [ERROR] - This is an error message

*/
module.exports ={
    logger
}