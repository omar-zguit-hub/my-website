import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulaire envoyé :", formData);

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6"
    >
      {/* En-tête */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Me contacter
      </motion.h2>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 leading-7 mb-8 max-w-2xl"
      >
        Je suis toujours intéressé par de nouveaux projets, opportunités et
        idées. N'hésitez pas à me contacter en utilisant le formulaire
        ci-dessous.
      </motion.p>

      {/* Contenu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/60 border border-gray-700 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            Informations de contact
          </h3>

          <div className="space-y-5">
            {/* Email */}
            <a
              href="mailto:omar@example.com"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
            >
              <div className="p-3 bg-gray-700 rounded-lg">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>omarzguit0@gmail.com</p>
              </div>
            </a>

            {/* Téléphone */}
            <a
              href="tel:+212640790784"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
            >
              <div className="p-3 bg-gray-700 rounded-lg">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <p>+212 6 40 79 07 84</p>
              </div>
            </a>

            {/* Localisation */}
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-gray-700 rounded-lg">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Localisation</p>
                <p>Maroc, Tinghir</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Formulaire de contact */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 space-y-5"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Envoyer un message
          </h3>

          {/* Nom */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Nom
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-500 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-500 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez votre message..."
              rows={5}
              className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-500 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none"
              required
            />
          </div>

          {/* Envoyer */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="mr-2" size={18} />
            Envoyer le message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
