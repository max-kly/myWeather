const axios = require('axios')
const noSleep = () => setInterval(() => {
    axios.get('https://myweather-qzd6.onrender.com/api/health')
        .then(({ data }) => {
            console.log(data)
        })
}, 120000);
module.exports = noSleep