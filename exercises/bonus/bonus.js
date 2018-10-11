import './bonus.scss';

const bonusComponent = () => {
  // Declaration of variables used in different methods.
  const resultList = document.querySelector('[data-bonusresults]');
  const modalWrapper = document.querySelector('[data-bonusModal]');

  const init = () => {
    const searchBox = document.querySelector('[data-bonusInput]');
    
    searchBox.addEventListener('change', searchQuery);
    modalWrapper.addEventListener('click', toggleModal);
  }

  const searchQuery = (event) => {
    const query = event.target.value;

    // remove Event Listeners before removing DOM elements to avoid possible memory leaks.
    resultList.querySelectorAll('[data-bonusImageItem]').forEach( element => element.removeEventListener('click', openImage));
    resultList.innerHTML = '';
    fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
    .then(response => {
      // If the request is successful, convert it to JSON and return it
      if (response.ok) {
        return response.json();
      }
      // If the request fails throw an error which will be caught below
      throw Error(response.statusText);
    })
    // When the JSON conversion is done and returned we process it here
    .then(json => {
      const collection = json.collection.items.map(item => {
        return {
          imageSrc: item.links[0].href,
          description: item.data[0].description_508,
        }
      });

      if (!collection.length) {
        zeroResults(query);
        return;
      }

      collection.forEach(addImage);
      resultList.querySelectorAll('[data-bonusImageItem]').forEach( element => {
        element.addEventListener('click', openImage);
      });

    })
    .catch(err => errorRequest(err));
  }

  // Error and Zero Results handling;
  const errorRequest = error => resultList.innerHTML += `<p class="Bonus-zeroResult">Oops, the following error has occurred: <span class="Bonus-errorText">${error}</span></p>`;
  const zeroResults = query => resultList.innerHTML += `<p class="Bonus-zeroResult">We haven't found any result with the keyword <span class="Bonus-quotedQuery">${query}</span></em>`;
  // Adding image node with the collection item information
  const addImage = item => resultList.innerHTML += `<img data-bonusImageItem class="Bonus-imageItem" src="${item.imageSrc}" alt="${item.description}"/>`;
  // Toggle active class to show and hide the modal
  const toggleModal = () => modalWrapper.classList.toggle('Bonus-modal--active');

  // Parameter deconstruction with assignment into a variable.
  const openImage = ({ target: element }) => {
    const modalImage = document.querySelector('[data-bonusmodalimage]');

    modalImage.src = element.src;
    modalImage.alt = element.alt;
    toggleModal();
  }

  init();
};

// We initialise the Accordion logic once we have the HTML in place.
document.addEventListener(`DOMContentLoaded`, () => bonusComponent());