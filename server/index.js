import app from './app';

// Instance of PORT
app.set('port', process.env.PORT || 3002)

// Listening the PORT
app.listen(app.get('port'))
console.log(`Server on port: ${app.get('port')}`);
