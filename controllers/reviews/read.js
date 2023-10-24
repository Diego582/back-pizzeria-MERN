import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default async (req, res) => {
    try {
        const placeId = process.env.GOOGLE_PLACE_ID;
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;

        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

        const response = await axios.get(apiUrl);
        console.log(apiUrl);

        if (response.data.result.reviews) {
            
            return res.status(200).json({
                success: true,
                message: "Reviews found",
                response: response.data.result.reviews,
              });
        } else {
            res.status(404).json({ message: 'No reviews found' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching reviews' });
    }

};


/* import https from 'https';
import dotenv from 'dotenv';
dotenv.config();

export default async (req, res) => {
    try {
        const placeId = process.env.GOOGLE_PLACE_ID;
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;

        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

        const response = await new Promise((resolve, reject) => {
            https.get(apiUrl, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            }).on('error', (error) => {
                reject(error);
            });
        });

        if (response.result && response.result.reviews) {
            res.json(response.result.reviews);
            console.log(response.result.reviews);
        } else {
            res.status(404).json({ message: 'No reviews found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching reviews' });
    }
}; */
 
/* 
 import axios from 'axios';

export default async (req, res) => {

    try {

        const placeId = 'ChIJ7UOl5s-_EmsRZv7WuGIwpTI';
        const apiKey = 'AIzaSyD8A1S55Kg65LGSB-r_R7uZkjjAjNGaWFM';

        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.data.result.reviews) {
            res.json(response.data.result.reviews);
            console.log(response.data.result.reviews);
        } else {
            res.status(404).json({ message: 'No reviews found' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching reviews' });
    }

};  */