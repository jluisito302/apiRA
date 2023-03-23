import {Schema, model} from "mongoose";

const gfcSchema = new Schema({
    id:Number,
    origen:String,
    cliente:String,
    origendata:String,
    suborigen: String,
    canal: String,
    subcanal:String,
    grupo: String,
    cadena:String,
    formato: String,
    razonsocial: String,
    csv:Number,
    soldTo:String,
    activo:Number,
    idRobot:Number,
    tipo:Number,
    excludeFrom:String,
    visibledata:String,
    reportando:Number,
    clientePadre:String
});

export default model('gfcs',gfcSchema)
