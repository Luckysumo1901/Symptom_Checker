import { useLocation, Link, Navigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Results() {
  const location = useLocation();
  const { results, symptoms } = location.state || {};

  if (!results || !symptoms) {
    return <Navigate to="/checker" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to="/checker" 
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Symptom Checker
          </Link>
        </div>

        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Symptoms</h2>
          <div className="flex flex-wrap gap-2">
            {symptoms.map((symptom, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 capitalize">
                {symptom}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Possible Conditions</h2>
          
          {results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result, index) => (
                <ResultCard key={index} result={result} />
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium text-yellow-800">No exact matches found</h3>
                <p className="mt-2 text-yellow-700">
                  We couldn't find a specific condition matching all your symptoms in our database. 
                  However, if you are feeling unwell, we strongly recommend consulting a healthcare professional.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-center">
          <p className="text-sm text-blue-800 font-medium">
            Remember: This tool provides information, not a medical diagnosis. 
            Always consult a doctor for proper medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}
