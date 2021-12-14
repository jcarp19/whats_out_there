import { ObjectId } from "mongodb";

export default interface NewsInterface {
    _id: ObjectId;
    title: string;
    description: string;
    url: string;
    image: string;
  }