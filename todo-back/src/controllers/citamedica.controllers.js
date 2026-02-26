const CitaMedica = require('../models/citamedica.model');

// GET todas las citas
const getCitas = async (req, res) => {
    try {
        const citas = await CitaMedica.find({ usuario: req.user.id }).sort({ fecha: 1 });
        res.json(citas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET una cita por ID
const getOneCita = async (req, res) => {
    try {
        const cita = await CitaMedica.findOne({ _id: req.params.id, usuario: req.user.id });
        if (!cita) return res.status(404).json({ message: 'Cita no encontrada' });
        res.json(cita);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST crear cita
const createCita = async (req, res) => {
    const cita = new CitaMedica({
        titulo: req.body.titulo,
        doctor: req.body.doctor,
        especialidad: req.body.especialidad,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        notas: req.body.notas,
        usuario: req.user.id
    });
    try {
        const nuevaCita = await cita.save();
        res.status(201).json(nuevaCita);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PATCH actualizar cita
const updateCita = async (req, res) => {
    try {
        const result = await CitaMedica.findOneAndUpdate(
            { _id: req.params.id, usuario: req.user.id },
            req.body,
            { new: true }
        );
        if (!result) return res.status(404).json({ message: 'Cita no encontrada' });
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE eliminar cita
const deleteCita = async (req, res) => {
    try {
        const result = await CitaMedica.findOneAndDelete({ _id: req.params.id, usuario: req.user.id });
        if (!result) return res.status(404).json({ message: 'Cita no encontrada' });
        res.json({ message: 'Cita eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCitas, getOneCita, createCita, updateCita, deleteCita };