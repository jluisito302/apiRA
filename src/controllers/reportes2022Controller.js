import modelReporteCadenas2022 from '../models/reporteCadenas_2022';
import modelReporteTiendas2022 from '../models/reporteTiendas_2022';
import modelReporteProductos2022 from "../models/reporteProductos_2022";
import tiendasModel from "../models/tiendas";
import productosModel from "../models/productos";

const ventasInventariosGrupo2022 = async (req,res) => {
    try {
        let fechaInicial=req.body.fechaInicial;
        let fechaFinal=req.body.fechaFinal;
        let grupos=req.body.grupos;
        const reporte = await modelReporteCadenas2022.aggregate([
            {
                $match: {
                    "fecha":{$gte: fechaInicial, $lte: fechaFinal},
                    "grupo":{$in: grupos}
                },
            },
            {
                $group: { _id: "$grupo",
                    ventasImporte: {
                        $sum: "$ventasImporte",
                    },
                    ventasUnidades: {
                        $sum: "$ventasUnidades",
                    },
                    existenciasImporte: {
                        $sum: "$existenciasImporte",
                    },
                    existenciasUnidades: {
                        $sum: "$existenciasUnidades",
                    },
                    "idGFC":{$first:"$idGFC"},
                }

            },
            {$sort: {grupo: 1}}
        ]).allowDiskUse(true);

        return res.json(reporte);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}


const totalesVentasInv2022 = async (req,res) => {
    try {
        let fechaInicial=req.body.fechaInicial;
        let fechaFinal=req.body.fechaFinal;
        let grupos=req.body.grupos;
        const reporte = await modelReporteCadenas2022.aggregate([
            {
                $match: {
                    "fecha":{$gte: fechaInicial, $lte: fechaFinal},
                    "grupo":{$in: grupos}
                },
            },
            {
                $group: { _id: null,
                    ventasImporte: {
                        $sum: "$ventasImporte",
                    },
                    ventasUnidades: {
                        $sum: "$ventasUnidades",
                    },
                    existenciasImporte: {
                        $sum: "$existenciasImporte",
                    },
                    existenciasUnidades: {
                        $sum: "$existenciasUnidades",
                    }
                }
            }
        ]).allowDiskUse(true);

        return res.json(reporte);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

const ventasInventariosDias = async (req,res) => {
    try {
        let fechaInicial=req.body.fechaInicial;
        let fechaFinal=req.body.fechaFinal;
        let grupos=req.body.grupos;
        const reporte = await modelReporteCadenas2022.aggregate([
            {
                $match: {
                    "fecha":{$gte: fechaInicial, $lte: fechaFinal},
                    "grupo":{$in: grupos}
                },
            },
            {
                $group: { _id: "$fecha",
                    ventasImporte: {
                        $sum: "$ventasImporte",
                    },
                    ventasUnidades: {
                        $sum: "$ventasUnidades",
                    },
                    existenciasImporte: {
                        $sum: "$existenciasImporte",
                    },
                    existenciasUnidades: {
                        $sum: "$existenciasUnidades",
                    },
                    "fecha":{$first:"$fecha"},
                }
            },
            {$sort: {fecha: 1}}
        ]).allowDiskUse(true);

        return res.json(reporte);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}


const ventasInventariosTienda = async (req,res) => {
    try {
        let fechaInicial=req.body.fechaInicial;
        let fechaFinal=req.body.fechaFinal;
        let idTienda=req.body.idTienda;

        const reporte = await modelReporteTiendas2022.aggregate([
            {
                $match: {
                    "fecha":{$gte: fechaInicial, $lte: fechaFinal},
                    "idTienda":{$in: idTienda}
                }
            },
            {
                $group: { _id: "$idTienda",
                    ventasImporte: {
                        $sum: "$ventasImporte",
                    },
                    ventasUnidades: {
                        $sum: "$ventasUnidades",
                    },
                    existenciasImporte: {
                        $sum: "$existenciasImporte",
                    },
                    existenciasUnidades: {
                        $sum: "$existenciasUnidades",
                    }
                }
            }
        ]);

        let arrayTiendas=[];
        for (let report of reporte) {
            const tienda = await tiendasModel.find({ id: report._id }).exec();
            let data={
                idTienda: report._id,
                ventasImporte: report.ventasImporte,
                ventasUnidades: report.ventasUnidades,
                existenciasImporte: report.existenciasImporte,
                existenciasUnidades: report.existenciasUnidades,
                nombre: tienda[0].Nombre,
                cadena: tienda[0].cadena,
                grupo: tienda[0].grupo,
            }
            arrayTiendas.push(data);
        }
        
        return res.json(arrayTiendas);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

const ventasInventariosProductos = async (req,res) => {
    try {
        let fechaInicial=req.body.fechaInicial;
        let fechaFinal=req.body.fechaFinal;
        let idProducto=req.body.idProducto;

        const reporte = await modelReporteProductos2022.aggregate([
            {
                $match: {
                    "fecha":{$gte: fechaInicial, $lte: fechaFinal},
                    "idProducto":{$in: idProducto}
                }
            },
            {
                $group: { _id: "$idProducto",
                    ventasImporte: {
                        $sum: "$ventasImporte",
                    },
                    ventasUnidades: {
                        $sum: "$ventasUnidades",
                    },
                    existenciasImporte: {
                        $sum: "$existenciasImporte",
                    },
                    existenciasUnidades: {
                        $sum: "$existenciasUnidades",
                    }
                }
            }
        ]);

        let arrayProductos=[];
        for (let report of reporte) {
            const producto = await productosModel.find({ id: report._id }).exec();
            let data={
                idProducto: report._id,
                ventasImporte: report.ventasImporte,
                ventasUnidades: report.ventasUnidades,
                existenciasImporte: report.existenciasImporte,
                existenciasUnidades: report.existenciasUnidades,
                nombre: producto[0].nombre
            }
            arrayProductos.push(data);
        }
        
        return res.json(arrayProductos);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}


const productosXTienda = async (req,res) => {
    try {
        let fechaInicial=req.body.fechaInicial;
        let fechaFinal=req.body.fechaFinal;
        let idTienda=req.body.idTienda;

        const reporte = await modelReporteProductos2022.aggregate([
            {
                $match: {
                    "fecha":{$gte: fechaInicial, $lte: fechaFinal},
                    "idTienda":{$in: idTienda}
                }
            },
            {
                $group: { _id: "$idProducto",
                    ventasImporte: {
                        $sum: "$ventasImporte",
                    },
                    existenciasImporte: {
                        $sum: "$existenciasImporte",
                    }
                }
            }
        ]);

        let arrayProductos=[];
        for (let report of reporte) {
            const producto = await productosModel.find({ id: report._id }).exec();
            let data={
                idProducto: report._id,
                nombre: producto[0].nombre
            }
            arrayProductos.push(data);
        }
        
        return res.json(arrayProductos);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

export {
    ventasInventariosGrupo2022,
    totalesVentasInv2022,
    ventasInventariosDias,
    ventasInventariosTienda,
    ventasInventariosProductos,
    productosXTienda
}