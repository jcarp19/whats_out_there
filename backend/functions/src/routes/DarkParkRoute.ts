import express from 'express';
import { getClient } from '../db';
import DarkPark from "../models/DarkPark";
import { Comments } from "../models/DarkPark";

const routes = express.Router();

routes.get("/darkparks", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection("darkparks").find().toArray();
        res.json(results);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: "Internal server error"});
    }
})

// routes.post("/darkparks", async (req, res) => {
//     const comment = req.body as Comments;
//     try {
//         const client = await getClient();
//         await client.db()
//         .collection<DarkPark>('darkparks')
//         .updateOne({_id of input field}, {$set: {Comment}});
//         res.status(201).json(comment)
//     } catch (err) {
//         console.error("ERROR", err);
//         res.status(500).json({message: "Internal Service Error."})
//     }
// })


export default routes;