
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dumbbell } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const programs = [
  {
    id: 1,
    title: 'برنامج التحول في 8 أسابيع',
    description: 'برنامج مكثف لفقدان الدهون وبناء العضلات، مخصص للمبتدئين والمتوسطين. يشمل خطة تدريبية متكاملة ونظام غذائي مخصص لتحقيق أفضل النتائج في أقصر وقت ممكن.',
    image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?auto=format&fit=crop&q=80&w=1000',
    price: '99$',
    link: '#',
    category: 'تخسيس',
    features: [
      'خطة تدريبية لمدة 8 أسابيع',
      'نظام غذائي متكامل',
      'فيديوهات توضيحية للتمارين',
      'متابعة أسبوعية',
      'دعم عبر البريد الإلكتروني'
    ]
  },
  {
    id: 2,
    title: 'برنامج كمال الأجسام المتقدم',
    description: 'برنامج متخصص لبناء العضلات وتضخيم الجسم، يشمل نظام غذائي متكامل. مصمم خصيصاً للرياضيين المتقدمين الذين يرغبون في تحقيق نتائج استثنائية في بناء العضلات.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000',
    price: '149$',
    link: '#',
    category: 'بناء عضلات',
    features: [
      'خطة تدريبية لمدة 12 أسبوع',
      'نظام غذائي عالي البروتين',
      'فيديوهات تقنية التمارين المتقدمة',
      'متابعة أسبوعية',
      'استشارات مباشرة'
    ]
  },
  {
    id: 3,
    title: 'برنامج التمارين المنزلية',
    description: 'برنامج متكامل للتمرين بالمنزل دون معدات، مناسب لجميع المستويات. مثالي للمبتدئين والأشخاص الذين ليس لديهم وقت للذهاب إلى الصالة الرياضية.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000',
    price: '79$',
    link: '#',
    category: 'منزلي',
    features: [
      'تمارين بدون معدات',
      'مناسب لجميع المستويات',
      '5 تمارين في الأسبوع',
      'خيارات منخفضة الشدة',
      'فيديوهات توضيحية'
    ]
  },
  {
    id: 4,
    title: 'برنامج القوة والقدرة',
    description: 'برنامج متخصص لزيادة القوة البدنية وتحسين الأداء الرياضي. مناسب للرياضيين والأشخاص الذين يرغبون في تطوير قدراتهم البدنية للرياضات المختلفة.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=1000',
    price: '129$',
    link: '#',
    category: 'قوة',
    features: [
      'تمارين القوة الأساسية',
      'برنامج تدريبي لمدة 10 أسابيع',
      'نصائح تقنية متقدمة',
      'خطة تغذية داعمة للقوة',
      'متابعة مستوى التقدم'
    ]
  },
  {
    id: 5,
    title: 'برنامج اللياقة للمبتدئين',
    description: 'برنامج شامل للمبتدئين لبناء أساس قوي في اللياقة البدنية. يتضمن تمارين بسيطة وفعالة مع التركيز على تعلم التقنيات الصحيحة وبناء عادات صحية.',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80&w=1000',
    price: '69$',
    link: '#',
    category: 'مبتدئين',
    features: [
      'تمارين سهلة للمبتدئين',
      'برنامج تدريبي لمدة 6 أسابيع',
      'نصائح للمبتدئين',
      'خطة بناء العادات الصحية',
      'فيديوهات تعليمية أساسية'
    ]
  },
  {
    id: 6,
    title: 'خطة تغذية متوازنة',
    description: 'خطة غذائية متكاملة لدعم أهدافك في اللياقة البدنية. تتضمن وجبات متنوعة وصحية مع خيارات مختلفة تناسب الأذواق المختلفة وأنماط الحياة المتنوعة.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000',
    price: '59$',
    link: '#',
    category: 'تغذية',
    features: [
      'خطة وجبات لمدة 30 يوم',
      'قائمة تسوق أسبوعية',
      'خيارات للنباتيين',
      'نصائح إعداد الوجبات مسبقاً',
      'حاسبة السعرات الحرارية'
    ]
  },
];

const Programs = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">برامجي التدريبية</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              برامج تدريبية احترافية مصممة خصيصاً لمساعدتك على تحقيق أهدافك في اللياقة البدنية
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
                <TabsTrigger value="تخسيس">تخسيس</TabsTrigger>
                <TabsTrigger value="بناء عضلات">بناء عضلات</TabsTrigger>
                <TabsTrigger value="منزلي">تمارين منزلية</TabsTrigger>
                <TabsTrigger value="تغذية">تغذية</TabsTrigger>
                <TabsTrigger value="مبتدئين">مبتدئين</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="تخسيس" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="بناء عضلات" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="منزلي" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="تغذية" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="مبتدئين" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPrograms.map(program => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Programs Info Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">لماذا تختار برامجي التدريبية؟</h2>
              <p className="text-gray-600">برامج مصممة باحترافية لتناسب احتياجاتك وتحقيق نتائج حقيقية</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-fitness-green/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Dumbbell className="h-6 w-6 text-fitness-purple" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">خبرة احترافية</h3>
                <p className="text-gray-600 text-center">
                  تم تصميم جميع البرامج بناءً على خبرة تزيد عن 10 سنوات في مجال اللياقة البدنية
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-fitness-green/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-6 w-6 text-fitness-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">نتائج مضمونة</h3>
                <p className="text-gray-600 text-center">
                  برامج مختبرة مع العديد من المتدربين وأثبتت فعاليتها في تحقيق نتائج ملموسة
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-fitness-green/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="h-6 w-6 text-fitness-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">دعم مستمر</h3>
                <p className="text-gray-600 text-center">
                  متابعة وإرشاد مستمر للإجابة على استفساراتك وضمان التزامك بالبرنامج
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

// Program Card Component
type ProgramProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  link: string;
  category: string;
  features: string[];
};

const ProgramCard = ({ program }: { program: ProgramProps }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="absolute top-4 right-4">
        <span className="bg-fitness-purple text-white text-xs py-1 px-2 rounded-full">
          {program.category}
        </span>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{program.title}</h3>
          <div className="bg-fitness-green p-2 rounded-full">
            <Dumbbell className="h-5 w-5 text-fitness-dark" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{program.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold mb-2">مميزات البرنامج:</h4>
          <ul className="space-y-1">
            {program.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-fitness-purple" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t p-4">
        <span className="font-bold text-fitness-purple text-xl">{program.price}</span>
        <a 
          href={program.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          شراء الآن
        </a>
      </CardFooter>
    </Card>
  );
};

export default Programs;
