document.addEventListener('DOMContentLoaded', () => {
  const languagesMenu = document.querySelector('.languagesxx');
  const arrowLanguages = document.querySelector('.others-arrow');
  const frameworksMenu = document.querySelector('.framework');
  const arrowFrameworks = document.querySelector('.others-arrow-1');
  const frameworksList = document.querySelector('.frameworksxx');
  const skillsMenu = document.querySelector('.skills');
  const arrowSkills = document.querySelector('.others-arrow-2');
  const skillsList = document.querySelector('.skillsxx');

  arrowLanguages.addEventListener('click', () => {
    languagesMenu.classList.toggle('open');
    arrowLanguages.classList.toggle('open');
  });

  arrowFrameworks.addEventListener('click', () => {
    frameworksMenu.classList.toggle('open');
    arrowFrameworks.classList.toggle('open');
    frameworksList.classList.toggle('open');
  });

  arrowSkills.addEventListener('click', () => {
    skillsMenu.classList.toggle('open');
    arrowSkills.classList.toggle('open');
    skillsList.classList.toggle('open');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const resumeButton = document.querySelector('.resume');

  resumeButton.addEventListener('click', () => {
    window.open('https://docs.google.com/document/d/14NXJBul3J7lE1JGAivwDjxdtZ9ThdYaYddvdL_k_C9M/edit?usp=sharing', '_blank');
  });
});
