# Lab 1: Set up and Basics of p5.js

This is the first of four labs we'll be doing to get you comfortable with p5.js.

# Set up

You'll be working in groups of 3. We suggest the following setup:

Option 1:

- All 3 of you fork the repo, then clone it to your local computer.
  ![fork](https://user-images.githubusercontent.com/26272095/122926841-1f71dc00-d31d-11eb-8c40-7d51b9380018.gif)
  ![clone](https://user-images.githubusercontent.com/26272095/122926863-24cf2680-d31d-11eb-8215-356e1f2f73c0.gif)

- Take turns sharing screen.
- When 1 person shares screen, the other 2 follow along, typing on their own computers as well.
- To run the code, go to the relevant folder and type `open index.html` in the terminal. For example, if you want to open the first code snippet and you were already in `p5-lab-1`, you would type:

```
cd 01_background
open index.html
```

- Or, you can open the main `index.html` and follow the links there.

Option 2:

- Person 1 forks a version of [this online repo at Replit](https://replit.com/@jennylihan/p5-lab-1).
- Person 1 shares the Invite link with Person 2 and 3.
- All three people can type at the same time (like Google Docs)!
- To run the code, open the URL in a new tab.

# To Do

Your mission today is to go through as many of the following code snippets as possible. Each code snippet will explore an aspect of p5.js.

HINT: You can find all of the answers to the questions below at [p5.js.org](https://p5js.org). If you get stuck, flag an instructor!

1. 🌈 [01_background](./01_background/sketch.js)

- What are the parameters (aka inputs) of `createCanvas()`?
- Change the canvas size to the full width and full height of your screen, using the variables [here](https://p5js.org/reference/#/p5/displayHeight) or [here](https://p5js.org/reference/#/p5/windowHeight).
- Why is there a quick flash of green every time you load the page? Get rid of the flash. (Hint: it has to do with setup vs draw).
- Change the background of this canvas to bright pink. You may want to use [this reference](https://p5js.org/reference/#/p5/background).

2. 🟪 [02_shapes](./02_shapes/sketch.js)

- What are the inputs for `rect()` and `ellipse()`? You may want to check out [this reference](https://p5js.org/reference/#/p5/ellipse).
- Change the inputs for either the rectangle or the ellipse so that they are not overlapping on the screen.
- Change the color of the stroke.
- Change the stroke to `noStroke()`
- Add the stroke back in. Change the thickness of the stroke with [strokeWeight](https://p5js.org/reference/#/p5/strokeWeight).
- Change the color of the fill.
- Change the fill to `noFill()`
- Create at least one more type of shape by going to the "Shapes" section of the reference [here](https://p5js.org/reference/).

3. 🎨 [03_colors](./03_colors/sketch.js)
- Change the three colors of the three ellipses. Currently the colors are in "RGB" mode; each input can be in between 0 and 250.
- Add a fourth number in between 0 and 255 to the `fill()` function. What happens? This fourth argument is called the alpha.

```
Example:
    fill(255,0,0); --> fill(255, 0, 0, 200);
```
- What is the difference between HSB and RGB? Copy-paste some of the code snippets from [the p5 colorMode() documentation](https://p5js.org/reference/#/p5/colorMode) to play around with it.

4. ✅ [04_shapescheck](./04_shapescheck/sketch.js)

- Nice! Now talk through this javascript file. Make sure everyone in your group feels good about every single line of code in here before moving on.
- Optional: add some color to this creature!
- 🚧 Talk through every line of the code and make sure everyone in your group feels good about what it's doing! Flag an instructor to join your breakout room before moving on.

5. 🔢 [05_variables](./05_variables/sketch.js)

- There's a lot going on in this code snippet (it's actually 2 code snippets, but one is commented out for now), but let's just focus on the variables.
- First, check out the variables `y` and `d`. Change those and see what happens.

- Then, comment out lines 17 - 21. Uncomment lines 23 - 36.
- Check out the variables `background`, `length`, `angle`, and `loops`. Make changes to the variables and see what happens.
- There are 3 ways to declare a variable in Javascript. What is the difference between `var`, `let`, and `const`? If you get stuck, you can refer to [this guide](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/).

6. 🐭 [06_mouseVariables](./06_mousevariables/sketch.js)

- `mouseX` and `mouseY` are two variables built-in to p5.js that you'll find very useful.
- Currently this sketch draws a single ellipse at the location (x = 20, y = 30). Change one line so that you draw an ellipse at the same location as your mouse every frame.
- Use console.log() to log the mouseX and mouseY within the `draw()` function. Check that it's logging in the console of your browser.
- Comment out line 15. What difference does that make, and why?

- Let's add one more mouse variable: `mousePressed`. Copy-paste this code right before you create the ellipse in the `draw()` function.

```
    if (mouseIsPressed) {
        stroke('red');
    } else {
        stroke('green');
    }
```

7. 🎹 [07_events](./07_events/sketch.js)

- We're going to use some built-in event listeners within p5.js. Event listeners are functions that get triggered every time a specific event happens. Two examples of events: a mouse click (`mouseClicked`) or a keyboard character being entered (`keyPressed`).
- Run the code. Then comment the lines and uncomment lines 28 - 41. What is the difference between using the variable `mouseIsPressed` and the event listenered `mouseClicked`?
- Then copy-paste this code below in line 43:

```
function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
    d += 200;
  }
}
```

- What happens if you run the code and click the right arrow key? Now add another conditional statement so that the diameter of the circle shrinks if you hit the left arrow key.
- 🚧 Talk through every line of the code and make sure everyone in your group feels good about what it's doing! Flag an instructor to join your breakout room before moving on.

# Concept Check: Make a Giant Crayon / Paintbrush 

8. 🖍 [08_giantcrayon](./08_giantcrayon/sketch.js)

- At this point, you have a lot of tools under your p5.js belt! As a concept check, try to recreate this giant crayon: http://p5js.site44.com/001/index.html.

9. ⚡️ [09_randomness](./09_random/sketch.js)

- What if you wanted to switch up the color of your giant crayon?
- Copy paste your code from part 8.
- Read the documentation [here](https://p5js.org/reference/#/p5/random) and have the giant crayon paint in a random color every time you reload the page from a list of colors (that you decide).
- For a hint, [this template](https://github.com/Snap-Engineering-Academy-2021/p5-template) does something similar!

- Then try and use the documentation to have the giant crayon paint the ellipse in a random SIZE every time.

10. 🌊 [10_gradient](./10_gradient/sketch.js)

- What if you wanted to paint in a gradient?
- Check out the documentation [here](https://p5js.org/reference/#/p5/lerpColor) and [here](https://p5js.org/reference/#/p5/map)
- Change this code so that the gradient changes from top to bottom instead of left to right.

11. 🌠 [11_images](./11_images/sketch.js)

- What if you wanted to leave an image instead of paint an ellipse?
- Copy paste your code from part 8.
- Read the documentation [here](https://p5js.org/reference/#/p5/loadImage) and have the giant crayon leave an image every time you CLICK the mouse (instead of erasing).

# Project Time!

Head over to this repo to learn about the assignment: https://github.com/Snap-Engineering-Academy-2021/p5-template

# Credits

This lab and assignment were adapted from Lauren Lee McCarthy, Camille Utterback, and Derrick McMillen. Thank you to these amazing educators and digital artists for their work. :)
