const express = require("express");

const app = express();
app.use(express.json());

// const notes = [];

// /* 
//  title, description
// */
// // POST
// app.post('/notes', (req, res) => {
//     notes.push(req.body);
//     res.status(201).json({
//         message: "note created"
//     })
// });

// //Get

// app.get('/notes', (req, res) =>{
//     res.status(200).json({
//         message: "notes fetched" ,
//         notes: notes
//     })
// })

// // delete :index => params
// app.delete('/notes/:index', (req, res) => {
//    const index =  req.params.index
//    delete notes[index];

//    res.status(200).json({
//     message: "note deleted"
//    })
// })

// // patch
// app.patch('/notes/:index', (req, res) => {
//     const index = req.params.index
//     const description = req.body.description
//     notes[index].description = description;

//     res.status(200).json({
//         message: "note updated"
//     })
// })

// CRUD with database => mongodb

app.post('/notes', (req, res) => {

})

// app.get('/notes', (req, res) => {

// })

// app.patch('/notes/:id', (req, res) => {

// })

// app.delete('/notes/:id', (req, res) => {

// })

module.exports = app;