import {config} from 'dotenv'
config();

export default {
    mongodbURL:process.env.MONGODB_URI,
    mongodbUser:process.env.MONGODB_USER,
    mongodbPass:process.env.MONGODB_PASS,
    apiPort:process.env.API_PORT
}