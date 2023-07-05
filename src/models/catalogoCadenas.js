import {Schema, model} from "mongoose"

const catalogoCadenasSchema = new Schema({
    nombre:String,
    activo:Number
});

export default model('catalogo_cadenas',catalogoCadenasSchema)
