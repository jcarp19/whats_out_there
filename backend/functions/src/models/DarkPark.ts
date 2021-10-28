import {ObjectId} from "mongodb";

export default interface DarkPark {
    _id?: ObjectId;
    name: string;
    title: string;
    state: string;
    lightPollution: number;
    camping: string;
    fee: string;
    address: string;
    latlong: [];
    url: string;
    description: string;
    comments: [];
}