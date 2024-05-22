document.getElementById('revealButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    var floatingHearts = document.getElementById('floatingHearts');
    message.style.display = 'block';
    floatingHearts.style.display = 'block';
    this.style.display = 'none';
});
