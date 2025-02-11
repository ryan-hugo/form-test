var form = document.getElementById('form');

form.addEventListener('submit', function(event){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  const DadosUsuarios = {
    name: name,
    email: email,
    age: age
  }

  dados_json = JSON.stringify(DadosUsuarios);

  console.log('Nome: ' + name +
    '\n' + 'E-mail: ' + email +
    '\n' + 'Idade: ' + age
  )

  console.log(dados_json)
  event.preventDefault();
})

form.addEventListener('reset', function(event){
  
  event.preventDefault();
})