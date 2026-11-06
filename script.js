// Highlight toggles: switch facts, interpretations or predictions on and off.
// Without JavaScript every highlight stays visible, so the page still works.

const buttons = document.querySelectorAll(".key-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const kind = button.dataset.kind;                       // "fact", "view" or "prediction"
    const isOn = button.getAttribute("aria-pressed") === "true";

    // Flip the button state (screen readers announce "pressed" / "not pressed")
    button.setAttribute("aria-pressed", String(!isOn));

    // Add or remove a class on <body>; the CSS does the rest
    document.body.classList.toggle("hide-" + kind, isOn);
  });
});
