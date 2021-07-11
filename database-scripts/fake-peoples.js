db.peoples.insertMany([
    {
        _id: ObjectId("60d8ad29967c085268fb5190"),
        nome:'João Melo Costa',
        nascimento: ISODate("1993-06-29T00:04:01.665Z"),
        rg: '358867',
        cpf: '85274175233',
        sexo: true,
        estCivil: 'Solteiro(a)',
        naturalidade: 'Brasileiro',
        raca: 'Pardo(a)',
        fatorRh: 'A-',
        email: 'joaomelo@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c085268fb5200"),
        enderecoId: ObjectId("60d8ad29967c085268fb5194"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c085268fb5191"),
        nome:'Eduarda Souza Campos',
        nascimento: ISODate("1999-02-15T00:04:01.665Z"),
        rg: '448868',
        cpf: '74185296312',
        sexo: false,
        estCivil: 'Casado(a)',
        naturalidade: 'Brasileiro',
        raca: 'Branco(a)',
        fatorRh: 'O+',
        email: 'eduardacampos@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c085268fb5201"),
        enderecoId: ObjectId("60d8ad29967c085268fb5195"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c085268fb5192"),
        nome:'Roberto Silva Rodrigues',
        nascimento: ISODate("1979-02-15T00:04:01.665Z"),
        rg: '996510',
        cpf: '85274196322',
        sexo: true,
        estCivil: 'Casado(a)',
        naturalidade: 'Brasileiro',
        raca: 'Pardo(a)',
        fatorRh: 'O-',
        email: 'robertorodrigues@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c085268fb5202"),
        enderecoId: ObjectId("60d8ad29967c085268fb5196"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c085268fb5193"),
        nome:'Bruna Kull Farache',
        nascimento: ISODate("1984-02-15T00:04:01.665Z"),
        rg: '632540',
        cpf: '32165478511',
        sexo: false,
        estCivil: 'Solteiro(a)',
        naturalidade: 'Brasileiro',
        raca: 'Pardo(a)',
        fatorRh: 'B+',
        email: 'brunakull@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c085268fb5203"),
        enderecoId: ObjectId("60d8ad29967c085268fb5197"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    }
])

// db.pessoa.insert({
//     name:'Salomão Netto',
//     age:36,
//     class: '311A'
// })
