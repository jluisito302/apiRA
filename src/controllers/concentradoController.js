import concentradovwModel from '../models/concentradovw';
import modelTiendas from '../models/tiendas';
import modelProductos from '../models/productos';
import modelGfc from '../models/gfc';

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
            "message": "Error ...",
            "error": error
        }
        res.json(response);
    }
}

const findProductos = async (req, res) => {
    try {
        const queryProductos = await modelProductos.find().limit(50);
        res.json(queryProductos);
    } catch (error) {
        console.log(error);
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
                "semana":{$first:"$semana"},

            }},
            {$sort: {semana: -1}}
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
            {
                $group: { _id: "$idGFC",
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
                }
            }
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
            {$group: { _id: "$idProducto",
                topVentasUnidades: {
                    $sum: "$ventasUnidades",
                },ventasImporte: {
                    $sum: "$ventasImporte",
                },
                existenciasImporte: {
                    $sum: "$existenciasImporte",
                },
                existenciasUnidades: {
                    $sum: "$existenciasUnidades",
                }
            }},
            {$sort: {topVentasUnidades: -1}},
            {$limit : 25}
        ]);
        res.json(groupMarcas);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const agVentasXProducto = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        const idProductoArray=req.body.idProductos;
        
        const ventasSemanaGrupo = await concentradovwModel.aggregate([
            {$match: {
                "idProducto":{$in: idProductoArray},
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
                }
            }}
        ]);
        res.json(ventasSemanaGrupo);
    } catch (error) {
        const response={
            "message": "Error encontrado "+error
        }
        res.json(response);
    }
}

const filtro = async (req,res) => {
    try {
        //const arraySemanas=req.body.semanas;
        //const arrayIdProductos=req.body.idProductos;

        const ventasSemanaGrupo = await concentradovwModel.aggregate([
            {
                $match: {
                "semana":{ $in : [202204]},
                "idProducto":{ $in: [9181,9195,9195,9200] }
                }
            },
            {
                $group: { _id: "$semana",
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
        res.json(ventasSemanaGrupo);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

const fabricante = async (req,res) => {
    try {
        const fabricante = await modelProductos.distinct("fabricante");
        res.json(fabricante);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const submarca = async (req,res) => {
    try {
        const submarca = await modelProductos.distinct("submarca");
        res.json(submarca);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const categorias = async (req,res) => {
    try {
        const categoria = await modelProductos.distinct("categoria");
        res.json(categoria);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const subcategoria = async (req,res) => {
    try {
        const subcategoria = await modelProductos.distinct("subcatego");
        res.json(subcategoria);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const segmento = async (req,res) => {
    try {
        const segmento = await modelProductos.distinct("segmento");
        res.json(segmento);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const presentacion = async (req,res) => {
    try {
        const presentacion = await modelProductos.distinct("presentacion");
        res.json(presentacion);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const capacidad = async (req,res) => {
    try {
        const capacidad = await modelProductos.distinct("capacidad");
        res.json(capacidad);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const buscarXGrupoXSemana = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        const idgfcArray=req.body.idgfcs;
        const ventasSemana = await concentradovwModel.aggregate([
            {$match: {
                "semana":{ $in : semanasArray},
                "idGFC":{$in: idgfcArray},
            }},
            {$group: { _id: "$idGFC",
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

            }},
            {$sort: {semana: -1}}
        ]);
        res.json(ventasSemana);
    } catch (error) {
        const response={
            "message": "Error encontrado..."
        }
        res.json(response);
    }
}

const searchCategoria = async (req,res) => {
    try {
        const categoriaArray=req.body.categoria;
        const grupoCategoria = await modelProductos.aggregate([
            {$match: {categoria: categoriaArray }},
            {
                $group: { 
                    _id: "$id",
                    "producto": { $first: "$id" },
                    
                }

            }
        ]);
        res.json(grupoCategoria);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const searchGrupo = async (req,res) => {
    try {
        const grupoArray=req.body.grupo;
        const grupoCategoria = await modelGfc.aggregate([
            {$match: {grupo: grupoArray }},
            {
                $group: {
                    _id: "$id",
                    "idGFC": { "$first": "$id" },
                    "categoria":{$first:"$grupo"}
                }
            }
        ]);
        
        res.json(grupoCategoria);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

/*
const lineTox = async (req,res) => {
    try {
        const linea = await modelProductos.distinct("lineTox");
        res.json(linea);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}*/




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
    ventasTop,
    agVentasXProducto,
    fabricante,
    submarca,
    categorias,
    subcategoria,
    segmento,
    presentacion,
    capacidad,
    filtro,
    searchCategoria,
    searchGrupo,
    buscarXGrupoXSemana
}