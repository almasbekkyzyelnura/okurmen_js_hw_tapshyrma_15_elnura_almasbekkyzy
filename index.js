


document.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    console.log(this.responseText);
    renderData(JSON.parse(this.responseText));
  });

  xhr.open('GET', 'https://restcountries.com/v3.1/all');
  xhr.send();

  const content = document.querySelector('.content')
  function renderData(data) {
    data.map(item => {
      const name = document.createElement('p');
      const flag = document.createElement('img');
      const center = document.createElement('p');
      const region = document.createElement('p');
      const subregion = document.createElement('p');


      name.innerHTML = item.name.common
      flag.setAttribute('src', item.flags.svg);
      flag.style.width = '400px';
      flag.style.height = 'auto';
      center.innerHTML = item.capital
      region.innerHTML = item.region
      subregion.innerHTML = item.subregion


      content.appendChild(name);
      content.appendChild(flag);
      content.appendChild(center);
      content.appendChild(region);
      content.appendChild(subregion);


      console.log(item);
    });
  }
});   