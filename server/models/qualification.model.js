import mongoose from 'mongoose';

const qualificationSchema = new mongoose.Schema({
    title: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    completion: {
        type: Date
    },
    description: {
        type: String
    }
});

export default mongoose.model('Qualification', qualificationSchema);
