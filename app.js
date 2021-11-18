const grid = document.querySelector('#grid')
// [background, hover]
const defaultColor = ['#e9ecef', '#343a40']

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

function selectColor(colors) {
 document.querySelectorAll('.block').forEach(x => {
   
    x.style.backgroundColor = colors[0]
    x.onmouseover = () => {
     x.style.backgroundColor = colors[1]
    } 
   
  })
}

document.addEventListener('DOMContentLoaded', () => {
 let defaultBool = true
 let monoChromeBool = false

 createGrid(20)
 selectColor(defaultColor)

 // Submit button
//  document.querySelector('form').onsubmit = () => {
//   document.querySelector('#modal').style.display = 'none'
//   let dimension = document.querySelector('input').value
//   console.log(dimension)
//   createGrid(dimension)
  

//   return false
//  }

 // Default button
 document.querySelector('#default').onclick = () => {
  if (monoChromeBool) {
   monoChromeBool = false
  }
  document.querySelectorAll('.block').forEach(x => {
   selectColor(defaultBool, defaultColor)
  })
  defaultBool = true
 }

 // Monochrome button
 if (defaultBool) {
  defaultBool = false
 }
 document.querySelector('#monochrome').onclick = () => {
  document.querySelectorAll('.block').forEach(x => {
   selectColor(monoChromeBool, monochromeColor)
  })
  monoChromeBool = true
 }

 // Clear button
 document.querySelector('#clear').onclick = () => {
  document.querySelectorAll('.block').forEach(x => {
   selectColor(defaultColor)
  })
 }

 // Change button
 document.querySelector('#change').onclick = () => {
  document.querySelector('#modal').style.display = 'flex'
  document.querySelector('form').onsubmit = () => {
    // console.log(document.querySelector('#size').value)
    
    document.querySelector('#grid').innerHTML = ''
    createGrid(document.querySelector('#size').value)
    selectColor(defaultColor)
    document.querySelector('#modal').style.display = 'none'
    document.querySelector('#size').value = ''

    // createGrid()
    return false
  }
 }

 // document.querySelectorAll('.block').forEach(x => {
 //  x.onmouseover = () => {
 //   x.style.backgroundColor = '#eb5e28'
 //  }
 // })

})