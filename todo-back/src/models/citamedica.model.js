const mongoose = require('mongoose');

const citaMedicaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        default: 'General'
    },
    fecha: {
        type: Date,
        required: true
    },
    lugar: {
        type: String,
        default: ''
    },
    notas: {
        type: String,
        default: ''
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

const CitaMedica = mongoose.model('CitaMedica', citaMedicaSchema);

module.exports = CitaMedica;