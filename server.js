import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath} from 'url';
import contactRoutes from './server/routes/contact.routes.js';  
import projectRoutes from './server/routes/project.routes.js';
import qualificationRoutes from './server/routes/qualification.routes.js';
import userRoutes from './server/routes/user.routes.js';

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Portfolio';

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB - Portfolio database'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, 'client/dist')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
