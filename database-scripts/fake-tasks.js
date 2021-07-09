
db.tasks.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5169"),
        description:'Tarefa 1',
        completed: true,
        studentId: ObjectId("60d8ad29967c095068fb5172"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5170"),
        description:'Tarefa 2',
        completed: false,
        studentId: ObjectId("60d8ad29967c095068fb5172"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
])