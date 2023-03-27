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
router.post('/semanaDatosCompletos', cController.allDataWeek);
router.post('/searchCadena', cController.searchCadena);
router.post('/searchGrupo', cController.searchGrupo);
router.post('/buscarXGrupoXSemana', cController.buscarXGrupoXSemana);
//RUTAS PARA FILTROS DE PRODUCTOS
router.post('/idsProductosXMarca', cController.idsProductosXMarca);
router.post('/idsProductosXCategoria', cController.idsProductosXCategoria);
router.post('/idsProductosXFabricante', cController.idsProductosXFabricante);
router.post('/idsProductosXSubcategoria', cController.idsProductosXSubcategoria);
router.post('/idsProductosXCapacidad', cController.idsProductosXCapacidad);
router.post('/idsProductosXPresentacion', cController.idsProductosXPresentacion);
router.post('/idsProductosXSegmento', cController.idsProductosXSegmento);
router.post('/idsProductosXSubmarca', cController.idsProductosXSubmarca);
//buscar ventas por producto
router.post('/agrupadoPorProducto', cController.agrupadoPorProducto);

export default router;