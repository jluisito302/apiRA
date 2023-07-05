import catalogoCadenas from "../models/catalogoCadenas";
import catalogoGrupoCadenas from "../models/catalogoGruposCadenas";
import tiendasModel from "../models/tiendas";

const buscarGrupos = async (req,res) => {
    try {
        const cadenas = await catalogoCadenas.find({},{_id: -1,nombre: 1}).sort({nombre: 1});
        return res.json(cadenas);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

const buscarCadenas = async (req,res) => {
    try {
        const grupos=req.body.grupos;
        
        const cadenas = await catalogoGrupoCadenas.aggregate([
            {$match: {
                "grupo":{$in: grupos},
            }},
            {$sort: {grupo: 1}}
        ]).allowDiskUse(true);

        res.json(cadenas);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}

const buscarTiendas = async (req,res) => {
    try {
        const cadenas=req.body.cadenas;
        
        const tiendas = await tiendasModel.aggregate([
            {$match: {
                "cadena":{$in: cadenas},
            }},
            {$project:{
                nombre: "$Nombre",
                cadena: "$cadena",
                id: "$id"
            }}
        ]).allowDiskUse(true);

        res.json(tiendas);
    } catch (error) {
        const response={
            "message": "Error encontrado..."+error
        }
        res.json(response);
    }
}



export {
    buscarGrupos,
    buscarCadenas,
    buscarTiendas
}