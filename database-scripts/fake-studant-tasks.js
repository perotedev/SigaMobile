
db.studantTasks.insertMany([
    {
        _id: ObjectId("60d8ad29967c085268fb5186"),
        description:'Tarefa 1',
        completed: true,
        fileUri: "",
        studentId: ObjectId("60d8ad29967c095068fb5172"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c085268fb5187"),
        description:'Tarefa 2',
        completed: false,
        fileUri: "",
        studentId: ObjectId("60d8ad29967c095068fb5172"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
])