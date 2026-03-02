import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ShieldCheck, 
  CreditCard, 
  History, 
  Layers, 
  Smartphone, 
  CheckCircle2,
  ArrowRight,
  Mail,
  Heart
} from "lucide-react";
import { DonateButton } from "@/components/DonateButton";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header/Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">PeterPay <span className="text-blue-600">All-in-One</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <DonateButton showLabel={false} className="hidden sm:flex" />
            <Button 
              onClick={() => setLocation("/dashboard")}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  New Version 1.0 Available
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  The Future of <span className="text-blue-600">Digital Payments</span> in Tanzania
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
                  Streamline your financial transactions with our comprehensive all-in-one platform. Secure, fast, and built for the modern economy.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                  <Button 
                    onClick={() => setLocation("/dashboard")}
                    className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-md rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    onClick={() => setLocation("/dashboard")}
                    variant="outline" 
                    className="h-12 px-8 text-md border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    View Demo
                  </Button>
                </div>
                <div className="mt-10 flex items-center gap-6 justify-center md:justify-start grayscale opacity-60">
                  <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">Trusted By</span>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative z-10 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-3xl p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-slate-900 rounded-[2rem] overflow-hidden border-4 border-slate-800">
                    <div className="bg-slate-800 h-6 flex items-center px-4 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="p-6 bg-slate-50 min-h-[300px]">
                      <div className="flex justify-between items-center mb-6">
                        <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
                        <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-20 bg-white rounded-xl border border-slate-100 p-4 flex items-center gap-4 shadow-sm">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                            <div className="h-2 w-1/4 bg-slate-50 rounded"></div>
                          </div>
                          <div className="h-4 w-12 bg-slate-100 rounded"></div>
                        </div>
                        <div className="h-20 bg-white rounded-xl border border-slate-100 p-4 flex items-center gap-4 shadow-sm">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                            <CreditCard className="w-6 h-6" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="h-3 w-2/3 bg-slate-100 rounded"></div>
                            <div className="h-2 w-1/3 bg-slate-50 rounded"></div>
                          </div>
                          <div className="h-4 w-16 bg-slate-100 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to manage payments</h2>
              <p className="text-slate-600">PeterPay All-in-One provides a robust set of features designed to make financial management simple and secure.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Secure Processing",
                  description: "State-of-the-art security protocols to ensure your transactions and data are always protected.",
                  icon: ShieldCheck,
                  color: "bg-green-100 text-green-600"
                },
                {
                  title: "User Management",
                  description: "Robust system for user registration, login, and profile management with granular controls.",
                  icon: Smartphone,
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  title: "Transaction History",
                  description: "Keep track of every cent with detailed, searchable transaction records and analytics.",
                  icon: History,
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  title: "Scalable Architecture",
                  description: "Built on modern technologies that grow with your business, handling millions of requests.",
                  icon: Layers,
                  color: "bg-orange-100 text-orange-600"
                },
                {
                  title: "Intuitive Interface",
                  description: "Designed with the user in mind, offering a clean and responsive experience on all devices.",
                  icon: CreditCard,
                  color: "bg-pink-100 text-pink-600"
                },
                {
                  title: "PostgreSQL Powered",
                  description: "Reliable data storage using PostgreSQL for maximum consistency and data integrity.",
                  icon: CheckCircle2,
                  color: "bg-indigo-100 text-indigo-600"
                }
              ].map((feature, i) => (
                <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your payment workflow?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
              Join hundreds of businesses in Tanzania using PeterPay to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setLocation("/dashboard")}
                className="bg-white text-blue-600 hover:bg-slate-100 h-12 px-8 font-bold text-md rounded-lg"
              >
                Get Started Today
              </Button>
              <DonateButton className="h-12 px-8 font-bold text-md rounded-lg" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              <div className="flex-1 p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                <p className="text-slate-400 mb-8">Have questions about PeterPay? Our team is here to help you get started or answer any technical inquiries.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>peterjoram897@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-blue-400">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span>Support Development via M-Pesa</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-slate-800 p-12">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Name</label>
                      <input type="text" className="w-full bg-slate-700 border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</label>
                      <input type="email" className="w-full bg-slate-700 border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                    <textarea className="w-full bg-slate-700 border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]" placeholder="How can we help?"></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-bold rounded-lg mt-4">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 p-1 rounded-md">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">PeterPay</span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2026 King-pe. All rights reserved. Built with precision for Tanzania.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
