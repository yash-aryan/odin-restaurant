"use strict";
export function createContactpage() {
	const rootNode = document.querySelector("#content");
	rootNode.innerHTML = `
  <nav>
    <ul>
      <li data-page="home">HOME</li>
      <li data-page="menu">MENU</li>
      <li class="active" data-page="contact">CONTACT</li>
    </ul>
  </nav>
  <header class="contact">
    <h1>Contact Us</h1>
  </header>
  <div class="contact card-container">
    <div class="card">
      <h2>Name</h2>
      <span>Role</span>
      <span>555-555-5555</span>
      <span>example@example.com</span>
      <img src="" alt="">
    </div>
    <div class="card">
      <h2>Name</h2>
      <span>Role</span>
      <span>555-555-5555</span>
      <span>example@example.com</span>
      <img src="" alt="">
    </div>
    <div class="card">
      <h2>Name</h2>
      <span>Role</span>
      <span>555-555-5555</span>
      <span>example@example.com</span>
      <img src="" alt="">
    </div>
  </div>
  <footer>
    <a href="https://github.com/yash-aryan/" target="_blank">Copyright ©
      <script>
        document.write(new Date().getFullYear())
      </script>
      yash-aryan
    </a>
  </footer>
    `;
}
