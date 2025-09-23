const renderGifts = async () => {
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

const requestedUrl = window.location.href.split('/').pop();

if (requestedUrl) {
  window.location.href = '../404.html';
} else {
  renderGifts();
}

// Call the function to render a single gift when the script loads
if (document.getElementById('gift-content')) {
  renderGift();
}

const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch('/gifts')
    const data = await response.json()

    const giftContent = document.getElementById('gift-content')

    let gift

    gift = data.find(gift => gift.id === requestedID)

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = 'Submitted by: ' + gift.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + gift.pricePoint
        document.getElementById('audience').textContent = 'Great For: ' + gift.audience
        document.getElementById('description').textContent = gift.description
        document.getElementById('submittedOn').textContent = 'Submitted on: ' + gift.submittedOn;
        document.title = `UnEarthed - ${gift.name}`
      
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        giftContent.appendChild(message)
      
    }
}