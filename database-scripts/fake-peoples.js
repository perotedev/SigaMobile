db.peoples.insertMany([
    {
        _id: ObjectId("60d8ad29967c095068fb5179"),
        nome:'João Melo Costa',
        nascimento: ISODate("1993-06-29T00:04:01.665Z"),
        rg: '35886-7',
        cpf: '85274175233',
        sexo: true,
        estCivil: 'Solteiro(a)',
        naturalidade: 'Brasileiro',
        raca: 'Pardo(a)',
        fatorRh: 'A-',
        email: 'joaomelo@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c095068fb5963"),
        enderecoId: ObjectId("60d8ad29967c095068fb2s63"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5110"),
        nome:'Eduarda Souza Campos',
        nascimento: ISODate("1999-02-15T00:04:01.665Z"),
        rg: '44886-8',
        cpf: '74185296312',
        sexo: false,
        estCivil: 'Casado(a)',
        naturalidade: 'Brasileiro',
        raca: 'Branco(a)',
        fatorRh: 'O+',
        email: 'eduardacampos@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c095068fb5964"),
        enderecoId: ObjectId("60d8ad29967c095068fb2s64"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5111"),
        nome:'Roberto Silva Rodrigues',
        nascimento: ISODate("1999-02-15T00:04:01.665Z"),
        rg: '99651-0',
        cpf: '85274196322',
        sexo: true,
        estCivil: 'Casado(a)',
        naturalidade: 'Brasileiro',
        raca: 'Pardo(a)',
        fatorRh: 'O-',
        email: 'robertorodrigues@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c095068fb5965"),
        enderecoId: ObjectId("60d8ad29967c095068fb2s65"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    },
    {
        _id: ObjectId("60d8ad29967c095068fb5112"),
        nome:'Bruna Kull Farache',
        nascimento: ISODate("1984-02-15T00:04:01.665Z"),
        rg: '63254-0',
        cpf: '32165478511',
        sexo: false,
        estCivil: 'Solteiro(a)',
        naturalidade: 'Brasileiro',
        raca: 'Pardo(a)',
        fatorRh: 'B+',
        email: 'brunakull@gmail.com',
        contaBancoId: ObjectId("60d8ad29967c095068fb5966"),
        enderecoId: ObjectId("60d8ad29967c095068fb2s66"),
        createdAt: ISODate("2021-06-29T00:04:01.665Z"),
        updatedAt: ISODate("2021-06-29T00:04:01.665Z")
    }
])

// db.pessoa.insert({
//     name:'Salomão Netto',
//     age:36,
//     class: '311A'
// })
