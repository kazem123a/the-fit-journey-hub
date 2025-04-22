
import React from 'react';
import { useParams } from 'react-router-dom';
import { articles, articleContent } from '@/data/articles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === Number(id));
  
  if (!article) {
    return <div>المقال غير موجود</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto max-w-3xl">
          <article>
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex justify-center items-center gap-4 text-fitness-gray">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <span className="bg-fitness-purple text-white text-xs py-1 px-2 rounded-full">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{
              __html: articleContent[id as keyof typeof articleContent]
            }} />
            <div className="text-center mt-12">
              <Button className="bg-fitness-purple text-white hover:bg-fitness-purple/90">
                اشترك في نشرتنا الإخبارية
              </Button>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogArticle;
