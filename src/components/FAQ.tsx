import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see their first leads within 7-14 days of launching campaigns. Google Ads and Facebook Ads can drive traffic immediately, while SEO typically shows significant results within 3-6 months.',
    },
    {
      question: 'What makes your agency different?',
      answer: 'We focus exclusively on local businesses and have a proven track record of delivering real, measurable results. Unlike other agencies, we offer transparent reporting, no long-term contracts, and dedicated account managers who actually care about your success.',
    },
    {
      question: 'How much should I budget for advertising?',
      answer: 'We recommend starting with at least $1,500-$3,000 per month for paid advertising (Google/Facebook Ads), plus our management fee. This gives us enough budget to test and optimize campaigns effectively. SEO services have different pricing structures.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No! We work on a month-to-month basis. We believe in earning your business every single month through results, not locking you into lengthy contracts you can\'t escape from.',
    },
    {
      question: 'What if I\'m not happy with the results?',
      answer: 'We offer a 90-day performance guarantee. If we don\'t deliver the results we promised within the first 90 days, we\'ll work for free until we do. Your success is our success.',
    },
    {
      question: 'Can you help my specific industry?',
      answer: 'We specialize in local service-based businesses including contractors, lawyers, medical practices, restaurants, retail stores, and more. If you serve local customers, we can help you grow.',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-semibold text-gray-700">FAQ</span>
          </div>
          <h2 className="text-5xl font-bold text-black mb-6">
            Questions? We've Got Answers
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about working with us
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <span className="text-xl font-bold text-black group-hover:text-gray-900 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 bg-gray-900' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-white" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}
