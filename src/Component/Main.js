import React, { useState } from 'react';
import { data } from './data.js';

function Main() {

    const [search, setSearch] = useState('');

    return (
        <div className="mx-auto max-w-4xl p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Keeper</h1>
            <input
                type="text"
                placeholder="Search..."
                className="w-full mb-4 px-4 py-2 rounded-lg shadow-md outline-none"
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-1 gap-4">
                {data.filter((item) => (
                    search.trim() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
                )).map((item) => (
                    <div className="bg-white rounded-lg overflow-hidden shadow-md" key={item.id}>
                        <img className="w-16 h-16 rounded-full ml-3 mt-4" src={item.image_url} alt={item.name} />
                        <div className="px-6 py-4">
                            <p className="text-xl font-bold mb-2">Id: {item.id}</p>
                            <p className="text-xl font-bold mb-2">Name: {item.name}</p>
                            <p className="text-gray-700 text-base mb-2">Place: {item.place}</p>
                            <p className="text-gray-700 text-base mb-2">Contact: {item.contact_number}</p>
                            <p className="text-gray-700 text-base mb-2">Email: {item.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
