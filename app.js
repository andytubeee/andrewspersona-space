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
