import {Schema, model} from "mongoose"

const productosSchema = new Schema({
    id:Number,
    excludeFrom:String,
    idGFC:Number,
    item:String,
    codbar:String,
    codigoSecundario:String,
    nombre:String,
    nombreGlobal:String,
    numero_parte:String,
    capacidad:Number,
    precioAuto:Number,
    precioDepar:Number,
    precioMayo:Number,
    precioClub:Number,
    precioOnline:Number,
    precioConveniencia:Number,
    lineTox:String,
    activo:Number,
    chksum:Number,
    actualizado:Number,
    fechaActualizado:String,
    fechaCreacion:String,
    nuevoRegistro:Number,
    catoriginal:Number,
    categoria: String,
    fabricante: String,
    graduacion: String,
    marca: String,
    origen: String,
    paisorigen: String,
    segmento: String,
    subcatego: String,
    submarca: String,
    sabor: String,
    competencia: String,
    presentacion: String,
    colormarca: String,
    colorsabor: String,
    grupo_categoria: String,
    grupo_fabricante: String,
    grupo_graduacion: String,
    grupo_marca: String,
    grupo_origen: String,
    grupo_paisorigen: String,
    grupo_segmento: String,
    grupo_subcatego: String,
    grupo_submarca: String,
    grupo_sabor: String,
    grupo_competencia: String,
    grupo_presentacion: String,
    grupo_colormarca: String,
    grupo_colorsabor: String,
    capacidad: String,
    grupo_capacidad: String,
    agrupacion: String,
    grupo_agrupacion: String,
    coloragrupacion: String,
    grupo_coloragrupacion: String,
    productopadre: String,
    grupo_productopadre: String
});

export default model('catproductos',productosSchema)
