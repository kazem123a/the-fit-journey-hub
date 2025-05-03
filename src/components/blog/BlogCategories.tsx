
interface BlogCategoriesProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  setCurrentPage: (page: number) => void;
}

const BlogCategories = ({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  setCurrentPage 
}: BlogCategoriesProps) => {
  return (
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
  );
};

export default BlogCategories;
