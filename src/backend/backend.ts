import express from 'express';

const app = express();
app.use(express.json());

app.post('/greet', async (req, res) => {
    res.json({ greeting: `Hello ${req.body.name}` });
});

app.use(express.static('/dist'));
app.listen();
