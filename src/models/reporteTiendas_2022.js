import {Schema, model} from "mongoose"

const reporteTiendasSchema = new Schema({
    idTienda: Number,
    fecha: Number,
    ventasUnidades: Number,
    ventasImporte: Number,
    existenciasUnidades: Number,
    existenciasImporte: Number
});

export default model('reportetiendas_2022',reporteTiendasSchema)
