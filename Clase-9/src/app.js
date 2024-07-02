import express from 'express';
import handlebars from 'express-handlebars';
import{__dirname} from './utils.js'

const app = express();

app.engine('handlebars', handlebars.engine()); // esta linea setea el tipo de motor de plantilla
app.set('views', __dirname + '/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    const { nombre } = req.query
    res.render('saludo',{
        name: nombre,
        edad: 28
    })
})




app.listen(8080, () => {
    console.log('Conectado')
})

