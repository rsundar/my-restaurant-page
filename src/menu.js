import item1 from './assets/images/idli.jpg';
import item2 from './assets/images/dosa.jpg';
import item3 from './assets/images/vada.jpg';
import item4 from './assets/images/bisibelebath.jpg';

function itemFactory(name, description, price) {
  return { name, description, price };
}

function createDishes() {
  const menu = [];
  menu.push(itemFactory('Idli', 'A type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice.', 20));
  menu.push(itemFactory('Dosa', 'A dosa or dose is a thin pancake or crepe, originating from South India, made from a fermented batter predominantly consisting of lentils and rice.', 30));
  menu.push(itemFactory('Vada', 'A category of savoury fried snacks from India. Different types of vadas can be described variously as fritters, cutlets, doughnuts, or dumplings', 15));
  menu.push(itemFactory('Bisi Bele Bath', 'A spicy, rice-based dish with origins in the state of Karnataka, India.', 45));
  return menu;
}

function collectImages() {
  const images = [];
  const dish1 = new Image();
  const dish2 = new Image();
  const dish3 = new Image();
  const dish4 = new Image();
  dish1.src = item1;
  dish2.src = item2;
  dish3.src = item3;
  dish4.src = item4;
  images.push(dish1, dish2, dish3, dish4);
  return images;
}

function setImages() {
  const images = collectImages();
  images.forEach(image => {
    const index = images.indexOf(image);
    const placeholder = document.querySelector(`#dish-${index}`);
    placeholder.appendChild(image);
  });
}

export default function () {
  const pageContent = document.querySelector('.page-content');
  pageContent.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'columns is-multiline is-centered';
  const dishes = createDishes();
  dishes.forEach(dish => {
    const index = dishes.indexOf(dish);
    const { name, description, price } = dish;
    const dishCard = `
      <div class="column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div class="card">
          <div class="card-image">
            <figure id="dish-${index}" class="image is-4by3">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${name}</p>
              </div>
            </div>
            <div class="content">
              ${description}
              <br>
             <strong>₹ {price}</strong> 
            </div>
          </div>
        </div>
      </div>`;
    div.insertAdjacentHTML('beforeend', dishCard);
  });
  pageContent.appendChild(div);
  setImages();
}