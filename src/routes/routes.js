import { Router } from "express";
import * as cController from "../controllers/concentradoController";

const router = Router();

router.get('/retail', (req, res) => {
    res.send('Retail RA')
})

router.get('/paginado', cController.findPaginate);

router.post('/insert',cController.createNewEntry);

router.post('/semanas', cController.findSemanas);

router.get('/productos', cController.findProductos);

router.get('/tiendas', cController.findTiendas);

router.post('/agruparPorSemana', cController.agruparPorSemana);

router.post('/agrupadoGrupoSemana', cController.agGrupoSemana);



/*
router.post('/searchSemana',(req, res) => {
    res.json('Saving a new task');
})*/

export default router;