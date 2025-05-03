
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { Article } from '@/data/types';

interface BlogListProps {
  articles: Article[];
}

const BlogList = ({ articles }: BlogListProps) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-2xl font-semibold mb-2">لا توجد مقالات مطابقة</h3>
        <p className="text-gray-600">جرب تغيير معايير البحث أو الفئة</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map(article => (
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
  );
};

export default BlogList;
