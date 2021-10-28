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

export default routes;