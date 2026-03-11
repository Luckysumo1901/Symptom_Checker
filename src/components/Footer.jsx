import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center text-gray-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500" />
            <span>for better health</span>
          </div>
          <p className="text-sm text-gray-400 text-center max-w-2xl">
            Disclaimer: This application is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MediCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
