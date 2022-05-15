
// ACCORDION 

const accordionHeaders = document.querySelectorAll(".accordion__header");
    
accordionHeaders.forEach((accordionHeader) => {
  const accordionBody = accordionHeader.nextElementSibling;
  const accordionArrow = accordionHeader.querySelector(".accordion__arrow");
  
  
  accordionHeader.addEventListener("click", (e) => {

    // ONLY ONE
    const activeAccordionHeader = document.querySelector(".accordion__header--active");
    
    if (activeAccordionHeader && activeAccordionHeader !== accordionHeader) {
      activeAccordionHeader.classList.toggle("accordion__header--active");
      activeAccordionHeader.nextElementSibling.style.maxHeight = '0';
      activeAccordionHeader.querySelector(".accordion__arrow").style.transform = '';
    }



    accordionHeader.classList.toggle("accordion__header--active");
      
    if (accordionHeader.classList.contains("accordion__header--active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'

      accordionArrow.style.transform = 'rotate(180deg)';
    } else {
      accordionBody.style.maxHeight = 0;

      accordionArrow.style.transform = '';

    }


  });
});





