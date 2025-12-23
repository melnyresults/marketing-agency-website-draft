import { Check, X } from 'lucide-react';

export default function WhyUs() {
  const comparisons = [
    {
      feature: 'Transparent Reporting',
      us: true,
      them: false,
    },
    {
      feature: 'Dedicated Account Manager',
      us: true,
      them: false,
    },
    {
      feature: 'No Long-Term Contracts',
      us: true,
      them: false,
    },
    {
      feature: 'Results Guaranteed',
      us: true,
      them: false,
    },
    {
      feature: 'Same-Day Support',
      us: true,
      them: false,
    },
    {
      feature: 'Custom Strategy (Not Templates)',
      us: true,
      them: false,
    },
    {
      feature: 'Local Market Experts',
      us: true,
      them: false,
    },
    {
      feature: 'Weekly Performance Calls',
      us: true,
      them: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            Why Choose Melny Results?
          </h2>
          <p className="text-xl text-gray-600">
            We're not just another marketing agency. Here's what makes us different.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-3 bg-gradient-to-r from-black to-gray-800 text-white p-6">
              <div className="col-span-1"></div>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">Melny Results</div>
                <div className="text-sm text-gray-300">The Smart Choice</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl mb-1">Other Agencies</div>
                <div className="text-sm text-gray-300">The Old Way</div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-6 hover:bg-gray-50 transition-colors group"
                >
                  <div className="font-semibold text-gray-900 flex items-center">
                    {item.feature}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.us ? (
                      <div className="bg-green-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                        <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="bg-red-100 p-2 rounded-full">
                        <X className="w-6 h-6 text-red-600" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {item.them ? (
                      <div className="bg-green-100 p-2 rounded-full">
                        <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="bg-red-100 p-2 rounded-full group-hover:scale-110 transition-transform">
                        <X className="w-6 h-6 text-red-600" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center border-t-2 border-green-200">
              <div className="text-3xl font-bold text-black mb-2">
                The Choice Is Clear
              </div>
              <p className="text-gray-700 text-lg">
                Join hundreds of businesses that chose results over empty promises
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
