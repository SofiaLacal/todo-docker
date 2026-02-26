const Tarea = require('../models/tarea.model');

const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find().sort({ createdAt: -1 });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findById(req.params.id);
        if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTarea = async (req, res) => {
    const tarea = new Tarea({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        prioridad: req.body.prioridad,
        fechaLimite: req.body.fechaLimite
    });
    try {
        const nuevaTarea = await tarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTarea = async (req, res) => {
    try {
        const result = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTarea = async (req, res) => {
    try {
        const result = await Tarea.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTareas, getOneTarea, createTarea, updateTarea, deleteTarea };