import {Schema, model} from "mongoose"

const reporteTiendasSchema = new Schema({
    idProduto: Number,
    fecha: Number,
    ventasUnidades: Number,
    ventasImporte: Number,
    existenciasUnidades: Number,
    existenciasImporte: Number
});

export default model('reporteproductos_2022',reporteTiendasSchema)
