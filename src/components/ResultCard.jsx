import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

export default function ResultCard({ result }) {
  const { name, probability, description, precautions } = result;
  
  // Determine color based on probability
  const getProbabilityColor = (prob) => {
    if (prob >= 0.7) return 'text-red-600';
    if (prob >= 0.4) return 'text-orange-500';
    return 'text-green-600';
  };

  const getProbabilityBg = (prob) => {
    if (prob >= 0.7) return 'bg-red-50 border-red-200';
    if (prob >= 0.4) return 'bg-orange-50 border-orange-200';
    return 'bg-green-50 border-green-200';
  };

  const probabilityPercentage = Math.round(probability * 100);

  return (
    <div className={`rounded-xl border p-6 shadow-sm transition-all hover:shadow-md ${getProbabilityBg(probability)}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <div className="flex items-center mt-2">
            <span className={`text-lg font-semibold ${getProbabilityColor(probability)}`}>
              {probabilityPercentage}% Match
            </span>
          </div>
        </div>
        <div className={`p-3 rounded-full ${probability >= 0.7 ? 'bg-red-100 text-red-600' : probability >= 0.4 ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
          {probability >= 0.7 ? <AlertCircle className="w-8 h-8" /> : probability >= 0.4 ? <Info className="w-8 h-8" /> : <CheckCircle2 className="w-8 h-8" />}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">Description</h4>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3">Recommended Precautions</h4>
        <ul className="space-y-2">
          {precautions.map((precaution, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-2">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-700">{precaution}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
