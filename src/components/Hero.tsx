
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-fitness-green/30 to-white py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fitness-dark leading-tight mb-6">
            حوّل جسمك وحياتك مع برامجي التدريبية المتخصصة
          </h1>
          <p className="text-lg text-fitness-gray mb-8 max-w-lg">
            أنا مدرب لياقة بدنية محترف متخصص في التحول الجسدي وبناء العضلات. هدفي مساعدتك للوصول إلى أفضل نسخة من نفسك.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/programs" className="btn-primary flex items-center gap-2">
              <span>تصفح برامجي</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/about" className="btn-outline">
              تعرف عليّ أكثر
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 animate-scale-in">
          <div className="relative">
            <div className="bg-fitness-purple rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1000" 
                alt="مدرب لياقة بدنية محترف" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-fitness-orange rounded-lg p-4 shadow-lg">
              <p className="font-bold text-fitness-dark">+10 سنوات خبرة</p>
              <p className="text-sm">في مجال اللياقة البدنية</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
