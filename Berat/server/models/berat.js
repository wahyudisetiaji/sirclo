const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;
const Schema = mongoose.Schema;

var beratSchema = new Schema({
    tanggal: {
        type: String
    },
    max: {
        type: SchemaTypes.Double
    },
    min: {
        type: SchemaTypes.Double
    }
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

var Berat = mongoose.model('Berat', beratSchema);

module.exports = Berat