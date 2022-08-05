let express = require('express');
let router = express.Router();
let notesController=require("../Controllers/notesControllers")
// Get Homepage
router.get('/',notesController.getNotes);


router.post('/create',notesController.createNotes);
router.put('/update/:id',notesController.updateNotes)
router.delete('/delete/:id',notesController.deleteNotes)





module.exports = router;