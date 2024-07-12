    // Head Section Scroll moving background
    window.addEventListener('scroll', function() {
        var scrolled = window.scrollY;
        document.querySelector('section.head').style.backgroundPositionY = -(scrolled * 0.2) + 'px';
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const targetElement = document.querySelector(this.getAttribute('href'));
            const offsetTop = targetElement.offsetTop;
    
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // modal window for online order
    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
        document.getElementById('modalBackdrop').style.display = 'block';
    }
    
    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
        document.getElementById('modalBackdrop').style.display = 'none';
    }
    
    document.getElementById('modalBackdrop').onclick = function() {
        let modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            modals[i].style.display = 'none';
        }
        document.getElementById('modalBackdrop').style.display = 'none';
    }
    
    function showContent(contentId) {
        const contentSections = document.getElementsByClassName("content-section");
        for (let section of contentSections) {
            section.style.display = "none";
        }
        document.getElementById(contentId).style.display = "block";
    
        const pickupButton = document.getElementById("pickupButton");
        const deliveryButton = document.getElementById("deliveryButton");
    
        if (contentId === 'pickupContent') {
            pickupButton.classList.add("button-active");
            pickupButton.classList.remove("button-inactive");
            deliveryButton.classList.add("button-inactive");
            deliveryButton.classList.remove("button-active");
        } else if (contentId === 'deliveryContent') {
            deliveryButton.classList.add("button-active");
            deliveryButton.classList.remove("button-inactive");
            pickupButton.classList.add("button-inactive");
            pickupButton.classList.remove("button-active");
        }
    }    
    
    function openPickupModal() {
        openModal('modal');
        showContent('pickupContent');
    }
    
    function openDeliveryModal() {
        openModal('modal');
        showContent('deliveryContent');
    }
    
    function openMenuModal() {
        openModal('modal2');
    }
    function openLoginModal() {
      openModal('modal3');
  }
    
    
    
    // JavaScript to toggle visibility of schedule options
    document.querySelectorAll('input[type=radio][name=group1]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            var scheduleOptions = document.getElementById('scheduleOptions');
            if (this.value === '2') {
                scheduleOptions.style.display = 'flex';
            } else {
                scheduleOptions.style.display = 'none';
            }
        });
    });

    
        // Highlight active link based on scroll position
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
    
            document.querySelectorAll('.chooser a').forEach(link => {
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
    
                if (targetSection) {
                    const sectionTop = targetSection.offsetTop;
                    const sectionHeight = targetSection.offsetHeight;
    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
        });

        // Cart Function
        function openMenu() {
            document.getElementById('slideMenu').classList.add('open');
            document.getElementById('overlay').style.display = 'block';
        }
        
        function closeMenu() {
            document.getElementById('slideMenu').classList.remove('open');
            document.getElementById('overlay').style.display = 'none';
        }
        
        document.getElementById('overlay').onclick = function() {
            closeMenu();
        };
        

        function increaseQuantity() {
            var quantityInput = document.getElementById('quantity');
            quantityInput.value = parseInt(quantityInput.value) + 1;
          }
      
          function decreaseQuantity() {
            var quantityInput = document.getElementById('quantity');
            var currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
              quantityInput.value = currentValue - 1;
            }
          }

        // Menu Dish Chooser
        document.addEventListener('DOMContentLoaded', function() {
            const links = document.querySelectorAll('.chooser a');
            const sections = document.querySelectorAll('.content');
            const chooser = document.querySelector('.chooser');
            const leftArrow = document.querySelector('.arrow.left');
            const rightArrow = document.querySelector('.arrow.right');
          
            // Set the first link as active by default
            if (links.length > 0) {
              links[0].classList.add('active');
            }
          
            // Function to update the active link
            const updateActiveLink = (current) => {
              links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                  link.classList.add('active');
                }
              });
            };
          
            // Handle scroll event
            window.addEventListener('scroll', function() {
              let current = '';
          
              sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight - 100) {
                  current = section.getAttribute('id');
                }
              });
          
              if (current) {
                updateActiveLink(current);
              } else {
                // If no section is in view, keep the first link active
                links[0].classList.add('active');
              }
            });
          
            // Handle click event
            links.forEach(link => {
              link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
          
                window.scrollTo({
                  top: targetSection.offsetTop - 80,
                  behavior: 'smooth'
                });
          
                updateActiveLink(targetId);
              });
            });
          
            // Arrow click events for scrolling
            leftArrow.addEventListener('click', () => {
              chooser.scrollBy({ left: -200, behavior: 'smooth' });
            });
          
            rightArrow.addEventListener('click', () => {
              chooser.scrollBy({ left: 200, behavior: 'smooth' });
            });
          });

          // Login-Register Function
document.addEventListener('DOMContentLoaded', function () {
  const switchToRegister = document.getElementById('switch-to-register');
  const switchToLogin = document.getElementById('switch-to-login');
  const loginForm = document.getElementById('login-form');
  const registrationForm = document.getElementById('registration-form');
  const modalTitle = document.getElementById('modal-title');
  const switcherTextLogin = document.getElementById('switcher-text-login');
  const switcherTextRegister = document.getElementById('switcher-text-register');

  switchToRegister.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      registrationForm.style.display = 'flex';
      modalTitle.textContent = 'Sign Up';
      switcherTextLogin.style.display = 'none';
      switcherTextRegister.style.display = 'block';
  });

  switchToLogin.addEventListener('click', function (e) {
      e.preventDefault();
      loginForm.style.display = 'flex';
      registrationForm.style.display = 'none';
      modalTitle.textContent = 'Log In';
      switcherTextLogin.style.display = 'block';
      switcherTextRegister.style.display = 'none';
  });
});

