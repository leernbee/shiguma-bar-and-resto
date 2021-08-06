// isotope
// external js: isotope.pkgd.js
var grid = document.querySelector('.grid')

var iso = new Isotope(grid, {
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer',
  },
})

grid.addEventListener('click', function (event) {
  var gridItem = document.querySelectorAll('.grid-item')
  ;[].forEach.call(gridItem, function (el) {
    el.classList.remove('is-expanded')
  })

  var target = event.target
  // only click on itemContent
  if (!target.classList.contains('grid-item-content')) {
    return
  }

  var itemElem = target.parentNode
  itemElem.classList.toggle('is-expanded')
  iso.layout()
})
