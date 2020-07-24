import express from 'express';
import cors from 'cors';
import evacuatorOrder from './routes/evacuatorOrder.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tginfobot', evacuatorOrder);

app.listen(process.env.PORT ?? 3007);
