import { ArrowRight, Zap, Calendar, TrendingUp } from 'lucide-react';

export default function GetStarted() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Ready to Transform Your Business?</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Customer Flood Starts Right Here
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop losing customers to your competitors. Let's build a marketing machine that brings you more leads than you can handle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Book Free Consultation</h3>
              <p className="text-gray-400">30-minute strategy session to understand your goals</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get Custom Strategy</h3>
              <p className="text-gray-400">Tailored marketing plan designed for your business</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Watch Leads Pour In</h3>
              <p className="text-gray-400">Start getting qualified customers within days</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">
                  Limited Spots Available This Month
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  We only take on 5 new clients per month to ensure quality service. Don't miss your chance to work with us.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>3 spots remaining</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <span>No credit card required</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="group bg-white text-black px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-3">
                  Book Your Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="bg-transparent text-white px-10 py-5 rounded-xl font-semibold text-lg border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all">
                  Call (555) 0123
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>Join 500+ businesses already growing with Melny Results</p>
          </div>
        </div>
      </div>
    </section>
  );
}
