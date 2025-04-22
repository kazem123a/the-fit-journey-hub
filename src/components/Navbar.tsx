
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="h-8 w-8 text-fitness-purple" />
          <span className="text-xl font-heading font-bold text-fitness-dark">مدرب اللياقة</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-fitness-purple transition-colors">الرئيسية</Link>
          <Link to="/blog" className="font-medium hover:text-fitness-purple transition-colors">المدونة</Link>
          <Link to="/programs" className="font-medium hover:text-fitness-purple transition-colors">البرامج التدريبية</Link>
          <Link to="/products" className="font-medium hover:text-fitness-purple transition-colors">المنتجات</Link>
          <Link to="/about" className="font-medium hover:text-fitness-purple transition-colors">من أنا</Link>
          <Link to="/contact" className="btn-primary">تواصل معي</Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-16 right-0 left-0 bg-white p-5 shadow-lg lg:hidden min-h-[calc(100vh-4rem)] flex flex-col items-center gap-6 animate-fade-in">
            <Link to="/" onClick={closeMenu} className="font-medium text-lg hover:text-fitness-purple transition-colors">الرئيسية</Link>
            <Link to="/blog" onClick={closeMenu} className="font-medium text-lg hover:text-fitness-purple transition-colors">المدونة</Link>
            <Link to="/programs" onClick={closeMenu} className="font-medium text-lg hover:text-fitness-purple transition-colors">البرامج التدريبية</Link>
            <Link to="/products" onClick={closeMenu} className="font-medium text-lg hover:text-fitness-purple transition-colors">المنتجات</Link>
            <Link to="/about" onClick={closeMenu} className="font-medium text-lg hover:text-fitness-purple transition-colors">من أنا</Link>
            <Link to="/contact" onClick={closeMenu} className="btn-primary mt-4">تواصل معي</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
