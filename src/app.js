import config from "./config";
import express from "express";
import Routes from "./routes/routes.js";
import cors from "cors";
const app = express();


//PORT
app.set('port',config.apiPort);

//MIDDLEWARE
const corsOptions={};
app.use(cors());
//app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTE GET DEFAULT
app.get('/', (req,res)=>{
    res.json({message: 'Welcome to my application'});
});

app.use('/api',Routes);

export default app;