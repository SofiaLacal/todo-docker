const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: ''
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        default: 1
    },
    categoria: {
        type: String,
        default: 'general'
    },
    completada: {
        type: Boolean,
        default: false
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    {
        timestamps: true
    }
);

const Compra = mongoose.model('Compra', compraSchema);

module.exports = Compra;