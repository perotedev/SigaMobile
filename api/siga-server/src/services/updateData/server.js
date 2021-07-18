const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://<dbuser:<dbpassword>@ds133279.mlab.com:33279/crud-nodejs";

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crud-nodejs') // coloque o nome do seu DB

    app.listen(3000, () => {
        console.log('Server running on port 3000')
    })
})

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    var cursor = db.collection('data').find()
})

app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { data: results })

    })
})

app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('Salvo no Banco de Dados')
        res.redirect('/show')

        //método update abaixo

app.route('/edit/:id')
.get((req, res) => {
    var id = req.params.id

    db.collection('data').find(objectId(id)).toArray((err, result) => {
        if (err) return res.send(err)
        res.render('edit.ejs', { data: result })
    })
})
.post((req, res) => {
    var id req.params.id
    var nome req.body.nome
    var surname = req.body.surname
    var numero = req.body.numero

    db.collection('data').updateOne({_id: ObjectId(id)}, {
        $set: {
            nome: nome,
            surname: surname
            numero: numero
        }
    }, (err, result) => {
        if (err) return res.send(err)
        res.redirect('/show')
        console.log ('Atualizando')
    })

})