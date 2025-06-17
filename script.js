// ===== MOBILE MENU FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  
  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
    } else {
      mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
    });
  });
});

// ===== SKILL BAR ANIMATION =====
document.addEventListener("DOMContentLoaded", function () {
  const skillBars = document.querySelectorAll(".skill-progress");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width =
            entry.target.parentElement.dataset.width ||
            entry.target.style.width;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  skillBars.forEach((bar) => {
    // Initially set width to 0
    const targetWidth = bar.style.width;
    bar.style.width = "0";
    bar.parentElement.dataset.width = targetWidth;
    // Observe the bar
    observer.observe(bar);
  });
});

// ===== PROJECT FILTER FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".project-filter");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-darker");
        btn.classList.add("hover:bg-primary", "hover:bg-opacity-10");
      });

      // Add active class to clicked button
      this.classList.add("bg-primary", "text-darker");
      this.classList.remove("hover:bg-primary", "hover:bg-opacity-10");

      const filter = this.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// ===== SMOOTH SCROLL FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});