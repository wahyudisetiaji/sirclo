var express = require('express');
var router = express.Router();
const { findBerat, findOneBerat, createBerat, updateBerat, deleteBerat } = require('../controllers/berat')

router.get('/', findBerat)
router.get('/:id', findOneBerat)
router.post('/create', createBerat)
router.put('/update/:id', updateBerat)
router.delete('/delete/:id', deleteBerat)

module.exports = router;
