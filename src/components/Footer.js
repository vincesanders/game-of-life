import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const generations = useSelector(state => state.generations);
    return (
        <div>
            <h3>Generations = {generations}</h3>
        </div>
    );
}

export default Footer;