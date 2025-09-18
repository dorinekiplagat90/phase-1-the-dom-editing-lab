// index.js
document.addEventListener("DOMContentLoaded", () => {
  // Create h1 element
  const h1 = document.createElement("h1");
  h1.textContent = "Heading";

  // Create p element with strong, em, and a tags
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "Bold text";
  const em = document.createElement("em");
  em.textContent = "italic text";
  const a = document.createElement("a");
  a.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/HTML");
  a.textContent = "link";
  
  // Append strong, em, and a to p
  p.appendChild(strong);
  p.appendChild(document.createTextNode(" and "));
  p.appendChild(em);
  p.appendChild(document.createTextNode(" with a "));
  p.appendChild(a);
  p.appendChild(document.createTextNode("."));

  // Create table element
  const table = document.createElement("table");

  // Append all elements to the body
  document.body.appendChild(h1);
  document.body.appendChild(p);
  document.body.appendChild(table);
});