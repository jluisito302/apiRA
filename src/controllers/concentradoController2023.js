import concentradovw2023 from '../models/concentradovw2023';

const agrupadoGrupoSemana = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        const idgfcArray=req.body.idGFC;
        const idsProductos=req.body.idProductos;

        if(idsProductos != null){
            const ventasSemanaGrupo = await concentradovw2023.aggregate([
                {$match: {
                    "idGFC":{$in: idgfcArray},
                    "semana":{ $in: semanasArray},
                    "idProducto": {$in: idsProductos}
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
            ]).allowDiskUse(true);
            return res.json(ventasSemanaGrupo);
        }else{
            const ventasSemanaGrupo = await concentradovw2023.aggregate([
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
            ]).allowDiskUse(true);
            return res.json(ventasSemanaGrupo);
        }
        
        
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
        const idsProductos=req.body.idProductos;
        let idTiendas=req.body.idTiendas;
        
        if(idTiendas != null && idsProductos != null){
            const groupMarcas = await concentradovw2023.aggregate([
                {$match: {
                    "semana":{ $in : semanasArray},
                    "idProducto": {$in: idsProductos},
                    "idTienda": {$in: idTiendas}
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
            ]).allowDiskUse(true);
            return res.json(groupMarcas);
        }
        
        if(idsProductos != null){
            const groupMarcas = await concentradovw2023.aggregate([
                {$match: {
                    "semana":{ $in : semanasArray},
                    "idProducto": {$in: idsProductos}
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
            ]).allowDiskUse(true);
            return res.json(groupMarcas);
        }else{
            const groupMarcas = await concentradovw2023.aggregate([
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
            ]).allowDiskUse(true);
            return res.json(groupMarcas);
        }
    } catch (error) {
        const response={
            "message": "Error encontrado..."
        }
        res.json(response);
    }
}

const ventasTop = async (req,res) => {
    try {
        const semanasArray=req.body.semanas;
        let idTiendas=req.body.idTiendas;
        if(idTiendas != null){
            const groupMarcas = await concentradovw2023.aggregate([
                {$match: {
                    "semana":{ $in : semanasArray},
                    "idTienda": {$in: idTiendas}
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
            ]).allowDiskUse(true);
            return res.json(groupMarcas);
        }else{
            const groupMarcas = await concentradovw2023.aggregate([
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
            ]).allowDiskUse(true);
            return res.json(groupMarcas);
        }
    } catch (error) {
        const response={
            "message": "Error encontrado... "+error
        }
        res.json(response);
    }
}

const filtro = async (req,res) => {
    try {
        let semanas=req.body.semanas;
        let idProductos=req.body.arrayIdProductos;
        if(idProductos != null){
            const allSemanas = await concentradovw2023.aggregate([
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
                {$sort: {semana: 1}}
            ]).allowDiskUse(true);
            
            return res.json(allSemanas);
        }else{
            const allSemanas = await concentradovw2023.aggregate([
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
                {$sort: {semana: 1}}
            ]);

            
            return res.json(allSemanas);
        }
        
        
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

//FILTROS POR SEMANAS POR TIENDAS
const filtroTiendasProductos = async (req,res) => {
    try {
        let semanas=req.body.semanas;
        let idProductos=req.body.arrayIdProductos;
        let idTiendas=req.body.arrayIdTiendas;
        if(idTiendas != null && idProductos != null){
            const allSemanas = await concentradovw2023.aggregate([
                {
                    $match: {
                        "semana":{$in: semanas},
                        "idProducto": {$in: idProductos},
                        "idTienda": {$in: idTiendas}
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
                {$sort: {semana: 1}}
            ]).allowDiskUse(true);
            
            return res.json(allSemanas);
        }

        if(idProductos != null){
            const allSemanas = await concentradovw2023.aggregate([
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
                {$sort: {semana: 1}}
            ]).allowDiskUse(true);
            
            return res.json(allSemanas);
        }else{
            const allSemanas = await concentradovw2023.aggregate([
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
                {$sort: {semana: 1}}
            ]);

            
            return res.json(allSemanas);
        }
          
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

export {
    filtro,
    filtroTiendasProductos,
    agrupadoGrupoSemana,
    agrupadoMarca,
    ventasTop,
}