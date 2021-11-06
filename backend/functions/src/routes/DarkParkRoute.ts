import express from 'express';
import { getClient } from '../db';

const routes = express.Router();

routes.get("/darkparks", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection("darkparks").find().toArray();
        res.json(results);
    } catch (err) {
        console.error("Well Shit", err);
        res.status(500).json({message: "Internal server error"});
    }
})

// routes.post("/shoutouts", async(req, res) => {
//     const shoutout = req.body as ShoutOutInterface;
//     try {
//         const client = await getClient();
//         await client.db()
//         .collection<ShoutOutInterface>('shoutouts1')
//         .insertOne(shoutout);
//         res.status(201).json(shoutout)
//     } catch (err) {
//         console.error("ERROR", err);
//         res.status(500).json({message: "Internal Service Error."})
//     }
// })

export default routes;