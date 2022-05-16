const axios = require("axios")

const api = axios.create({
    baseURL: 'https://mmorpg/'
})

module.exports = api