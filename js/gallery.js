const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
  

const imgList = document.querySelector(".gallery");

images.forEach(({ preview, original, description }) => {

    //liyi oluşturdum. class ekledim.

    const li = document.createElement("li");
    li.classList.add("gallery-item");
    
    // a yı oluşturdum class ekledim
    
    const link = document.createElement("a");
    link.classList.add("gallery-link");
    link.href = original;

    //img oluşturdum alt ekledim görsel ekledim

    const img = document.createElement("img");
    img.classList.add("gallery-image");
    img.src = preview;
    img.alt = description;


    //bağlamayı yapıyorum şimdi

    link.appendChild(img);
    li.appendChild(link);
    imgList.appendChild(li);
    
})

imgList.addEventListener("click", (event) => {
    event.preventDefault();
  
    let originalSrc = null;
  
    if (event.target.nodeName === "A") {
      originalSrc = event.target.href;
    } else if (event.target.nodeName === "IMG") {
      const parentLink = event.target.parentElement;
      if (parentLink && parentLink.nodeName === "A") {
        originalSrc = parentLink.href;
      }
    }
  
    if (!originalSrc) return; // Eğer doğru resim URL'si yoksa çık
  
    // Modal oluşturdum ve gösterdim
    const instance = basicLightbox.create(`
      <img src="${originalSrc}" width="800" height="600" alt="Büyük Resim" />
    `);
  
    instance.show();
      // Klavye dinleyicisini ekledim
  function onEscKey(event) {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKey);
    }
  }

  window.addEventListener("keydown", onEscKey);
});
  