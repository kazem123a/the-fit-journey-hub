
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'أفضل 5 تمارين كارديو لحرق الدهون',
    excerpt: 'اكتشف التمارين الهوائية الأكثر فعالية للتخلص من الدهون الزائدة وتحسين صحة القلب والأوعية الدموية.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000',
    date: '20 أبريل 2025',
    readTime: '5 دقائق'
  },
  {
    id: 2,
    title: 'وصفات صحية وسريعة لوجبات ما بعد التمرين',
    excerpt: 'استعد طاقتك بعد التمرين بوصفات لذيذة ومغذية تساعد على استشفاء العضلات وتعزيز الأداء.',
    image: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=1000',
    date: '15 أبريل 2025',
    readTime: '8 دقائق'
  },
  {
    id: 3,
    title: 'أهمية الراحة والاستشفاء في برنامجك التدريبي',
    excerpt: 'لماذا تعتبر فترات الراحة ضرورية جداً لتحقيق نتائج أفضل وتجنب الإصابات في رحلتك الرياضية.',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1000',
    date: '10 أبريل 2025',
    readTime: '6 دقائق'
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">آخر المقالات</h2>
          <p className="section-subtitle mx-auto">محتوى تثقيفي حول اللياقة البدنية والتغذية السليمة ونمط الحياة الصحي</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in">
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                />
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
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-outline">
            عرض جميع المقالات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
