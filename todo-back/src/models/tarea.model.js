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
    }
},
    {
        timestamps: true
    }
);

const Tarea = mongoose.model('Tarea', tareaSchema);

module.exports = Tarea;