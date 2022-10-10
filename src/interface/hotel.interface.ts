import mongoose from 'mongoose';


export interface IHotel extends mongoose.Document {
    name: string;
    genre: string;
    city: string;
    address: string;
    distance: string;
    photos?: string[];
    title: string;
    description: string;
    rating?: number;
    rooms?: string[];
    cheapestPrice: number;
    featured: boolean;
};