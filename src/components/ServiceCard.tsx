import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  visual: ReactNode;
  gradient: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  visual,
  gradient,
}: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      <div className={`relative h-48 ${gradient} flex items-center justify-center overflow-hidden`}>
        {visual}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
      </div>

      <div className="p-8">
        <div className="bg-black w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-3xl font-bold text-black mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-lg text-gray-600 mb-6 font-medium">
          {subtitle}
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all shadow-md hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}
