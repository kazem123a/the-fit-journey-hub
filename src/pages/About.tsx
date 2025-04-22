
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Dumbbell, Award, Users, Heart, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-fitness-green/30 to-white py-16 md:py-24">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">من أنا</h1>
              <p className="text-lg text-gray-700 mb-6">
                أهلاً، أنا محمد، مدرب لياقة بدنية محترف وخبير تغذية مع خبرة أكثر من 10 سنوات في مجال التحول الجسدي وبناء العضلات.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                رحلتي في عالم اللياقة البدنية بدأت منذ أكثر من عشر سنوات عندما قررت تغيير نمط حياتي وتحويل جسدي. بعد تحقيق نتائج مبهرة في رحلتي الشخصية، قررت أن أشارك معرفتي وخبرتي مع الآخرين لمساعدتهم في تحقيق أهدافهم.
              </p>
              <p className="text-lg text-gray-700">
                أؤمن أن اللياقة البدنية ليست مجرد مظهر خارجي، بل هي نمط حياة متكامل يشمل التمارين الرياضية، والتغذية السليمة، والصحة النفسية. هدفي هو مساعدتك للوصول إلى أفضل نسخة من نفسك من خلال برامج مخصصة ودعم مستمر.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="bg-fitness-purple rounded-lg w-full max-w-md mx-auto overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" 
                    alt="مدرب لياقة بدنية محترف" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-fitness-orange rounded-lg p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-fitness-dark" />
                    <p className="font-bold text-fitness-dark">مدرب معتمد دولياً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="bg-fitness-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-fitness-purple">10+</span>
                </div>
                <h3 className="text-xl font-bold mb-2">سنوات الخبرة</h3>
                <p className="text-gray-600">سنوات من الخبرة في مجال التدريب والتغذية</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="bg-fitness-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-fitness-purple">500+</span>
                </div>
                <h3 className="text-xl font-bold mb-2">متدرب ناجح</h3>
                <p className="text-gray-600">متدربين حققوا أهدافهم في اللياقة البدنية</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="bg-fitness-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-fitness-purple">6</span>
                </div>
                <h3 className="text-xl font-bold mb-2">شهادات احترافية</h3>
                <p className="text-gray-600">شهادات معتمدة في التدريب والتغذية</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Qualifications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">مؤهلاتي وخبراتي</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                حاصل على شهادات معتمدة في مجال التدريب الرياضي والتغذية من مؤسسات عالمية
              </p>
            </div>
            
            <Tabs defaultValue="certifications">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="certifications">الشهادات</TabsTrigger>
                  <TabsTrigger value="experience">الخبرات</TabsTrigger>
                  <TabsTrigger value="approach">منهجي التدريبي</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="certifications">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-fitness-purple/10 p-3 rounded-full">
                        <Award className="h-6 w-6 text-fitness-purple" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">مدرب معتمد من IFBB</h3>
                        <p className="text-sm text-gray-600 mb-2">الاتحاد الدولي لكمال الأجسام واللياقة البدنية</p>
                        <p className="text-xs text-gray-500">2018 - حتى الآن</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-fitness-purple/10 p-3 rounded-full">
                        <Award className="h-6 w-6 text-fitness-purple" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">خبير تغذية رياضية</h3>
                        <p className="text-sm text-gray-600 mb-2">المعهد الأمريكي للتغذية الرياضية</p>
                        <p className="text-xs text-gray-500">2020 - حتى الآن</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-fitness-purple/10 p-3 rounded-full">
                        <Award className="h-6 w-6 text-fitness-purple" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">مدرب معتمد للياقة البدنية</h3>
                        <p className="text-sm text-gray-600 mb-2">NASM - الأكاديمية الوطنية للطب الرياضي</p>
                        <p className="text-xs text-gray-500">2015 - حتى الآن</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="experience">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Dumbbell className="h-5 w-5 text-fitness-purple" />
                      <h3 className="text-lg font-bold">رئيس قسم التدريب في نادي Fitness Elite</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">2020 - حتى الآن</p>
                    <p className="text-gray-600">
                      إدارة فريق من المدربين المحترفين، وتطوير برامج تدريبية متخصصة، والإشراف على تدريب النخبة من الرياضيين.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-fitness-purple" />
                      <h3 className="text-lg font-bold">مدرب شخصي في Gold's Gym</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">2015 - 2020</p>
                    <p className="text-gray-600">
                      تقديم تدريب شخصي مخصص لأكثر من 200 عميل، مع تحقيق نتائج ملموسة في فقدان الوزن وبناء العضلات.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-fitness-purple" />
                      <h3 className="text-lg font-bold">متخصص إعادة تأهيل رياضي</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">2013 - 2015</p>
                    <p className="text-gray-600">
                      العمل مع رياضيين محترفين في مرحلة إعادة التأهيل بعد الإصابات، وتطوير برامج تدريبية آمنة وفعالة.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="approach">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-center">منهجي في التدريب</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <svg className="h-5 w-5 text-fitness-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"></path>
                        </svg>
                        التخصيص الكامل
                      </h4>
                      <p className="text-gray-600">
                        أؤمن أن كل شخص فريد من نوعه. لذلك، أقوم بتصميم برامج مخصصة بالكامل بناءً على أهدافك الشخصية، ومستوى لياقتك، وتاريخك الصحي، ونمط حياتك.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <svg className="h-5 w-5 text-fitness-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"></path>
                        </svg>
                        نهج متكامل
                      </h4>
                      <p className="text-gray-600">
                        اللياقة البدنية ليست مجرد تمارين. منهجي يجمع بين التدريب المتوازن، والتغذية السليمة، وإدارة الإجهاد، ونوعية النوم للوصول إلى نتائج مستدامة.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <svg className="h-5 w-5 text-fitness-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"></path>
                        </svg>
                        التعليم والتمكين
                      </h4>
                      <p className="text-gray-600">
                        هدفي ليس فقط مساعدتك على تحقيق نتائج، بل أيضاً تثقيفك وتمكينك من فهم جسمك وكيفية الحفاظ على اللياقة البدنية على المدى الطويل.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <svg className="h-5 w-5 text-fitness-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.5,18.5L9.5,12.5L13.5,16.5L22,6.92L20.59,5.5L13.5,13.5L9.5,9.5L2,17L3.5,18.5Z"></path>
                        </svg>
                        المتابعة والتكيف
                      </h4>
                      <p className="text-gray-600">
                        أقوم بمتابعة تقدمك باستمرار وتعديل برنامجك بناءً على استجابة جسمك واحتياجاتك المتغيرة، مما يضمن استمرار التقدم وتجنب هضبة التوقف.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ماذا يقول المتدربون</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                آراء بعض المتدربين الذين حققوا نتائج مميزة من خلال برامجي التدريبية
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 bg-gray-50">
                <div className="flex flex-col h-full">
                  <div className="flex gap-2 mb-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    "بعد تجربة العديد من البرامج التدريبية، وجدت أخيراً ما أبحث عنه. حققت نتائج مذهلة في غضون 8 أسابيع فقط، وخسرت 12 كيلوجراماً من الدهون مع الحفاظ على كتلة العضلات."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fitness-purple rounded-full overflow-hidden">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="صورة للمتدرب أحمد" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">أحمد محمد</h4>
                      <p className="text-sm text-gray-500">متدرب - برنامج التحول في 8 أسابيع</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-gray-50">
                <div className="flex flex-col h-full">
                  <div className="flex gap-2 mb-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    "النظام الغذائي كان المفتاح بالنسبة لي. التوجيهات الواضحة والخيارات المتنوعة جعلت التنفيذ سهلاً. زادت طاقتي بشكل ملحوظ وتحسن أدائي في التمارين."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fitness-purple rounded-full overflow-hidden">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="صورة للمتدربة سارة" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">سارة أحمد</h4>
                      <p className="text-sm text-gray-500">متدربة - خطة التغذية المتوازنة</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-gray-50">
                <div className="flex flex-col h-full">
                  <div className="flex gap-2 mb-4">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    "برنامج كمال الأجسام المتقدم غيّر حياتي تماماً. استطعت كسر هضبة التوقف التي عانيت منها لفترة طويلة، وزادت كتلة العضلات لدي بشكل واضح خلال 3 أشهر فقط."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-fitness-purple rounded-full overflow-hidden">
                      <img 
                        src="https://randomuser.me/api/portraits/men/75.jpg" 
                        alt="صورة للمتدرب خالد" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">خالد عبدالله</h4>
                      <p className="text-sm text-gray-500">متدرب - برنامج كمال الأجسام المتقدم</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
