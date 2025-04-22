
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "تم إرسال الرسالة بنجاح",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">تواصل معي</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              أنا متواجد دائماً للإجابة على استفساراتك وتقديم المساعدة اللازمة. يمكنك التواصل معي من خلال النموذج أدناه أو عبر وسائل التواصل الاجتماعي.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <Card className="p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">الاسم</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="أدخل اسمك الكامل" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">البريد الإلكتروني</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="email@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium">رقم الهاتف</label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="أدخل رقم هاتفك" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block font-medium">الموضوع</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="موضوع الرسالة" 
                      required 
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">الرسالة</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="أدخل رسالتك هنا..." 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full bg-fitness-purple hover:bg-fitness-purple/90" disabled={loading}>
                  {loading ? 'جارِ الإرسال...' : 'إرسال الرسالة'}
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-fitness-green p-3 rounded-full">
                      <Mail className="h-5 w-5 text-fitness-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">البريد الإلكتروني</p>
                      <a href="mailto:contact@fitnesscoach.com" className="text-fitness-purple hover:underline">
                        contact@fitnesscoach.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-fitness-green p-3 rounded-full">
                      <Phone className="h-5 w-5 text-fitness-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">رقم الهاتف</p>
                      <a href="tel:+966500000000" className="text-fitness-purple hover:underline">
                        +966 50 000 0000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-fitness-green p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-fitness-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">العنوان</p>
                      <p className="text-gray-600">
                        الرياض، المملكة العربية السعودية
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Social Media */}
              <Card className="p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-6">وسائل التواصل الاجتماعي</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Instagram className="h-10 w-10 text-fitness-purple mb-2" />
                    <span className="font-medium">Instagram</span>
                    <span className="text-sm text-gray-600">@fitness_coach</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Facebook className="h-10 w-10 text-fitness-purple mb-2" />
                    <span className="font-medium">Facebook</span>
                    <span className="text-sm text-gray-600">@fitnesscoach</span>
                  </a>
                  <a href="#" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Youtube className="h-10 w-10 text-fitness-purple mb-2" />
                    <span className="font-medium">YouTube</span>
                    <span className="text-sm text-gray-600">Fitness Coach</span>
                  </a>
                </div>
              </Card>
              
              {/* Consultation Info */}
              <Card className="p-6 bg-fitness-purple text-white">
                <h2 className="text-2xl font-bold mb-2">جلسات استشارية شخصية</h2>
                <p className="mb-4">
                  احصل على جلسة استشارية شخصية عبر الإنترنت لمناقشة أهدافك وتصميم خطة مخصصة لك
                </p>
                <a 
                  href="#"
                  className="inline-block bg-white text-fitness-purple font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all"
                >
                  احجز استشارة الآن
                </a>
              </Card>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">الأسئلة الشائعة</h2>
              <p className="text-gray-600">إجابات على الأسئلة المتكررة</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">كم مدة الاستجابة للاستفسارات؟</h3>
                <p className="text-gray-600">
                  أحرص على الرد على جميع الاستفسارات خلال 24-48 ساعة كحد أقصى في أيام العمل.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">هل يمكن الحصول على استشارة مجانية؟</h3>
                <p className="text-gray-600">
                  نعم، أقدم استشارة أولية مجانية لمدة 15 دقيقة للتعرف على أهدافك ومناقشة البرامج المناسبة لك.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">هل تقدم تدريب شخصي عبر الإنترنت؟</h3>
                <p className="text-gray-600">
                  نعم، أقدم خدمات التدريب الشخصي عن بُعد من خلال جلسات فيديو مباشرة ومتابعة مستمرة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">كيف يمكنني الحصول على خطة غذائية مخصصة؟</h3>
                <p className="text-gray-600">
                  يمكنك طلب خطة غذائية مخصصة من خلال نموذج الاتصال أو شراء برنامج التغذية مباشرة من صفحة البرامج.
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

export default Contact;
