import app from './app';
import config from './config/config';
import './database/database'

// Instance of PORT
app.set('port', config.Port)

// Listening the PORT
app.listen(app.get('port'))
console.log(`Server on port: ${app.get('port')}`);

