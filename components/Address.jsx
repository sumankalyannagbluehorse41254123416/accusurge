"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Address() {
    // Default coordinates (set to New York City)
    const position = [40.7128, -74.0060];

    return (
        <div>
            <section className="bg-white py-10 md:px-20 mx-4">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold">Contact Us</h1>
                        <p className="text-gray-600 mt-2">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row gap-8">
                        <div className="map h-96 md:h-full rounded-lg overflow-hidden shadow-lg ">
                            {/* <MapContainer
                                center={position}
                                zoom={13}
                                style={{ height: '100%', width: '100%' }}
                                scrollWheelZoom={true}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        <div className="text-center">
                                            <strong>AccuSurge Medical</strong> <br />
                                            123 Main Street, New York, NY
                                        </div>
                                    </Popup>
                                </Marker>
                            </MapContainer> */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.313183586427!2d88.3876433!3d26.6866924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e445001dc02261%3A0x730d8bb6abe8ee35!2sAccusurge%20Medical%20Solutions%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1758109052062!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Accusurge Medical Solutions Pvt Ltd Map"
                                className="w-full lg:w-[600px]"
                            />
                        </div>

                        <div className="w-full lg:w-[48%] address-info flex flex-col justify-start p-4 lg:p-6 bg-gray-50 rounded-lg shadow-md gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-black">Registered Office</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <ul>
                                            <li className="text-gray-700 text-[16px]">ACCUSURGE MEDICAL SOLUTIONS PRIVATE LIMITED</li>
                                            <li className="text-gray-700 text-[16px]">  4665/49, Block G, Gali No-49, </li>
                                            <li className="text-gray-700 text-[16px]"> Regharpura, Karol Bagh</li>
                                            <li className="text-gray-700 text-[16px]">New Delhi -110005</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-black">Branch Office</h3>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <ul>
                                            <li className="text-gray-700 text-[16px]">ACCUSURGE MEDICAL SOLUTIONS PRIVATE LIMITED</li>
                                            <li className="text-gray-700 text-[16px]">Ground Floor </li>
                                            <li className="text-gray-700 text-[16px]">Village. Thiknikata</li>

                                            <li className="text-gray-700 text-[16px]"> Sushruta Nagar, Matigara </li>
                                            <li className="text-gray-700 text-[16px]">Darjeeling - 734012</li>

                                        </ul>
                                    </div>
                                </div>

                            </div>

                            {/* <button
                                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                                onClick={() => window.open("https://maps.google.com?q=123+Main+Street+New+York+NY+10001", "_blank")}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Get Directions
                            </button> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}