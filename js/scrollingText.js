const texts = [...document.querySelectorAll('.scrolling-text')];

texts.forEach((text) => {
  const duration = Math.floor(text.getBoundingClientRect().width / 180);
  text.style.animationDuration = `${duration}s`;
});
