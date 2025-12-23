import { MessageSquare, Target, Rocket, BarChart3 } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery Call',
      description: 'We learn about your business, goals, and current challenges in a free consultation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Target,
      title: 'Strategy Development',
      description: 'We create a custom marketing strategy tailored specifically to your business and market.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch & Execute',
      description: 'We launch your campaigns and start driving qualified leads to your business immediately.',
      color: 'from-orange-500 to-red-500',
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Optimize & Scale',
      description: 'We continuously monitor, optimize, and scale your campaigns for maximum ROI.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600">
            Our proven 4-step process to transform your business
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300">
                  <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  <div className="mt-8 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl transition-all`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
