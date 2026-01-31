import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          Get In <span className="text-emerald-500">Touch</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you
                have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {/* Row 1: Contact Details */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
                <div className="flex items-center space-x-4 min-w-[220px]">
                  <div className="p-3 bg-slate-800 rounded-lg shrink-0">
                    <Mail className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:khuzaimaaltaf024@gmail.com"
                      className="text-slate-400 hover:text-emerald-500 transition-colors"
                    >
                      khuzaimaaltaf024@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 min-w-[220px]">
                  <div className="p-3 bg-slate-800 rounded-lg shrink-0">
                    <Phone className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+923252714226"
                      className="text-slate-400 hover:text-emerald-500 transition-colors"
                    >
                      +92 325 2714226
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 min-w-[220px]">
                  <div className="p-3 bg-slate-800 rounded-lg shrink-0">
                    <MapPin className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-slate-400">Karachi, PK</p>
                  </div>
                </div>
              </div>

              {/* Row 2: Profiles */}
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-24">
                <div className="flex items-center space-x-4 min-w-[220px]">
                  <div className="p-3 bg-slate-800 rounded-lg shrink-0">
                    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500 w-6 h-6">
                      <title>Upwork</title>
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Upwork</h4>
                    <a
                      href="https://www.upwork.com/freelancers/~0118556ff8223dea4f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-500 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 min-w-[220px]">
                  <div className="p-3 bg-slate-800 rounded-lg shrink-0">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////4/P/0+f7w9v661fhjovHM3/qCs/SUv/UAgO0AcOsAbOsAaesOhO7C2vnY6Pvl8P2kyPaw0fhYnfHE3frR4/oAdewAeewAfO0ri+5PmfAAc+wAf+0AeOyZwfWKuPRwqvK16K7yAAAAh0lEQVR4Ad3LwwEEQQAEwF6bY0/+SZ6N96GeDfyzZC/NUtzIixI7Vd20XT9UY4KzsZzmul5mrITQIk9xi3WcCyHkojQZ8YgZa62olZSG4Qndtc0irOUZnuXGLYPdwStr43dHSfDSzHc/HvBaza0jeI1p3xZ4w5tixTvERLzVVnirrPDejO+3BXE2CASMVEIeAAAAAElFTkSuQmCC" className="w-6 h-6 opacity-80" alt="Freelancer" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Freelancer</h4>
                    <a
                      href="https://www.freelancer.com/u/khuzaima024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-500 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20 pt-8 border-t border-slate-800">
          <p className="text-slate-400">
            © 2026 Khuzaima Altaf Zahid. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
