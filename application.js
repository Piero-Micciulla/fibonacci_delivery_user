const fibonacciButton = document.querySelector("#fibonacci-button");

fibonacciButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `http://localhost:3000/fibos/${
      document.querySelector("#number-position-fibonacci").value
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const screen = document.querySelector("#screen");

      screen.insertAdjacentHTML(
        "afterbegin",
        `<h3 class="text-center">At ${
          document.querySelector("#number-position-fibonacci").value
        }th position number is ${data}</h3>`
      );
      document.querySelector("#number-position-fibonacci").value = "";
    })
    .catch((error) => {
      console.log(error);
    });
});
