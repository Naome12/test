const mongoose = require('mongoose')
require('dotenv').config()


mongoose.set('strictQuery',true)
const connectDb =async ()=>{
    try {
        mongoose.connect(process.env.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => {
            console.log(`db connected`);
        })
    } catch (error) {
        console.log(error)
        process.exit()
    }

}

module.exports = connectDb