# Gleaming Galaxy Grids

Gleaming Galaxy Grids is a lightweight library for creating dynamic, responsive grid layouts with ease. It leverages CSS Grid and Flexbox for modern, flexible layouts.

## Features

- Easy to use and integrate
- Fully responsive grids
- Customizable grid columns, gap, and container max-width

## Installation

```bash
npm install gleaming-galaxy-grids
```

## Usage

Import `gleaming-galaxy-grids` into your project and use it to generate a grid layout.

```javascript
import generateGrid from 'gleaming-galaxy-grids';

// Customize your grid
const customGridCSS = generateGrid({
columns: 12, // Number of columns
gap: '20px', // Gap between columns
maxWidth: '1200px' // Max container width
});

// Apply customGridCSS to your page
```

## Contributing

Feel free to contribute to this project! Any contributions you make are greatly appreciated.

## License

This project is licensed under the MIT License.
