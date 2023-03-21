import { Router } from "express";
import * as cController from "../controllers/concentradoController";

const router = Router();

router.get('/retail', (req, res) => {
    res.send('Retail RA')
})

router.get('/paginado', cController.findPaginate);
router.post('/semanas', cController.findSemanas);
router.get('/productos', cController.findProductos);
router.get('/tiendas', cController.findTiendas);
router.post('/agruparSemana', cController.agruparSemana);
router.post('/agruparGrupo', cController.agrupadoGrupoSemana);
router.post('/agruparCadena', cController.agrupadoCadenaSemana);
router.get('/marcas', cController.marcasUnicas);
router.post('/agrupadoMarca', cController.agrupadoMarca);
router.post('/agrupadoVentasXProducto', cController.agVentasXProducto);
router.post('/ventasTop', cController.ventasTop);

router.post('/filtro', cController.filtro);

export default router;