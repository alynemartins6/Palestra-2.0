const themes = document.querySelectorAll('.theme');

themes.forEach(theme => {
  const button = theme.querySelector('.btn-signup button');
  const themeTitle = theme.querySelector('.theme-title').textContent;
  const themeDate = theme.querySelector('.theme-date').textContent;

  button.addEventListener('click', () => {
    // Exibe mensagem de sucesso
    alert(`Inscrição realizada com sucesso para a palestra "${themeTitle}"!`);

    button.disabled = true;
  });
});