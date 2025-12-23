import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-black text-white px-5 py-2 rounded-full mb-8 shadow-lg">
              <span className="text-sm font-medium">As mentioned on</span>
              <span className="text-sm font-bold">CEO of Times</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              We'll Fill Your Calendar with New Customers in 30 Days - Guaranteed
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Stop waiting for customers to find you. We put your business in front of locals actively searching for your services - starting this month.
            </p>

            <div className="flex justify-center mb-10">
              <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  Book a Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
            </div>
          </div>

          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/qvx4xism0e.js" async type="module"></script>
                  <style>
                    wistia-player[media-id='qvx4xism0e']:not(:defined) {
                      background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/qvx4xism0e/swatch');
                      display: block;
                      filter: blur(5px);
                      padding-top:56.25%;
                    }
                  </style>
                  <wistia-player media-id="qvx4xism0e" aspect="1.7777777777777777"></wistia-player>
                `
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">$100M</div>
              <div className="text-gray-600">USD Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
