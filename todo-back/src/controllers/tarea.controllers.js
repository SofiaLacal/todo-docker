const Tarea = require('../models/tarea.model');

// GET todas las tareas
const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find({ usuario: req.user.id }).sort({ createdAt: -1 });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET una tarea por ID
const getOneTarea = async (req, res) => {
    try {
        const tarea = await Tarea.findOne({ _id: req.params.id, usuario: req.user.id });
        if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(tarea);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST crear tarea
const createTarea = async (req, res) => {
    const tarea = new Tarea({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        prioridad: req.body.prioridad,
        fechaLimite: req.body.fechaLimite,
        usuario: req.user.id
    });
    try {
        const nuevaTarea = await tarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PATCH actualizar tarea
const updateTarea = async (req, res) => {
    try {
        const result = await Tarea.findOneAndUpdate(
            { _id: req.params.id, usuario: req.user.id },
            req.body,
            { new: true }
        );
        if (!result) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE eliminar tarea
const deleteTarea = async (req, res) => {
    try {
        const result = await Tarea.findOneAndDelete({ _id: req.params.id, usuario: req.user.id });
        if (!result) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTareas, getOneTarea, createTarea, updateTarea, deleteTarea };