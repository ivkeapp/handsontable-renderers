export function linkRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.innerHTML = `<a href="${value}" target="_blank">${value}</a>`;
}
