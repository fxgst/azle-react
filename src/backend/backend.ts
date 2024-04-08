import express from 'express';
import { Server, ic, query, update, text } from 'azle';
import {
    HttpResponse,
    HttpTransformArgs,
} from 'azle/canisters/management';


export default Server(
    () => {
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
        return app.listen();
    },
    {
        price_oracle: update([text], text, async (pair) => {
            return price(pair);
        }),
        transform: query([HttpTransformArgs], HttpResponse, (args) => {
            return {
                ...args.response,
                headers: []
            };
        })
    }
);

async function price(pair: string) {
    ic.setOutgoingHttpOptions({
        maxResponseBytes: 20_000n,
        cycles: 500_000_000_000n,
        transformMethodName: 'transform'
    });

    const date = '2024-04-01';
    const response = await fetch(`https://api.coinbase.com/v2/prices/${pair}/spot?date=${date}`)
    return await response.text();
}
