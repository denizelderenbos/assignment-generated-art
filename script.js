const colors = [
  [56, 63, 81],
  [221, 219, 241],
  [60, 79, 118],
  [209, 190, 176],
  [171, 159, 157]
];

for (i = 0; i < 1200; i++) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const viewbox = document.createAttribute("viewbox");
  const width = document.createAttribute("width");
  const height = document.createAttribute("height");
  viewbox.value = "0 0 500 500";
  width.value = "500";
  height.value = "500";
  svg.setAttributeNode(viewbox);
  svg.setAttributeNode(width);
  svg.setAttributeNode(height);

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  const cx = document.createAttribute("cx");
  const cy = document.createAttribute("cy");
  const r = document.createAttribute("r");
  const fill = document.createAttribute("fill");


  r.value = Math.floor(Math.random() * 15) + 3;
  cx.value = (Math.floor(Math.random() * 485) + 15);
  cy.value = Math.floor(Math.random() * 485) + 15;
  const randomIndex = Math.floor(Math.random() * colors.length);
  fill.value = 'rgb(' + colors[randomIndex] + ')';

  circle.setAttributeNode(cx);
  circle.setAttributeNode(cy);
  circle.setAttributeNode(r);
  circle.setAttributeNode(fill);

  svg.appendChild(circle);
  console.log(svg);
  document.body.appendChild(svg);
}