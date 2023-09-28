// server.js
import express, { Request, Response } from 'express';
const app = express();
const PORT = 4000;
// const json = require('body-parser')
// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express!');
});
// app.use('/',require('./routes/router'))


app.use('/', require('./twiterApi/twitterApi'))


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
