"use client"

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Gauge, Repeat, ShieldCheck, Car, Droplet, Zap, AlertTriangle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'neumaticos',
      title: 'Neumáticos nuevos y de ocasión',
      description: 'Amplia gama de neumáticos de todas las marcas. Trabajamos con Goodyear, Bridgestone, Continental, Dunlop, Pirelli y más.',
      icon: <ShieldCheck className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'seminuevos',
      title: 'Neumáticos seminuevos desde 15€',
      description: 'Gran stock de neumáticos seminuevos en excelente estado a precios imbatibles, desde solo 15€ todo incluido.',
      icon: <Car className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'llantas',
      title: 'Llantas aluminio ocasión',
      description: 'Disponemos de llantas de aluminio de ocasión para todo tipo de vehículos con la mejor relación calidad-precio.',
      icon: <Repeat className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'mecanica',
      title: 'Mecánica rápida',
      description: 'Servicios de mecánica rápida para el mantenimiento de tu vehículo con rapidez y profesionalidad.',
      icon: <Wrench className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'aceite',
      title: 'Cambio de aceite + filtro',
      description: 'Servicio de cambio de aceite y filtro para mantener tu motor en perfectas condiciones, desde solo 35€.',
      icon: <Droplet className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'frenos',
      title: 'Pastillas de freno',
      description: 'Sustitución de pastillas de freno con materiales de calidad para garantizar tu seguridad, desde 50€.',
      icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'itv',
      title: 'Pre ITV',
      description: 'Revisión completa de tu vehículo antes de pasar la ITV para asegurar que todo está en orden, desde 10€.',
      icon: <Zap className="h-8 w-8 text-yellow-500" />
    },
    {
      id: 'alineacion',
      title: 'Alineación de dirección',
      description: 'Ajustamos la alineación de las ruedas para mejorar el rendimiento y aumentar la vida útil de los neumáticos.',
      icon: <Gauge className="h-8 w-8 text-yellow-500" />
    }
  ];

  const marcas = [
    'Goodyear', 'Bridgestone', 'Continental', 'Dunlop', 'Pirelli'
  ];

  return (
    <section id="servicios" className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">Nuestros Servicios</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            En Aissa Neumáticos ofrecemos una amplia variedad de servicios para mantener
            tu vehículo en perfectas condiciones con la mejor relación calidad-precio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-yellow-100 rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
              <div className="bg-black text-yellow-400 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">OFERTAS ESPECIALES</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-yellow-400 rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5"></span>
                    <span className="text-lg">Neumáticos nuevos desde 35€</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-400 rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5"></span>
                    <span className="text-lg">Neumáticos seminuevos desde 15€ todo incluido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-400 rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5"></span>
                    <span className="text-lg">Cambio de aceite + filtro desde 35€</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-400 rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5"></span>
                    <span className="text-lg">Pastillas de freno desde 50€</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-yellow-400 rounded-full w-6 h-6 mr-2 flex-shrink-0 mt-0.5"></span>
                    <span className="text-lg">Pre ITV desde 10€</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Trabajamos con las mejores marcas</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {marcas.map((marca, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <span className="font-semibold">{marca}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-700">
                Contamos con servicio de venta al por mayor y distribución. Solicita información sin compromiso.
              </p>
              <p className="text-slate-700 mt-2 font-bold">
                ¡Consúltanos para más ofertas especiales!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
