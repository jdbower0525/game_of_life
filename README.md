## README ##

Conway's Game of Life is a mathematical representation of the cycle of life as
theorized by John Conway.  This representation takes into account population
density to decide whether an object or 'cell' remains 'alive or dead'.  Basic
parameters is that if there are two or less live neighbors, then the cell in
question dies from lack of support.  On the other side, if a cell is bordered
by four or more live neighbors, that cell dies from overpopulation.

Given this set of rules, I wrote a set of HTML, CSS, and JS that simulate this
representation.  Open the game_of_life.html, which will bring up a blank screen
with two buttons. Click on the Create Table button to draw the table that the
cells will populate.  You can then click on any arrangement of cells to make
any pattern you want while the program isn't running.  After you select the
arrangement you'd like, click on the 'Toggle Timer' button to have the simulation
run.  The program is set to have a cycle of .5 seconds, during which time it
will be difficult to make any changes.  If you'd like to stop and adjust the
table, just hit the 'Toggle Timer' button again and make adjustments.
