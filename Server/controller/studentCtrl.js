const { ObjectId } = require('mongodb');
const stuModel = require('../models/student-model');

async function getAllStudents(req, res) {
    try {
        await stuModel.find({}, (error, result) => {
            if (error) throw error;
            res.json({ massage: "success", data: result })
        })
    }
    catch (error) {
        res.json({ massage: "dataBase problem", error: error })
    }
}

async function createNewStudent(req, res) {
    try {
        await stuModel.insertMany(req.body.student, (error, result) => {
            if (error) throw error;
            res.json({ massage: "insert success", data: result })
        })
    }
    catch (error) {
        res.json({ massage: "insert faild", error: error })
    }
}

async function getStudentById(req, res) {
    try {
        await stuModel.find({_id:ObjectId(req.params._id)}, (error, result) => {
            if (error) throw error;
            res.json({ massage: "show by name success", data: result })
        })
    }
    catch (error) {
        res.json({ massage: "show by name faild", error: error })
    }
}

async function deleteStudentById(req, res) {
    try {
        await stuModel.findOneAndDelete({_id: ObjectId(req.params._id)}, (error, result) => {
            if (error) throw error;
            res.json({ massage: "delete student success", data: result })
        })
    }
    catch (error) {
        res.json({ massage: "delete student faild", error: error })
    }
}

async function updateStudent(req, res) {
    try {
        await stuModel.findOneAndUpdate({ _id: ObjectId(req.params._id)}, { $set: req.body.student }, (error, result) => {
            if (error) throw error;
            res.json({ massage: "update student success", data: result })
        })
    }
    catch (error) {
        res.json({ massage: "update student faild", error: error })
    }
}

module.exports = {
    getAllStudents,
    createNewStudent,
    getStudentById,
    deleteStudentById,
    updateStudent
}