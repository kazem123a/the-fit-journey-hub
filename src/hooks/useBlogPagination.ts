
import { useState, useEffect } from 'react';
import { Article } from '@/data/types';

const ITEMS_PER_PAGE = 6;

const useBlogPagination = (allArticles: Article[]) => {
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
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // معالجة البحث
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // إعادة التعيين إلى الصفحة الأولى عند البحث
  };

  return {
    currentPage,
    setCurrentPage,
    activeCategory,
    setActiveCategory,
    searchQuery,
    handleSearch,
    filteredArticles,
    currentArticles,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToPage
  };
};

export default useBlogPagination;
