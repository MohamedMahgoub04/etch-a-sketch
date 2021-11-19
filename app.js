const grid = document.querySelector('#grid')

let main = window.getComputedStyle(document.documentElement, null).getPropertyValue('--main')
const pen = main
const background = '#e9ecef'

function createGrid(side) {

 let blocks = side * side
 document.querySelector('#grid').style.gridTemplateRows = `repeat(${side}, auto)`
 document.querySelector('#grid').style.gridTemplateColumns = `repeat(${side}, auto)`

 for (let i = 1; i <= blocks; i++) {
  const div = document.createElement('div')
  div.className = `block block-${i}`
  document.querySelector('#grid').appendChild(div)
 }
 setBackground(background)
 
 if (!!document.querySelector('h6') == true) {
  document.querySelector('h6').remove()
 } 
 const h6 = document.createElement('h6')  
 h6.classname = 'dimensions'
 h6.innerHTML = `${side} x ${side}`
 
 document.querySelector('#grid-div').appendChild(h6)
}

function setPen(color) {

 document.querySelectorAll('.block').forEach(x => {
  x.onmouseover = () => {
   x.style.backgroundColor = color
  } 
 })

}

function setBackground(color) {

  document.querySelectorAll('.block').forEach(x => {
    x.style.backgroundColor = color
  })

}

function setDefaultPen() {

 document.querySelector('#color').value = '#343a40'
 setPen(document.querySelector('#color').value)

}

document.addEventListener('DOMContentLoaded', () => {

 createGrid(20)
 setDefaultPen()
  
 // Color picker
 document.querySelector('#color').value
 document.addEventListener('input', () => {
  console.log(document.querySelector('#color').value)
  let color = document.querySelector('#color').value
  document.querySelectorAll('.block').forEach(x => {
    x.onmouseover = () => {
      x.style.backgroundColor = color
    }
  })
 })

 // Default
 document.querySelector('#default').onclick = () => {
  setDefaultPen()
 }

 // Random
 // Eraser
 document.querySelector('#erase').onclick = () => {
   document.querySelectorAll('.block').forEach(x => {
     x.onmouseover = () => {
       x.style.backgroundColor = background
     }
   })
 }

 // Grid lines
 document.querySelector('#grid-lines').onclick = () => {
   let toggle = false
   document.querySelectorAll('.block').forEach(x => {
    if ( x.style.border == 'none') {
       x.style.border = '1px solid rgb(209, 209, 209, 0.6)'
    } else {
       x.style.border = 'none'
    }
   })
 }

 // Clear button
 document.querySelector('#clear').onclick = () => {
  document.querySelectorAll('.block').forEach(x => {
   x.style.backgroundColor = background
  })
 }

 // Change button
 document.querySelector('#change').onclick = () => {
  document.querySelector('#modal').style.display = 'flex'
  document.querySelector('form').onsubmit = () => {
    
    document.querySelector('#grid').innerHTML = ''
    createGrid(document.querySelector('#size').value)
    setPen(document.querySelector('#color').value)
    document.querySelector('#modal').style.display = 'none'
    document.querySelector('#size').value = ''

    return false
  }
 }

})