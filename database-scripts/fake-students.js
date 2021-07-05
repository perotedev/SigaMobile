// db.pessoa.insert({
//     name:'Salomão Netto',
//     age:36,
//     class: '311A'
// })

db.students.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5172"),
        matricula: "2019025996",
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d9ad29967c095068fb5172"),
        matricula: "2019025096",
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d9ad29967c095068fb5173"),
        matricula: "2019025096",
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    }
])