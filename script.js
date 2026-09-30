function notify(message) {
  const notice = document.getElementById('notice');
  notice.textContent = message;
  notice.classList.add('show');
  setTimeout(() => notice.classList.remove('show'), 2800);
}

function pick(category) {
  const searchBox = document.getElementById('searchBox');
  searchBox.value = category;
  document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
  notify('Showing ' + category + ' on SaveWise 🔎');
}

function searchProducts() {
  const searchBox = document.getElementById('searchBox');
  const q = searchBox.value.trim();

  if (!q) {
    notify('Type something to search 🔎');
    return;
  }

  document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
  notify('Searching SaveWise for: ' + q + ' 🔎');
}
