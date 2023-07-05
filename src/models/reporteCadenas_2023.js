import {Schema, model} from "mongoose"

const reporteCadenasSchema = new Schema({
    idGFC:Number,
    fecha:String,
    grupo:String,
    cadena:String,
    ventasUnidades:Number,
    ventasImporte:Number,
    existenciasUnidades:Number,
    existenciasImporte:Number
});

export default model('reportecadenas_2023',reporteCadenasSchema)
