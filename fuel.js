const fs = require("fs");

function createStation(){
     let station = {name: null, baseAddress: null, postalCode: null, city: null, availableFuelTypes: [], averagePrices: {}, prices: {}};
     return station;
}

function getCleanData(inputPath){
    const f = fs.readFileSync(`${inputPath}`, "utf-8");
    //split lines text
    let file_lines = f.split(/\r?\n/);
    //console.log(file_lines);
    //result
    let output = [];
    //create station OBJ
    let newStation = createStation();
    //regex lines to test
    const name_station = /name=(.+)/;
    const address_word = /address=(.*), ([0-9]{1,5}) (.+)/;
    const fuel_name = /start_(.*)/;
    const end_data = /end_(.*)/;
    const val_data = /^(.+)=(.+)$/;
    let sum = 0;
    file_lines.forEach(
        line => {
            // get name
            if (name_station.test(line)) {
                let name = line.match(name_station);
                newStation["name"] = name[1]; //get first catch
            }//get address
            else if (address_word.test(line)){

                let address = line.match(address_word);
                newStation["city"] = address[3];
                while(address[2].length < 5)
                    address[2] = "0" + address[2];
                newStation["postalCode"] = address[2];
                newStation["baseAddress"] = address[1];
            }
            else if (line === ";") { //end of station
                output.push(newStation);
                newStation = createStation();
            }
            else if(fuel_name.test(line)){
                let fuel = line.match(fuel_name);
                newStation["availableFuelTypes"].push(fuel[1]);
            }
            else if(!end_data.test(line)){
                let data_fuel = line.split(";");
                //console.log(data_fuel);
                data_fuel.forEach(data => {
                    let string_data = data.match(val_data);
                    //console.log(string_data);
                    if (string_data) {
                        let date = new Date(string_data[1] * 1000).toISOString();
                        //console.log(date);
                        if (newStation["prices"][date] === undefined) {
                            newStation["prices"][date] = {};
                        }
                        let index_fuel = newStation["availableFuelTypes"].length - 1;
                        //create array list fuel prices
                        newStation["prices"][date][newStation["availableFuelTypes"][index_fuel]] = parseInt(string_data[2]) / 100;
                        sum += parseInt(string_data[2]) / 100;
                    }
                });
            }
            else if (end_data.test(line)) {
                let index = newStation["availableFuelTypes"].length - 1;
                newStation["averagePrices"][newStation["availableFuelTypes"][index]] =
                    Math.round(sum * 100 / Object.keys(newStation["prices"]).length) / 100;
                sum = 0;
            }
        });
    //output.push(newStation);
    return JSON.stringify(output);
}

module.exports = {
    getCleanData
}
//getCleanData("./input2.txt");
//console.log(getCleanData("./input2.txt"));