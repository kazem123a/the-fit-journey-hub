
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star, ShoppingCart, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  link: string;
  category: string;
  rating: number;
};

const products: Product[] = [
  {
    id: 1,
    title: 'حزام تمرين قابل للتعديل',
    description: 'حزام تمرين عالي الجودة يوفر دعماً إضافياً للظهر أثناء التمارين الشاقة، مصنوع من مواد متينة ومريحة.',
    image: 'https://images.unsplash.com/photo-1517344800994-80b20463999c?auto=format&fit=crop&q=80&w=1000',
    price: '29.99$',
    link: '#',
    category: 'معدات',
    rating: 4.5
  },
  {
    id: 2,
    title: 'مكمل بروتين واي عالي النقاء',
    description: 'مكمل بروتين واي عالي الجودة، يحتوي على 24 جرام بروتين في الجرعة الواحدة ونسبة امتصاص عالية.',
    image: 'https://images.unsplash.com/photo-1607443053474-db8f0b327dd8?auto=format&fit=crop&q=80&w=1000',
    price: '39.99$',
    link: '#',
    category: 'مكملات',
    rating: 5
  },
  {
    id: 3,
    title: 'مجموعة أوزان يد قابلة للتعديل',
    description: 'مجموعة أوزان يد متعددة الأوزان، قابلة للتعديل من 2 إلى 24 كجم، مثالية للاستخدام المنزلي وتوفير المساحة.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000',
    price: '159.99$',
    link: '#',
    category: 'معدات',
    rating: 4
  },
  {
    id: 4,
    title: 'أحزمة مقاومة متعددة المستويات',
    description: 'مجموعة من 5 أحزمة مقاومة بمستويات مختلفة، مثالية للتمارين المنزلية وتمارين اللياقة البدنية المتنوعة.',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=1000',
    price: '24.99$',
    link: '#',
    category: 'معدات',
    rating: 4.5
  },
  {
    id: 5,
    title: 'مكمل الكرياتين المونوهيدرات',
    description: 'كرياتين مونوهيدرات نقي بنسبة 100%، يساعد على زيادة القوة والقدرة على التحمل وتسريع استشفاء العضلات.',
    image: 'https://images.unsplash.com/photo-1606889464198-fcb18894cf50?auto=format&fit=crop&q=80&w=1000',
    price: '19.99$',
    link: '#',
    category: 'مكملات',
    rating: 4.5
  },
  {
    id: 6,
    title: 'زجاجة مياه رياضية',
    description: 'زجاجة مياه رياضية سعة 1 لتر مع مقياس، مصنوعة من مواد خالية من BPA، مثالية للتمارين والاستخدام اليومي.',
    image: 'https://images.unsplash.com/photo-1556710807-a9526a318475?auto=format&fit=crop&q=80&w=1000',
    price: '14.99$',
    link: '#',
    category: 'اكسسوارات',
    rating: 5
  },
  {
    id: 7,
    title: 'قفازات تمرين مضادة للانزلاق',
    description: 'قفازات تمرين عالية الجودة مضادة للانزلاق، توفر حماية للكفين أثناء التمارين القوية وتحسن القبضة.',
    image: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&q=80&w=1000',
    price: '17.99$',
    link: '#',
    category: 'اكسسوارات',
    rating: 4
  },
  {
    id: 8,
    title: 'سماعات رياضية لاسلكية',
    description: 'سماعات رياضية لاسلكية مقاومة للماء والعرق، مع جودة صوت عالية وبطارية تدوم لفترة طويلة.',
    image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2a?auto=format&fit=crop&q=80&w=1000',
    price: '69.99$',
    link: '#',
    category: 'اكسسوارات',
    rating: 4.5
  },
  {
    id: 9,
    title: 'فيتامينات متعددة للرياضيين',
    description: 'مكمل فيتامينات ومعادن متعددة مصمم خصيصاً للرياضيين، يدعم الأداء البدني والمناعة والاستشفاء.',
    image: 'https://images.unsplash.com/photo-1584308878768-57d8a2677325?auto=format&fit=crop&q=80&w=1000',
    price: '24.99$',
    link: '#',
    category: 'مكملات',
    rating: 4
  },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">المنتجات الرياضية</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              منتجات عالية الجودة موصى بها لدعم رحلتك في اللياقة البدنية
            </p>
          </div>
          
          {/* Categories Tabs */}
          <Tabs 
            defaultValue="all" 
            className="mb-12"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all">الكل</TabsTrigger>
                <TabsTrigger value="معدات">معدات</TabsTrigger>
                <TabsTrigger value="مكملات">مكملات</TabsTrigger>
                <TabsTrigger value="اكسسوارات">اكسسوارات</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="معدات" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="مكملات" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="اكسسوارات" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Affiliate Disclosure */}
          <div className="mt-16 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-fitness-green/20 p-3 rounded-full">
                <LinkIcon className="h-6 w-6 text-fitness-purple" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">تنويه عن الروابط التسويقية</h3>
                <p className="text-gray-600">
                  هذه الصفحة تحتوي على روابط تسويقية (أفلييت). هذا يعني أنني قد أحصل على عمولة صغيرة عند شرائك من خلال الروابط المذكورة، دون أي تكلفة إضافية عليك. جميع المنتجات المذكورة هنا مختارة بعناية ومستخدمة شخصياً أو موصى بها بناءً على جودتها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (halfStar) {
      stars.push(
        <svg key="half" className="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77V2Z" fill="currentColor" />
          <path d="M12 2V17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="absolute top-4 right-4">
        <span className="bg-fitness-orange text-fitness-dark text-xs py-1 px-2 rounded-full">
          {product.category}
        </span>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <div className="flex items-center gap-1 mt-1">
          {renderRatingStars(product.rating)}
          <span className="text-xs text-gray-500 mr-1">{product.rating}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <p className="text-gray-600 text-sm">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t p-4 mt-auto">
        <span className="font-bold text-fitness-purple">{product.price}</span>
        <a 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-fitness-orange text-fitness-dark font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all flex items-center gap-1"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>اشتري الآن</span>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Products;
