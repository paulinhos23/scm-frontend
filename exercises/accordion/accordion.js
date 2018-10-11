import './accordion.scss';

const accordionComponent = () => {

  // Define the root element that is used from different functions, usign data attributes
  // JS hooks from CSS classes.
  const accordionElement = document.querySelector('[data-accordion]');

  const init = () => {
    // Initialise the eventHandlers.
    const accordionTerms = accordionElement.querySelectorAll('[data-accordionTerm]');

    accordionTerms.forEach(term => {
      const backButton = accordionElement.querySelector('[data-accordionBack]');

      backButton.addEventListener('click', () => history.back(-1));
      term.addEventListener('click', (e) => toggleContent(e.target));
      term.addEventListener('keypress', (e) => {
        // If the key pressed is not Enter or Space, we won't trigger the toggle.
        if (e.code !== 'Enter' && e.code !== 'Space') { return }
        toggleContent(e.target);
      });
    });
  }

  const toggleContent = (element) => {
    const termContent = element.nextElementSibling;

    // in case the selected element is already active, we can assume we don't need to remove other
    // active elements
    if (!element.classList.contains('Accordion-term--active')) {
      removeActiveTerm();
    }

    element.classList.toggle(`Accordion-term--active`);
    termContent.classList.toggle(`Accordion-termContent--visible`);
  }

  const removeActiveTerm = () => {
    const activeTerm = accordionElement.querySelector('.Accordion-term--active');
    
    // in order to avoid unnecessary logic and keep identation to the minimum, we check and return
    // if there is no active element. Otherwise we go through the logic and remove the classes.
    if (!activeTerm) { return }
    const termContent = activeTerm.nextElementSibling;
    
    activeTerm.classList.remove(`Accordion-term--active`);
    termContent.classList.remove('Accordion-termContent--visible');
  }
  
  init();
};

// We initialise the Accordion logic once we have the HTML in place.
document.addEventListener(`DOMContentLoaded`, () => accordionComponent());

