
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface BlogSearchProps {
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BlogSearch = ({ searchQuery, handleSearch }: BlogSearchProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input 
        placeholder="ابحث عن مقالات..." 
        className="pr-10 py-6" 
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default BlogSearch;
