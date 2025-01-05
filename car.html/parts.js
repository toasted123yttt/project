// Sample car parts data

const carParts = [
    {
      name: "Brake Pads",
      description: "High-quality brake pads for all types of cars.",
      price: 49.99,
      image: "brake.jpeg"
    },
    {
      name: "Air Filter",
      description: "Keep your engine clean with our durable air filters.",
      price: 19.99,
      image: "filter.jpeg"
    },
    {
      name: "Spark Plugs",
      description: "Ensure smooth engine performance with our spark plugs.",
      price: 24.99,
      image: "spark.jpg"
    },
    {
      name: "Oil Filter",
      description: "High quality oil filter",
      price: 12.99,
      image: "oil.jpeg"
    },
    {
      name: "Car Battery",
      description: "Long lasting battery",
      price: 150.99,
      image: "R.jpeg"
    },
    {
      name: "Tyre",
      description: "Durable tyre for all seasons",
      price: 100.99,
      image: "tyre.jpeg"
    },
    {
      name: "Headlight",
      description: "Powerful headlight",
      price: 35.99,
      image: "head.jpeg"
    },
    {
      name: "Windscreen Wiper",
      description: "Durable windscreen wiper",
      price: 15.99,
      image: "wiper.jpeg"
    }
  ];
  
  const partsGrid = document.querySelector('.parts-grid');
  
  // Function to display parts
  function displayParts(parts) {
    partsGrid.innerHTML = '';
    parts.forEach(part => {
      const partDiv = document.createElement('div');
      partDiv.classList.add('part');
      partDiv.innerHTML = `
        <img src="${part.image}" alt="${part.name}">
        <h3>${part.name}</h3>
        <p>${part.description}</p>
        <p>Price: £${part.price.toFixed(2)}</p>
      `;
      partsGrid.appendChild(partDiv);
    });
  }
  
  // Initial display of parts
  displayParts(carParts);
  
  // Search functionality
  const searchInput = document.querySelector('.search_input');
  searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredParts = carParts.filter(part =>
      part.name.toLowerCase().includes(searchTerm) ||
      part.description.toLowerCase().includes(searchTerm)
    );
    displayParts(filteredParts);
  });
  
  // Browse Parts button click event
  const browseButton = document.querySelector('.hero .btn');
  browseButton.addEventListener('click', (event) => {
    event.preventDefault();
    const partsSection = document.querySelector('#parts');
    partsSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(n) {
        index += n;
        if (index >= slide.length) {
            index = 0;
        } else if (index < 0) {
            index = slide.length - 1;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(-1));
    next.addEventListener('click', () => showSlide(1));
});




   