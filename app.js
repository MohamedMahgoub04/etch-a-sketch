const grid = document.querySelector('#grid')

function createGrid(side) {
 let blocks = side * side
 document.querySelector('#grid').style.gridTemplateRows = `repeat(${side}, auto)`
 document.querySelector('#grid').style.gridTemplateColumns = `repeat(${side}, auto)`
 for (let i = 1; i <= blocks; i++) {
  const div = document.createElement('div')
  div.className = `block block-${i}`
  document.querySelector('#grid').appendChild(div)
 }
}

document.addEventListener('DOMContentLoaded', () => {
 createGrid(20)

 document.querySelector('#clear').onclick = () => {
  document.querySelectorAll('.block').forEach(x => {
   x.style.backgroundColor = '#252422'
  })
 }

 document.querySelectorAll('.block').forEach(x => {
  x.onmouseover = () => {
   x.style.backgroundColor = '#eb5e28'
  }
 })

})