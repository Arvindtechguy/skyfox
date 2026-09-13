const slides = [...document.querySelectorAll(".slide")];
const dots = document.querySelector(".dots");
const current = document.querySelector("#current");

slides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
  dot.addEventListener("click", () => slide.scrollIntoView());
  dots.append(dot);
});

const update = () => {
  const index = Math.round(window.scrollY / window.innerHeight);
  document.querySelectorAll(".dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
  current.textContent = String(Math.min(index + 1, 10)).padStart(2, "0");
};

window.addEventListener("scroll", update, { passive: true });
document.querySelector("#next").addEventListener("click", () => {
  slides[
    Math.min(
      Math.round(window.scrollY / window.innerHeight) + 1,
      slides.length - 1,
    )
  ].scrollIntoView();
});
document.querySelector("#prev").addEventListener("click", () => {
  slides[
    Math.max(Math.round(window.scrollY / window.innerHeight) - 1, 0)
  ].scrollIntoView();
});
document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown"].includes(event.key))
    document.querySelector("#next").click();
  if (["ArrowLeft", "PageUp"].includes(event.key))
    document.querySelector("#prev").click();
});

const payloadCards = [
  ["✚", "Medical AED Kit", "AED delivery from hover.", "#d9415d"],
  ["▣", "Disaster Rations Box", "Emergency food and water drops.", "#f47b35"],
  [
    "♻️🔋💧",
    "Solar Water Module",
    "Dust-aware water cleaning for panels.",
    "#d7a928",
  ],
  [
    "♻️🔋༄｡°",
    "Solar Air Module",
    "Dust-aware air cleaning for panels.",
    "#8b5cf6",
  ],
  [
    "+",
    "First Aid Box",
    "First-aid kits delivered where access is blocked.",
    "#43a047",
  ],
  [
    "📦",
    "Custom Box",
    "Flexible emergency-access payload for mission-specific needs.",
    "#73d7d0",
  ],
];

document.querySelector(".hero p").textContent =
  "Multi-purpose drone for immediate emergency response when ambulance access is delayed, during disasters, and throughout recovery.";
document.querySelector("#slide-4 .lead").textContent =
  "Skyfox uses ML dispatch to select and dock mission payload boxes from a chassis rack for immediate execution, lowering healthcare and disaster aid from hover while sensing solar-panel dust for air or water cleaning.";
document.querySelector("#slide-4 .payload-card:nth-child(2) p").textContent =
  "Bluetooth signals + AI vision detect victims for search and rescue.";
document.querySelector("#slide-5 h2").textContent =
  "From alert to autonomous action in four moves.";
document.querySelector("#slide-5 .step:nth-child(1) p").textContent =
  "ML dispatch selects the mission and docks the right payload box from the chassis rack.";
document.querySelector("#slide-5 .step:nth-child(4) p").textContent =
  "Land on the conductive pad, fast-charge, auto-swap, and relaunch without manpower.";
document.querySelector("#slide-6 .lead").textContent =
  "The complete loop enables 24/7 operation: ML dispatch, payload delivery, solar cleaning, conductive fast-charging, and automatic payload swapping.";
document.querySelector("#slide-10 .lead").textContent =
  "One autonomous platform for emergency healthcare, disaster aid, victim detection, and solar infrastructure care.";

document.querySelector(".payload-grid").innerHTML = payloadCards
  .map(
    ([icon, title, description, color]) =>
      `<article class="payload-card"><b style="color:${color}">${icon}</b><h3>${title}</h3><p>${description}</p></article>`,
  )
  .join("");

update();
