import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-[#202B30]/80 text-gray-300 py-12 overflow-hidden backdrop-blur-md">
            {/* Radial Gradient Background with Glass Effect */}
            <div className="absolute inset-0 pointer-events-none bg-white/5">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-[#A7E97F]/10 to-transparent" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Socials */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                                {/* Replace with your logo icon */}
                                <span className="text-white font-bold">T</span>
                            </div>
                            <span className="ml-3 text-xl font-semibold text-white">Tamborine</span>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://discord.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaDiscord size={24} />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Changelog</a></li>
                            <li><a href="#" className="hover:text-white">Roadmap</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Our team</a></li>
                            <li><a href="#" className="hover:text-white">Our values</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Downloads</a></li>
                            <li><a href="#" className="hover:text-white">Documentation</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section with Glass Effect */}
                <div className="mt-12 p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <h4 className="text-white font-semibold text-lg">Join our newsletter</h4>
                    <p className="text-gray-400 mb-4">Keep up to date with everything Reflect</p>
                    <form className="flex flex-col sm:flex-row items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md bg-gray-800/70 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7E97F]/50"
                        />
                        <button
                            type="submit"
                            className="mt-4 sm:mt-0 sm:ml-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-700/50 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex space-x-2">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <span className="text-gray-500">•</span>
                        <a href="#" className="hover:text-white">Terms of Conditions</a>
                    </div>
                    <p className="mt-4 sm:mt-0 text-gray-500">Tamborine App, LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;