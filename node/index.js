import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import welcome from './controllers/welcome';

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen (3000, () => console.log('server started successfully at port : 3000'));
app.use('/welcome', welcome);