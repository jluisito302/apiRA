import {Schema, model} from "mongoose"

const reporteTiendasSchema = new Schema({
    idProducto: Number,
    idTienda: Number,
    fecha: Number,
});

export default model('tiendasproductos_2023',reporteTiendasSchema)
