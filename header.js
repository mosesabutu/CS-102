class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
:host {
  display: block;
  width: 100dvw;
  z-index: 10000;
}
header.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c2a28;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: 7vh;
  width: 100dvw;
}

header.logo #logo {
  text-decoration: none;
  font-family: "Playfair Display", serif;
  color: #f6f1eb;
  letter-spacing: 0.1cm;
  font-weight: 500;
  margin-left: 3rem;
  font-size: 1.5rem;
}

/* DEFAULT NAV (Desktop) */
nav {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 2rem;
  #menuClose { display: none; }

  
}

nav a {
  text-decoration: none;
  color: #f6f1eb;
  font-weight: 500;
  font-size: 1rem;
  span {
    display: none;
  }
    i.bi{
    font-size: 1rem;
    color: #f6f1eb;
    
    }
}

#menuToggle {
  display: none;
  background: none;
  border: none;
  margin-right: 2rem;
  color: #d4c092;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10001;
}


.nav-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9998;
}

.nav-overlay.active {
  display: block;
}

@media screen and (max-width: 850px) {
  header.logo #logo {
    margin-left: 2rem;
    font-size: 1rem;
  }
  button#menuToggle, #menuClose{
    display: block !important;
  }
  button#menuToggle.hidden {
    display: hidden;
  }

  nav {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 75%;
    height: 100vh;
    background-color: #2c2a28;
    flex-direction: column;
    align-items: start;
    padding: 80px 20px;
    transition: 0.3s ease-in-out;
    margin-right: 0;
    z-index: 99999;

    #menuClose {
      background: none;
      border: none;
      text-align: start;
      color: #d4c092;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  nav#nav.active {
    display: flex !important;
    button {
      border: none;
      text-align: center;
      padding: 0rem 4rem;
      border-bottom: 1px solid #3d3b38;
    }
    a {
      color: #d4c092;
      background: transperent;
      padding: 1rem 0;
      width: 100%;
      border-bottom: 1px solid #3d3b38;
      svg {
        display: none;
      }
      span {
        display: block;
      }
    }
  }
}

      </style>

     
      <header class="logo">
        <a href="/" id="logo">OVERLOOK</a>
        <nav id="nav">
         <button class="menu-toggle-close" id="menuClose">
        <i class="fa-solid fa-xmark"></i>
        </button>
          <a href="/">Home</a>
          <a href="/product/index.html">Products</a>
          <a href="/events/index.html">Events</a>
          <a href="/trustees/index.html">Trustees</a>
          <a href="/inquiry/index.html">Inquiry</a>
          <a href="/cart/index.html">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
           <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
           </svg>
         <span>Cart</span></a>
        </nav>
      <div class="nav-overlay" id="overlay"></div>

        <button class="menu-toggle" id="menuToggle">
          <i class="fa-solid fa-bars"></i>
        </button>
      </header>
    `;
    const toggleBtn = this.querySelector("#menuToggle");
    const closeBtn = this.querySelector("#menuClose"); // New close button
    const nav = this.querySelector("#nav");
    const overlay = this.querySelector("#overlay");

    const openMenu = () => {
      nav.classList.add("active");
      overlay.classList.add("active");
      toggleBtn.classList.add("hidden");
    };

    const closeMenu = () => {
      nav.classList.remove("active");
      overlay.classList.remove("active");
      toggleBtn.classList.remove("hidden");
    };

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openMenu();
    });

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }
}

customElements.define("header-main", Header);

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }

        footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          background-color: #2c2a28;
          color: #f6f1eb;
          gap: 2rem;
          padding: 2rem;
          margin-top: 2rem;
        }

        footer h2 {
          color: #f6f1eb;
          font-size: 3rem;
          margin-bottom: 40px;
          letter-spacing: 3px;
          margin-top: 0;
        }

        footer .follow-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        footer .socials i {
          width: 25px;
          height: 25px;
          background: #f6f1eb;
          color: #2c2a28;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          margin-right: 10px;
          cursor: pointer;
          transition: 0.3s;
        }

        footer .socials i:hover {
          background: #b4a37e;
        }

        footer .links-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0;
        }

        footer .links-row span {
          cursor: pointer;
          margin: 15px;
          font-size: 14px;
        }

        footer .copy {
          margin-top: 10px;
          text-align: center;
          font-size: 12px;
          opacity: 0.8;
        }

        @media screen and (max-width: 600px) {
          footer h2 {
            font-size: 2rem;
          }
          footer .links-row span {
            margin: 10px;
          }
        }
      </style>

      <footer>
        <h2>OVERLOOK</h2>
        <div class="follow-btns">
          <div class="socials">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-twitter"></i>
            <i class="fa fa-envelope"></i>
          </div>
        </div>
        <div class="links-row">
          <span>Privacy Policy</span>
          <span>Terms Of Service</span>
          <span>Returns & FAQ</span>
          <span>Contact Support</span>
          <span>Contact</span>
        </div>
        <div class="copy">
          <p>&#169;2026 THE OVERLOOK FASHION HOUSE</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-main", Footer);
