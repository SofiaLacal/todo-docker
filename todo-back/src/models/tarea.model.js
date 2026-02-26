const mongoose = require('mongoose');

const tareaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: ''
    },
    prioridad: {
        type: String,
        enum: ['baja', 'media', 'alta'],
        default: 'media'
    },
    fechaLimite: {
        type: Date,
        default: null
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

const Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = Tarea;