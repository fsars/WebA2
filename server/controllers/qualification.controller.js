import Qualification from '../models/qualification.model.js';

// Get all qualifications
const list = async (req, res) => {
    try {
        const qualifications = await Qualification.find();
        res.json(qualifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get qualification by ID
const read = async (req, res) => {
    try {
        const qualification = await Qualification.findById(req.params.id);
        if (!qualification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }
        res.json(qualification);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new qualification
const create = async (req, res) => {
    try {
        const qualification = new Qualification(req.body);
        const savedQualification = await qualification.save();
        res.status(201).json(savedQualification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update qualification by ID
const update = async (req, res) => {
    try {
        const qualification = await Qualification.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!qualification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }
        res.json(qualification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete qualification by ID
const remove = async (req, res) => {
    try {
        const qualification = await Qualification.findByIdAndDelete(req.params.id);
        if (!qualification) {
            return res.status(404).json({ message: 'Qualification not found' });
        }
        res.json({ message: 'Qualification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all qualifications
const removeAll = async (req, res) => {
    try {
        await Qualification.deleteMany();
        res.json({ message: 'All qualifications deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default { list, read, create, update, remove, removeAll };
