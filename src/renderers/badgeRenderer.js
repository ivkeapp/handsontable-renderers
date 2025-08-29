export function badgeRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.style.background = "#eee";
  td.style.borderRadius = "12px";
  td.style.padding = "4px 8px";
  td.innerHTML = `<span class="badge">${value}</span>`;
}

// Customizable color badge renderer
export function colorBadgeRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  const color = cellProperties.badgeColor || '#007bff';
  td.innerHTML = `<span class="badge" style="background-color:${color}; color:#fff; padding:4px 10px; border-radius:12px; font-weight:bold;">${value}</span>`;
}

// Outline badge renderer
export function outlineBadgeRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  const color = cellProperties.badgeColor || '#007bff';
  td.innerHTML = `<span class="badge" style="background-color:transparent; color:${color}; border:2px solid ${color}; padding:4px 10px; border-radius:12px; font-weight:bold;">${value}</span>`;
}

// Icon badge renderer
export function iconBadgeRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  const color = cellProperties.badgeColor || '#007bff';
  const icon = cellProperties.iconClass || 'fas fa-star';
  td.innerHTML = `<span class="badge" style="background-color:${color}; color:#fff; padding:4px 10px; border-radius:12px; font-weight:bold;"><i class="${icon}" style="margin-right:5px;"></i>${value}</span>`;
}

// Gradient badge renderer
export function gradientBadgeRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  const gradient = cellProperties.gradient || 'linear-gradient(90deg, #ff8a65, #ffd54f)';
  td.innerHTML = `<span class="badge" style="background:${gradient}; color:#333; padding:4px 10px; border-radius:12px; font-weight:bold;">${value}</span>`;
}
