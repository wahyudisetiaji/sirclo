const Berat = require('../models/berat')

module.exports = {

    findBerat: function (req, res) {

        Berat.find({})
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

        let result = req.body.max - req.body.min

        Berat.create({
            tanggal: req.body.tanggal,
            max: req.body.max,
            min: req.body.min,
            perbedaan: result.toFixed(1)
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

        let result = req.body.max - req.body.min

        Berat.updateOne(
            {_id: req.params.id},
            {
                $set: {
                    tanggal: req.body.tanggal,
                    max: req.body.max,
                    min: req.body.min,
                    perbedaan: result.toFixed(1)
                }
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