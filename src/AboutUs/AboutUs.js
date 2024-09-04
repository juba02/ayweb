import React from 'react';
import Faq from './Faq';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTiktok } from "react-icons/fa6";


const AboutUs = () => {
    return (
        <section id="AboutUs" className="py-20  mt-20 ">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-primary dark:text-white mb-8 text-center">Qui sommes nous ?</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Nous sommes un collectif de développeurs algériens spécialisés dans la création de sites web. 
                    Nous maîtrisons toutes les étapes du processus, allant de la création de logos et de designs 
                    à la réalisation de sites web en utilisant différentes technologies, en fonction des choix et 
                    des besoins de nos clients. Nous offrons également des audits de sécurité pour les sites hébergés 
                    et la création de stratégies marketing adéquates. Nous sommes ravis de vous accompagner dans ces 
                    étapes, que ce soit pour l'ensemble du processus ou pour certaines parties spécifiques, en fonction 
                    de vos demandes.
                </p>
                
                {/* Section des chefs */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-primary dark:text-white mb-12 text-center">Nos Responsables</h3>
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 space-x-3">
                        {/* Profil de Aiche Youva */ }
                        <div className="max-w-sm p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center">
                            <h4 className="text-2xl font-bold text-primary dark:text-white mb-4">Aiche Youva</h4>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                                Master en ingénierie logicielle. Expert en développement de logiciels, 
                                il gère les projets de création de sites web et supervise les équipes de développement.
                            </p>
                        </div>
                        
                        {/* Profil de Aziz Sellal */}
                        <div className="max-w-sm p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg text-center">
                            <h4 className="text-2xl font-bold text-primary dark:text-white mb-4">Aziz Sellal</h4>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                                Master en réseaux et systèmes distribués. Spécialiste en infrastructures 
                                réseaux et en sécurité, il assure la fiabilité et la sécurité des solutions déployées.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='text-center mx-auto w-11/12 md:w-2/4 mt-5'>
                <h3 className="text-3xl font-bold text-primary dark:text-white mb-3 text-center">FAQ</h3>
                    <Faq/>
                </div>

                {/* Section Contact Us */}
                <div id="contact-us" className="mt-20 text-center">
                    <h3 className="text-3xl font-bold text-primary dark:text-white mb-8">Contactez nous !</h3>
                    <div className="flex justify-center space-x-8">
                        <a href="https://web.facebook.com/profile.php?id=61563836030318" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"><FaFacebookF/></a>
                        <a href="https://www.instagram.com/ayweb_officiel/" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline"><FaInstagram/></a>
                        <a href="https://www.tiktok.com/@ay_web?lang=en" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline"><FaTiktok/></a>
                        <a href="https://www.linkedin.com/in/ay-web-undefined-001127326/" target="_blank" rel="noopener noreferrer" className="text-blue-800 dark:text-blue-600 hover:underline"><FaLinkedinIn/></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
