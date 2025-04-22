
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'برنامج التحول في 8 أسابيع',
    description: 'برنامج مكثف لفقدان الدهون وبناء العضلات، مخصص للمبتدئين والمتوسطين',
    image: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?auto=format&fit=crop&q=80&w=1000',
    price: '99$',
    link: '#'
  },
  {
    id: 2,
    title: 'برنامج كمال الأجسام المتقدم',
    description: 'برنامج متخصص لبناء العضلات وتضخيم الجسم، يشمل نظام غذائي متكامل',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000',
    price: '149$',
    link: '#'
  },
  {
    id: 3,
    title: 'برنامج التمارين المنزلية',
    description: 'برنامج متكامل للتمرين بالمنزل دون معدات، مناسب لجميع المستويات',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000',
    price: '79$',
    link: '#'
  },
];

const FeaturedPrograms = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">برامجي التدريبية</h2>
          <p className="section-subtitle mx-auto">برامج مصممة خصيصاً لمساعدتك على تحقيق أهدافك البدنية بأقل وقت وجهد</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map(program => (
            <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in">
              <div className="h-60 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{program.title}</h3>
                  <div className="bg-fitness-green p-2 rounded-full">
                    <Dumbbell className="h-5 w-5 text-fitness-dark" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
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
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/programs" className="btn-outline">
            عرض جميع البرامج
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
