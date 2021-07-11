db.cursos.insertMany([
    {
        _id: ObjectId("60d8ad29967c085268fb5198"),
        nome: "Engenharia de Software",
        tipo: "Graduação",
        coordenadorId: ObjectId("60d8ad29967c085268fb5188"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c085268fb5199"),
        nome: "Agroecologia",
        tipo: "Técnico",
        coordenadorId: ObjectId("60d8ad29967c085268fb5188"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    }
])