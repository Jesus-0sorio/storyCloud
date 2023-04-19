import React from 'react';

const suggestions = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    username: 'user1',
    name: 'User One',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    username: 'user2',
    name: 'User Two',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    username: 'user3',
    name: 'User Three',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    username: 'user4',
    name: 'User Four',
  },
];

export const Suggestions = () => {
  return (
    <div className="hidden md:block m-2">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg mb-4">Sugerencias para ti</h2>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="flex items-center space-x-4 mb-3">
            <img src={suggestion.image} alt={suggestion.username} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <h3 className="font-semibold">{suggestion.username}</h3>
              <p className="text-sm text-gray-600">{suggestion.name}</p>
            </div>
            <button className="text-blue-600 font-semibold text-sm">Seguir</button>
          </div>
        ))}
      </div>
    </div>
  );
};
