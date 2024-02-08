import React, { useState, useEffect } from 'react';

function BigQueryComponent() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setLoading(true);
        fetch('/api/bigquery') // Replace with your server endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this runs once after the initial render

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No data</div>;

    return (
        <div>
            {/* Render your data here */}
            {JSON.stringify(data)}
        </div>
    );
}

export default BigQueryComponent;
