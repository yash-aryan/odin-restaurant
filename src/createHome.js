"use strict";
export function createHomepage() {
	const rootNode = document.querySelector("#content");
	rootNode.innerHTML = `
  <nav>
    <ul>
      <li class="active" data-page="home">HOME</li>
      <li data-page="menu">MENU</li>
      <li data-page="contact">CONTACT</li>
    </ul>
  </nav>
  <header class="home">
    <span class="logo">Brand Name</span>
  </header>
  <div class="home card-container">
    <figure class="card">
      <blockquote class="quote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel optio neque, ad exercitationem alias
          animi
          magni quaerat adipisci error.
        </p>
        <figcaption>- Customer</figcaption>
      </blockquote>
    </figure>
    <figure class="card">
      <blockquote class="quote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel optio neque, ad exercitationem alias
          animi
          magni quaerat adipisci error.
        </p>
        <figcaption>- Customer</figcaption>
      </blockquote>
    </figure>
    <figure class="card">
      <blockquote class="quote">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel optio neque, ad exercitationem alias
          animi
          magni quaerat adipisci error.
        </p>
        <figcaption>- Customer</figcaption>
      </blockquote>
    </figure>
  </div>
  <button class="home cta" type="button">Order Now</button>
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
