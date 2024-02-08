import React from 'react';

function CountrySelector(props) {
    // State to hold the selected country
    const [selectedCountry, setSelectedCountry] = React.useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        // You can also pass the selected country to a parent component or do other actions here
    };

    return (
        <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a Country</option>
            <option value="UK">United Kingdom</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="AU">Australia</option>
        </select>
    );
}

export default CountrySelector;
