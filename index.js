import _ from 'lodash';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sass from 'sass';

// Generate dynamic grid
const generateGrid = (options) => {
  const defaults = {
    columns: 12,
    gap: '20px',
    maxWidth: '1200px'
  };

  const settings = _.extend({}, defaults, options);

  const gridStyle = `
    .gleaming-grid-container {
      display: grid;
      grid-template-columns: repeat(${settings.columns}, 1fr);
      gap: ${settings.gap};
      max-width: ${settings.maxWidth};
      margin: 0 auto;
    }
  `;

  const processedStyles = postcss([autoprefixer, cssnano])
    .process(gridStyle)
    .then(result => result.css);

  return processedStyles;
};

export default generateGrid;
