const array = [
  {
    id: '1',
    name: 'multyorgasmic.com',
    namedesk: 'multyorgasmic.com',
    shortDescription: 'The purpose of this application is to help you become multi-orgasmic.',
    shortDescriptiondesk: 'The purpose of this application is to help you become multi-orgasmic. Below are links to explanations and simple exercises to help you achieve this. On the Exercise page, create your own routine and keep daily journals until you become multi-orgasmic. Once you finish the exercises, you become an administrator and can join the multi-orgasmic people dating app. If you are curious why I created this page, click on the Mission link.',
    longDescription: 'The purpose of this application is to help you become multi-orgasmic. Below are links to explanations and simple exercises to help you achieve this. On the Exercise page, create your own routine and keep daily journals until you become multi-orgasmic. Once you finish the exercises, you become an administrator and can join the multi-orgasmic people dating app. If you are curious why I created this page, click on the Mission link.',
    longDescriptiondesk: `The purpose of this application is to help you become multi-orgasmic. Below are links to explanations and simple exercises to help you achieve this. On the Exercise page, create your own routine and keep daily journals until you become multi-orgasmic. Once you finish the exercises, you become an administrator and can join the multi-orgasmic people dating app. If you are curious why I created this page, click on the Mission link.

    How to satisfy a woman,
    How to Control Ejaculation,
    How to Control Menstrual Cycle,
    How to Solve Sexual Dysfunction,

    How to Achieve Orgasm - Male,
    How to Achieve Orgasm - Female,
    How to Fix Erectile Dysfunction,
    How to Clean Your Central Chanel
    `,
    featured: ['VSC', 'Full Stack', 2024],
    featureddesk: ['VSC', 'Full Stack', 2024],
    image: 'img/eveevega.png',
    imageDesktop: 'img/evega.png',
    technologies: ['Ruby on rails', 'React', 'CSS'],
    technologiesdesk: ['Ruby on rails', 'Redux', 'CSS', 'React', 'Git-Hub', 'Ruby', 'React'],
    live_version: 'https://multyorgasmic.com',
    source_link: 'https://github.com/djo1975/devise-jwt',
  },
  {
    id: '2',
    name: 'Recipe-App',
    namedesk: 'Recipe-App',
    shortDescription: 'This app keeps track of all user recipes, ingredients, and inventory. It allows the user to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what the user has and what they are missing from. ',
    shortDescriptiondesk: 'This app keeps track of all user recipes, ingredients, and inventory. It allows the user to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what the user has and what they are missing from a recipe. ',
    longDescription: 'This app keeps track of all user recipes, ingredients, and inventory. It allows the user to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what the user has and what they are missing from a recipe. ',
    longDescriptiondesk: 'This app keeps track of all user recipes, ingredients, and inventory. It allows the user to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what the user has and what they are missing from a recipe. The app allows users to make the recipes public so that anyone can access them. ',
    featured: ['VSC', 'Full Stack Dev', 2023],
    featureddesk: ['VSC', 'Full Stack Dev', 2023],
    image: 'img/recipe.png',
    imageDesktop: 'img/recipe.png',
    technologies: ['Ruby on rails', 'CSS', 'HTML'],
    technologiesdesk: ['Ruby on rails', 'HTML', 'CSS', 'Git-Hub', 'SCSS', 'Ruby', 'Git-Hub'],
    live_version: 'https://djo1975.github.io/Portfolio-finish-mobile-version/#/',
    source_link: 'https://github.com/djo1975/Recipe-app',
  },
  {
    id: '3',
    name: 'Budget-App',
    namedesk: 'Budget-App',
    shortDescription: 'Budget App is a Ruby on Rails capstone project which you can create new categories, you can write new transactions and deploy it the categories and finally you can control how much money you spend each category. ',
    shortDescriptiondesk: 'Budget App is a Ruby on Rails capstone project which you can create new categories, you can write new transactions and deploy it the categories and finally you can control how much money you spend each category. ',
    longDescription: 'Budget App is a Ruby on Rails capstone project which you can create new categories, you can write new transactions and deploy it the categories and finally you can control how much money you spend each category. ',
    longDescriptiondesk: 'Budget App is a Ruby on Rails capstone project which you can create new categories, you can write new transactions and deploy it the categories and finally you can control how much money you spend each category. ',
    featured: ['Mobile', 'Full Stack Dev', 2023],
    featureddesk: ['Mobile', 'Full Stack Dev', 2023],
    image: 'img/budget.png',
    imageDesktop: 'img/Budget-app.png',
    technologies: ['Ruby on rails', 'CSS', 'HTML'],
    technologiesdesk: ['Ruby on rails', 'HTML', 'CSS', 'Git-Hub', 'SCSS', 'Ruby', 'Git-Hub'],
    live_version: 'https://mitra-6mqk.onrender.com/',
    source_link: 'https://github.com/djo1975/Budget-app.git',
  },
  {
    id: '4',
    name: 'Space Travel Hub ',
    namedesk: 'Space Travel Hub ',
    shortDescription: 'Space Travel Hub is a visually stunning website built with React and Redux, offering a comprehensive resource for space exploration. It features articles, news updates, imagery, videos, interactive maps, and personalized user profiles, creating an immersive and engaging experience. ',
    shortDescriptiondesk: 'Space Travel Hub is a visually stunning website built with React and Redux, offering a comprehensive resource for space exploration. It features articles, news updates, imagery, videos, interactive maps, and personalized user profiles, creating an immersive and engaging experience. ',
    longDescription: 'The primary goal of Space Travel Hub is to provide visitors with a comprehensive resource for all things related to space exploration. ',
    longDescriptiondesk: 'The primary goal of Space Travel Hub is to provide visitors with a comprehensive resource for all things related to space exploration. The website boasts a vast array of content, ranging from in-depth articles and news updates to captivating imagery and videos from space missions. Whether users are space enthusiasts, researchers, or simply curious individuals, they can find a wealth of information and entertainment within the site.',
    featured: ['VSC', 'Front End Dev', 2023],
    featureddesk: ['VSC', 'Front End Dev', 2023],
    image: 'img/rakete.png',
    imageDesktop: 'img/rakete.png',
    technologies: ['React', 'CSS', 'Redux'],
    technologiesdesk: ['React', 'CSS', 'JavaScript', 'Redux', 'Git-Hub', 'SCSS', 'Bootstraps'],
    live_version: 'https://space-travel-hub-react-redux.netlify.app/',
    source_link: 'https://github.com/rivasbolinga/Space-Travel-Hub',
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
