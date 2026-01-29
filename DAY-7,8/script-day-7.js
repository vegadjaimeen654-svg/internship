/* ================================
   INTERSECTION OBSERVER
================================ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

/* ================================
   ELEMENT GROUPS
================================ */
document.querySelectorAll(
  ".service-card, .portfolio-img, .team-card, .step"
).forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});

/* HERO TEXT */
document.querySelectorAll("#home h1, #home p, #home a").forEach(el => {
  el.classList.add("reveal-left");
  observer.observe(el);
});

/* ABOUT SECTION */
document.querySelectorAll("#about img").forEach(el => {
  el.classList.add("reveal-scale");
  observer.observe(el);
});
document.querySelectorAll("#about h2, #about p").forEach(el => {
  el.classList.add("reveal-right");
  observer.observe(el);
});

/* CONTACT BOX */
document.querySelectorAll("#contact > div").forEach(el => {
  el.classList.add("reveal-scale");
  observer.observe(el);
});
