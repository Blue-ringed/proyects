"use client"

import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';

const Locations = () => {
// En el componente Locations.tsx, actualizar las URLs de las imágenes:
const locations = [
  {
    id: 'diderot',
    name: 'Taller Calle Diderot',
    address: 'C/ Diderot, 12, 29004 Málaga',
    mapUrl: 'https://maps.google.com/maps?q=Aissa+Neumaticos+Calle+Diderot+12+Malaga',
    phone: '951 10 17 62',
    // Actualizar con la segunda imagen (Calle Diderot)
    imageUrl: '/images/aissa-diderot.jpg',
    embedUrl: '...'
  },
  {
    id: 'santabarbara',
    name: 'Taller Santa Bárbara',
    address: 'C/ Hnos. Lumière (Pol. Ind. Santa Bárbara), 25, Málaga',
    mapUrl: 'https://maps.google.com/maps?q=Aissa+Neumaticos+Santa+Barbara+Malaga',
    phone: '606 26 28 29',
    // Actualizar con la primera imagen (Santa Bárbara)
    imageUrl: '/images/aissa-santabarbara.jpg',
    embedUrl: '...'
  }
];

  return (
    <section id="ubicaciones" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestras Ubicaciones</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Disponemos de dos talleres en Málaga para ofrecerte el mejor servicio.
            Visítanos en cualquiera de nuestras instalaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="shadow-lg overflow-hidden">
              <div className="relative h-64 w-full">
                <iframe
                  src={location.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`Mapa de ${location.name}`}
                  className="absolute inset-0"
                ></iframe>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-500">{location.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-500 transition-colors"
                      >
                        {location.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <a
                      href={`tel:${location.phone.replace(/\s/g, '')}`}
                      className="hover:text-yellow-500 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                    <span>Lunes a Viernes: 8:30 - 18:30</span>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-black font-medium py-2 px-4 rounded hover:bg-yellow-500 transition-colors"
                  >
                    Cómo llegar
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
