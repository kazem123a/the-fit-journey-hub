
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogSearchProps {
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogSearch = ({ searchQuery, handleSearch }: BlogSearchProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input 
        placeholder="ابحث عن مقالات..." 
        className="pl-10 py-6 text-right" 
        value={searchQuery}
        onChange={handleSearch}
        dir="rtl"
      />
    </div>
  );
};

export default BlogSearch;
