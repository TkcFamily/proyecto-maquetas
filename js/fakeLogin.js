const fakeLogin = () => {
  let username = document.querySelector('#nameInput').value;
  let pass = document.querySelector('#passwordInput').value;

  if((username === 'admin') && (pass === 'admin')) {
    window.location.href = './admin/cursos_admin.html'
  } else {
    window.location.href = './user/cursos_user.html'
  }
}