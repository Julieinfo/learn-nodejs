const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require('../middleware/muler-config');

const stuffCtrl = require('../controllers/stuff');

router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', auth, stuffCtrl.getAllThings);

module.exports = router;