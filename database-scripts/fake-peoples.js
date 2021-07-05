db.peoples.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5179"),
        nome:'João Melo',
        nascimento:35,
        rg: '333B',
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5180"),
        nome:'Thiago Melo',
        nascimento:35,
        rg: '353B',
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5181"),
        nome:'Carlos Melo',
        nascimento:35,
        rg: '363B',
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    }
])

// db.pessoa.insert({
//     name:'Salomão Netto',
//     age:36,
//     class: '311A'
// })
