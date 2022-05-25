export default function hslToNote(h, l) {
  let note = '';
  let oct = '';

  // switch for note
  switch (true) {
    //RED
    case h > 345 || (h >= 0 && h < 16):
      note = 'C';
      break;
    //ORANGE
    case h > 15 && h <= 45:
      note = 'C#';
      break;
    //YELLOW
    case h > 45 && h <= 75:
      note = 'D';
      break;
    // CHARTREUSE-GREEN
    case h > 75 && h <= 105:
      note = 'D#';
      break;
    // GREEN
    case h > 105 && h <= 135:
      note = 'E';
      break;
    // SPRING-GREEN
    case h > 135 && h <= 165:
      note = 'F';
      break;
    // CYAN
    case h > 165 && h <= 195:
      note = 'F#';
      break;
    // AZURE
    case h > 195 && h <= 225:
      note = 'G';
      break;
    // BLUE
    case h > 225 && h <= 255:
      note = 'G#';
      break;
    // VIOLET
    case h > 255 && h <= 285:
      note = 'A';
      break;
    // MAGENTA
    case h > 285 && h <= 315:
      note = 'A#';
      break;
    // ROSE
    case h > 315 && h <= 345:
      note = 'B';
      break;
    default:
      break;
  }

  switch (true) {
    case l >= 0 && l <= 100 / 7:
      oct = '1';
      break;
    case l > 100 / 7 && l <= 200 / 7:
      oct = '2';
      break;
    case l > 200 / 7 && l <= 300 / 7:
      oct = '3';
      break;
    case l > 300 / 7 && l <= 400 / 7:
      oct = '4';
      break;
    case l > 400 / 7 && l <= 500 / 7:
      oct = '5';
      break;
    case l > 500 / 7 && l <= 600 / 7:
      oct = '6';
      break;
    case l > 600 / 7 && l <= 700 / 7:
      oct = '7';
      break;
  }

  return {
    note,
    oct,
  };
}
