const express = require('express')
const router = express.Router();
const stuCtrl = require('../controller/studentCtrl');

router.get('/', stuCtrl.getAllStudents);
router.post('/', stuCtrl.createNewStudent);
router.get('/:_id', stuCtrl.getStudentById);
router.delete('/:_id', stuCtrl.deleteStudentById);
router.put('/:_id', stuCtrl.updateStudent)

module.exports = router; 