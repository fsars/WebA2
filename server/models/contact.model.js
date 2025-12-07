import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    }
});

export default mongoose.model('Contact', contactSchema);
