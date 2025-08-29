# Handsontable Renderers Boilerplate

A boilerplate library for custom cell renderers for [Handsontable](https://handsontable.com/) (v6.2.0). This project provides reusable renderers for text, badge, date, image, link, and more, making it easy to extend Handsontable tables with custom cell formatting.

## Features

- **Text Renderer**: Basic and advanced text formatting
- **Badge Renderer**: Display values as styled badges
- **Date Renderer**: Format dates, including localization and custom formats
- **Image Renderer**: Show images in table cells
- **Link Renderer**: Render clickable links
- **Additional Renderers**: Conditional color, tooltips, multi-line, price, integer formatting, and more
- **Formatter Utilities**: Helper functions for value formatting


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

Explore the `examples/` folder for ready-to-use HTML demos. Each example demonstrates a specific renderer or feature:

- [basic.html](./examples/basic.html) – Text renderer
- [badge.html](./examples/badge.html) – Badge renderer
- [badge-advanced.html](./examples/badge-advanced.html) – Advanced badge renderer
- [date.html](./examples/date.html) – Date renderer
- [date-advanced.html](./examples/date-advanced.html) – Advanced date renderer
- [image.html](./examples/image.html) – Image renderer
- [text-advanced.html](./examples/text-advanced.html) – Advanced text renderers
- [renderers-formatters.html](./examples/renderers-formatters.html) – Renderers with formatters usage
- [dist-build-example.html](./examples/dist-build-example.html) – Using renderers from the dist build


## Customization

You can extend or modify renderers in `src/renderers/` and add new helpers in `src/utils/formatters.js`. The code is modular and easy to adapt for your own requirements.

## Tribute to Handsontable

This project is built on top of the amazing [Handsontable](https://handsontable.com/) library. Handsontable is a powerful JavaScript data grid that makes working with tables and spreadsheets in web applications a joy. We deeply appreciate the work of the Handsontable team and their commitment to open source and developer experience. If you find this project useful, please consider supporting or contributing to Handsontable as well!

You can learn more and get started with Handsontable at [handsontable.com](https://handsontable.com/).

## License

This project is licensed under the GNU General Public License v3.0.

## Contributing

Contributions are welcome! If you have ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.
