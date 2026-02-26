const Compra = require('../models/compra.model');

// GET todas las compras
const getCompras = async (req, res) => {
    try {
        const compras = await Compra.find({ usuario: req.user.id });
        res.json(compras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET una compra por ID
const getOneCompra = async (req, res) => {
    try {
        const compra = await Compra.findOne({ _id: req.params.id, usuario: req.user.id });
        if (!compra) return res.status(404).json({ message: 'Compra no encontrada' });
        res.json(compra);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST crear compra
const createCompra = async (req, res) => {
    const compra = new Compra({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        categoria: req.body.categoria,
        usuario: req.user.id
    });
    try {
        const nuevaCompra = await compra.save();
        res.status(201).json(nuevaCompra);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PATCH actualizar compra
const updateCompra = async (req, res) => {
    try {
        const result = await Compra.findOneAndUpdate(
            { _id: req.params.id, usuario: req.user.id },
            req.body,
            { new: true }
        );
        if (!result) return res.status(404).json({ message: 'Compra no encontrada' });
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE eliminar compra
const deleteCompra = async (req, res) => {
    try {
        const result = await Compra.findOneAndDelete({ _id: req.params.id, usuario: req.user.id });
        if (!result) return res.status(404).json({ message: 'Compra no encontrada' });
        res.json({ message: 'Compra eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCompras, getOneCompra, createCompra, updateCompra, deleteCompra };