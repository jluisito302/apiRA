import mongoose from "mongoose";
import config from "./config";

(async ()=>{
    const db = await mongoose.connect(config.mongodbURL,{
        useNewUrlParser: true,
        user: config.mongodbUser,
        pass: config.mongodbPass,
        keepAlive: true,
      });
    console.log('Conexion Mongodb', db.connection.name);
})();
