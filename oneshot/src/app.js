const express = require("express");
const Note = require("./models/note.model");

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
app.post("/notes", async (req, res) => {
  const data = req.body;
  try {
    await Note.create({
      title: data.title,
      description: data.description,
    });
    res.status(201).json({
      message: "Added note",
    });
  } catch (err) {
    res.status(500).json({
      message: "Enternal server error",
      error: err,
    });
  }
});

// find
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.status(200).json({
    message: "notes feched",
    notes: notes,
  });
});

// find One
app.get("/note", async (req, res) => {
  const notes = await Note.findOne({
    title: "Note 1"
  });
  res.status(200).json({
    message: "notes feched",
    notes: notes,
  });
});

// update 
app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    await Note.findByIdAndUpdate(
        {
            _id: id
        },{
            title: title
        }
    )
    res.status(200).json({
        message: "Note Updated using patch"
    })
})

// update all using put

app.put('/notes/:id', async(req, res) => {
    const id = req.params.id;
    const {title, description} = req.body
    await Note.findByIdAndUpdate(
        {_id: id},{title: title, description: description}
    )
    res.status(200).json({
        message: "Note Updated using Put"
    })
})

// delete
app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;
    await Note.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "deleted note"
    })
})

module.exports = app;
