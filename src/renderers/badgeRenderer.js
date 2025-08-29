export function badgeRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.background = "#eee";
  td.style.borderRadius = "12px";
  td.style.padding = "4px 8px";
  td.innerHTML = `<span class="badge">${value}</span>`;
}
