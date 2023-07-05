import { Router } from "express";
import * as cController from "../controllers/concentradoController";
import * as concentrado2022 from "../controllers/concentradoController2022";
import * as concentrado2023 from "../controllers/concentradoController2023";
import * as reportes2023 from "../controllers/reportes2023Controller";
import * as reportes2022 from "../controllers/reportes2022Controller";
import * as catalogosController from "../controllers/catalogosController";

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
router.get('/getGrupo', cController.getGrupo);
router.get('/getCadena', cController.getCadena);
router.get('/getTiendas', cController.findTiendas);

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
router.post('/buscarProducto', cController.findProductoNombre);
router.post('/agruparSemanaIdProducto', cController.agruparSemanaIdProducto);
router.post('/filtroTiendasProductos', cController.filtroTiendasProductos);
//BUSQUEDA DE TIENDAS
router.post('/buscarTiendasXGrupo', cController.buscarTiendasXGrupo);
router.post('/buscarTiendasXCadena', cController.buscarTiendasXCadena);

// CONSULTAS POR AÑO (2022)
router.post('/filtros_2022', concentrado2022.filtro);
router.post('/filtroTiendasProductos_2022', concentrado2022.filtroTiendasProductos);
router.post('/agruparGrupo_2022', concentrado2022.agrupadoGrupoSemana);
router.post('/agruparCadena_2022', concentrado2022.agrupadoCadenaSemana);
router.post('/agrupadoMarca_2022', concentrado2022.agrupadoMarca);
router.post('/ventasTop_2022', concentrado2022.ventasTop);

// CONSULTAS POR AÑO (2023)
router.post('/filtros_2023', concentrado2023.filtro);
router.post('/filtroTiendasProductos_2023', concentrado2023.filtroTiendasProductos);
router.post('/agruparGrupo_2023', concentrado2023.agrupadoGrupoSemana);
router.post('/agruparCadena_2023', concentrado2023.agrupadoCadenaSemana);
router.post('/agrupadoMarca_2023', concentrado2023.agrupadoMarca);
router.post('/ventasTop_2023', concentrado2023.ventasTop);

//Catalogos
router.get('/gruposBepensa', catalogosController.buscarGrupos);
router.post('/cadenasBepensa', catalogosController.buscarCadenas);
router.post('/tiendasBepensa', catalogosController.buscarTiendas);
//Ventas Inventarios por grupo
router.post('/ventasInventarios2023', reportes2023.ventasInventariosGrupo2023);
router.post('/totalesVentasInv2023', reportes2023.totalesVentasInv2023);

//2022
router.post('/ventasInventarios2022', reportes2022.ventasInventariosGrupo2022);
router.post('/totalesVentasInv2022', reportes2022.totalesVentasInv2022);

//INVENTARIOS


export default router;