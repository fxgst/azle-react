import express from 'express';

const app = express();
app.use(express.json());

let phonebook = {
    'Alice': { 'phone': '123-456-789', 'added': new Date() }
};

app.get('/contacts', (_req, res) => {
    res.json(phonebook);
});

app.post('/contacts/add', (req, res) => {
    if (Object.keys(phonebook).includes(req.body.name)) {
        res.json({ error: 'Name already exists' });
    } else {
        const contact = { [req.body.name]: { phone: req.body.phone, added: new Date() } };
        phonebook = { ...phonebook, ...contact };
        res.json({ status: 'Ok' });
    }
});

app.get('/greet', (req, res) => {
    res.json({ greeting: `Hello, ${req.query.name}` });
});

app.use(express.static('/dist'));

app.post('/price-oracle', async (req, res) => {
    const pair = req.body.pair;
    const response = await fetch(`https://api.binance.com/api/v3/avgPrice?symbol=${pair}`);
    const json = await response.json();
    res.json(json);
});

app.listen();
