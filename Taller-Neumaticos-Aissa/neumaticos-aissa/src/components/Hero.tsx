"use client"

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
// En el componente Hero.tsx:
    <div className="absolute inset-0 z-0">
      <Image 
        // Utilizar la imagen adjunta de las estanterías con neumáticos como fondo
        src="/images/neumaticos-estanterias.jpg" 
        alt="Taller Aissa Neumáticos - Interior"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            AISSA NEUMÁTICOS S.L.
          </h1>
          <p className="text-xl mb-8">
            Neumáticos ocasión y nuevos, llantas aluminio ocasión, venta por mayor y mecánica rápida.
            Más de 15 años de experiencia en el sector.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
              <Link href="#servicios">
                Nuestros Servicios
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
              <Link href="#contacto">
                Contactar
              </Link>
            </Button>
          </div>

          {/* Destacados */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-yellow-400/90 backdrop-blur-sm p-4 rounded-lg text-center text-black">
              <h3 className="font-bold text-xl mb-2">Neumáticos nuevos</h3>
              <p className="text-lg">Desde 35€</p>
            </div>
            <div className="bg-yellow-400/90 backdrop-blur-sm p-4 rounded-lg text-center text-black">
              <h3 className="font-bold text-xl mb-2">Neumáticos seminuevos</h3>
              <p className="text-lg">Desde 15€</p>
            </div>
            <div className="bg-yellow-400/90 backdrop-blur-sm p-4 rounded-lg text-center text-black">
              <h3 className="font-bold text-xl mb-2">Cambio aceite + filtro</h3>
              <p className="text-lg">Desde 35€</p>
            </div>
            <div className="bg-yellow-400/90 backdrop-blur-sm p-4 rounded-lg text-center text-black">
              <h3 className="font-bold text-xl mb-2">Pre ITV</h3>
              <p className="text-lg">Desde 10€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
