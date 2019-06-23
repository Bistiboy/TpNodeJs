const app = require('./app/app');
const { logger } = require('./app/common/logger');

const port = 3000;
app.listen(port, () => logger.info(`App listening on port ${port}!`));