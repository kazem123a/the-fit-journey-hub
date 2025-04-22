import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles } from '@/data/articles';

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
            {['الكل', 'تخسيس', 'بناء العضلات', 'تغذية', 'استشفاء', 'تحفيز', 'تقنية التمرين'].map(category => (
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
