function updateTime () {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  document.querySelector('#hours').innerText = String(hours).padStart(2, '0');
  document.querySelector('#minutes').innerText = String(minutes).padStart(2, '0');
  document.querySelector('#seconds').innerText= String(seconds).padStart(2, '0');
  document.querySelector('#ampm').innerText = ampm;
}

setInterval(updateTime, 1000);
