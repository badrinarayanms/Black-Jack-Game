# Blackjack Game

A very basic Blackjack game implemented using JavaScript, with simple HTML and CSS for functionality and styling.

## Overview

This project is a straightforward implementation of the Blackjack card game using JavaScript. It features minimal HTML for structure and CSS for basic styling.

## Usage

Open the `index.html` file in your web browser to start playing the Blackjack game. Follow the on-screen instructions to interact with the game.

## Game Rules

- **Setup:**
  - The game starts with the dealer and the player receiving two cards.
  - Numerical cards (2-10) are worth their face value.
  - Face cards (Jack, Queen, King) are each worth 10 points.
  - Aces are worth 1 point.

- **Gameplay:**
  ![bjj](https://github.com/badrinarayanms/Black-Jack-Game/assets/137931415/6f167e12-f517-4baa-81a5-1e72b6091f1a)


  - **add Button:** Adds another card to the player's hand.
    - If the player's total exceeds 21, they lose ("bust").
    - If the player's total is exactly 21, they win.
  - **Stand Button:** Compares the dealer's and player's points.
    - The winner is the one with the highest point total without exceeding 21.
    - If the dealer and player have the same total, it's a tie.

- **Winning Conditions:**
  - The player wins if they have a higher total than the dealer without exceeding 21.
  - The dealer wins if their total is higher than the player's without exceeding 21.
  - If both totals are the same, it's a tie.


