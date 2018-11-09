const Berat = require('../models/berat')

module.exports = {

    findBerat: function (req, res) {

        Berat.find({}).sort({tanggal: 'DESC'})
        .then((result) => {

            res.status(201).json({
                message: 'find berat success !',
                result
            })

        })
        .catch((err) => {
            
            res.status(400).json({
                message: err.message
            })

        });

    },

    findOneBerat: function (req, res) {

        Berat.findOne({ _id: req.params.id })
        .then((result) => {

            res.status(201).json({
                message: 'findOne berat success !',
                result
            })

        })
        .catch((err) => {
            
            res.status(400).json({
                message: err.message
            })

        });

    },

    createBerat: function (req, res) {

        Berat.create({
            tanggal: req.body.tanggal,
            max: req.body.max,
            min: req.body.min
        })
        .then((result) => {

            res.status(201).json({
                message: 'create berat success !',
                result
            })

        })
        .catch((err) => {

            res.status(400).json({
                message: err.message
            })

        });

    },

    updateBerat: function (req, res) {

        let {tanggal, max, min} = req.body
        let objBerat = {}

        if (tanggal) objBerat.tanggal = tanggal
        if (max) objBerat.max = max 
        if (min) objBerat.min = min

        let obj = objBerat
        console.log(obj)

        Berat.updateOne(
            {_id: req.params.id},
            {
                $set: obj
            }
        )
        .then((result) => {

            res.status(201).json({
                message: 'update berat success !',
                result
            })

        })
        .catch((err) => {

            res.status(400).json({
                message: err.message
            })

        });

    },

    deleteBerat: function (req, res) {

        Berat.deleteOne({ _id: req.params.id })
        .then((result) => {

            res.status(201).json({
                message: 'delete berat success !',
                result
            })

        })
        .catch((err) => {

            res.status(400).json({
                message: err.message
            })

        });


    },

}