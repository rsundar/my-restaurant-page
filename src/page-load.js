const content = document.querySelector('#app');

const createHeroLayout = () => {
  const section = document.createElement('section');
  section.className = 'hero is-fullheight has-bg-img';
  const heroContent = `  
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title has-text-white-ter">
              Bangalore Tiffin Corner
            </h1>
            <h2 class="subtitle has-text-white-ter">
              For authentic Bengaluru cuisine
            </h2>
          </div>
        </div>
        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li id="home-tab" class="is-active"><a id="home-link">Home</a></li>
                <li id="menu-tab"><a id="menu-link">Menu</a></li>
                <li id="contact-tab"><a id="contact-link">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>`;
  section.insertAdjacentHTML('beforeend', heroContent);
  content.appendChild(section);
};

const createHomeContent = () => {
  const section = document.createElement('section');
  section.className = 'section';
  section.id = 'content-section';
  const div = document.createElement('div');
  div.className = 'container page-content';
  const description = `
    <div class="content">
      <p>
        Founded in 1984, Bangalore Tiffin Center has grown from it's humble beginings serving fresh breakfast to the residents of this city
        then known as the "Penisoners' Paradise". We have come a long way and witnessed the city grow from a sleepy calm town for retirees to 
        the bustling metropolis it is today. The city may have changed, but our ethos, mission, and food quality has not changes one bit. We
        still remian committed to providing the best brakfast items money can buy to super charge your day!
      <p>
    </div>`;
  div.insertAdjacentHTML('beforeend', description);
  section.appendChild(div);
  content.appendChild(section);
};

export {
  createHeroLayout,
  createHomeContent,
};