// Find the <header> element in the HTML
const header = document.querySelector('header')

// Create a container for the header content
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

// Create the left side of the header (logo and title)
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

// Create the logo image
const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png' // Set the image source

// Create the website title
const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed' // Set the title text

// Add the logo and title to the left side
headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

// Create the right side of the header (for buttons)
const headerRight = document.createElement('div')
headerRight.className = 'header-right'

// Create a button that says 'Home'
const headerButton = document.createElement('button') // Should be 'button' instead of 'Home'
headerButton.textContent = 'Home'

// When the button is clicked, go to the homepage
headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'
})

// Add the button to the right side
headerRight.appendChild(headerButton)

// Add both sides to the header container
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

// Add the header container to the <header> element
header.appendChild(headerContainer)