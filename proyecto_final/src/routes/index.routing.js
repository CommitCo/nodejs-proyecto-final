import { Router } from "express"

const router = Router()

router.get('/',(req, res)=> res.render('index', {title:'Inicio'}))
router.get('/quien-somos',(req, res)=> res.render('quien-somos', {title:'Quienes Somos'}))
router.get('/servicios',(req, res)=> res.render('servicios', {title:'Servicios'}))
router.get('/portafolio',(req, res)=> res.render('portafolio', {title:'Portafolio'}))
router.get('/contacto',(req, res)=> res.render('contacto', {title:'Contacto'}))
router.get('/testi-clientes',(req, res)=> res.render('testi-clientes', {title:'Testimonio Clientes'}))


export default router