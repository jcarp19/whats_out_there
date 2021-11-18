import express from 'express';
import { getClient } from '../db';
import DarkPark from "../models/DarkPark";
import { Comments } from "../models/DarkPark";
import { ObjectId } from 'bson';


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

routes.put(`/darkparks/addcomment/:id`, async (req, res) => {
    const newComment: Comments = {
        rating: req.body.rating,
        comment: req.body.comment,
        userName: req.body.userName,
        photoURL: req.body.photoURL
    }
    const id = req.params.id;
    // delete newComment.id

    try {
        const client = await getClient();
        await client.db()
        .collection<DarkPark>('darkparks')
        .updateOne({_id: new ObjectId(id)}, {$push: {comments: newComment}});
        res.status(200).json(newComment)
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({message: "Internal Service Error."})
    }
})


export default routes;