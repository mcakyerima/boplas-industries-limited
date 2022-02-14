import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_DB_URL

if (!MONGO_URL) {
    throw new Error (
    "please define the MONGO_URL environment variable inside .env.local"

    )
}

/**
 * Global is used here to maintain a cached connection accross hot reloads
 * in development. This prevents conections growind exponentially
 * during API  route usage.
 * */

let cached = global.mongoose;

if ( !cached ) {
    cached = global.mongoose = { conn: null, promise: null}
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = { 
            bufferCommands:false,
        }

        cached.promise = mongoose.connect( MONGO_URL , opts).then((mongoose) => {
            return mongoose
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect;