function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let months = month();
  let dayOfweek = dow(day(), months, year());

  let monthEnd = map(months, 0, 12, 0, 360);
  let dayOfweekEnd = map(dayOfweek, 0, 7, 0, 360);
  let hoursEnd = map(hours % 12, 0, 12, 0, 360);
  let minutesEnd = map(minutes, 0, 60, 0, 360);
  let secondsEnd = map(seconds, 0, 60, 0, 360);

  translate(350, 350);

  let rainbowTextY = -300;
  let rainbowTextX = 0;

  textSize(32);
  noStroke();
  fill(255, 0, 0);
  text("R", rainbowTextX-90, rainbowTextY);
  fill(255, 125, 0);
  text("A", rainbowTextX-60, rainbowTextY);
  fill(255, 255, 0);
  text("I", rainbowTextX-30, rainbowTextY);
  fill(125, 255, 0);
  text("N", rainbowTextX, rainbowTextY);
  fill(125, 255, 255);
  text("B", rainbowTextX+30, rainbowTextY);
  fill(125, 125, 255);
  text("O", rainbowTextX+60, rainbowTextY);
  fill(200, 0, 255);
  text("W", rainbowTextX+90, rainbowTextY);

  textAlign(CENTER);
  textSize(22);
  strokeWeight(4);
  text("Clock", rainbowTextX, rainbowTextY + 30);

  strokeWeight(10);
  noFill();
  // R
  stroke(255, 0, 0);
  arc(0, 0, 400, 400, 0, 360);

  rotate(-90);
  // O
  stroke(255, 125, 0);
  arc(0, 0, 380, 380, 0, monthEnd);
  // Y
  stroke(255, 255, 0);
  arc(0, 0, 360, 360, 0, dayOfweekEnd);
  // G
  stroke(125, 255, 0);
  arc(0, 0, 340, 340, 0, hoursEnd);
  // LB
  stroke(125, 255, 255);
  arc(0, 0, 320, 320, 0, minutesEnd);
  // B
  stroke(125, 125, 255);
  arc(0, 0, 300, 300, 0, secondsEnd);
  // P
  stroke(200, 0, 255);
  arc(0, 0, 280, 280, 0, 360);

  stroke(255);
  for (let i = 0; i < 12; i++) {
    push();
    rotate(360 / 12 * i);
    strokeWeight(3);
    line(0, 145, 0, 175);
    line(0, 185, 0, 195);
    pop();
    if (i < 7) {
      push();
      stroke(0);
      rotate(360 / 7 * i - 90);
      strokeWeight(3);
      line(0, 175, 0, 185);
      pop();
    }
  }

}

function dow(d, m, y) {
  if (m < 3) {
    m += 12;
    y--;
  }
  return (d + floor((m+1)*2.6) +  y + floor(y/4) + 6*floor(y/100) + floor(y/400) + 6) % 7;
}
