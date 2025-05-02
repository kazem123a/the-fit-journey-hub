import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/data';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 6; // عدد المقالات في كل صفحة

const Blog = () => {
  const allArticles = getAllArticles();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  
  // التمرير إلى أعلى الصفحة عند تغيير الصفحة
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, activeCategory]);
  
  // تصفية المقالات حسب الفئة المحددة والبحث
  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = activeCategory === 'الكل' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
    
  // حساب عدد الصفحات الكلي
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  
  // الحصول على مقالات الصفحة الحالية
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  // التنقل إلى الصفحة التالية
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // التنقل إلى الصفحة السابقة
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // التنقل إلى صفحة محددة
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // معالجة البحث
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // إعادة التعيين إلى الصفحة الأولى عند البحث
  };

  // قائمة الفئات الفريدة من المقالات
  const categories = ['الكل', ...Array.from(new Set(allArticles.map(article => article.category)))];
  
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
              <Input 
                placeholder="ابحث عن مقالات..." 
                className="pr-10 py-6" 
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(category => (
              <button 
                key={category}
                className={`py-2 px-4 rounded-full ${
                  category === activeCategory 
                    ? 'bg-fitness-purple text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-fitness-purple/10'
                } transition-colors`}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1); // إعادة التعيين إلى الصفحة الأولى عند تغيير الفئة
                }}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map(article => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    loading="lazy"
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
          
          {/* رسالة عندما لا توجد مقالات */}
          {currentArticles.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-2xl font-semibold mb-2">لا توجد مقالات مطابقة</h3>
              <p className="text-gray-600">جرب تغيير معايير البحث أو الفئة</p>
            </div>
          )}
          
          {/* Pagination - استخدام مكونات shadcn/ui للتنقل بين الصفحات */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination dir="rtl">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={goToPreviousPage} 
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {/* عرض الأرقام للصفحات الأولى */}
                  {[...Array(Math.min(3, totalPages))].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        isActive={currentPage === i + 1}
                        onClick={() => goToPage(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {/* إذا كان هناك أكثر من 6 صفحات، أضف علامة الحذف */}
                  {totalPages > 6 && currentPage < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  
                  {/* عرض صفحات إضافية قريبة من الصفحة الحالية */}
                  {totalPages > 3 && currentPage > 3 && currentPage < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationLink 
                        isActive={true}
                        onClick={() => {}}
                      >
                        {currentPage}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  
                  {/* عرض الصفحة الأخيرة دائمًا إذا كان هناك أكثر من 3 صفحات */}
                  {totalPages > 3 && (
                    <PaginationItem>
                      <PaginationLink
                        isActive={currentPage === totalPages}
                        onClick={() => goToPage(totalPages)}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={goToNextPage}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
