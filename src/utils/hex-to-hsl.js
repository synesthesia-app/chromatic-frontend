export default function hexToHSL(hexcode) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (hexcode.length == 4) {
    r = '0x' + hexcode[1] + hexcode[1];
    g = '0x' + hexcode[2] + hexcode[2];
    b = '0x' + hexcode[3] + hexcode[3];
  } else if (hexcode.length == 7) {
    r = '0x' + hexcode[1] + hexcode[2];
    g = '0x' + hexcode[3] + hexcode[4];
    b = '0x' + hexcode[5] + hexcode[6];
  }

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}
