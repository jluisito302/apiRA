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
        let semanas=req.body.semanas;
        let idProductos=req.body.arrayIdProductos;
        if(idProductos != null){
            const allSemanas = await concentradovwModel.aggregate([
                {
                    $match: {
                        "semana":{$in: semanas},
                        "idProducto": {$in: idProductos}
                    },
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
                        },
                        "semana":{$first:"$semana"},
                    }
                },
                {$sort: {semana: -1}}
            ]);
            
        res.json(allSemanas);
        }else{
            const allSemanas = await concentradovwModel.aggregate([
                {
                    $match: {
                        "semana":{$in: semanas}
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
                        },
                        "semana":{$first:"$semana"},
                    }
                },
                {$sort: {semana: -1}}
            ]);

            
        res.json(allSemanas);
        }
        
        
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

const buscarXCadenaXSemana = async (req,res) => {
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

const searchCadena = async (req,res) => {
    try {
        const cadenaArray=req.body.cadena;
        const cadena = await modelGfc.aggregate([
            {$match: {cadena: cadenaArray }},
            {
                $group: {
                    _id: "$id",
                    "idGFC": { "$first": "$id" },
                    "cadena":{$first:"$cadena"}
                }
            }
        ]);
        res.json(cadena);
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

//FILTROS SOBRE PRODUCTOS
const idsProductosXMarca = async (req,res) => {
    try {
        const arrayMarca=req.body.marca;
        const grupoCategoria = await modelProductos.aggregate([
            {$match: {marca: arrayMarca }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
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

const idsProductosXCategoria = async (req,res) => {
    try {
        const stringCategoria=req.body.categoria;
        const productosCategoria = await modelProductos.aggregate([
            {$match: {categoria: stringCategoria }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
                }
            }
        ]);
        
        res.json(productosCategoria);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const idsProductosXFabricante = async (req,res) => {
    try {
        const stringFabricante=req.body.fabricante;
        const productosFabricante = await modelProductos.aggregate([
            {$match: {fabricante: stringFabricante }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
                }
            }
        ]);
        
        res.json(productosFabricante);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const idsProductosXSubcategoria = async (req,res) => {
    try {
        const stringSubcategoria=req.body.subcategoria;
        const productosSubcategoria = await modelProductos.aggregate([
            {$match: {subcatego: stringSubcategoria }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
                }
            }
        ]);
        
        res.json(productosSubcategoria);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const idsProductosXCapacidad = async (req,res) => {
    try {
        const stringCapacidad=req.body.capacidad;
        const productosCapacidad = await modelProductos.aggregate([
            {$match: {capacidad: stringCapacidad }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
                }
            }
        ]);
        
        res.json(productosCapacidad);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const idsProductosXPresentacion = async (req,res) => {
    try {
        const stringPresentacion=req.body.capacidad;
        const productosPresentacion = await modelProductos.aggregate([
            {$match: {presentacion: stringPresentacion }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
                }
            }
        ]);
        
        res.json(productosPresentacion);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const idsProductosXSegmento = async (req,res) => {
    try {
        const stringSegmento=req.body.capacidad;
        const productosSegmento = await modelProductos.aggregate([
            {$match: {segmento: stringSegmento }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
                }
            }
        ]);
        
        res.json(productosSegmento);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const idsProductosXSubmarca = async (req,res) => {
    try {
        const stringSubmarca=req.body.capacidad;
        const productosSubmarca = await modelProductos.aggregate([
            {$match: {submarca: stringSubmarca }},
            {
                $group: {
                    _id: "$id",
                    "idProducto": { $first: "$id" }
                }
            }
        ]);
        
        res.json(productosSubmarca);
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
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
    searchCadena,
    searchGrupo,
    buscarXGrupoXSemana,
    idsProductosXMarca,
    idsProductosXCategoria,
    idsProductosXFabricante,
    idsProductosXSubcategoria,
    idsProductosXCapacidad,
    idsProductosXPresentacion,
    idsProductosXSegmento,
    idsProductosXSubmarca,
}