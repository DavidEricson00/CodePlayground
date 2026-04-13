const form = document.querySelector('#profile-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  //Vars
  const name = form.querySelector('#name').value;
  const age = form.querySelector('#age').value;
  const color = form.querySelector('#color').value;

  const mood = form.querySelector('#mood').value;
  let moodText = ''
  if (mood === 'sad') {
    moodText = 'Triste 🙁'
  } else if (mood === 'neutral') {
    moodText = 'Neutro 😐'
  } else if (mood === 'happy') {
    moodText = 'Feliz 😀'
  }

  let hobbies = [];
  const hobbiesMap = {
    draw: "Desenhar",
    read: "Ler",
    music: "Música",
    sports: "Esportes",
    play: "Jogar",
    travel: "Viajar"
  }
  const checkBoxes = form.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach(cb => {
    if (cb.checked) {
      hobbies.push(cb.value);
    };
  });
  const hobbiesText = hobbies.map(h => hobbiesMap[h]).join(", ")

  const genderSelected = form.querySelector('input[name="gender"]:checked');
  const gender = genderSelected ? genderSelected.value : null;
  let genderText = ''
  if (gender === 'male') {
    genderText = 'Masculino'
  } else if (gender === 'female') {
    genderText = 'Feminino'
  }

  const bio = form.querySelector('#bio').value;
  
  // InnerHTML
  const nameDiv = document.createElement('div');
  nameDiv.innerHTML = `<p>Nome: ${name}</p>`
  
  const ageDiv = document.createElement('div');
  ageDiv.innerHTML = `<p>Idade: ${age} anos</p>`
  
  const moodDiv = document.createElement('div');
  moodDiv.innerHTML = `<p>Se sentindo ${genderText}</p>`

  const hobbiesDiv = document.createElement('div');
  hobbiesDiv.innerHTML = `<p>Hobbies: ${hobbiesText}</p>`

  const genderDiv = document.createElement('div');
  genderDiv.innerHTML = `<p>Sexo: ${gender}</p>`

  const bioDiv = document.createElement('div');
  bioDiv.innerHTML = `<p>${bio}</p>`

  const profile = document.querySelector('#profile');

  profile.innerHTML = ""

  profile.appendChild(nameDiv);
  profile.appendChild(ageDiv);
  profile.appendChild(moodDiv);
  profile.appendChild(hobbiesDiv);
  profile.appendChild(genderDiv);
  profile.appendChild(bioDiv);

  profile.style.backgroundColor = color;

  form.reset();
})
