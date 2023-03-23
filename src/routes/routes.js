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
router.post('/agrupadoMarca', cController.agrupadoMarca);
router.post('/agrupadoVentasXProducto', cController.agVentasXProducto);
router.post('/ventasTop', cController.ventasTop);

//SELECTORES
router.get('/marcas', cController.marcasUnicas);
router.get('/fabricante', cController.fabricante);
router.get('/submarca', cController.submarca);
router.get('/categorias', cController.categorias);
router.get('/subcategorias', cController.subcategoria);
router.get('/segmento', cController.segmento);
router.get('/presentacion', cController.presentacion);
router.get('/capacidad', cController.capacidad);

//router.get('/linea', cController.lineTox);



router.post('/filtros', cController.filtro);
router.post('/searchCategoria', cController.searchCategoria);
router.post('/searchGrupo', cController.searchGrupo);
router.post('/buscarXGrupoXSemana', cController.buscarXGrupoXSemana);




export default router;