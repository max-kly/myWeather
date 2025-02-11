require('dotenv').config({
    path: `${__dirname}/../.env.api`,
});
const key = process.env.API_KEY;
module.exports = key