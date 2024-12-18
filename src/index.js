function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer.replace("```", ""),
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "fbeo6b3af9d08bb94a5d7e475ct03604";
  let prompt = `User instructions are: Generate a hiaku about ${instructionsInput.value}`;
  let context =
    "You are a hiaku poem expert and love to write poems in the hiaku style. Your mission is to write a poem, in the hiaku style, on the topic provided by the `user instructions`. Make sure to listen to the user instructions. Please present the hiaku in HTML format with each line seperated by a <br /> and present the test of the poem in <em> format. Please don't mention html or HTML in your response. Sign off the poem at the end with `SheCodes AI` inside a <strong> element and seperated from the poem with a <br />";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating you a hiaku, please wait... </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
