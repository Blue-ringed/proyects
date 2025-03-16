"use client"

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">AISSA NEUMÁTICOS S.L.</h3>
            <p className="mb-4">
              Neumáticos ocasión y nuevos, llantas aluminio ocasión, venta por mayor y mecánica rápida.
              Más de 15 años de experiencia en el sector.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="text-white hover:text-yellow-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/neumaticosaissa/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Contacto</h3>

            <div>
              <h4 className="font-semibold mb-2">Taller Calle Diderot</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                  <a
                    href="https://maps.google.com/maps?q=Aissa+Neumaticos+Calle+Diderot+12+Malaga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    C/ Diderot, 12, 29004 Málaga
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                  <a href="tel:+34951101762" className="hover:text-yellow-400 transition-colors">
                    951 10 17 62
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Taller Santa Bárbara</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                  <a
                    href="https://maps.google.com/maps?q=Aissa+Neumaticos+Santa+Barbara+Malaga"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    C/ Hnos. Lumière, 25, Pol. Ind. Santa Bárbara, Málaga
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-yellow-400" />
                  <a href="tel:+34606262829" className="hover:text-yellow-400 transition-colors">
                    606 26 28 29
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-yellow-400" />
                <a href="mailto:aissaneumaticos@hotmail.com" className="hover:text-yellow-400 transition-colors">
                  aissaneumaticos@hotmail.com
                </a>
              </div>
              <div className="flex items-center mt-2">
                <Clock className="h-5 w-5 mr-2 text-yellow-400" />
                <span>Lunes a Viernes: 8:30 - 18:30</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-yellow-400 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#ubicaciones" className="hover:text-yellow-400 transition-colors">
                  Ubicaciones
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-yellow-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Servicios principales</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#neumaticos" className="hover:text-yellow-400 transition-colors">
                    Neumáticos nuevos y seminuevos
                  </Link>
                </li>
                <li>
                  <Link href="#llantas" className="hover:text-yellow-400 transition-colors">
                    Llantas aluminio ocasión
                  </Link>
                </li>
                <li>
                  <Link href="#mecanica" className="hover:text-yellow-400 transition-colors">
                    Mecánica rápida
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {currentYear} Aissa Neumáticos S.L. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
