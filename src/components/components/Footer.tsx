import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-slate-950 text-white py-20 relative overflow-hidden">
        {/* Large Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none select-none opacity-[0.03] whitespace-nowrap z-0">
            <span className="text-[35vw] font-bold tracking-tighter leading-none">JIMBL</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="text-3xl font-bold mb-6 tracking-tight">Jimbl</h2>
                    <p className="text-slate-400 max-w-sm mb-8">
                        The immune system for AI data pipelines. Protecting the next generation of intelligent applications from data poisoning, injection attacks, and privacy leaks.
                    </p>
                    <div className="flex gap-4">
                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition cursor-pointer">
                            <Twitter size={20} />
                        </div>
                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition cursor-pointer">
                            <Github size={20} />
                        </div>
                        <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition cursor-pointer">
                            <Linkedin size={20} />
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="font-semibold text-lg mb-6 text-slate-200">Platform</h3>
                    <ul className="space-y-4 text-slate-400">
                        <li className="hover:text-white cursor-pointer transition">Threat Detection</li>
                        <li className="hover:text-white cursor-pointer transition">RAG Security</li>
                        <li className="hover:text-white cursor-pointer transition">LLM Protection</li>
                        <li className="hover:text-white cursor-pointer transition">Integrations</li>
                        <li className="hover:text-white cursor-pointer transition">Pricing</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-6 text-slate-200">Company</h3>
                    <ul className="space-y-4 text-slate-400">
                        <li className="hover:text-white cursor-pointer transition">About Us</li>
                        <li className="hover:text-white cursor-pointer transition">Blog</li>
                        <li className="hover:text-white cursor-pointer transition">Careers</li>
                        <li className="hover:text-white cursor-pointer transition">Contact</li>
                        <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>© 2024 Jimbl Inc. All rights reserved.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
                    <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-slate-300 cursor-pointer">Cookie Settings</span>
                </div>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
