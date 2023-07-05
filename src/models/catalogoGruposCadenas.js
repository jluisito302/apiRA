import {Schema, model} from "mongoose"

const catalogoCadenasSchema = new Schema({
    grupo:String,
    cadena:String
});

export default model('catalogo_grupo_cadenas',catalogoCadenasSchema)
