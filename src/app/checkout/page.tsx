"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import SpacialBackground from "@/components/SpacialBackground";
import StickyHeader from "@/components/StickyHeader";
import { defaultStyles } from "@/lib/defaultStyles";

export default function CheckoutPage() {
  const [step, setStep] = useState(1); // 1: selección región, 2: datos de contacto, 3: método de pago
  const [selectedProvider, setSelectedProvider] = useState<string>();
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerCountry, setCustomerCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<
    "argentina" | "mundo" | null
  >(null);
  const [countries, setCountries] = useState<
    Array<{ code: string; name: string }>
  >([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Course details
  const courseDetails = {
    id: "curso-rutas-conciencia-2024",
    title: "Rutas de Conciencia",
    description: "21 puertas para explorar tu universo interno",
    price: selectedRegion === "argentina" ? 35000 : 35,
    currency: selectedRegion === "argentina" ? "ARS" : "USD",
  };

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load countries from API
  useEffect(() => {
    if (!isClient) return;

    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2"
        );
        const data = await response.json();

        // Sort countries by name and format them
        const sortedCountries = data
          .sort(
            (
              a: { name: { common: string } },
              b: { name: { common: string } }
            ) => a.name.common.localeCompare(b.name.common)
          )
          .map((country: { name: { common: string }; cca2: string }) => ({
            code: country.cca2,
            name: country.name.common,
          }));

        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
        // Fallback to a few key countries if API fails
        setCountries([
          { code: "AR", name: "Argentina" },
          { code: "MX", name: "México" },
          { code: "US", name: "United States" },
          { code: "ES", name: "Spain" },
          { code: "BR", name: "Brazil" },
        ]);
      } finally {
        setIsLoadingCountries(false);
      }
    };

    fetchCountries();
  }, [isClient]);

  const handleRegionSelect = (region: "argentina" | "mundo") => {
    setSelectedRegion(region);
    if (region === "argentina") {
      setCustomerCountry("AR");
    }
    setStep(2);
  };

  const handleNextStep = () => {
    if (
      !customerEmail ||
      !customerName ||
      (selectedRegion === "mundo" && !customerCountry) ||
      isLoadingCountries ||
      !isClient
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }
    setStep(3);
  };

  const handleBackStep = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  const handlePaymentMethodSelect = (provider: string) => {
    setSelectedProvider(provider);
  };

  const handlePayment = () => {
    if (!selectedProvider) {
      alert("Por favor selecciona un método de pago.");
      return;
    }

    // Solo mostrar un mensaje de confirmación
    alert(
      `Pago simulado con ${selectedProvider} por ${courseDetails.currency} $${courseDetails.price}`
    );
  };

  const paymentMethods = [
    {
      id: "mercadopago",
      name: "MercadoPago",
    },
    { id: "paypal", name: "PayPal" },
    { id: "wise", name: "Wise" },
  ];

  return (
    <div className="min-h-screen relative">
      <SpacialBackground />
      <StickyHeader />
      <div className="max-w-4xl mx-auto p-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
            style={defaultStyles.text}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          <h1
            className={`text-2xl font-bold ${defaultStyles.colors.primary}`}
            style={defaultStyles.title}
          >
            Finalizar Compra
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${
                step >= 1 ? defaultStyles.colors.primary : "text-gray-500"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= 1
                    ? "border-amber-200 bg-amber-200"
                    : "border-gray-500"
                }`}
              >
                {step > 1 ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span className="text-sm font-bold text-white">1</span>
                )}
              </div>
              <span className="text-sm font-semibold">Región</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-500"></div>
            <div
              className={`flex items-center space-x-2 ${
                step >= 2 ? defaultStyles.colors.primary : "text-gray-500"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= 2
                    ? "border-amber-200 bg-amber-200"
                    : "border-gray-500"
                }`}
              >
                {step > 2 ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <span className="text-sm font-bold text-white">2</span>
                )}
              </div>
              <span className="text-sm font-semibold">Datos</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-500"></div>
            <div
              className={`flex items-center space-x-2 ${
                step >= 3 ? defaultStyles.colors.primary : "text-gray-500"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  step >= 3
                    ? "border-amber-200 bg-amber-200"
                    : "border-gray-500"
                }`}
              >
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <span className="text-sm font-semibold">Pago</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Course Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black bg-opacity-30 rounded-lg p-6 border border-white border-opacity-20"
          >
            <h2
              className={`text-2xl font-bold ${defaultStyles.colors.primary} mb-4`}
              style={defaultStyles.title}
            >
              Resumen del Curso
            </h2>

            <div className="space-y-4">
              <div>
                <h3
                  className={`text-xl font-semibold mb-2 ${defaultStyles.colors.primary}`}
                  style={defaultStyles.text}
                >
                  {courseDetails.title}
                </h3>
                <p
                  className={`opacity-90 ${defaultStyles.colors.primary}`}
                  style={defaultStyles.text}
                >
                  {courseDetails.description}
                </p>
              </div>

              <div className="border-t border-white border-opacity-20 pt-4">
                <div className="flex justify-between items-center">
                  <span
                    className={defaultStyles.colors.primary}
                    style={defaultStyles.text}
                  >
                    Precio:
                  </span>
                  <span
                    className={`text-lg ${
                      selectedRegion
                        ? defaultStyles.colors.primary
                        : "text-gray-500"
                    }`}
                    style={defaultStyles.text}
                  >
                    {selectedRegion
                      ? `${
                          courseDetails.currency
                        } $${courseDetails.price.toLocaleString()}`
                      : "Selecciona tu región para ver el precio"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {step === 1 ? (
              /* Step 1: Region Selection */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-white border-opacity-20">
                  <h3
                    className={`text-xl font-bold ${defaultStyles.colors.primary} mb-4`}
                    style={defaultStyles.text}
                  >
                    ¿Dónde te encontrás?
                  </h3>
                  <p
                    className="text-white opacity-75 mb-6"
                    style={defaultStyles.text}
                  >
                    Selecciona tu ubicación para continuar
                  </p>

                  <div className="grid gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleRegionSelect("argentina")}
                      className="p-6 border-2 border-white border-opacity-30 hover:border-opacity-60 rounded-lg transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4
                            className={`text-lg font-semibold ${defaultStyles.colors.primary}`}
                            style={defaultStyles.text}
                          >
                            🇦🇷 Estoy en Argentina
                          </h4>
                        </div>
                        <div
                          className={defaultStyles.colors.primary}
                          style={defaultStyles.text}
                        >
                          →
                        </div>
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleRegionSelect("mundo")}
                      className="p-6 border-2 border-white border-opacity-30 hover:border-opacity-60 rounded-lg transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4
                            className={`text-lg font-semibold ${defaultStyles.colors.primary}`}
                            style={defaultStyles.text}
                          >
                            🌍 Estoy en otro país
                          </h4>
                        </div>
                        <div
                          className={defaultStyles.colors.primary}
                          style={defaultStyles.text}
                        >
                          →
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ) : step === 2 ? (
              /* Step 2: Customer Information */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-white border-opacity-20">
                  <h3
                    className={`text-xl font-bold ${defaultStyles.colors.primary} mb-4`}
                    style={defaultStyles.text}
                  >
                    Información de Contacto
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label
                        className={`block mb-2 ${defaultStyles.colors.primary}`}
                        style={defaultStyles.text}
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-4 py-2 bg-black bg-opacity-50 border border-white border-opacity-30 rounded-lg focus:outline-none focus:border-white focus:border-opacity-60 transition-colors checkout-input"
                        placeholder="Tu nombre completo"
                        style={{
                          ...defaultStyles.text,
                          fontSize: "16px",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className={`block mb-2 ${defaultStyles.colors.primary}`}
                        style={defaultStyles.text}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-black bg-opacity-50 border border-white border-opacity-30 rounded-lg focus:outline-none focus:border-white focus:border-opacity-60 transition-colors checkout-input"
                        placeholder="tu@email.com"
                        style={{
                          ...defaultStyles.text,
                          fontSize: "16px",
                        }}
                      />
                    </div>

                    {selectedRegion === "mundo" && (
                      <div>
                        <label
                          className={`block mb-2 ${defaultStyles.colors.primary}`}
                          style={defaultStyles.text}
                        >
                          País *
                        </label>
                        <select
                          value={customerCountry}
                          onChange={(e) => setCustomerCountry(e.target.value)}
                          disabled={isLoadingCountries || !isClient}
                          data-type="select"
                          className="w-full px-4 py-2 bg-black bg-opacity-50 border border-white border-opacity-30 rounded-lg focus:outline-none focus:border-white focus:border-opacity-60 transition-colors checkout-input"
                          style={{
                            ...defaultStyles.text,
                            fontSize: "16px",
                          }}
                        >
                          <option value="">
                            {!isClient || isLoadingCountries
                              ? "Cargando países..."
                              : "Selecciona tu país"}
                          </option>
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBackStep}
                    className="flex-1 py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 border-2 border-white border-opacity-30 hover:border-opacity-60 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                    style={defaultStyles.text}
                  >
                    ← Volver
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNextStep}
                    disabled={
                      !customerEmail ||
                      !customerName ||
                      (selectedRegion === "mundo" && !customerCountry) ||
                      isLoadingCountries ||
                      !isClient
                    }
                    className={`
                      flex-1 py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 border-2
                      ${
                        customerEmail &&
                        customerName &&
                        (selectedRegion === "argentina" || customerCountry) &&
                        !isLoadingCountries &&
                        isClient
                          ? "border-amber-200 bg-amber-200 bg-opacity-20 hover:bg-opacity-30 text-amber-200"
                          : "border-gray-500 bg-gray-500 bg-opacity-20 text-gray-400 cursor-not-allowed"
                      }
                    `}
                    style={defaultStyles.text}
                  >
                    Continuar al Pago →
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              /* Step 3: Payment Method Selection */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Region Summary */}
                <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-white border-opacity-20">
                  <h3
                    className={`text-xl font-bold ${defaultStyles.colors.primary} mb-4`}
                    style={defaultStyles.text}
                  >
                    Región Seleccionada
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        Región:
                      </span>
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        {selectedRegion === "argentina"
                          ? "Argentina"
                          : "Otro país"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        Precio:
                      </span>
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        {courseDetails.currency} $
                        {courseDetails.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Customer Info Summary */}
                <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-white border-opacity-20">
                  <h3
                    className={`text-xl font-bold ${defaultStyles.colors.primary} mb-4`}
                    style={defaultStyles.text}
                  >
                    Tus Datos
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        Nombre:
                      </span>
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        {customerName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        Email:
                      </span>
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        {customerEmail}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        País:
                      </span>
                      <span
                        className={defaultStyles.colors.primary}
                        style={defaultStyles.text}
                      >
                        {countries.find((c) => c.code === customerCountry)
                          ?.name || customerCountry}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleBackStep}
                    className={`mt-4 ${defaultStyles.colors.primary} hover:text-amber-100 text-sm underline`}
                    style={defaultStyles.text}
                  >
                    Editar datos
                  </button>
                </div>

                {/* Payment Method Selection */}
                <div className="bg-black bg-opacity-30 rounded-lg p-6 border border-white border-opacity-20">
                  <h3
                    className={`text-xl font-bold ${defaultStyles.colors.primary} mb-4`}
                    style={defaultStyles.text}
                  >
                    Método de Pago
                  </h3>

                  <div className="grid gap-3">
                    {paymentMethods.map((method) => {
                      const isSelected = selectedProvider === method.id;

                      return (
                        <motion.div
                          key={method.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handlePaymentMethodSelect(method.id)}
                          className={`
                            p-4 rounded-lg border-2 cursor-pointer transition-all duration-300
                            ${
                              isSelected
                                ? "border-white bg-white bg-opacity-10"
                                : "border-white border-opacity-30 hover:border-opacity-60"
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-amber-200"></div>
                            <span
                              className={`font-semibold ${defaultStyles.colors.primary}`}
                              style={defaultStyles.text}
                            >
                              {method.name}
                            </span>
                            {isSelected && (
                              <div className="ml-auto w-4 h-4 rounded-full bg-amber-200"></div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBackStep}
                    className="flex-1 py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 border-2 border-white border-opacity-30 hover:border-opacity-60 bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                    style={defaultStyles.text}
                  >
                    ← Volver
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePayment}
                    disabled={!selectedProvider}
                    className={`
                      flex-1 py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 border-2
                      ${
                        selectedProvider
                          ? "border-amber-200 bg-amber-200 bg-opacity-20 hover:bg-opacity-30 text-amber-200"
                          : "border-gray-500 bg-gray-500 bg-opacity-20 text-gray-400 cursor-not-allowed"
                      }
                    `}
                    style={defaultStyles.text}
                  >
                    {`Pagar ${courseDetails.currency} $${courseDetails.price}`}{" "}
                    →
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
