const menuIcon = document.querySelector(".menuIcon");
const navListCont = document.querySelector(".navListCont");
const navListItems = document.querySelectorAll(".navList li");
const socialIcons = document.querySelectorAll(".navSocialIcons li");
const navItems = document.querySelectorAll(".navListCont .navList li");
const headSectionImage = document.getElementById("headSectionImage");
const skill = document.querySelectorAll(".grid-container .grid-item");
const topNav = document.querySelector(".topNav");
const portfolioCards = document.querySelectorAll(
  ".portfolioCardsContainer .card"
);

const slides = document.querySelectorAll(".clientViewsCont");
const portfolioBtns = document.querySelectorAll(".portfolioBtn");
let state = false; // Initial state: closed
let activeItemIndex = -1; // Initial active item index: none

window.addEventListener("scroll", () => {
  let scroll = window.scrollY || document.documentElement.scrollTop;

  if (scroll >= 1) {
    topNav.classList.add("scrolled");
  } else {
    topNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  toggleNav();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const isNavContainerClicked = navListCont.contains(target);
  const isMenuIconClicked = menuIcon.contains(target);

  if (state && !isNavContainerClicked && !isMenuIconClicked) {
    closeNav();
  }
});

navListItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("navListItemAnimation");

    item.addEventListener("animationend", () => {
      item.classList.remove("navListItemAnimation");
    });

    // Update active item index
    activeItemIndex = index;

    // Apply active class to the clicked item
    updateActiveItem();
  });
});

socialIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    icon.classList.add("socialIconAnimation");

    this.addEventListener("animationend", function () {
      icon.classList.remove("socialIconAnimation");
    });
  });
});

headSectionImage.addEventListener("click", () => {
  headSectionImage.classList.add("bouce");
  headSectionImage.addEventListener("animationend", () => {
    headSectionImage.classList.remove("bouce");
  });
});

skill.forEach((skill) => {
  skill.addEventListener("click", () => {
    skill.classList.add("grow");
  });
  this.addEventListener("animationend", () => skill.classList.remove("grow"));
});

portfolioCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("portOpen");
    card.querySelector(".cardDesc").classList.toggle("cardDescOpen");
    card.querySelector("img").classList.toggle("imgOpen");
  });
});

portfolioBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove 'active' class from all buttons and add it to the clicked button
    portfolioBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    // Get the selected category from the button's data-category attribute
    const selectedCategory = btn.dataset.category;

    // Show all cards if 'All' is selected, otherwise filter cards by category
    portfolioCards.forEach((card) => {
      if (
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory
      ) {
        card.style.display = "block"; // Show the card
      } else {
        card.style.display = "none"; // Hide the card
      }
    });
  });
});

function toggleNav() {
  if (state) {
    navListCont.classList.remove("open");
    menuIcon.classList.remove("open");
    menuIcon.innerHTML = '<i class="fas fa-bars-staggered"></i>';
  } else {
    navListCont.classList.add("open");
    menuIcon.classList.add("open");
    menuIcon.innerHTML = '<i class="fas fa-times"></i>';
  }

  state = !state;
}

function closeNav() {
  if (state) {
    toggleNav();
  }
}

function updateActiveItem() {
  navItems.forEach((navItem, index) => {
    if (index === activeItemIndex) {
      navItem.classList.add("active-item");
    } else {
      navItem.classList.remove("active-item");
    }
  });
}

let downloaded = false;

function showThankYouBubble() {

    if (!downloaded) {
        setTimeout(()=>{
            document.getElementById('document').click();
            const cvBubbleCont = document.querySelector(".cvBubbleCont");
            const thankYouBubble = document.createElement("span");
            thankYouBubble.className = "thankYouBubble";
            thankYouBubble.innerHTML = "🙂 Thank you for downloading my <strong>CV</strong>. be sure to conatct me";
            cvBubbleCont.appendChild(thankYouBubble); 
            cvBubbleCont.offsetHeight;
            downloaded = true;  
        },500);
    }

}


  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "flex";
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  setInterval(nextSlide, 500); 
  showSlide(currentSlide);