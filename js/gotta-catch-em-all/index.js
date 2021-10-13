/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
const selectedTypes = document.querySelectorAll("form label input");
const nameInput = document.querySelector("#pokemon-name");

function renderPokemons(pokemons) {
  pokemonsContainer.innerHTML = `<div class="pokemon-header"><p>Image</p> <p>Name</p> <p>Types</p></div>`;
  pokemons.map(({ name, types, image }) => {
    const pokemon = `<div class="pokemon-item"><img  src='${image}'/> <p> ${name}</p> <p> ${types.join(", ")}</p></div>`;
    pokemonsContainer.innerHTML += pokemon;
  });
}
renderPokemons(pokemons);
// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
// renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html.
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  const filtersOn = [...selectedTypes].filter((s) => s.checked).map((filter) => filter.id);
  let inputValue = nameInput.value.toLowerCase();

  let filteredPokemons = pokemons.filter(({ types }) => types.some((n) => filtersOn.includes(n)));
  filteredPokemons = filteredPokemons.filter(({ name }) => name.toLowerCase().includes(inputValue));
  return filteredPokemons;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  const filteredPokemons = filterPokemons(pokemons);
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filteredPokemons);
}
form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
