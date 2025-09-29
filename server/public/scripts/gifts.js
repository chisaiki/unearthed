async function renderGifts() {
  // Fetch gift data from the /gifts endpoint
  const response = await fetch('/gifts');
  const data = await response.json();

  // Get the main content element
  const mainContent = document.getElementById('main-content');

  // Clear previous content
  mainContent.innerHTML = '';

  // Conditional rendering based on data
  if (data) {
    data.map(gift => {
      const card = document.createElement('div');
      card.classList.add('card');

      // Create topContainer div for each gift
      const topContainer = document.createElement('div');
      topContainer.classList.add('top-container');
      topContainer.style.backgroundImage = `url(${gift.image})`;

      // Create bottomContainer div for each gift
      const bottomContainer = document.createElement('div');
      bottomContainer.classList.add('bottom-container');

      // Add gift name
      const name = document.createElement('h3');
      name.textContent = gift.name;
      bottomContainer.appendChild(name);

      // Add price point
      const pricePoint = document.createElement('p');
      pricePoint.textContent = 'Price: ' + gift.pricePoint;
      bottomContainer.appendChild(pricePoint);

      // Add audience
      const audience = document.createElement('p');
      audience.textContent = 'Great For: ' + gift.audience;
      bottomContainer.appendChild(audience);

      // Add link
      const link = document.createElement('a');
      link.textContent = 'Read More >';
      link.setAttribute('role', 'button');
      link.href = `/gifts/${gift.id}`;
      bottomContainer.appendChild(link);

      // Assemble card
      card.appendChild(topContainer);
      card.appendChild(bottomContainer);
      mainContent.appendChild(card); // Add the card to the page
    });
  } else {
    // If no data, show a message
    const noGiftsMsg = document.createElement('h2');
    noGiftsMsg.textContent = 'No Gifts Available 😞';
    mainContent.appendChild(noGiftsMsg);
  }
}

// Extract the portion of the URL after the /
const requestedURL = window.location.pathname.split('/')[1];

// Get the last part of the URL after the last '/'
const requestedUrl = window.location.href.split('/').pop();

// Check if we're on the individual gift page
if (document.getElementById('gift-content')) {
  // If on the individual gift page, render the single gift
  renderGift();
} else if (requestedUrl && requestedURL === 'gifts') {
  // If there is something after /gifts/, redirect to the 404 page for invalid URLs
  window.location.href = '../404.html';
} else {
  // If on the home page, render the gifts list
  renderGifts();
}

// // Call the function to render a single gift when the script loads
// if (document.getElementById('gift-content')) {
//   renderGift();
// }

async function renderGift() {
    // Get the requested gift ID from the URL (last part after '/')
    const requestedID = parseInt(window.location.href.split('/').pop())

    // Fetch all gift data from the /gifts endpoint
    const response = await fetch('/gifts')
    const data = await response.json()

    // Get the main element where gift details will be displayed
    const giftContent = document.getElementById('gift-content')

    let gift

    // Find the gift object that matches the requested ID
    gift = data.find(gift => gift.id === requestedID)

    // If the gift exists, display its details
    if (gift) {
        // Set the image source
        document.getElementById('image').src = gift.image
        // Set the gift name
        document.getElementById('name').textContent = gift.name
        // Set the submitted by field
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
        // Set the price point
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
        // Set the audience field
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        // Set the description
        document.getElementById('description').textContent = gift.description
        // Set the submitted on field
        document.getElementById('submittedOn').textContent = 'Submitted on: ' + gift.submittedOn;
        // Update the page title to include the gift name
        document.title = `UnEarthed - ${gift.name}`
    }
    // If no gift is found, show a message
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        giftContent.appendChild(message)
    }
}