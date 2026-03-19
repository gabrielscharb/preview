const tabButtons = Array.from(document.querySelectorAll('[data-screen]'));
const panels = Array.from(document.querySelectorAll('[data-screen-panel]'));

function activateScreen(screen) {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.screen === screen);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.screenPanel === screen);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activateScreen(button.dataset.screen);
  });
});

activateScreen('login');
