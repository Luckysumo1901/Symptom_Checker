import mongoose from 'mongoose';

const diseaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symptoms: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  precautions: {
    type: [String],
    required: true,
  }
});

export const Disease = mongoose.model('Disease', diseaseSchema);
