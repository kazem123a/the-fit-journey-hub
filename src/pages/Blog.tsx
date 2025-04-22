
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const articles = [
  {
    id: 1,
    title: '5 نصائح لزيادة حرق الدهون بشكل طبيعي',
    excerpt: 'طرق مثبتة علمياً لتحفيز عملية التمثيل الغذائي وزيادة معدل حرق الدهون دون الحاجة للمكملات الغذائية.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
    date: '20 أبريل 2025',
    readTime: '5 دقائق',
    category: 'تخسيس'
  },
  {
    id: 2,
    title: 'بناء العضلات للمبتدئين: دليل شامل',
    excerpt: 'كل ما تحتاج معرفته لبدء رحلة بناء العضلات بشكل صحيح، من التغذية إلى التمارين المناسبة.',
    image: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=1000',
    date: '15 أبريل 2025',
    readTime: '8 دقائق',
    category: 'بناء العضلات'
  },
  {
    id: 3,
    title: 'أهمية الراحة والاستشفاء في برنامجك التدريبي',
    excerpt: 'لماذا تعتبر فترات الراحة ضرورية جداً لتحقيق نتائج أفضل وتجنب الإصابات في رحلتك الرياضية.',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1000',
    date: '10 أبريل 2025',
    readTime: '6 دقائق',
    category: 'استشفاء'
  },
  {
    id: 4,
    title: 'أفضل 10 أطعمة لزيادة مستويات الطاقة',
    excerpt: 'أطعمة طبيعية تساعد على تحسين الأداء البدني وتزيد من مستويات الطاقة أثناء التمرين وخلال اليوم.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000',
    date: '5 أبريل 2025',
    readTime: '7 دقائق',
    category: 'تغذية'
  },
  {
    id: 5,
    title: 'كيف تحافظ على الحماس والالتزام في رحلتك الرياضية',
    excerpt: 'استراتيجيات فعالة للتغلب على التحديات النفسية والحفاظ على الدافع للتمرين على المدى الطويل.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000',
    date: '1 أبريل 2025',
    readTime: '5 دقائق',
    category: 'تحفيز'
  },
  {
    id: 6,
    title: 'أخطاء شائعة في تمارين القرفصاء وكيفية تصحيحها',
    excerpt: 'تعرف على الأخطاء التقنية الشائعة في أداء تمرين القرفصاء وكيفية تصحيحها لتجنب الإصابات.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000',
    date: '25 مارس 2025',
    readTime: '9 دقائق',
    category: 'تقنية التمرين'
  },
];

const categories = [
  'الكل',
  'تخسيس',
  'بناء العضلات',
  'تغذية',
  'استشفاء',
  'تحفيز',
  'تقنية التمرين'
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">المدونة</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              محتوى تثقيفي متجدد حول التمارين، التغذية، ونمط الحياة الصحي
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="ابحث عن مقالات..." className="pr-10 py-6" />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(category => (
              <button 
                key={category}
                className={`py-2 px-4 rounded-full ${
                  category === 'الكل' 
                    ? 'bg-fitness-purple text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-fitness-purple/10'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-fitness-purple text-white text-xs py-1 px-2 rounded-full">
                    {article.category}
                  </span>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-fitness-gray mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold">{article.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${article.id}`} className="text-fitness-purple font-medium hover:underline">
                    اقرأ المزيد
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                &larr;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-fitness-purple bg-fitness-purple text-white">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                3
              </button>
              <span className="w-10 h-10 flex items-center justify-center">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                8
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                &rarr;
              </button>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
