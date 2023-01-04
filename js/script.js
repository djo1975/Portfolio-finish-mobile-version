const array = [
  {
    id: '1',
    name: 'Tonic',
    namedesk:'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['CANOPY', 'Back End Dev', 2015],
    image: 'img/portofolio-img-1.svg',
    imageDesktop: 'img/nature.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Portfolio-finish-mobile-version',
  },
  {
    id: '2',
    name: 'Multi-Post Stories',
    namedesk:'Multi-Post Stories',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: 'img/portofolio-img-2.svg',
    imageDesktop: 'img/stories-desk.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Portfolio-finish-mobile-version',
  },
  {
    id: '3',
    name: 'Tonic',
    namedesk:'Facebook 360',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['FACEBOOK', 'Full Stack Dev', 2015],
    image: 'img/portofolio-img-3.svg',
    imageDesktop: 'img/desk-one.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Portfolio-finish-mobile-version',
  },
  {
    id: '4',
    name: 'Multi-Post Stories',
    namedesk:'Uber Navigation',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    shortDescriptiondesk: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    longDescriptiondesk: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s with the relea`,
    featured: ['CANOPY', 'Back End Dev', 2015],
    featureddesk: ['UBER', 'Lead Developer', 2018],
    image: 'img/portofolio-img-4.svg',
    imageDesktop: 'img/uber-desk.svg',
    technologies: ['html', 'css', 'javaScript'],
    technologiesdesk: ['html', 'css', 'javaScript', 'Ruby on rails', 'github', 'ruby', 'Bootstraps'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Portfolio-finish-mobile-version',
  },
];

const main = document.querySelector('.my-menu');
const dynamicWork = document.querySelector('.works');
const modalView = document.querySelector('.bg-modal');
function openMain() {
  main.style.visibility = 'visible';
}

function closeMain() {
  main.style.visibility = 'hidden';
}

function closeModal() {
  modalView.style.visibility = 'hidden';
}

function openModal(id) {
  modalView.style.visibility = 'visible';
  for (let i = 0; i < array.length; i += 1) {
    if (id === array[i].id) {
      modalView.innerHTML = `
      <div class="model_content" id="modelcontent">
      <div class="model_header">
          <h2 class="project_title">${array[i].name}</h2>
          <span onclick="closeModal()" class="crossBtn">&times;</span>
      </div>
      <ul class="info_list">
          <li class="item1">${array[i].featured[0]}</li>
          <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[1]}</span></li>
          <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[2]}</span></li>
      </ul>
      <img class="img_project" src=${array[i].image} alt="project">
      <img class="img_desktop" src=${array[i].imageDesktop} alt="project desktop screenshot">
      <p class="project_description">${array[i].longDescription}</p>
      
      <ul class="tech_list">
          <li>${array[i].technologies[0]}</li>
          <li class="margin_li">${array[i].technologies[1]}</li>
          <li class="margin_li">${array[i].technologies[2]}</li>
      </ul>
      <div class="boxxx"><p class="project_descriptiondesk">${array[i].longDescriptiondesk}</p>
      <ul class="tech_listdesk">
          <li>${array[i].technologiesdesk[0]}</li>
          <li class="margin_li">${array[i].technologiesdesk[1]}</li>
          <li class="margin_li">${array[i].technologiesdesk[2]}</li></ul>
          <ul class="tech_listdesk1">
          <li class="margin_li">${array[i].technologiesdesk[4]}</li>
          <li class="margin_li">${array[i].technologiesdesk[5]}</li>
          <li class="margin_li">${array[i].technologiesdesk[6]}</li>
      </ul>
      <img src="./img/border_line.png" alt="border line" class="button_line">
      <div class="buttons">
          <a class="model_btn live" href=${array[i].live_version}>See live<img class="_icon" src="./img/Icon.svg" alt="live icon"></a>
          <a class="model_btn source" href=${array[i].source_link}>See project<img class="_icon" src="./img/Vector.svg" alt="github icon"></a>
      </div>
      </div>
  </div>`;
    }
  }
}
openMain();
closeMain();
openModal();
closeModal();
for (let i = 0; i < array.length; i += 1) {
  dynamicWork.innerHTML += `<div class="works-container">
  <div class="grid" id="work-1">
  <div id=${array[i].id} class="item-1">
  <img src=${array[i].image} alt="my tonic project"></div>
  <div class="desk-item-1"><img class="img" src=${array[i].imageDesktop} alt="my tonic project"></div>
  <div class="desk-item-2">
    <div class="item-2">
      <h2>${array[i].name}</h2>
    </div>
     <div class="item-2-desk">
      <h2>${array[i].namedesk}</h2>
    </div>
    <div class="item-3">
      <ul class="c-b-2015">
        <li><a href="#" class="canopy">${array[i].featured[0]}</a></li>
      <li><a href="#"><img src="img/dot.svg" alt="dot"></a></li>
      <li><a href="#" class="bed">${array[i].featured[1]}</a></li>
      <li><a href="#"><img src="img/dot.svg" alt="dot"></a></li>
      <li><a href="#" class="year">${array[i].featured[2]}</a></li>
    </ul></div>
    <div class="item-3-desk">
              <ul class="c-b-2015-desk">
                <li><a href="#" class="canopy">${array[i].featureddesk[0]}</a></li>
              <li><a href="#"><img src="img/dot.svg" alt="dot"></a></li>
              <li><a href="#" class="bed">${array[i].featureddesk[1]}</a></li>
              <li><a href="#"><img src="img/dot.svg" alt="dot"></a></li>
              <li><a href="#" class="year">${array[i].featureddesk[2]}</a></li>
            </ul></div>
            <div class="item-4"><p>${array[i].shortDescription}</p></div>
            <div class="item-4-desk"><p>${array[i].shortDescriptiondesk}</p></div>           
            <div class="item-5">
              <ul class="prog-lang">
                <li class="pl"><a href="#">${array[i].technologies[0]}</a></li>
                <li class="pl"><a href="#">${array[i].technologies[1]}</a></li>
                <li class="pl"><a href="#">${array[i].technologies[2]}</a></li>
              </ul></div>
              <div class="item-5-desk">
                <ul class="prog-lang">
                  <li class="pl"><a href="#">${array[i].technologiesdesk[0]}</a></li>
                  <li class="pl"><a href="#">${array[i].technologiesdesk[3]}</a></li>
                  <li class="pl"><a href="#">${array[i].technologiesdesk[1]}</a></li>
                  <li class="pl"><a href="#">${array[i].technologiesdesk[2]}</a></li>
                </ul>
              </div>
            <div class="item-6">
            <button id=${array[i].id} onclick="openModal(this.id)"><a  href="#modal">See Project</a></button>
            </div>
  </div>
</div>
</div>
  `;
}
