import { useState, useEffect } from 'react';
import { getAllSymptoms } from '../services/api';

export default function SymptomCheckboxList({ selectedSymptoms, onToggleSymptom }) {
  const [availableSymptoms, setAvailableSymptoms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const data = await getAllSymptoms();
        setAvailableSymptoms(data.symptoms);
      } catch (error) {
        console.error('Failed to load symptoms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSymptoms();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-pulse flex space-x-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Common Symptoms</h3>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {availableSymptoms.map((symptom) => {
            const isSelected = selectedSymptoms.includes(symptom);
            return (
              <label
                key={symptom}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  isSelected
                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  checked={isSelected}
                  onChange={() => onToggleSymptom(symptom)}
                />
                <span className="ml-3 text-sm font-medium capitalize">{symptom}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
