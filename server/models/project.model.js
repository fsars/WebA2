import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    completion: {
        type: Date
    },
    email: {
        type: [String]
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
}, {
 });

export default mongoose.model('Project', projectSchema);
