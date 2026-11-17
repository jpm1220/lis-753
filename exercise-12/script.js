const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");

buttons.forEach( function(button) { 
  button.addEventListener("click", function() {
    // hide all details divs
    details.forEach( function(item) {
      item.hidden = true;
    });

    // find and show the relevant program details
    const target = button.dataset.target;
    document.getElementById(target).hidden = false;
  });

});

const form = document.querySelector("#registration-form");
const name = document.querySelector("#name");
const program = document.querySelector("#registration-program");
const confirmation = document.querySelector("#confirmation-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const selName = name.value;
  const selProgram = program.value;
  const message = `${selName}, thanks for registering for ${selProgram}!`;
  confirmation.textContent = message;
  confirmation.hidden = false;
});