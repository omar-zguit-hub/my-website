import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulaire envoyé :", formData);

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
      {/* ================= Header ================= */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        {t("contact.title")}
      </motion.h2>

      {/* ================= Introduction ================= */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-300 leading-7 mb-8 max-w-2xl"
      >
        {t("contact.description")}
      </motion.p>

      {/* ================= Content ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ================= Contact Information ================= */}
        <motion.div
          initial={{ opacity: 0, x: i18n.language === "fr" ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/60 border border-gray-700 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-white mb-6">
            {t("contact.information.title")}
          </h3>

          <div className="space-y-5">
            {/* Email */}
            <a
              href="mailto:omarzguit0@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
            >
              <div className="p-3 bg-gray-700 rounded-lg">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {t("contact.information.email.label")}
                </p>

                <p>omarzguit0@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+212640790784"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
            >
              <div className="p-3 bg-gray-700 rounded-lg">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {t("contact.information.phone.label")}
                </p>

                <p>+212 6 40 79 07 84</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-gray-700 rounded-lg">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {t("contact.information.location.label")}
                </p>

                <p>{t("contact.information.location.value")}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= Contact Form ================= */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 space-y-5"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            {t("contact.form.title")}
          </h3>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              {t("contact.form.name.label")}
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.form.name.placeholder")}
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
              {t("contact.form.email.label")}
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.form.email.placeholder")}
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
              {t("contact.form.message.label")}
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.form.message.placeholder")}
              rows={5}
              className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-500 rounded-md border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="mr-2" size={18} />
            {t("contact.form.submit")}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
