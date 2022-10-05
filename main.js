// push,filter,find,includes,...spread,slice,pop
const companies = ["visa", "mastercard", "maestro"]

companies.push("elo")      //push() adiciona novo item no array, de fato altera o array.

const companiesAtualizada = companies.filter(companiess => {   //filter() pegar a propriedade que eu quero, uma só ou várias. E retorna um boolean(nesse caso)
    return console.log(companiess !== "mastercard")
})

const companiesElo = companies.find((companiess) => {    //find() pega único item do array.
    return console.log(companiess === "elo")
})

const found = companies.includes("elo",3)         // includes() retornar um boolean, se encontrou ou nao. E pode passar um segundo argumento, informando o apartir que posição.

const companiesNew = [...companies , "hipercard"]            // ...spread, uma forma de atualizar o array, onde pega as propriedades existentes, e vc adciona outra propriedade.

const pagOne = companies.slice(1,-1)             //o slice() remove a propriedade pela posição

companies.pop("elo")       //pop() igual ao push, ele altera o array, no caso removendo um item

//console.log(companies)

// map,reverse

const otherCompanies = ["unionpay", "mir"]
console.log(otherCompanies, "primeiro")

const newCompanies = otherCompanies.map((companies) =>{       //map(),retorna transforma(altera) de todas propriedades.
    return "Third Companie"
})

const otherCompaniesReverse = otherCompanies.reverse()  //reverse(), desta forma ele retorna o array original revertido.
const otherCompaniesReverseOne = [...otherCompanies].reverse()  //o comportamento do reverse, quando fazemos o spread no array origial, ele não alteral o mesmo, ele retorna um novo array.

console.log(otherCompaniesReverse)
console.log(otherCompaniesReverseOne)

otherCompanies.forEach((companies) =>{      //forEach(), é um loop de interação, rodando uma função que eu queira fazer.
   console.log(otherCompanies)
    //console.log(companies,"esse")
})

console.log(otherCompanies)
console.log(otherCompaniesReverseOne)

const idadeMinima = 18
const idadeCliente = 10


// Exceção , operador ternário !
if (idadeCliente >= idadeMinima ? console.log("cerveja") : console.log("suco"));