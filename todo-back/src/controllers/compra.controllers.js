const Compra = require('../models/compra.model');

const getCompras = async (req, res) => {
    try {
        const compras = await Compra.find();
        res.json(compras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOneCompra = async (req, res) => {
    try {
        const compra = await Compra.findById(req.params.id);
        if (!compra) return res.status(404).json({ message: 'Compra no encontrada' });
        res.json(compra);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCompra = async (req, res) => {
    const compra = new Compra({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        categoria: req.body.categoria
    });
    try {
        const nuevaCompra = await compra.save();
        res.status(201).json(nuevaCompra);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateCompra = async (req, res) => {
    try {
        const result = await Compra.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!result) return res.status(404).json({ message: 'Compra no encontrada' });
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCompra = async (req, res) => {
    try {
        const result = await Compra.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).json({ message: 'Compra no encontrada' });
        res.json({ message: 'Compra eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCompras, getOneCompra, createCompra, updateCompra, deleteCompra };