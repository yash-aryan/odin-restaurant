"use strict";
export function createMenupage() {
	const rootNode = document.querySelector("#content");
	rootNode.innerHTML = `
  <nav>
    <ul>
      <li data-page="home">HOME</li>
      <li class="active" data-page="menu">MENU</li>
      <li data-page="contact">CONTACT</li>
    </ul>
  </nav>
  <header class="menu">
    <h1>Menu</h1>
  </header>
  <div class="menu card-container">
    <section>
      <h2>Starters</h2>
      <div class="card">
        <h3>Food Name</h3>
        <span>$10</span>
        <img src="" alt="" />
      </div>
      <div class="card">
        <h3>Food Name</h3>
        <span>$10</span>
        <img src="" alt="" />
      </div>
    </section>
    <section>
      <h2>Main Course</h2>
      <div class="card">
        <h3>Food Name</h3>
        <span>$10</span>
        <img src="" alt="" />
      </div>
      <div class="card">
        <h3>Food Name</h3>
        <span>$10</span>
        <img src="" alt="" />
      </div>
    </section>
  </div>
  <footer>
    <a href="https://github.com/yash-aryan/" target="_blank"
      >Copyright ©
      <script>
        document.write(new Date().getFullYear());
      </script>
      yash-aryan
    </a>
  </footer>
    `;
}
