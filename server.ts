import express from 'express';

import { ConfigService } from './src/config/config';
import { routes } from './src/presentation/routes/routes';

const app = express();

app.use('/', routes);

const configService = new ConfigService();
const PORT = configService.app.port;
const URL = configService.app.url || "http://localhost:";

// createConnection(config.databaseOptions).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${URL}${PORT}`);
  });
// });
