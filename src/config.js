import {config} from 'dotenv'
config();

export default {
    mongodbURL:process.env.MONGODB_URI || 'mongodb://localhost:27017/',
}