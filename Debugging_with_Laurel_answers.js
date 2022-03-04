// Collect the Diamonds
/* part 2
>>>>>>Fail   */
moveForward();
moveForward();
moveForward();

//success
moveForward();
collect();
moveForward();
collect();
moveForward();
collect();

/* part 3
>>>>>>fail */
moveForward();
collect();
moveForward();
collect();
turnLeft();
moveForward();
collect();

//success
moveForward();
collect();
moveForward();
collect();
turnRight();
moveForward();
collect();

/* part 4
>>>>>>fail */
moveForward();
collect();
moveForward();
collect();

//success
moveForward();
collect();
collect();
collect();

/* part 5
>>>>>>fail */
moveForward();
collect();
turnLeft();
moveForward();
collect();
turnRight();
moveForward();
collect();
turnRight();
moveForward();
collect();

//success
moveForward();
collect();
turnRight();
moveForward();
collect();
turnLeft();
moveForward();
collect();
turnRight();
moveForward();
collect();


/* part 6
>>>>>>fail */
moveForward();
collect();
moveForward();
collect();
moveForward();
collect();
moveForward();
collect();
collect();

// success
moveForward();
collect();
moveForward();
collect();
moveForward();
collect();
turnRight();
moveForward();
moveForward();
collect();
turnRight();
moveForward();
collect();
moveForward();
collect();


/* part 7
>>>>>>success */
moveForward();
moveForward();
collect();
collect();
for (var count = 0; count < 2; count++) {
  turnLeft();
  moveForward();
}
for (var count2 = 0; count2 < 2; count2++) {
  collect();
}
turnLeft();
for (var count3 = 0; count3 < 3; count3++) {
  moveForward();
}
turnRight();
moveForward();
for (var count4 = 0; count4 < 2; count4++) {
  collect();
}
moveForward();
turnRight();
moveForward();
for (var count5 = 0; count5 < 2; count5++) {
  collect();
}

/* part 8
>>>>>>success */
moveForward();
for (var count = 0; count < 3; count++) {
  collect();
}
turnLeft();
moveForward();
turnLeft();
collect();
collect();
moveForward();
collect();

/* part 9
>>>>>>success */
moveForward();
turnRight();
moveForward();
turnLeft();
for (var count = 0; count < 5; count++) {
  collect();
}
moveForward();
turnRight();
moveForward();
for (var count2 = 0; count2 < 5; count2++) {
  collect();
}
