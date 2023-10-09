const totalDiscount = document.querySelector("#totalDiscount")
const integration = document.querySelector("#integration")
const discountPrice = document.querySelector("#discountPrice")
const only = document.querySelector("#only")
const select = document.querySelector(".select")
const totalPrice = document.querySelector("#totalPrice")
const buttonCurses = document.querySelector(".start")
const initial = document.querySelector("#initial")


function currency(value) {

  return newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  
}

function curses(productsArray) {

  discount.innerHTML = ' Damos um desconto de 10% para voçê começar agora.'

  discountPrice.innerHTML = 'Desconto'

  integration.innerHTML = ` Se junte aos 40 milhões de alunos que aprendem com o DevCursos
    com garantia de 30 dias e um desconto de 10 %.Encontre o instrutor ideal para você.
     Qualquer tema , nível ou idioma.Acesso vitalício. `

  only.innerHTML = 'Tudo por apenas...'

  initial.innerHTML = 'Iniciante'

  select.style.opacity = 1

  const list = document.querySelector(".ul")

  let newList = ''

  productsArray.forEach(product => {

    newList += `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p>${currency(product.value)}</p>
    </li>
           `
  });

  list.innerHTML = newList

}


function reduced() {

  const total = pack.reduce((acc, curr) => acc + curr.value, 0)

  totalPrice.innerHTML = ` ${currency(total)}`

}


function map() {

  const newPrice = pack.map(product => ({
    ...product,//Spread Operator esparrama o array e altera só o necessário "..."
    value: product.value * 0.9,

  }))

  const total = pack.reduce((acc, curr) => acc + curr.value, 0) * 0.9

  totalDiscount.innerHTML = ` ${currency(total)}`

  curses(newPrice)

}


function beggin() {

  const begginers = pack.filter(product => product.begginer)

  curses(begginers)

  only.innerHTML = ''

  totalDiscount.innerHTML = ''

  totalPrice.innerHTML = ''

}


//arrowfunction para parametrizar uma função ao clicar
buttonCurses.addEventListener('click', () => curses(pack))