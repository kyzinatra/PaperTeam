# Teaching and Research Topic: Create a theory and software to study the orientations of fold lines when folding a sheet of paper multiple times.

Tasks: 
* The result of folds is given, to restore the sequence of fold axes and, in general, the possibility of obtaining such a pattern of folds; write a program that performs these operations
* Come up with and write a series of theorems about how the orientations of the fold lines can and cannot look like
* Create a gaming site where tasks of the form will be generated (there should also be a convenient interface for entering solutions and checking answers)

> The robot assembles the structure by bending the sheet. The figure shows the task for the robot: the solid line shows the folds in one direction, the dotted lines in the other.

The control is carried out by specifying the bend axes (the axis is specified by one letter, after each bend some axes are combined with each other, in such cases it does not matter which axis to specify).

Specify the sequence of bend axes so that the structure acquires the most collapsed appearance. The direction of the fold is determined by the robot itself, however, if the assembly program cannot be implemented, it stops its work.”

Task comment

**Answer: BEHC(A)D(F)G(I)**

> Underlined pairs can be rearranged, and the letter in brackets can be replaced by the letter in front of it. There are 16 correct lines in total.


![Image alt](https://github.com/kyzinatra/PaperTeam/raw/main/assets/test.png)


To download dependences:

1. Download [node.js](https://nodejs.org/en/)
2. Run in console:

```sh 
npm install
npm start
```