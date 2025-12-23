import { Search, Target, TrendingUp, MousePointerClick, Users, Award } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            How we can help you <span className="italic font-serif">groow</span>
          </h2>
          <p className="text-xl text-gray-600">
            Proven strategies that bring qualified customers directly to your door
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ServiceCard
            icon={Search}
            title="Ads to Get to the Top of Google"
            subtitle="Google Ads That Convert"
            description="Appear at the very top of Google search results instantly. When locals search for your services, they'll find you first."
            features={[
              'Instant visibility on Google',
              'Target high-intent customers',
              'Pay only for actual clicks',
              'Track every dollar spent',
              'Outrank your competition'
            ]}
            gradient="bg-gradient-to-br from-red-50 to-orange-50"
            visual={
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-8 left-8 bg-white rounded-lg shadow-xl p-4 transform -rotate-3">
                  <Search className="w-12 h-12 text-red-600" />
                </div>
                <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-xl p-4 transform rotate-3">
                  <TrendingUp className="w-12 h-12 text-orange-600" />
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-6 w-48">
                  <div className="text-xs text-gray-500 mb-2">Google Search</div>
                  <div className="space-y-2">
                    <div className="bg-yellow-100 border border-yellow-300 rounded px-2 py-3 text-left">
                      <div className="text-xs font-bold text-black">Ad · Your Business</div>
                      <div className="text-xs text-gray-600 mt-1">Top Result</div>
                    </div>
                    <div className="bg-gray-100 rounded px-2 py-2 text-left">
                      <div className="text-xs text-gray-500">Competitor</div>
                    </div>
                    <div className="bg-gray-100 rounded px-2 py-2 text-left">
                      <div className="text-xs text-gray-500">Competitor</div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <ServiceCard
            icon={Target}
            title="FB/IG Ads to Reach EVERY Local Client"
            subtitle="Social Media Advertising"
            description="Target every potential customer in your area with laser-focused Facebook and Instagram ads that get attention and drive action."
            features={[
              'Reach thousands of locals daily',
              'Target by location, age, interests',
              'Eye-catching video and image ads',
              'Build brand awareness fast',
              'Retarget website visitors'
            ]}
            gradient="bg-gradient-to-br from-blue-50 to-purple-50"
            visual={
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-6 left-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-3 transform -rotate-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute bottom-6 right-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-xl p-3 transform rotate-6">
                  <MousePointerClick className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-5 w-56">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
                    <div>
                      <div className="text-xs font-bold text-black">Your Business</div>
                      <div className="text-xs text-gray-500">Sponsored</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg h-32 mb-3 flex items-center justify-center">
                    <Target className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            }
          />

          <ServiceCard
            icon={Award}
            title="Reach Number 1 On Google For Free"
            subtitle="Search Engine Optimization"
            description="Rank at the top of Google organically without paying for ads. Get found by customers searching for your services 24/7."
            features={[
              'Long-term sustainable growth',
              'Build authority and trust',
              'Zero cost per click',
              'Dominate local search results',
              'Outrank competitors permanently'
            ]}
            gradient="bg-gradient-to-br from-green-50 to-emerald-50"
            visual={
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute top-8 right-8 bg-yellow-400 rounded-full shadow-xl p-3 animate-pulse">
                  <Award className="w-10 h-10 text-yellow-900" />
                </div>
                <div className="bg-white rounded-xl shadow-2xl p-6 w-52">
                  <div className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Google Organic Results
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 rounded-lg px-3 py-4 text-left relative">
                      <div className="absolute -top-2 -left-2 bg-yellow-400 text-yellow-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">
                        1
                      </div>
                      <div className="text-xs font-bold text-black">Your Business</div>
                      <div className="text-xs text-green-700 mt-1 font-medium">Top Ranking</div>
                    </div>
                    <div className="bg-gray-50 rounded px-3 py-3 text-left opacity-60">
                      <div className="text-xs text-gray-500">Competitor</div>
                    </div>
                    <div className="bg-gray-50 rounded px-3 py-3 text-left opacity-40">
                      <div className="text-xs text-gray-500">Competitor</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 bg-green-500 rounded-lg shadow-xl p-2">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
