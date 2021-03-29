let images = [
  {
    pathImg: "./img/dance-3134828_1920.jpg",
  },
  {
    pathImg: "./img/female-4234344_1920.jpg",
  },
  {
    pathImg: "./img/jet-ski-1125329_1920.jpg",
  },
  {
    pathImg: "./img/man-498473_1920.jpg",
  },
  {
    pathImg: "./img/motorcycle-1690452_1920.jpg",
  },
  {
    pathImg: "./img/mountain-biking-95032_1920.jpg",
  },
  {
    pathImg: "./img/skateboard-5221914_1920.jpg",
  },
  {
    pathImg: "./img/snow-1246300_1920.jpg",
  },
  {
    pathImg: "./img/swimmer-1678307_1920.jpg",
  },
  {
    pathImg: "./img/woman-3053492_1920.jpg",
  },
];

let galleryContainer = document.querySelector(".gallery");
let pagination = document.querySelector("ul");

let totalItems = images.length;
let pageSize = 1;
let totalPages = Math.ceil(totalItems / pageSize);

let currentPage = 1;

showPage();
createPagination(totalPages, currentPage);

function createPagination(totalPages, currentPage) {
  let HTML = "";
  let beforePage = currentPage - 2;
  let afterPage = currentPage + 2;
  let cssStyle = "active";

  // show first li always
 
  if (currentPage > 2) {
    HTML += addTag(1);
  }
  if (currentPage > 3) {
    HTML += addDots();
  }

  //change page and show -2/+2
  for (let i = beforePage; i <= afterPage; i++) {
      if (currentPage === i) {
        cssStyle = "active";
      } else {
        cssStyle = "";
      }
      HTML += addTag(i, cssStyle);
  
  }

  //show last li always
  if (currentPage < totalPages - 2) {
    if (currentPage < totalPages - 2) {
      HTML += addDots();
    }
    HTML += addTag(totalPages);
  }

  pagination.innerHTML = HTML;
  changePage(currentPage);
  return HTML;
}

function addTag(pageIndex, cssStyle) {
  if (pageIndex >= 1 && pageIndex <= totalPages) {
    return `<li><a onclick="createPagination(${totalPages}, ${pageIndex}) " class="page ${cssStyle}" id=${pageIndex} >${pageIndex}</a></li>`;
  } else {
    return ``;
  }
}

function addDots() {
  return `<li class="dots"><span>...</span></li>`;
}

function showPage() {
  for (let i = 0; i < pageSize; i++) {
    const image = images[i];
    galleryContainer.innerHTML += imgTemplate(image);
  }
}

function changePage(currentPage) {
  galleryContainer.innerHTML = "";

  const image = images[currentPage - 1];
  galleryContainer.innerHTML += imgTemplate(image);
}

function imgTemplate(image) {
  let htmlStruct = `<img src="${image.pathImg}" alt="">`;

  return htmlStruct;
}
