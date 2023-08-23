const body = document.body;
const navbar = document.querySelector('.navbar');
const modal = document.querySelector('.modal');
const modeToggle = document.getElementById('mode-toggle');


modeToggle.addEventListener('click', () => {
    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');
    
    // Toggle dark mode class on other elements
    navbar.classList.toggle('dark-mode');
    modal.classList.toggle('dark-mode');
    
    // Store the user's preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  });
  
  // Check user's preference from localStorage on page load
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    modal.classList.add('dark-mode');
  }

  //language

let languageContent = {
         "en": {
            "text1": "The moon is made",
            "text2": "of pancakes",
            "text3": "Trade, earn, and win crypto on the most popular decentralized platform in the galaxy Connect Wallet",
            "text4": "Connect wallet",
            "text5": "Trade Now",
         },
         "fr": {
          "text1": "La lune est faite",
          "text2": "des crêpes",
          "text3": "Échangez, gagnez et gagnez des cryptos sur la plateforme décentralisée la plus populaire de la galaxie Connecter le portefeuille",
          "text4": " Connecter le portefeuille",
          "text5": "Échangeons maintenant",
         },
         "es": {
          "text1": "Der Mond ist gemacht",
          "text2": "von Pfannkuchen",
          "text3": "Handeln, verdienen und gewinnen Sie Kryptowährungen auf der beliebtesten dezentralen Plattform der Galaxis Wallet verbinden",
          "text4": "Wallet verbinden",
          "text5": "Handel jetzt",
         }
      }
      function switchLang(lang) {
        for (let key in languageContent[lang]) {
           document.getElementById(key).innerHTML = languageContent[lang][key];
        }
     }





  
  // Carousel
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
      <div class="carousel__nav">
        ${buttonsHtml.join("")}
      </div>
    `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });
  
  