//Import
import app, { config } from './routes.js';

// Rotas -- expres.js

// API Server ----

app.listen(config.port, () => {
    console.log(`Server is running on porting ${config.port}`);
});
