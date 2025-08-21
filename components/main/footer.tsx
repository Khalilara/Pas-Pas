"use client";

import Link from "next/link";
import { useState } from "react";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    // Remplacez ceci par votre logique d'envoi d'email
    try {
      console.log('Form data:', formData);
      // Ici vous pourriez appeler votre API pour envoyer l'email
      alert('Message envoyé avec succès !');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      alert('Erreur lors de l\'envoi du message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        
        {/* Section des liens existants */}
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap mb-12">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] mb-4">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[15px] hover:text-white transition-colors"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Section de contact */}
        <div className="w-full max-w-4xl bg-gray-800/30 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Informations de contact */}
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-2xl mb-6 text-center md:text-left">Contactez-nous</h3>
              <div className="text-center md:text-left">
                <p className="mb-4 text-gray-300">
                  Vous avez un projet ou une question ? N&apos;hésitez pas à nous contacter.
                </p>
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <svg className="w-5 h-5 mr-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a 
                    href="mailto:test@gmail.com" 
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    k.araoui@samsung.com
                  </a>
                </div>
                <p className="text-sm text-gray-400">
                  Ou utilisez le formulaire ci-contre pour nous envoyer un message directement.
                </p>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Votre email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Votre message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-400 resize-vertical transition-all"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-gray-700 pt-6">
          <div className="mb-[20px] text-[15px] text-center text-gray-400">
            &copy; Khalil Araoui {new Date().getFullYear()} Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};