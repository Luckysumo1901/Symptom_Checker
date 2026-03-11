import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { seedDatabase } from './seed.js';

let mongoServer;

export const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB');
    } else {
      console.log('MONGODB_URI not found. Starting in-memory MongoDB...');
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri);
      console.log('Connected to In-Memory MongoDB');
    }
    
    // Seed database with sample diseases
    await seedDatabase();
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
