import modelReporteCadenas2022 from '../models/reporteCadenas_2022';


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


export {
    ventasInventariosGrupo2022,
    totalesVentasInv2022
}