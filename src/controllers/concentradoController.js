import concentradovwModel from '../models/concentradovw';
import modelTiendas from '../models/tiendas';
import modelProductos from '../models/productos';

const findAnyEntry = async (req, res) => {
    const tasks = await concentradovwModel.find();
    res.json(tasks);
}


const findPaginate = async (req, res) => {
    const entries = await concentradovwModel.find().limit(10);
    res.json(entries);
}

const findSemanas = async (req, res) => {
    try {
        const semanasArray=req.body.semanas;
    
        const querySemanas = await concentradovwModel.find(
            {"semana" : { $in : semanasArray}},
            {semana:1, idTienda:1, idProducto:1, ventasUnidades:1, ventasImporte:1, existenciasUnidades:1, existenciasImporte:1}
        ).limit(1000);
        res.json(querySemanas);
    } catch (error) {
        const response={
            "message": "Error la data es incorrecta ..."
        }
        res.json(response);
    }
}

const findTiendas = async (req, res) => {
    try {
        const queryTiendas = await modelTiendas.find().limit(50);
        res.json(queryTiendas);
    } catch (error) {
        const response={
            "message": "Error ..."
        }
        res.json(response);
    }
}

const findProductos = async (req, res) => {
    try {
        const queryProductos = await modelProductos.find().limit(50);
        res.json(queryProductos);
    } catch (error) {
        const response={
            "message": "Error ..."
        }
        res.json(response);
    }
}

const agruparSemana = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        
        const ventasSemana = await concentradovwModel.aggregate([
            {$match: {
                "semana":{ $in : semanasArray}
            }},
            {$group: { _id: "$semana",
                numeroRegistros:{$sum: 1}, 
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
            }}
        ]);
        res.json(ventasSemana);
    } catch (error) {
        const response={
            "message": "Error encontrado..."
        }
        res.json(response);
    }
}

const agrupadoGrupoSemana = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        const idgfcArray=req.body.idGFC;
        
        const ventasSemanaGrupo = await concentradovwModel.aggregate([
            {$match: {
                "idGFC":{$in: idgfcArray},
                "semana":{ $in : semanasArray}
            }},
            {$group: { _id: "$idGFC",
                numeroRegistros:{$sum: 1}, 
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
            }}
        ]);
        res.json(ventasSemanaGrupo);
    } catch (error) {
        const response={
            "message": "Error encontrado..."
        }
        res.json(response);
    }
}

const agrupadoCadenaSemana = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        const idgfcArray=req.body.idGFC;
        
        const ventasSemanaGrupo = await concentradovwModel.aggregate([
            {$match: {
                "idGFC":{$in: idgfcArray},
                "semana":{ $in : semanasArray}
            }},
            {$group: { _id: "$idGFC",
                numeroRegistros:{$sum: 1}, 
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
            }}
        ]);
        res.json(ventasSemanaGrupo);
    } catch (error) {
        const response={
            "message": "Error encontrado..."
        }
        res.json(response);
    }
}

const agrupadoMarca = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        
        const groupMarcas = await concentradovwModel.aggregate([
            {$match: {
                "semana":{ $in : semanasArray}
            }},
            {$group: { _id: "$propet",
                numeroRegistros:{$sum: 1}, 
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
            }}
        ]);
        res.json(groupMarcas);
    } catch (error) {
        const response={
            "message": "Error encontrado..."
        }
        res.json(response);
    }
}

const marcasUnicas = async (req,res) => {
    try {
        const marcas = await modelProductos.distinct("marca");
        res.json(marcas);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const ventasTop = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        
        const groupMarcas = await concentradovwModel.aggregate([
            {$match: {
                "semana":{ $in : semanasArray}
            }},
            {$group: { _id: "$ventasUnidades",
                numeroRegistros:{$sum: 1}, 
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
            }}
        ]);
        res.json(groupMarcas);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const filtro = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        const idgfcArray=req.body.idGFC;
        const idArrayProductos=req.body.idProducto;
        
        const ventasSemanaGrupo = await concentradovwModel.aggregate([
            {$match: {
                "idGFC":{$in: idgfcArray},
                "idProducto":{$in: idArrayProductos},
                "semana":{ $in : semanasArray}
            }},
            {$group: { _id: "$idProducto",
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
                "producto":{$first:"$idProducto"},
                "semana":{$first:"$semana"},
            }}
        ]);
        res.json(ventasSemanaGrupo);
    } catch (error) {
        const response={
            "message": "Error encontrado..."
        }
        res.json(response);
    }
}

export {
    findAnyEntry,
    findPaginate,
    findSemanas,
    findProductos,
    findTiendas,
    agruparSemana,
    agrupadoGrupoSemana,
    agrupadoCadenaSemana,
    marcasUnicas,
    agrupadoMarca,
    filtro
}