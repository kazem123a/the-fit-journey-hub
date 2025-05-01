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
    id: 1001,
    title: "بنطلون رياضي نسائي SOISOU بتصميم مضلع",
    description: "بنطلون عالي المرونة ومريح، مثالي لليوغا والتمارين اليومية، متوفر بـ7 ألوان.",
    image: "https://images.unsplash.com/photo-1517344800994-80b20463999c?auto=format&fit=crop&q=80&w=1000", // استبدلها لاحقاً
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_okzFNiH",
    category: "ملابس",
    rating: 5
  },
  {
    id: 1002,
    title: "حبل قفز قابل للتعديل بأسلاك الفولاذ",
    description: "مثالي لتمارين الكارديو وحرق الدهون بسرعة، يتميز بخفة الوزن وسهولة التعديل.",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oDGGxQz",
    category: "معدات",
    rating: 4.5
  },
  {
    id: 1003,
    title: "بنطلون رياضي نسائي بخصر عالٍ بدون درز",
    description: "بنطلون يرفع المؤخرة ويوفر راحة وأناقة أثناء الجري أو تمارين الصالة.",
    image: "https://images.unsplash.com/photo-1584308878768-57d8a2677325?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_onMsUDn",
    category: "ملابس",
    rating: 4.5
  },
  {
    id: 1004,
    title: "قفازات رفع الأثقال للتمارين المكثفة",
    description: "توفر قبضة ثابتة وحماية لليدين أثناء رفع الأوزان أو استخدام أجهزة الجيم.",
    image: "https://images.unsplash.com/photo-1583454155184-870a1f63aebc?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oDH0vN3",
    category: "اكسسوارات",
    rating: 5
  },
  {
    id: 1005,
    title: "مقابض لحبال المقاومة والتمارين",
    description: "مقابض قوية ومريحة للاستخدام مع حبال المقاومة، مثالية لتقوية الجزء العلوي من الجسم.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oBNHbTR",
    category: "معدات",
    rating: 4
  },
  {
    id: 1006,
    title: "شريط مقاومة مرن TPE",
    description: "مثالي لتقوية الكتفين والوركين والظهر، مناسب لليوغا والتمارين المنزلية.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_op6XxA5",
    category: "معدات",
    rating: 4.5
  },
  {
    id: 1007,
    title: "حبل قفز بوزن مدمج للأداء العالي",
    description: "حبل احترافي مناسب للملاكمة والكروسفيت، يساعد على حرق السعرات بسرعة.",
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2a?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_omZTZbr",
    category: "معدات",
    rating: 4.5
  },
  {
    id: 1008,
    title: "شريط مقاومة على شكل رقم 8",
    description: "أداة مرنة وسهلة الاستخدام لتقوية الذراعين والكتفين، مثالية للتمارين المنزلية.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oDDq6sH",
    category: "معدات",
    rating: 4
  },
  {
    id: 1009,
    title: "بنطلون رياضي بتصميم فقاعة لرفع الورك",
    description: "بنطلون بخصر عالٍ يمنحك شكلاً مشدودًا ومظهرًا رياضيًا أثناء التمارين.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oomMdVb",
    category: "ملابس",
    rating: 4
  },
  {
    id: 1010,
    title: "حزام دعم مفصل الورك (SI)",
    description: "مصمم لتقويم الحوض وتخفيف آلام أسفل الظهر، مناسب للرجال والنساء.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oBxMf3X",
    category: "اكسسوارات",
    rating: 4.5
  },
  {
    id: 1011,
    title: "بنطلون رياضي نسائي سكرتش بخصر مرتفع",
    description: "بنطلون مريح وجذاب، بتصميم يعزز شكل المؤخرة ومناسب للتمارين المختلفة.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_okZAKPb",
    category: "ملابس",
    rating: 5
  },
  {
    id: 1012,
    title: "عصا بيلاتيس متعددة الوظائف",
    description: "أداة تدريب مرنة تساعد على تقوية عضلات الجسم بالكامل من المنزل.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oC7Xk7L",
    category: "معدات",
    rating: 4.5
  },
  {
    id: 1013,
    title: "عجلة تمارين البطن (AB Wheel)",
    description: "أداة فعالة لتقوية عضلات البطن والجزء العلوي من الجسم، سهلة الاستخدام.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_omYmQFL",
    category: "معدات",
    rating: 4.5
  },
  {
    id: 1014,
    title: "بنطلون رياضي نسائي بمرونة عالية وخصر مرتفع",
    description: "تصميم مريح يدعم الحركة أثناء التمارين ويوفر ثباتًا وأناقة.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oni4JrP",
    category: "ملابس",
    rating: 4
  },
  {
    id: 1015,
    title: "حبل قفز بمحمل مزدوج من الألمنيوم",
    description: "حبل تمرين احترافي يوفر حركة سلسة وسرعة عالية، مثالي للمستخدمين المتقدمين.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oE5dpd7",
    category: "معدات",
    rating: 4.5
  },
  {
    id: 1016,
    title: "جهاز ملاكمة LED للتدريب المنزلي",
    description: "لعبة تفاعلية ممتعة للصغار والكبار، تطور سرعة رد الفعل وتضيف متعة للتمرين.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    price: "اطلب الآن",
    link: "https://s.click.aliexpress.com/e/_oo3PwOZ",
    category: "معدات",
    rating: 5
  }
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
                <TabsTrigger value="اكسسوارات">اكسسوارات</TabsTrigger>
                <TabsTrigger value="ملابس">ملابس</TabsTrigger>
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
                {filteredProducts.filter(product => product.category === 'معدات').map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="اكسسوارات" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.filter(product => product.category === 'اكسسوارات').map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ملابس" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.filter(product => product.category === 'ملابس').map(product => (
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
