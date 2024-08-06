const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function data() {
    try{
        await client.connect();
        console.log("Successfully!");
        const db = client.db("Users")
        const collection = db.collection("users");
        let data = await collection.find({}).toArray();
        console.log(data);
    }catch(err) {
       console.log(err);
    }
}

data();