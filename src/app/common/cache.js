const apicache = require('apicache');

apicache.options({
    defaultDuration: 600,
    statusCodes: {
        include: [200, 304]
    }
});

const cache = duration => apicache.middleware(`${duration} seconds`);

module.exports = {
    cache
};