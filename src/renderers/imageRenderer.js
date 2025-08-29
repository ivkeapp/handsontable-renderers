export function imageRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.innerHTML = `<img src="${value}" alt="image" style="max-width:100px;max-height:40px;" />`;
}
