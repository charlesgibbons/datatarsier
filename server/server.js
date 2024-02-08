
// As an example, place this at the top of your server.js file
process.env.GOOGLE_APPLICATION_CREDENTIALS = '/keys/datatarsier-c69856a46c62.json';


const express = require('express');
const { BigQuery } = require('@google-cloud/bigquery');
const app = express();
const port = 3001; // or any other available port

const bigQueryClient = new BigQuery();

app.get('/api/bigquery', async (req, res) => {
    try {
        const sqlQuery = `YOUR_BIGQUERY_SQL_QUERY_HERE`;

        const options = {
            query: sqlQuery,
            location: 'US', // Change this based on your BigQuery dataset location
        };

        const [rows] = await bigQueryClient.query(options);
        res.json(rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
