// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top')

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
  // Get the current scroll value
  let y = window.scrollY

  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (y > 120) {
    scrollToTopButton.className = 'top-link show'
  } else {
    scrollToTopButton.className = 'top-link hide'
  }
}

window.addEventListener('scroll', scrollFunc)

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const c = document.documentElement.scrollTop || document.body.scrollTop

  if (c > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function (e) {
  e.preventDefault()
  scrollToTop()
}

// observer
let observedElements = document.querySelectorAll('.inview-element') // Define the elements you want to intiate an action on

const options = {
  //define your options
  threshold: 0.5,
}

const inViewCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // define the event/property you want to use
      //do something with the element, in our case, add a class
      // entry.target.classList.add('inview')

      const counters = document.querySelectorAll('.counting')
      const speed = 200

      counters.forEach((counter) => {
        const animate = () => {
          const value = +counter.getAttribute('data-count')
          const data = +counter.innerText

          const time = value / speed
          if (data < value) {
            counter.innerText = Math.ceil(data + time)
            setTimeout(animate, 1)
          } else {
            counter.innerText = value
          }
        }

        animate()
      })
    } else {
      // OPTIONAL, in case you want to do something once the intersection is done
    }
  })
}

let observer = new IntersectionObserver(inViewCallback, options) // create a new instance using our callback which contains our elements and actions, using the options we defined

observedElements.forEach((element) => {
  observer.observe(element) // run the observer
})

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
