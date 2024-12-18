function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Over the wintry Forest, \nwinds howl in rage \nWith no leaves to blow.",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
