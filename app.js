window.addEventListener('DOMContentLoaded', () => {
  alert(
    "I have implemented 0 CSS on this page, things will look unpleasant. Viewer's discretion is advised"
  );
  if (!confirm('Enter the site?')) {
    document.getElementById('hidden-image').style.display = "block";
  }
  else {
    document.getElementById('main').style.display = "block";
  }
});


const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

document.getElementById('mySite_anchor').addEventListener('click', function () {
  const responses = [
    'Yeah this is the site',
    'You are already on the site',
    "Uh, I don't know where to take you",
    'Look where you are',
  ];
  alert(randomElement(responses));
});
