import app from './app';
import './database/database'

// Instance of port
app.set("port", process.env.PORT);

// Listening the PORT
app.listen(app.get("port"))
console.log('Server on port:', app.get("port"));

