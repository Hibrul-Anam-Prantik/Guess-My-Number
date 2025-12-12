# 🎯 DX - Guess The Number Game\!

A simple, classic browser game built to practice and demonstrate fundamental JavaScript (DOM Manipulation), HTML5, and CSS3 skills.

## 🚀 Live Demo

You can play the live version of the game here:

> [https://hibrul-anam-prantik.github.io/DX-Guess-The-Number-GAME/](https://www.google.com/search?q=https://hibrul-anam-prantik.github.io/DX-Guess-The-Number-GAME/)

## ✨ Features

The game includes essential features for a compelling user experience and demonstrates core JavaScript concepts:

  * **Random Secret Number:** A new random number (between 1 and 20) is generated for every game instance.
  * **Score & Highscore Tracking:** Tracks the current score and the highest score achieved, which is updated only upon a successful win.
  * **Visual Feedback:**
      * Background color changes to **Green** upon winning (`#058800ff`) and **Red/Maroon** upon losing (`#a53434ff`).
      * The secret number pops up with increased font size and width on a win.
  * **Game State Management (Crucial UX):**
      * The **"Check\!" button is disabled** immediately upon winning or losing, preventing players from continuing to guess or affecting the score.
      * The **"Again\!" button** fully resets all game variables (`score`, `secretNum`) and visual elements, re-enabling the game.
  * **Input Validation:** Prevents the game from breaking if the user submits an empty guess.
  * **Optimized Logic:** The "Too High" and "Too Low" checks are consolidated into a single, efficient `else` block using the ternary operator.

## 💻 Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Structure of the game interface. |
| **CSS3** | Styling, custom font import (`Press Start 2P`), layout, and color themes. |
| **JavaScript (ES6)** | Core game logic, DOM manipulation, event handling, and state management. |

## 🛠️ Setup and Installation

This is a static web application and requires no build steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hibrul-anam-prantik/DX-Guess-The-Number-GAME.git
    ```
2.  **Run the game:**
      * Simply open the `index.html` file in your preferred web browser (e.g., double-click it).

## 🧠 Key Learning Outcomes

This project was built during the beginner phase of learning JavaScript to solidify concepts foundational to web development, including:

  * **DOM Manipulation:** Using `document.querySelector()` and updating properties like `.textContent`, `.value`, and `.style`.
  * **Event Handling:** Attaching logic to user actions using `addEventListener()`.
  * **State Management:** Declaring and updating mutable (`let`) variables for game state (`score`, `secretNum`).
  * **Control Flow:** Mastering `if/else if/else` structures and the essential use of `return;` to exit functions early upon a win or loss.
  * **Efficiency:** Implementing the ternary operator (`condition ? value_if_true : value_if_false`) for concise conditional messages.

## 📄 Code Structure Highlights

  * **Variables:** `let secretNum`, `let score`, and `let highScore` are declared globally to be accessible and mutable by both the `check-btn` and `again-btn` functions.
  * **Check Button Logic:** The primary event listener uses an optimized `if/else if/else` chain:
    1.  `if`: Handles invalid input.
    2.  `else if`: Handles winning condition (updates `highScore` and returns).
    3.  `else`: Handles all incorrect guesses (Too High/Too Low logic, decrements `score`, and handles the final loss check).
  * **Again Button Logic:** The reset function ensures all variables (`score`, `secretNum`) and styles (`backgroundColor`, `width`, `disabled`) are returned to their initial states, making the game perfectly replayable.

-----

## 🙋‍♂️ Author

**[Hibrul Anam Prantik]**

  * GitHub: [https://github.com/hibrul-anam-prantik](https://www.google.com/search?q=https://github.com/hibrul-anam-prantik)
