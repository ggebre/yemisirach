'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'; // Import types for React events
import MiniHeroSection from '@/components/Hero_mini';
import miniheroData from '@/lib/mini_hero_data';
import GoogleMap from '@/components/GoogleMap';
import { FormData, prayerType } from '@/lib/types';

export default function Contactus() {
    // Initialize formData state with the FormData interface
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [prayerMessage, setPrayerMessage] = useState<prayerType>({
    name: '',
    email: '',
    prayerRequest: '',
    phone: '',
  });
  // Initialize formStatus state
  
  const [formStatus, setFormStatus] = useState<'success' | 'error' | 'sending' | ''>(''); // Literal union types for status

  // Type the event parameter as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePrayerChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPrayerMessage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  }

  
  // Type the event parameter as FormEvent<HTMLFormElement>
  const handleSubmit = async (e: FormEvent<HTMLFormElement>, formIdentifier: string) => {
    // use formIdentifier to switch between the two forms 
    e.preventDefault(); // Prevent default form submission behavior
    setFormStatus('sending'); // Set status to sending

    
    try {
      if (formIdentifier === 'prayer-form'){
      
      const response = await fetch('/api/prayers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prayerMessage),
      });
      console.log(response)
    }
    if (formIdentifier === 'message-form'){
      const response = await fetch('/api/create-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData, slug: formData.name}),
      });
      console.log(response);
    }
      
      
      // // Simulate success
      setFormStatus('success');
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setPrayerMessage({
        name: '',
        email: '',
        prayerRequest: '',
        phone: '',
      })
      // // Clear the success message after a few seconds
      // setTimeout(() => setFormStatus(''), 5000);

    } catch (error) {
      setFormStatus('error'); // Set status to error
      console.error("Form submission error:", error); // Log the error
      // Clear the error message after a few seconds
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    // The main container for the Contact Us page
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* I. Hero Section (Specific to Contact Us) */}
      
      <MiniHeroSection 
          title={miniheroData['contact'].title}
          image={miniheroData['contact'].image}
          description = { miniheroData['contact'].description}
          />
      <main className="container mx-auto px-4 py-12">

        {/* III. Primary Contact Form */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Send Us a Message
          </h2>
          <form onSubmit={( e ) => handleSubmit(e, 'message-form')}  className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                // rows="6"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {formStatus === 'success' && (
              <p className="text-center text-green-600 mt-4 font-semibold">
                Thank you for your message! We will get back to you shortly.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-center text-red-600 mt-4 font-semibold">
                There was an error sending your message. Please try again or use direct contact methods.
              </p>
            )}
          </form>
        </section>

        {/* IV. Other Contact Methods */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Other Ways to Connect
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            {/* Phone & Email */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Phone & Email</h3>
              <p className="text-lg mb-2">
                **Phone:** (123) 456-7890
              </p>
              <p className="text-lg mb-4">
                **General Inquiries:** <a href="mailto:info@mychurch.org" className="text-indigo-600 hover:underline">info@mychurch.org</a>
              </p>
              {/* <p className="text-lg">
                **Office Hours:** <br />
                Monday - Friday: 9:00 AM - 4:00 PM
              </p> */}
            </div>

            {/* Physical Address & Map */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Visit Us</h3>
              <p className="text-lg mb-4">
                Chicago Yemsrach Evangelical Church <br />
                5850 N Elston Ave <br />
                Chicago, IL 60646
              </p>
              {/* Placeholder for embedded map */}
              <GoogleMap />
              <a href="https://maps.app.goo.gl/F2h7Q23ahrRB8Fri9" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300">
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* V. Specific Inquiry Sections (Optional) */}
        <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8">
            Prayer Request
          </h2>
            
          <form onSubmit={( e ) => handleSubmit(e, 'prayer-form')}  className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name (if anonymous type numbers)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={prayerMessage.name}
                onChange={handlePrayerChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Your Email(optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={prayerMessage.email}
                onChange={handlePrayerChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={prayerMessage.phone}
                onChange={handlePrayerChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Your Prayer Request
              </label>
              <textarea
                id="prayerRequest"
                name="prayerRequest"
                value={prayerMessage.prayerRequest}
                onChange={handlePrayerChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Submit Prayer Request'}
              </button>
            </div>
            {formStatus === 'success' && (
              <p className="text-center text-green-600 mt-4 font-semibold">
                Thank you for your message! We will get back to you shortly.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-center text-red-600 mt-4 font-semibold">
                There was an error sending your message. Please try again or use direct contact methods.
              </p>
            )}
          </form>
        </section>

        {/* VI. Social Media Links */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8">
            Connect on Social Media
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition duration-300 ease-in-out text-5xl"
              aria-label="Facebook"
            >
              {/* Facebook SVG Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 13.5h2.793l.417-2.112h-3.21c-.504 0-.663-.223-.663-.679v-1.204h3.407v-2.112h-3.407v-2.482c0-.504.629-.86 1.345-.86h1.962v-2.112c-.36-.057-.728-.086-1.096-.086-2.316 0-3.876 1.41-3.876 3.993v1.892h-2.28v2.112h2.28v6.079h3.811v-6.079z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out text-5xl"
              aria-label="Twitter"
            >
              {/* Twitter SVG Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.34-1.6.56-2.46.66.88-.53 1.56-1.37 1.88-2.38-.82.49-1.74.84-2.72 1.02C18.15 4.5 17.06 4 15.88 4c-2.38 0-4.31 1.93-4.31 4.31 0 .34.04.67.11.98C8.57 9.17 5.75 7.6 3.84 5.09c-.39.67-.62 1.45-.62 2.29 0 1.49.76 2.81 1.92 3.59-.7-.02-1.35-.21-1.92-.5v.05c0 2.09 1.49 3.84 3.47 4.23-.36.1-.74.15-1.13.15-.28 0-.55-.03-.8-.08.55 1.72 2.14 2.97 4.03 3.01-1.48 1.16-3.34 1.86-5.38 1.86-.35 0-.69-.02-1.03-.06C2.94 19.82 5.04 20 7.21 20c8.65 0 13.38-7.14 13.38-13.38 0-.2-.01-.4-.02-.6z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-600 transition duration-300 ease-in-out text-5xl"
              aria-label="Instagram"
            >
              {/* Instagram SVG Icon */}
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c3.273 0 3.682.013 4.966.072 1.171.054 1.812.247 2.226.413.414.166.757.404 1.109.756.352.352.59.695.756 1.109.166.414.359 1.055.413 2.226.059 1.284.072 1.693.072 4.966s-.013 3.682-.072 4.966c-.054 1.171-.247 1.812-.413 2.226-.166.414-.404.757-.756 1.109-.352.352-.695.59-1.109.756-.414.166-1.055.359-2.226.413-1.284.059-1.693.072-4.966.072s-3.682-.013-4.966-.072c-1.171-.054-1.812-.247-2.226-.413-.414-.166-.757-.404-1.109-.756-.352-.352-.59-.695-.756-1.109-.166-.414-.359-1.055-.413-2.226-.059-1.284-.072-1.693-.072-4.966s.013-3.682.072-4.966c.054-1.171.247-1.812.413-2.226.166-.414.404-.757.756-1.109.352-.352.695-.59 1.109-.756.414-.166 1.055-.359 2.226-.413C8.318 2.013 8.727 2 12 2zm0 1.88c-3.203 0-3.585.016-4.85.071-1.043.048-1.547.228-1.81.332-.266.104-.457.25-.668.461-.212.211-.363.402-.461.668-.104.263-.284.767-.332 1.81-.055 1.265-.071 1.647-.071 4.85s.016 3.585.071 4.85c.048 1.043.228 1.547.332 1.81.104.266.25.457.461.668.211.212.402.363.668.461.263.104.767.284 1.81.332 1.265.055 1.647.071 4.85.071s3.585-.016 4.85-.071c1.043-.048 1.547-.228 1.81-.332.266-.104.457-.25.668-.461.212-.211.363-.402.461-.668.104-.263.284-.767.332-1.81.055-1.265.071-1.647.071-4.85s-.016-3.585-.071-4.85c-.048-1.043-.228-1.547-.332-1.81-.104-.266-.25-.457-.461-.668-.211-.212-.402-.363-.668-.461-.263-.104-.767-.284-1.81-.332C15.585 3.896 15.203 3.88 12 3.88zm0 3.65c-2.468 0-4.47 2.002-4.47 4.47s2.002 4.47 4.47 4.47 4.47-2.002 4.47-4.47-2.002-4.47-4.47-4.47zm0 1.88c1.458 0 2.59 1.132 2.59 2.59s-1.132 2.59-2.59 2.59-2.59-1.132-2.59-2.59 1.132-2.59 2.59-2.59zm6.368-5.32a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1z" />
              </svg>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}