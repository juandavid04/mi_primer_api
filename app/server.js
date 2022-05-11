var express = require('express') //llamamos a Express
var bodyParser = require('body-parser')

var router = express.Router()

var app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var port = process.env.PORT || 8080 //establecemos nuestro puerto

app.get('/', function(req, res){
    res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/cervezas', function(req, res){
    res.json({ mensaje: '¡A beber cerveza!'})
})

app.post('/', function(req, res){
    res.json({ mensaje : 'Metodo Post' })
})

app.delete('/', function(req, res){
    res.json({ mensaje: 'Método delete' })
})

//Router

router.get('/', function(req, res){
    res.json({ mensaje: '¡Bienvenido a nuestra API!' })
})

router.get('/:nombre', function(req, res){
    res.json({ mensaje: '¡Hola ' + req.params.nombre })
})

router.post('/', function(req, res){
    res.json({ mensaje: req.body.nombre})
})

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones
app.use('/api', router)


//iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
