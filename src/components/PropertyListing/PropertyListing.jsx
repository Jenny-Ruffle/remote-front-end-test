import React, {useEffect, useState} from 'react';
import { PROPERTIES_ENDPOINT } from '../../constants'
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    const getProperties = () => {
        fetch(PROPERTIES_ENDPOINT)
        .then(response => {
            if (response.ok) {
                return response.json()
            } 
            throw response
        })
        .then(data => setProperties(data))
        .catch(error => console.error('Error fetching properties:', error));
    };

    useEffect(() => {
        !properties.length && getProperties();
    }, [properties]);

    return (
        <ul className="PropertyListing">
            {properties.length ? properties.map((property, index) => {
                return (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            )}) : null}
        </ul>
    );
};

export default PropertyListing;
