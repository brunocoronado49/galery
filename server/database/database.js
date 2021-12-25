import mongoose from 'mongoose';

( async () => {
    const db = await mongoose.connect(process.env.MONGODB_DB, {})

    console.log(`Database connected in: ${db.connection.name}`);
})()
