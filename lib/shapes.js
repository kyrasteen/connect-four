const $ = require('jquery');

function drawShapes(column, row, x, y) {
  const NS='http://www.w3.org/2000/svg';
  const SVGObj = document.createElementNS(NS,'rect');
  const SVGCircle = document.createElementNS(NS,'circle');

  SVGObj.setAttribute('x', x);
  SVGObj.setAttribute('y', y);
  SVGObj.setAttribute('fill', '#c0d737');
  SVGObj.setAttribute('stroke', '#1d754d');
  SVGObj.setAttribute('stroke-width', '2');
  SVGObj.setAttribute('height', '100');
  SVGObj.setAttribute('width', '100');
  SVGObj.setAttribute('column-id', column);

  SVGCircle.setAttribute('cx', x+50);
  SVGCircle.setAttribute('cy', y+50);
  SVGCircle.setAttribute('r', '40');
  SVGCircle.setAttribute('fill', 'gray');
  SVGCircle.setAttribute('stroke', '#e3f6a7');
  SVGCircle.setAttribute('stroke-width', '1');
  SVGCircle.setAttribute('height', '80');
  SVGCircle.setAttribute('width', '80');
  SVGCircle.setAttribute('class', 'empty');
  SVGCircle.setAttribute('column-id', column);
  SVGCircle.setAttribute('row-id', row);

  $('#squares').append(SVGObj);
  $('#circles').append(SVGCircle);
}

export default drawShapes;
