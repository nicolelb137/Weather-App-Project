function submitCitySearch(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#user-entered-city");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = citySearchInput.value;
}

let searchFormElement = document.querySelector("#city-search");
searchFormElement.addEventListener("submit", submitCitySearch);
