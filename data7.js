const fs = require("fs")
const allData = require("./alldata")

  const addPerson = (fname , lname , city , age , id) => {
       const allData = loadData()

        const duplicatedData = allData.filter ((obj) => {
            return obj.id === id
        })
        console.log(duplicatedData)

        if (duplicatedData.length == 0) {
        allData.push ({
            id : id,
            fname : fname,
            lname,
            city : city,
            age : age
        })

        saveAllData(allData)
    } else {
        console.log("ERROR DUPLICATED ID")
    }
  }

  /////////////////////////////////////////////////////////////////
  const loadData = () => {
    try {
        const dataJson = fs.readFileSync ("data7.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }
  //////////////////////////////////////////////////////////////////
  
  const saveAllData = (allData) => {
    const saveAllDataJson = JSON.stringify(allData) 
    fs.writeFileSync("data7.json" , saveAllDataJson)
}
  /////////////////////////////////////////////////////////////////////

 const deleteData = (id) => {
  const allData = loadData()

  const dataToKeep = allData.filter ((obj) => {
       return obj.id !== id 
  })
  // console.log(dataToKeep)
  saveAllData(dataToKeep)
}
///////////////////////////////
const listData = () => {
  const allData = loadData()

  allData.forEach ((obj) => {
      console.log(obj.fname , obj.lname, obj.city)
  })
}
///////////////////////////////////////////////////////////////////

const readData = (id) => {
  const allData = loadData()

  const itemNeeded = allData.find((obj) => {
       return obj.id == id 
  })
  console.log(itemNeeded)

}
//////////////////////////////////////////

  module.exports = {
    addPerson,
    deleteData, 
     readData,
     listData
}