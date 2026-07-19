const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReduced) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-revealed", "true");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    revealObserver.observe(el);
  });

  document.querySelectorAll("[data-stagger]").forEach((parent) => {
    const children = parent.querySelectorAll("[data-reveal]");
    children.forEach((child, i) => {
      child.style.setProperty("--stagger-delay", `${i * 80}ms`);
    });
  });
}
