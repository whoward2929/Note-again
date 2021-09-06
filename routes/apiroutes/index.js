const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
router.get("/api/notes", async (req, res) => {
    const notes = await readFile("db/db.json", "utf8");
    const notesArray = JSON.parse(notes) || []
    res.json(notesArray);
})

router.post("/api/notes", async (req, res) => {
    const notes = await readFile("db/db.json", "utf8");
    const notesArray = JSON.parse(notes) || [];
    console.log(req.body)
    const newNotes = {title:req.body.title, text:req.body.text, id:2}
    const newNotesArray = notesArray.concat(newNotes)
    const finalNotes = writeFile("db/db.json", JSON.stringify(newNotesArray))
    res.json(finalNotes)
}) 

module.exports = router;