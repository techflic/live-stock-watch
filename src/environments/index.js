const environments = {
    development: {
        BASE_URL: "ws://stocks.mnet.website"
    },
    production: {
        BASE_URL: "wss://stocks.mnet.website"
    }
}

export default environments[process.env.REACT_APP_ENV] || environments["development"]