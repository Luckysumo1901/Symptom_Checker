import { Disease } from '../models/Disease.js';

export const predictDisease = async (req, res) => {
  try {
    const { symptoms } = req.body;

    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return res.status(400).json({ error: 'Please provide an array of symptoms.' });
    }

    // Convert user symptoms to lowercase for case-insensitive matching
    const userSymptoms = symptoms.map(s => s.toLowerCase().trim());

    // Fetch all diseases from the database
    const diseases = await Disease.find();

    const results = diseases.map(disease => {
      // Calculate match score
      const diseaseSymptoms = disease.symptoms.map(s => s.toLowerCase().trim());
      
      let matchCount = 0;
      userSymptoms.forEach(userSymptom => {
        // Check if the user symptom is part of any disease symptom or vice versa
        const isMatch = diseaseSymptoms.some(ds => 
          ds.includes(userSymptom) || userSymptom.includes(ds)
        );
        if (isMatch) {
          matchCount++;
        }
      });

      // Calculate probability based on how many of the user's symptoms match the disease's symptoms
      // and how many of the disease's symptoms are present.
      // A simple formula: (matches / total user symptoms) * (matches / total disease symptoms)
      // We'll use a simpler one: matches / max(userSymptoms.length, diseaseSymptoms.length)
      // Or just matches / diseaseSymptoms.length to see how much of the disease is covered.
      // Let's use: (matches / userSymptoms.length) * 0.5 + (matches / diseaseSymptoms.length) * 0.5
      
      let probability = 0;
      if (matchCount > 0) {
        const userMatchRatio = matchCount / userSymptoms.length;
        const diseaseMatchRatio = matchCount / diseaseSymptoms.length;
        probability = (userMatchRatio * 0.4) + (diseaseMatchRatio * 0.6);
        
        // Cap probability at 0.99 for realism
        probability = Math.min(probability, 0.99);
      }

      return {
        name: disease.name,
        probability: Number(probability.toFixed(2)),
        description: disease.description,
        precautions: disease.precautions,
        matchedSymptoms: matchCount
      };
    });

    // Filter out diseases with 0 probability and sort by highest probability
    const filteredResults = results
      .filter(r => r.probability > 0)
      .sort((a, b) => b.probability - a.probability);

    res.json({ results: filteredResults });
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ error: 'An error occurred during prediction.' });
  }
};

export const getAllSymptoms = async (req, res) => {
  try {
    const diseases = await Disease.find();
    const allSymptoms = new Set();
    
    diseases.forEach(disease => {
      disease.symptoms.forEach(symptom => {
        allSymptoms.add(symptom.toLowerCase().trim());
      });
    });
    
    res.json({ symptoms: Array.from(allSymptoms).sort() });
  } catch (error) {
    console.error('Error fetching symptoms:', error);
    res.status(500).json({ error: 'An error occurred while fetching symptoms.' });
  }
};
