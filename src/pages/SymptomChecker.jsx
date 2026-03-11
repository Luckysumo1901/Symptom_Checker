import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SymptomInput from '../components/SymptomInput';
import SymptomCheckboxList from '../components/SymptomCheckboxList';
import { predictDisease } from '../services/api';
import { Loader2, AlertCircle } from 'lucide-react';

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleRemoveSymptom = (symptomToRemove) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptomToRemove));
  };

  const handleToggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      handleRemoveSymptom(symptom);
    } else {
      handleAddSymptom(symptom);
    }
  };

  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      setError('Please enter or select at least one symptom.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await predictDisease(selectedSymptoms);
      navigate('/results', { state: { results: data.results, symptoms: selectedSymptoms } });
    } catch (err) {
      setError('An error occurred while analyzing your symptoms. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Symptom Checker
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Tell us how you're feeling. Add your symptoms below to get started.
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-100">
          <SymptomInput 
            selectedSymptoms={selectedSymptoms}
            onAddSymptom={handleAddSymptom}
            onRemoveSymptom={handleRemoveSymptom}
          />
          
          <SymptomCheckboxList 
            selectedSymptoms={selectedSymptoms}
            onToggleSymptom={handleToggleSymptom}
          />

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={loading || selectedSymptoms.length === 0}
              className={`inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all w-full sm:w-auto ${
                (loading || selectedSymptoms.length === 0) ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Analyzing Symptoms...
                </>
              ) : (
                'Analyze Symptoms'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
