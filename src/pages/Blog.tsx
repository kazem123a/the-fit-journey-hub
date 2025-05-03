
import { getAllArticles } from '@/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogList from '@/components/blog/BlogList';
import BlogCategories from '@/components/blog/BlogCategories';
import BlogHero from '@/components/blog/BlogHero';
import BlogPagination from '@/components/blog/BlogPagination';
import useBlogPagination from '@/hooks/useBlogPagination';

const Blog = () => {
  const allArticles = getAllArticles();
  
  // استخدام الهوك المخصص للتعامل مع الترشيح والتنقل
  const {
    currentPage,
    setCurrentPage,
    activeCategory,
    setActiveCategory,
    searchQuery,
    handleSearch,
    currentArticles,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage
  } = useBlogPagination(allArticles);

  // قائمة الفئات الفريدة من المقالات
  const categories = ['الكل', ...Array.from(new Set(allArticles.map(article => article.category)))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto">
          {/* Hero Section and Search */}
          <BlogHero searchQuery={searchQuery} handleSearch={handleSearch} />
          
          {/* Categories */}
          <BlogCategories 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            setCurrentPage={setCurrentPage}
          />
          
          {/* Blog Articles */}
          <BlogList articles={currentArticles} />
          
          {/* Pagination */}
          <BlogPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            goToPage={goToPage}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
