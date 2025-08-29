// Helper functions for formatting values
export function uppercase(value) {
  return String(value).toUpperCase();
}

export function truncate(value, length = 10) {
  return String(value).length > length ? String(value).slice(0, length) + '...' : value;
}

// Lowercase
export function lowercase(value) {
  return String(value).toLowerCase();
}

// Capitalize first letter
export function capitalize(value) {
  value = String(value);
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

// Format date (YYYY-MM-DD)
export function formatDate(value) {
  const date = new Date(value);
  if (isNaN(date)) return value;
  return date.toISOString().slice(0, 10);
}

// Format number with thousands separator and fixed decimals
export function formatNumber(value, decimals = 2) {
  const num = parseFloat(value);
  if (isNaN(num)) return value;
  return num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// Pad string left/right
export function pad(value, length, char = ' ', left = true) {
  value = String(value);
  if (left) {
    return value.padStart(length, char);
  } else {
    return value.padEnd(length, char);
  }
}

// Currency formatter
export function currency(value, symbol = '$', decimals = 2) {
  const num = parseFloat(value);
  if (isNaN(num)) return value;
  return symbol + num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// Percent formatter
export function percent(value, decimals = 2) {
  const num = parseFloat(value);
  if (isNaN(num)) return value;
  return (num * 100).toFixed(decimals) + '%';
}

// Camel case
export function camelCase(value) {
  return String(value)
    .replace(/(?:^|\s|_|-)(\w)/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/\s|_|-/g, '')
    .replace(/^([A-Z])/, (m) => m.toLowerCase());
}
