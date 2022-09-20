const texts = [...document.querySelectorAll('.scrolling-text')];

texts.forEach((text) => {

  if(window.innerWidth > 1200) {
    const duration = Math.floor(text.getBoundingClientRect().height / 180);
    text.style.animationDuration = `${duration}s`;
  } else {
    const duration = Math.floor(text.getBoundingClientRect().width / 180);
    text.style.animationDuration = `${duration}s`;
  }
});
