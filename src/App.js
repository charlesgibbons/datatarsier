// App.js

import React, { useState } from 'react';
import CountrySelector from './CountrySelector';
import BigQueryComponent from './components/BigQueryComponent';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Event handler for country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);

    // Call function to query BigQuery with selected country
    queryBigQuery(country);
  };

  // Function to query BigQuery
  const queryBigQuery = (country) => {
    // Make the BigQuery query here
    console.log(`Querying BigQuery for country: ${country}`);
    // You can use libraries like axios or fetch to make the API call to your backend
  };

  return (
    <div>
      <h1>Country Selection</h1>
      <CountrySelector onSelect={handleCountrySelect} />
      <h2>BigQuery Results</h2>
      {selectedCountry && <BigQueryComponent country={selectedCountry} />}
    </div>
  );
}

export default App;
