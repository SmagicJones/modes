# Musical Modes Cycler

A simple interactive tool to visualize and learn the interval patterns of musical modes.

## What It Does

Displays the seven modes of the major scale by rotating through their interval patterns. Click "Next" or "Previous" to cycle through each mode and see how the intervals shift.

## The Problem It Solves

As a musician, I know the major scale intervals (t-t-s-t-t-t-s) by heart. But reciting the intervals for each mode? Not so easy.

This tool helped me realize that modes aren't separate patterns to memorize—they're just the major scale starting from different positions. It's circular: the last interval connects back to the first.

## How It Works

The modes are created by shifting the interval pattern:

- **Ionian (Major)**: t-t-s-t-t-t-s
- **Dorian**: t-s-t-t-t-s-t (shift left by 1)
- **Phrygian**: s-t-t-t-s-t-t (shift left by 2)
- And so on...

The clever bit is using the **modulo operator** (`%`) to treat the array as circular, so it wraps around seamlessly.

## What I Learned

- How to handle circular/cyclical data in JavaScript
- The modulo operator is perfect for wrapping arrays
- The modes are just rotations of the same pattern!

## Tech

Just vanilla HTML, CSS, and JavaScript. No frameworks needed.

---

_t = tone (whole step), s = semitone (half step)_
