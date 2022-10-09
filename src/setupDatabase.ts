import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function databaseSetup(){
    const connected: boolean = await  connectedToDatabase();
    if(!connected) {
        process.exit(1);
    }
};

async function connectedToDatabase() : Promise<boolean> {
    try {
        const DB = process.env.DB?.replace(
            '<PASSWORD>',
            process.env.DATABASE_PASSWORD!
        );
        await mongoose.connect(DB!);
        console.log("Connected to database");
        return true;
        
    } catch (err) {
        console.log("error while logging in :", err);
        return false; 
    }
};

export {connectedToDatabase}