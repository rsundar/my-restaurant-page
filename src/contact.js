const addContact = () => {
  const pageContent = document.querySelector('.page-content');
  pageContent.innerHTML = '';
  const div = document.createElement('div');
  div.className = 'columns is-centered';
  const contactCard = `
    <div class="column is-half">
      <div class="content has-text-centered">
        <p><strong>Find us on all social media and follow us!</strong></p>
        <br>
        <p>For party orders or use of the hall please send us an email</p>
        <p>party@bangaloretiffincenter.com</p>
        <br>
        <p>Phone Number</p>
        <p>+91-9112764532</p>
        <br>
        <p>Address</p>
        <p>Number 10, Shri Kala Building, Lavelle Road, Bengaluru-560012</p>
      </div>
    </div>`;
  div.insertAdjacentHTML('beforeend', contactCard);
  pageContent.appendChild(div);
};

export default addContact;