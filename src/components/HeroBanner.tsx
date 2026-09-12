import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section id="home" className="py-12 md:py-20 bg-[#FFF8EE] rounded-3xl p-8 md:p-12 border border-[#F3E2CE] shadow-sm mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 text-center lg:text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Build Your Ultimate <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore industry-standard frontend tools, backend frameworks, databases, and DevOps utilities. Select and organize your custom technology stack in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#technologies" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-center text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:opacity-95 transition-all"
              >
                <span>Explore Technologies</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#about" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-gray-700 border-2 border-gray-200 hover:border-purple-400 hover:text-purple-600 text-center transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/banner-stack.png" 
              alt="Dev Stack Illustration" 
              className="max-w-full h-auto max-h-[380px] object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}