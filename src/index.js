document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guest-form");
  const nameInput = document.getElementById("guest-name");
  const categoryInput = document.getElementById("guest-category");
  const guestList = document.getElementById("guest-list");

  let guestCount = 0;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const category = categoryInput.value;

    if (!name) return;

    if (guestCount >= 10) {
      alert("Guest list limit reached (10 people)");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${name} (${category})</span>
      <button class="remove-btn">Remove</button>
      <button class="rsvp-btn">Not Attending</button>
    `;
    li.classList.add(category.toLowerCase());

    guestList.appendChild(li);
    guestCount++;

    // Remove guest
    li.querySelector(".remove-btn").addEventListener("click", () => {
      li.remove();
      guestCount--;
    });

    // Toggle RSVP
    li.querySelector(".rsvp-btn").addEventListener("click", (e) => {
      const btn = e.target;
      btn.textContent = btn.textContent === "Attending" ? "Not Attending" : "Attending";
    });

    nameInput.value = "";
  });
});
