import { FeatureGrid } from "./_components/FeatureGrid";
import { FeatureComparison } from "./_components/FeatureComparison";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
          <p className="text-xl mb-8">
            Discover how ESPE Service makes service delivery seamless and efficient
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Feature Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Features
          </h2>
          <FeatureGrid />
        </div>

        {/* Feature Comparison */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose ESPE Service?
          </h2>
          <FeatureComparison />
        </div>
      </div>
    </div>
  );
} 