/* Sequencing: Lesson_name: Introduction to Online Puzzles Using Code Blocks 

These block codes translate into JavaScript

"Tracing the path that lead to the pig.">>>>Get the Bird to the Pig. */

/*part 3 */
moveForward();
moveForward();
moveForward();

/*part 4 */
moveForward();
turnLeft();
moveForward();
moveForward();

/* part 5 */
moveForward();
turnRight();
moveForward();
turnLeft();
moveForward();

/* part 6 */
moveForward();
moveForward();
turnLeft();
moveForward();
moveForward();

/* part 7 */
for (var count = 0; count < 4; count++) {
  moveForward();
}
turnRight();
for (var count2 = 0; count2 < 5; count2++) {
  moveForward();
}

/* part 8 */
moveForward();
turnLeft();
for (var count = 0; count < 2; count++) {
  moveForward();
}
turnRight();
for (var count2 = 0; count2 < 3; count2++) {
  moveForward();
}
turnLeft();
for (var count3 = 0; count3 < 3; count3++) {
  moveForward();
}

/* part 9 */
moveForward();
turnRight();
moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();


*/ Alternatively, you can make the code shorter: Part 9 */

for (var count = 0; count < 4; count++) {
  moveForward();
  turnRight();
  moveForward();
  turnLeft();
}

/* Part 10: Get the bird to the pig. 
This part can be solve in two ways: 

First_path: use the code: */

for (var count = 0; count < 3; count++) {
  moveForward();
}
turnLeft();
for (var count2 = 0; count2 < 2; count2++) {
  moveForward();
}

/* Second_path: */

turnLeft();
for (var count = 0; count < 2; count++) {
  moveForward();
}
turnRight();
for (var count2 = 0; count2 < 3; count2++) {
  moveForward();
}












