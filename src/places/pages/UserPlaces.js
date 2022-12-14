import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../componenets/PlaceList'


const DUMMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'The state building',
        imageUrl: 'https://imgs.search.brave.com/03mA25Na23cC3586ZfDSqeq8mvARiXYfrAZOhOP5SCU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/aGlzdG9yeS5jb20v/c2l0ZXMvMi8yMDE2/LzA0L0dldHR5SW1h/Z2VzLTU1NTE3MzYw/Ny5qcGc',
        address: '20 W 34th St,New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Emp. State Building',
        description: 'The state building',
        imageUrl: 'https://imgs.search.brave.com/03mA25Na23cC3586ZfDSqeq8mvARiXYfrAZOhOP5SCU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/aGlzdG9yeS5jb20v/c2l0ZXMvMi8yMDE2/LzA0L0dldHR5SW1h/Z2VzLTU1NTE3MzYw/Ny5qcGc',
        address: '20 W 34th St,New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
  const userId =  useParams().userId;
  const loadedPlaces = DUMMMY_PLACES.filter(place => place.creator === userId);
return <PlaceList items= {loadedPlaces} />
};

export default UserPlaces;