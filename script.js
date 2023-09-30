const discount = document.querySelector("#discount")
const integration = document.querySelector("#integration")
const discountPrice = document.querySelector("#discountPrice")
const only = document.querySelector("#only")



function curses() {

    discount.innerHTML = ' Damos um desconto de 10% para voçê começar agora.'

    discountPrice.innerHTML = 'Desconto'

    integration.innerHTML = ` Se junte aos 40 milhões de alunos que aprendem com o DevCursos
    com garantia de 30 dias e um desconto de 10 %.Encontre o instrutor ideal para você.
     Qualquer tema , nível ou idioma.Acesso vitalício. `


    only.innerHTML = 'Tudo por apenas...'

    const list = document.querySelector(".ul")

    let newList = ''

    pack.forEach(product => {
        newList += `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p>R$ ${product.value}</p>
    </li>
           `
    });

    list.innerHTML = newList

}
function filter() {

}
const item = pack.map(product => {

    const newPrice = {
product.value

    }
})


console.log(pack)
