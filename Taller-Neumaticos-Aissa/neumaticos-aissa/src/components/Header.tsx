"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PhoneCall, Mail, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2 flex justify-between items-center">
          <div className="w-48 h-16 relative">
            <Image 
              src="/images/neumaticos-aissa-logo.png" // Usar la imagen del logo adjunta
              alt="Aissa Neumáticos Logo" 
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-black">
              <PhoneCall className="h-5 w-5 mr-2" />
              <a href="tel:+34951101762" className="hover:underline">
                951 10 17 62
              </a>
            </div>
            <div className="flex items-center text-black">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:aissaneumaticos@hotmail.com" className="hover:underline">
                aissaneumaticos@hotmail.com
              </a>
            </div>
            <div className="flex items-center text-black">
              <Clock className="h-5 w-5 mr-2" />
              <span>L-V: 8:30-18:30</span>
            </div>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>
        <nav className="py-2">
          <ul className="hidden md:flex space-x-6 justify-center md:justify-start">
            <li>
              <Link href="/" className="text-black hover:text-gray-800 font-medium">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#servicios" className="text-black hover:text-gray-800 font-medium">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#nosotros" className="text-black hover:text-gray-800 font-medium">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="#ubicaciones" className="text-black hover:text-gray-800 font-medium">
                Ubicaciones
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="text-black hover:text-gray-800 font-medium">
                Contacto
              </Link>
            </li>
          </ul>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-yellow-400 mt-2 rounded-md p-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="block text-black hover:text-gray-800 font-medium">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="block text-black hover:text-gray-800 font-medium">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="block text-black hover:text-gray-800 font-medium">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#ubicaciones" className="block text-black hover:text-gray-800 font-medium">
                    Ubicaciones
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="block text-black hover:text-gray-800 font-medium">
                    Contacto
                  </Link>
                </li>
              </ul>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-black">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  <a href="tel:+34951101762" className="hover:underline">
                    951 10 17 62
                  </a>
                </div>
                <div className="flex items-center text-black">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:aissaneumaticos@hotmail.com" className="hover:underline" style={{ wordBreak: 'break-all' }}>
                    aissaneumaticos@hotmail.com
                  </a>
                </div>
                <div className="flex items-center text-black">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>L-V: 8:30-18:30</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      <div className="bg-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-yellow-400 font-bold">
            Neumáticos Nuevos desde 35€ | Seminuevos desde 15€ | Mecánica Rápida
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
