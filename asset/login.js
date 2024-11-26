document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'senha123') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('game').style.display = 'block';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});