document.addEventListener('DOMContentLoaded', () => {
  const languagesMenu = document.querySelector('.languagesxx');
  const arrowLanguages = document.querySelector('.others-arrow');
  const frameworksMenu = document.querySelector('.frameworksxx');
  const arrowFrameworks = document.querySelector('.others-arrow-1');
  const skillsMenu = document.querySelector('.skillsxx');
  const arrowSkills = document.querySelector('.others-arrow-2');

  arrowLanguages.addEventListener('click', () => {
    languagesMenu.classList.toggle('open');
    arrowLanguages.classList.toggle('open');
  });

  arrowFrameworks.addEventListener('click', () => {
    frameworksMenu.classList.toggle('open');
    arrowFrameworks.classList.toggle('open');
  });

  arrowSkills.addEventListener('click', () => {
    skillsMenu.classList.toggle('open');
    arrowSkills.classList.toggle('open');
  });
});

  const resumeButton = document.querySelector('.resume');

  resumeButton.addEventListener('click', () => {
    window.open('https://docs.google.com/document/d/14NXJBul3J7lE1JGAivwDjxdtZ9ThdYaYddvdL_k_C9M/edit?usp=sharing', '_blank');
  });
