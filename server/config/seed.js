import { Disease } from '../models/Disease.js';

const sampleDiseases = [
  {
    name: "Flu",
    symptoms: ["fever", "chills", "muscle aches", "cough", "congestion", "runny nose", "headache", "fatigue"],
    description: "Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs.",
    precautions: ["Rest", "Drink plenty of fluids", "Take antiviral drugs if prescribed", "Stay home to avoid infecting others"]
  },
  {
    name: "Common Cold",
    symptoms: ["runny nose", "sore throat", "cough", "congestion", "slight body aches", "mild headache", "sneezing", "low-grade fever"],
    description: "The common cold is a viral infection of your nose and throat (upper respiratory tract).",
    precautions: ["Rest", "Drink fluids", "Use saline nasal drops", "Soothe your throat"]
  },
  {
    name: "COVID-19",
    symptoms: ["fever", "cough", "tiredness", "loss of taste or smell", "sore throat", "headache", "aches and pains", "diarrhea", "rash", "red or irritated eyes"],
    description: "Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.",
    precautions: ["Isolate yourself", "Wear a mask", "Rest and stay hydrated", "Monitor your symptoms", "Seek medical attention if you have difficulty breathing"]
  },
  {
    name: "Migraine",
    symptoms: ["headache", "nausea", "vomiting", "sensitivity to light", "sensitivity to sound", "throbbing pain"],
    description: "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head.",
    precautions: ["Rest in a quiet, dark room", "Apply hot or cold compresses", "Drink fluids", "Take pain-relieving medication"]
  },
  {
    name: "Dengue",
    symptoms: ["high fever", "severe headache", "pain behind the eyes", "joint and muscle pain", "fatigue", "nausea", "vomiting", "skin rash"],
    description: "Dengue is a mosquito-borne viral infection causing a severe flu-like illness and, sometimes causing a potentially lethal complication called severe dengue.",
    precautions: ["Rest", "Drink plenty of fluids", "Take acetaminophen for pain", "Avoid NSAIDs like ibuprofen", "Protect from mosquito bites"]
  },
  {
    name: "Malaria",
    symptoms: ["fever", "chills", "general feeling of discomfort", "headache", "nausea", "vomiting", "diarrhea", "abdominal pain", "muscle or joint pain", "fatigue", "rapid breathing", "rapid heart rate", "cough"],
    description: "Malaria is a disease caused by a parasite. The parasite is transmitted to humans through the bites of infected mosquitoes.",
    precautions: ["Take antimalarial drugs", "Rest", "Stay hydrated", "Use mosquito nets to prevent further bites"]
  },
  {
    name: "Food Poisoning",
    symptoms: ["nausea", "vomiting", "watery or bloody diarrhea", "abdominal pain and cramps", "fever"],
    description: "Foodborne illness, more commonly referred to as food poisoning, is the result of eating contaminated, spoiled, or toxic food.",
    precautions: ["Let your stomach settle", "Stay hydrated", "Ease back into eating", "Avoid certain foods and substances until you feel better", "Get plenty of rest"]
  }
];

export const seedDatabase = async () => {
  try {
    const count = await Disease.countDocuments();
    if (count === 0) {
      console.log('Seeding database with sample diseases...');
      await Disease.insertMany(sampleDiseases);
      console.log('Database seeded successfully.');
    } else {
      console.log('Database already contains data. Skipping seed.');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};
