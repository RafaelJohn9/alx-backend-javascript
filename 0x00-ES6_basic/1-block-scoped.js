/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */

export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
