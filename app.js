
const x = require("./alldata")
console.log(x)

const obj = JSON.parse(x)
// console.log(obj)
// console.log(obj.fname)

obj.fname = "adel"
obj.lname = "ahmed"
obj.age = 40
obj.city = "cairo"

console.log(obj)

const objJSON = JSON.stringify(obj) 

console.log(objJSON)

const fs = require("fs")
fs.writeFileSync("data.json" , objJSON)

/////////////////////////////////task 2///////////////////////////////////////////////////
const yargs = require("yargs")


const data7 = require ("./data7")
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        data7.addPerson(x.fname , x.lname , x.city , x.age , x.id )
    }
 })
 /////
 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        data7.deleteData(x.id)
    }
 })
 ////
 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data7.listData()
    }
 })
 /////
 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        data7.readData (x.id)
    }
 })
 /////
 yargs.parse() 