import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_mw306dm', 
      'template_x1r6f7b', 
      form.current, 
      'PebyEJkWbsaCKT7Ir'
    )
    .then(() => {
      alert("Félicitations Nama ! Ton message a été envoyé.");
      e.target.reset();
    }, (error) => {
      alert("Erreur lors de l'envoi.");
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Parlons de votre projet</h2>
        <p className="text-gray-500 mb-12 text-lg">Nama Nkoa Guershom est à votre écoute pour vos besoins digitaux.</p>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="from_name" placeholder="Votre nom" required className="w-full p-4 rounded-xl border-gray-200 outline-indigo-500 shadow-inner" />
            <input type="email" name="user_email" placeholder="Votre email" required className="w-full p-4 rounded-xl border-gray-200 outline-indigo-500 shadow-inner" />
          </div>
          <textarea name="message" placeholder="Votre message..." required className="w-full p-4 rounded-xl border-gray-200 h-40 outline-indigo-500 shadow-inner"></textarea>
          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;