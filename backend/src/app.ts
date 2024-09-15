import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.route';
import birdsRoutes from './routes/birds.route';
import swaggerSetup from './swagger';


dotenv.config({
    path: '../.env'
});

const app = express();



app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', birdsRoutes);
swaggerSetup(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});