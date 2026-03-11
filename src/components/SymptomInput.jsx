import { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function SymptomInput({ selectedSymptoms, onAddSymptom, onRemoveSymptom }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddSymptom(inputValue.trim().toLowerCase());
      setInputValue('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleAdd} className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-gray-300">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <Plus className="h-6 w-6" />
        </div>

        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="symptom"
          placeholder="Type a symptom (e.g., fever, headache) and press Enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-full font-medium transition-colors">
          Add
        </button>
      </form>

      {selectedSymptoms.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {selectedSymptoms.map((symptom, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {symptom}
              <button
                type="button"
                onClick={() => onRemoveSymptom(symptom)}
                className="flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-600 hover:bg-blue-200 hover:text-blue-900 focus:outline-none focus:bg-blue-500 focus:text-white"
              >
                <span className="sr-only">Remove symptom</span>
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
