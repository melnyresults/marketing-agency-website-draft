import { Linkedin, Mail, User } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Ivan Melnychenko',
      role: 'Founder',
      bio: 'Digital marketing veteran with 10+ years helping local businesses dominate their markets.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      name: 'Gleb Klepatsky',
      role: 'Head of Sales',
      bio: 'Expert at understanding business needs and crafting winning strategies that deliver ROI.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      name: 'Andrew Razinkov',
      role: 'Customer Success Manager',
      bio: 'Dedicated to ensuring every client achieves their goals and maximizes their marketing investment.',
      gradient: 'from-green-500 to-emerald-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-black mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600">
            The experts dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              <div className={`relative h-80 bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10 w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                  <User className="w-24 h-24 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {member.name}
                </h3>
                <div className="text-gray-600 font-semibold mb-4 text-lg">
                  {member.role}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
