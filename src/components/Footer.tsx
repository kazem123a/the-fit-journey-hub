
import { Link } from 'react-router-dom';
import { Dumbbell, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fitness-dark text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-fitness-purple" />
              <span className="text-xl font-heading font-bold text-white">مدرب اللياقة</span>
            </Link>
            <p className="mb-4 text-gray-300">
              مدرب لياقة بدنية محترف متخصص في التحول الجسدي وبناء العضلات بخبرة أكثر من 10 سنوات
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-fitness-purple transition-colors">الرئيسية</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-fitness-purple transition-colors">المدونة</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-fitness-purple transition-colors">البرامج التدريبية</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-fitness-purple transition-colors">المنتجات</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-fitness-purple transition-colors">من أنا</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-fitness-purple transition-colors">تواصل معي</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">معلومات التواصل</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-fitness-purple" />
                <a href="mailto:contact@fitnesscoach.com" className="text-gray-300 hover:text-fitness-purple transition-colors">
                  contact@fitnesscoach.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-fitness-purple" />
                <a href="tel:+966500000000" className="text-gray-300 hover:text-fitness-purple transition-colors">
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-fitness-purple" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">النشرة البريدية</h3>
            <p className="text-gray-300 mb-4">اشترك للحصول على أحدث النصائح والعروض</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-fitness-purple"
              />
              <button type="submit" className="w-full bg-fitness-purple text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                اشتراك
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} مدرب اللياقة. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-fitness-purple transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-fitness-purple transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-fitness-purple transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
