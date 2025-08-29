export function dateRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  let date = value ? new Date(value) : null;
  td.style.color = "#1565c0";
  td.style.fontWeight = "bold";
  td.innerHTML = date && !isNaN(date) ? date.toLocaleDateString() : "";
}

// Custom renderer for date only format (requires moment.js)
export function dateFormat(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  if (escaped !== '') {
    td.innerHTML = window.moment ? moment(escaped).format("YYYY-MM-DD") : escaped;
  } else {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
  }
  return td;
}

// Custom renderer for date and time format (requires moment.js)
export function dateTimeFormat(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  if (escaped !== '') {
    td.innerHTML = window.moment ? moment(escaped).format("YYYY-MM-DD HH:mm") : escaped;
  } else {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
  }
  return td;
}

// Localized date renderer using native JS
export function localizedDateRendererNative(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  if (escaped !== '') {
    var date = new Date(escaped);
    if (!isNaN(date)) {
      td.innerHTML = new Intl.DateTimeFormat(navigator.language).format(date);
    } else {
      td.innerHTML = escaped; // fallback for invalid date
    }
  } else {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
  }
  return td;
}

// Localized date renderer with custom locale
export function localizedDateRendererWithLocaleNative(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  var locale = cellProperties.locale || navigator.language;
  if (escaped !== '') {
    var date = new Date(escaped);
    if (!isNaN(date)) {
      td.innerHTML = new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
    } else {
      td.innerHTML = escaped;
    }
  } else {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
  }
  return td;
}

// Localized date renderer with custom format options
export function localizedDateCustomFormatNative(instance, td, row, col, prop, value, cellProperties) {
  var escaped = Handsontable.helper.stringify(value);
  var locale = cellProperties.locale || navigator.language;
  var options = cellProperties.dateOptions || { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  if (escaped !== '') {
    var date = new Date(escaped);
    if (!isNaN(date)) {
      td.innerHTML = new Intl.DateTimeFormat(locale, options).format(date);
    } else {
      td.innerHTML = escaped;
    }
  } else {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
  }
  return td;
}
