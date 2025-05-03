
import BlogSearch from './BlogSearch';

interface BlogHeroProps {
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogHero = ({ searchQuery, handleSearch }: BlogHeroProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">المدونة</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        محتوى تثقيفي متجدد حول التمارين، التغذية، ونمط الحياة الصحي
      </p>
      <BlogSearch searchQuery={searchQuery} handleSearch={handleSearch} />
    </div>
  );
};

export default BlogHero;
