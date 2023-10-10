export default async (req, res) => {

    try {

        const placeId = 'CHIJv5k6KCSR_zkRgJ74mDSba6k';
        const apiKey = 'AIzaSyD8A1S55Kg65LGSB-r_R7uZkjjAjNGaWFM';

        const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

        const response = await axios.get(apiUrl);

        if (response.data.result.reviews) {
            res.json(response.data.result.reviews);
        } else {
            res.status(404).json({ message: 'No reviews found' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching reviews' });
    }

};