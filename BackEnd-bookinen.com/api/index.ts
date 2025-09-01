import mongoose from 'mongoose';
import app from '../src/app.js'; // your Express app

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI as string);
  isConnected = true;
  console.log('✅ Connected to MongoDB');
}

export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res); // hand over to Express
}
