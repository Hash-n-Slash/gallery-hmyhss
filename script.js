

document.addEventListener('DOMContentLoaded', () => {
    var containers = document.getElementById("sports");
    if (!containers) {
      console.error('Element with id "posts" not found in the HTML document.');
      return;
    }
  
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        var container = document.createElement('div');
        container.className = 'contain'
        var jsondb = data["posts"].reverse();
  
        jsondb.forEach(item => {
          const h3 = document.createElement('h3');
          const img = document.createElement('img');
          const desc = document.createElement('p');
          h3.textContent = item.title;
          img.src = item.img;
          desc.textContent = item.desc;
          container.appendChild(h3);
          container.appendChild(img);
          container.appendChild(desc);
          container.id = item.title
          
        });
  
        containers.appendChild(container);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  