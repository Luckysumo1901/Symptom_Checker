import { Info, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About MediCheck
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering individuals with accessible health information.
          </p>
        </div>

        <div className="prose prose-lg prose-blue mx-auto text-gray-600">
          <p className="mb-8">
            MediCheck was created with a simple mission: to provide a quick, reliable, and easy-to-use tool for understanding your symptoms. We believe that everyone should have access to basic health information to make informed decisions about when to seek professional medical care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                <Info className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Informative</h3>
              <p className="text-sm text-gray-600">Providing clear descriptions and actionable precautions for common conditions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure</h3>
              <p className="text-sm text-gray-600">We do not store your personal health data. Your privacy is our priority.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accessible</h3>
              <p className="text-sm text-gray-600">Designed to be user-friendly for everyone, regardless of medical knowledge.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How it Works</h2>
          <p className="mb-6">
            Our symptom checker uses a matching algorithm that compares the symptoms you enter against a database of common diseases. It calculates a probability score based on how many of your symptoms match a specific condition.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Important Disclaimer</h3>
            <p className="text-blue-800 text-sm">
              MediCheck is not a diagnostic tool. The results provided are for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. If you are experiencing a medical emergency, please call your local emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
