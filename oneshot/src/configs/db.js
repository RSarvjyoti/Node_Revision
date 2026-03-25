const {connect} = require("mongoose");

const connectToDB = async(URL) => {
    try{
        await connect(URL);
        console.log("database connected");
    }catch(err){
        console.log(err);
        
    }
}

module.exports = connectToDB;