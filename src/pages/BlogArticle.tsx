
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, articleContent } from '@/data/articles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Share2, BookmarkPlus, ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === Number(id));
  const { toast } = useToast();
  
  // التمرير إلى أعلى الصفحة عند تغيير المقال
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
            <p className="mb-6">عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه</p>
            <Button asChild>
              <Link to="/blog">العودة إلى المدونة</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get the article content using the numeric ID as a key
  const content = articleContent[article.id as keyof typeof articleContent] || '<p>محتوى المقال غير متوفر حالياً</p>';
  
  // Handle share action
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      })
      .catch(() => 
        toast({
          title: "تمت مشاركة المقال",
          description: "تم نسخ رابط المقال إلى الحافظة",
        })
      );
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "تم نسخ الرابط",
        description: "تم نسخ رابط المقال إلى الحافظة",
      });
    }
  };
  
  // Handle bookmark action
  const handleBookmark = () => {
    toast({
      title: "تمت إضافة المقال للمفضلة",
      description: "يمكنك الوصول إليه لاحقاً من صفحة المفضلة",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-6">
            <Button variant="ghost" className="mb-4" asChild>
              <Link to="/blog">
                <ArrowLeft className="ml-2 h-4 w-4" /> العودة إلى المدونة
              </Link>
            </Button>
          </div>
          
          <article>
            <div className="relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-72 md:h-96 object-cover rounded-lg mb-8"
                loading="lazy"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-fitness-purple text-white text-xs py-1 px-3 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-fitness-gray text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 ml-1" />
                  <span>{article.date}</span>
                </div>
                <span className="hidden md:inline">•</span>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 ml-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="flex justify-center mt-6 gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" /> مشاركة
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={handleBookmark}
                >
                  <BookmarkPlus className="h-4 w-4" /> حفظ
                </Button>
              </div>
            </div>
            
            <div 
              className="prose max-w-none prose-headings:text-fitness-dark prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-800 prose-a:text-fitness-purple prose-li:text-gray-800 prose-blockquote:text-gray-700 prose-blockquote:border-fitness-purple" 
              dangerouslySetInnerHTML={{
                __html: content
              }} 
            />
            
            <div className="border-t border-b border-gray-200 my-10 py-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=120"
                  alt="المؤلف"
                  className="w-20 h-20 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-lg mb-2">أحمد خالد</h3>
                  <p className="text-gray-600 mb-4">مدرب لياقة بدنية معتمد ومتخصص في التغذية الرياضية، مع خبرة تزيد عن 8 سنوات في مجال الصحة واللياقة.</p>
                  <div className="flex gap-3">
                    <a href="#" className="text-fitness-purple hover:text-fitness-purple/80">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"></path></svg>
                    </a>
                    <a href="#" className="text-fitness-purple hover:text-fitness-purple/80">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3).map(relatedArticle => (
                  <div key={relatedArticle.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <Link to={`/blog/${relatedArticle.id}`}>
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <h4 className="font-bold mb-2 line-clamp-2">{relatedArticle.title}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{relatedArticle.excerpt}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-fitness-purple/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">هل ترغب في المزيد من النصائح والمحتوى المميز؟</h3>
              <p className="mb-6">اشترك في نشرتنا البريدية واحصل على محتوى حصري ونصائح خاصة لن تجدها في المدونة!</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input 
                  type="email" 
                  placeholder="أدخل بريدك الإلكتروني" 
                  className="p-3 rounded-md border border-gray-300 min-w-[250px] text-right"
                />
                <Button className="bg-fitness-purple hover:bg-fitness-purple/90">
                  اشترك الآن
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
