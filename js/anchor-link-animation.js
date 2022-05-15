const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((item) => {

  item.addEventListener("click", (e) => {
    e.preventDefault();
  
    document.querySelector('' + item.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
    
  });
});
