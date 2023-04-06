import {Schema, model} from "mongoose"

const concentradovwSchema = new Schema({
    id:Number,
    idProductoMongo: Object,
    idTiendaMongo: Object,
    origenData:String,
    idGFC:Number,
    idTienda:Number,
    idCodigoTienda:Number,
    chksumt:Number,
    idProducto:Number,
    idCodigoProducto:Number,
    chksump:Number,
    ventasUnidades: Number,
    ventasImporte: Number,
    pzasCaja:Number,
    cajasFisicas:Number,
    cajasFisicasOH:Number,
    cajasVirt: Number,
    cajasVirtOH: Number,
    serv_lvl:Number,
    existenciasUnidades:Number,
    existenciasImporte:Number,
    existenciasImporteEVO:Number,
    existenciasTransito:Number,
    existenciasTransitoImporte:Number,
    existenciasWH:Number,
    existenciasWHImporte:Number,
    existenciasOOUnidades:Number,
    existenciasOOImporte:Number,
    existenciasTotal:Number,
    existenciasTotalImporte:Number,
    distr_num:Number,
    distr_pond:Number,
    precio_prom:Number,
    prom_vta_t:Number,
    priceToday:Number,
    semana: Number,
    semanaCliente: Number,
    real_month:Number,
    real_year:Number,
    custom_month:Number,
    custom_year:Number,
    fechaCarga:String,
    idPromotor:Number,
    ticket:String,
    idGFCOrigen:Number,
    idCodigoTienda:Number,
    calculado:Number,
    visible:Number,
    publico:Number,
    revision:Number,
    keywork:String,
    order_book_flag:String,
    item_status:String,
    item_type:String,
    Curr_Traited_Store:String,
    Curr_Valid_Store:String,
    propet:String,
    propetnum:Number,
    activocatprod:Number,
    estatusprodorigen:String,
    estatusprodtraduccion:String
});

export default model('concentradovw_2023',concentradovwSchema)
