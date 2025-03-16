"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-16 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Si necesitas más información, quieres solicitar un presupuesto o tienes cualquier consulta,
            no dudes en contactar con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Formulario de contacto</h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <Input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="w-full"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        className="w-full"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full"
                      placeholder="Tu email"
                    />
                  </div>

                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-1">
                      Servicio que te interesa
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="neumaticos_nuevos">Neumáticos nuevos</option>
                      <option value="neumaticos_seminuevos">Neumáticos seminuevos</option>
                      <option value="llantas">Llantas aluminio ocasión</option>
                      <option value="mecanica">Mecánica rápida</option>
                      <option value="aceite">Cambio de aceite</option>
                      <option value="frenos">Pastillas de freno</option>
                      <option value="itv">Pre ITV</option>
                      <option value="otro">Otro servicio</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Taller Calle Diderot</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Dirección</h4>
                      <p className="text-slate-600">
                        C/ Diderot, 12<br />
                        29004 Málaga
                      </p>
                      <a
                        href="https://maps.google.com/maps?q=Aissa+Neumaticos+Calle+Diderot+12+Malaga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:underline mt-1 inline-block"
                      >
                        Ver en el mapa
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Teléfono</h4>
                      <p>
                        <a href="tel:+34951101762" className="text-slate-600 hover:text-yellow-500">
                          951 10 17 62
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Taller Santa Bárbara</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Dirección</h4>
                      <p className="text-slate-600">
                        C/ Hnos. Lumière, 25<br />
                        Pol. Ind. Santa Bárbara<br />
                        Málaga
                      </p>
                      <a
                        href="https://maps.google.com/maps?q=Aissa+Neumaticos+Santa+Barbara+Malaga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:underline mt-1 inline-block"
                      >
                        Ver en el mapa
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Teléfono</h4>
                      <p>
                        <a href="tel:+34606262829" className="text-slate-600 hover:text-yellow-500">
                          606 26 28 29
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Información general</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p>
                        <a href="mailto:aissaneumaticos@hotmail.com" className="text-slate-600 hover:text-yellow-500">
                          aissaneumaticos@hotmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Horario de atención</h4>
                      <p className="text-slate-600">
                        Lunes a Viernes: 8:30 - 18:30<br />
                        Sábados y Domingos: Cerrado
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
