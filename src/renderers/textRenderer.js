export function textRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  td.innerHTML = value;
}

// Custom text wrap renderer
export function textWrapRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.style = 'text-overflow: ellipsis; cursor: help;';
  td.className = 'htNoWrap';
  td.setAttribute('title', escaped);
  td.innerHTML = escaped;
  return td;
}

// Custom renderer for green background
export function greenRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.innerHTML = escaped;
  td.style.background = '#e8f9e5';
  return td;
}

export function someRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.innerHTML = "<span class='show-lager-reservation' data-key=" + escaped + ">" + escaped + "</span>";
  return td;
}

// Custom price renderer (2 decimal places, comma as thousands separator)
export function formatNumberRender(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.className = 'htRight htMiddle';
  td.style.backgroundColor = '#e8f9e5';
  td.innerHTML = parseFloat(escaped).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return td;
}

export function formatNumberWithoutColorRender(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.className = 'htRight htMiddle';
  td.innerHTML = parseFloat(escaped).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return td;
}

// Custom renderer for integer formatting - rounds down
export function integerFormatterRenderer(instance, td, row, col, prop, value, cellProperties) {
  if (typeof value === 'number') {
    value = Math.floor(value);
  } else if (typeof value === 'string') {
    value = parseFloat(value.replace(',', ''));
    if (isNaN(value)) {
      td.innerHTML = value;
      return td;
    } else {
      value = Math.floor(value);
    }
  } else {
    td.innerHTML = value;
    return td;
  }
  td.className = 'htRight htMiddle';
  td.innerHTML = value;
  return td;
}

// Custom renderer for integer ceil
export function integerCeilRenderer(instance, td, row, col, prop, value, cellProperties) {
  if (typeof value === 'string') {
    value = value.replace(/[^0-9.\-]/g, '');
  }
  value = parseFloat(value) || 0;
  value = Math.ceil(value).toString();
  td.className = "htRight";
  td.innerHTML = value;
  return td;
}

// Custom note renderer (displaying a comment icon)
export function noteRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.style = "cursor:help";
  if (!escaped) {
    td.innerHTML = '';
  } else {
    td.setAttribute('title', escaped);
    td.className = 'htMiddle htCenter';
    td.innerHTML = '<i class="fas fa-comment table-icon icon-light-blue"></i>';
  }
  return td;
}

// Custom renderer for price (2 decimal places, comma as thousands separator)
export function rendererPrice(instance, td, row, col, prop, value, cellProperties) {
  var data = parseFloat(value).toFixed(2).replace(',', '.').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  td.innerHTML = data;
  return td;
}

export function rendererPrice2(instance, td, row, col, prop, value, cellProperties) {
  var data = parseFloat(value).toFixed(2);
  td.innerHTML = data;
  return td;
}

// Custom renderer for integer formatting - rounds down
export function formatFooterNumber(td, value) {
  td.className = 'htRight htMiddle';
  td.textContent = parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

// Custom link renderer
export function linkRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.className = 'htMiddle htLeft';
  if (escaped) {
    td.innerHTML = `<a href="${escaped}" target="_blank" style="color:#1a73e8; text-decoration:underline;">${escaped}</a>`;
  } else {
    td.innerHTML = '';
  }
  return td;
}

// Custom renderer with icon
export function textWithIconRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  var iconClass = cellProperties.iconClass || 'fas fa-info-circle';
  td.className = 'htMiddle htLeft';
  td.innerHTML = `<i class="${iconClass} table-icon" style="margin-right:5px;"></i>${escaped}`;
  return td;
}

// Custom badge renderer
export function badgeRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  var color = cellProperties.badgeColor || '#007bff';
  td.className = 'htMiddle htCenter';
  if (escaped) {
    td.innerHTML = `<span class="badge" style="background-color:${color}; color:#fff; padding:2px 6px; border-radius:4px;">${escaped}</span>`;
  } else {
    td.innerHTML = '';
  }
  return td;
}

// Custom tooltip renderer
export function tooltipRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.className = 'htMiddle htLeft';
  td.innerHTML = escaped;
  if (escaped) {
    td.setAttribute('title', escaped);
  }
  return td;
}

// Custom conditional color renderer
export function conditionalColorRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.className = 'htMiddle htRight';
  td.innerHTML = escaped;
  if (parseFloat(value) > 0) {
    td.style.color = 'green';
  } else if (parseFloat(value) < 0) {
    td.style.color = 'red';
  } else {
    td.style.color = 'black';
  }
  return td;
}

// Custom multi-line renderer
export function multiLineRenderer(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  td.style.whiteSpace = 'pre-line';
  td.style.wordBreak = 'break-word';
  td.innerHTML = escaped;
  return td;
}
