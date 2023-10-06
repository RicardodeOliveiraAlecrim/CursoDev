const totalDiscount = document.querySelector("totalDiscount")
const integration = document.querySelector("#integration")
const discountPrice = document.querySelector("#discountPrice")
const only = document.querySelector("#only")
const select = document.querySelector(".select")
const totalPrice = document.querySelector("#totalPrice")
const buttonCurses = document.querySelector(".start")



function curses(productsArray) {

  discount.innerHTML = ' Damos um desconto de 10% para voçê começar agora.'

  discountPrice.innerHTML = 'Desconto'

  integration.innerHTML = ` Se junte aos 40 milhões de alunos que aprendem com o DevCursos
    com garantia de 30 dias e um desconto de 10 %.Encontre o instrutor ideal para você.
     Qualquer tema , nível ou idioma.Acesso vitalício. `

  only.innerHTML = 'Tudo por apenas...'

  select.style.opacity = 1

  const list = document.querySelector(".ul")

  let newList = ''

  productsArray.forEach(product => {

    newList += `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p>R$ ${product.value.toFixed(2)}</p>
    </li>
           `
  });

  list.innerHTML = newList

}



function filter() {

  const newPrice = pack.map(product => ({
    ...product,//Spread Operator esparrama o array e altera só o necessário "..."
    value: product.value * 0.9,

  }))

  curses(newPrice)

}



function reduced() {

const total = pack.reduce((acc, curr) => acc + curr.value, 0)
  

  totalPrice.innerHTML = total.toFixed(2)

  totalDiscount.innerHTML = total.toFixed(2)
  
}







//arrowfunction para parametrizar uma função ao clicar
buttonCurses.addEventListener('click', () => curses(pack))