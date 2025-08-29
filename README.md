# Handsontable Renderers Boilerplate

A boilerplate library for custom cell renderers for [Handsontable](https://handsontable.com/) (v6.2.0). This project provides reusable renderers for text, badge, date, image, link, and more, making it easy to extend Handsontable tables with custom cell formatting.

## Features

- **Text Renderer**: Basic and advanced text formatting.
- **Badge Renderer**: Display values as styled badges.
- **Date Renderer**: Format dates, including localization and custom formats.
- **Image Renderer**: Show images in table cells.
- **Link Renderer**: Render clickable links.
- **Additional Renderers**: Conditional color, tooltips, multi-line, price, integer formatting, and more.
- **Formatter Utilities**: Helper functions for value formatting.

## Getting Started

### Installation

Clone the repository and install dependencies:

```powershell
git clone https://github.com/ivkeapp/handsontable-renderers.git
cd handsontable-renderers
npm install
```

### Build

To build the library:

```powershell
npm run build
```

The output will be in `dist/handsontable-renderers.min.js`.

### Development

To start a local server for examples:

```powershell
npm start
```

Visit [http://localhost:5177/examples/basic.html](http://localhost:5177/examples/basic.html) in your browser.

## Usage

Import the desired renderer in your project:

```javascript
import { textRenderer, badgeRenderer, dateRenderer, imageRenderer, linkRenderer } from 'handsontable-renderers-boilerplate';
```

Use the renderer in your Handsontable column definition:

```javascript
columns: [
	{ renderer: textRenderer },
	{ renderer: badgeRenderer },
	{ renderer: dateRenderer },
	{ renderer: imageRenderer },
	{ renderer: linkRenderer }
]
```

## Examples

See the `examples/` folder for ready-to-use HTML demos:

- `basic.html` – Text renderer
- `badge.html` – Badge renderer
- `date.html`, `date-advanced.html` – Date renderers
- `image.html` – Image renderer
- `text-advanced.html` – Advanced text renderers

## Customization

You can extend or modify renderers in `src/renderers/` and add new helpers in `src/utils/formatters.js`.

## License

GNU v3
