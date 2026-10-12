# OmniCalc Pro — Advanced Scientific & Graphing Calculator

A high-performance, modern scientific calculator web application tailored for practical examinations, laboratory presentations, and advanced computing.

Built with semantic HTML5, pure CSS3 (Vanilla Glassmorphism design system), and vanilla ES6+ JavaScript. **No external libraries required.**

---

## 🚀 Key Features for Practical Demonstrations

### 1. Dual-Display OLED Engine
- **Natural Math Expression Line**: Real-time syntax display with parentheses balancing and multi-character operators (`sin`, `cos`, `tan`, `log`, `ln`, `√`, `xʸ`, `n!`).
- **Real-Time Live Preview**: Dynamically evaluates the expression as you type in subtle preview format before committing.
- **High-Precision Formatting**: Corrects IEEE 754 floating-point inaccuracies (e.g. `0.1 + 0.2 = 0.3`), auto-switches to scientific notation (`1.25e+8`) for extreme values, and prevents division-by-zero crashes.
- **Ans & Result Chaining**: Typing an operator after pressing `=` automatically chains with `Ans +` or `Ans ×`.
- **Click to Copy**: Click on the large result to immediately copy it to your clipboard.

### 2. Full Scientific Keyboard & Secondary Functions
- **Angle Unit Switcher**: Toggle between **DEG** (Degrees) and **RAD** (Radians) with instant recalculation.
- **2nd Function Mode**: Flips buttons dynamically:
  - `sin` ⇄ `sin⁻¹` (arcsin)
  - `cos` ⇄ `cos⁻¹` (arccos)
  - `tan` ⇄ `tan⁻¹` (arctan)
  - `ln` ⇄ `eˣ` (exponential)
  - `log` ⇄ `10ˣ` (base-10 power)
  - `x²` ⇄ `x³` (cubed)
  - `√x` ⇄ `∛x` (cube root)
- **Hyperbolic Mode (`hyp`)**: `sinh`, `cosh`, `tanh`, `asinh`, `acosh`, `atanh`.
- **Factorial (`n!`)**: Exact integer factorial and Gamma function support.
- **Memory Functions**: Full standard memory registers (`MC`, `MR`, `M+`, `M-`, `MS`) with on-screen `M` indicator badge.

### 3. Integrated 2D Function Grapher
- Visual canvas plotter for curves $y = f(x)$ (e.g. $\sin(x) \cdot x$, $x^2 - 4$, $e^{-x^2}$, $\frac{1}{x}$).
- Dynamic coordinate grid with mathematical tick labels.
- Mouse hover coordinate inspection ($X, Y$).
- Interactive drag-to-pan and wheel-to-zoom controls.
- One-click presets for rapid demonstration during viva / practicals.

### 4. Scientific Constants Reference Sheet
- Searchable library of physical and mathematical constants:
  - Archimedes' Constant ($\pi = 3.14159...$)
  - Euler's Number ($e = 2.71828...$)
  - Golden Ratio ($\phi = 1.61803...$)
  - Speed of Light ($c = 299,792,458 \text{ m/s}$)
  - Planck Constant ($h = 6.626070 \times 10^{-34} \text{ J}\cdot\text{s}$)
  - Gravitational Constant ($G = 6.67430 \times 10^{-11} \text{ m}^3\text{kg}^{-1}\text{s}^{-2}$)
  - Avogadro's Number ($N_A = 6.02214 \times 10^{23} \text{ mol}^{-1}$)
  - Elementary Charge ($e = 1.602176 \times 10^{-19} \text{ C}$)
  - Electron Mass ($m_e = 9.10938 \times 10^{-31} \text{ kg}$)
- **One-Click Insert**: Click any constant to immediately insert its exact value into the calculator.

### 5. Multi-Domain Unit Converter
- Real-time conversion across 8 categories:
  - **Length** (Meters, Kilometers, Centimeters, Millimeters, Inches, Feet, Miles, Light Years)
  - **Mass** (Kilograms, Grams, Milligrams, Pounds, Ounces, Tonnes, AMU)
  - **Temperature** (Celsius, Fahrenheit, Kelvin, Rankine)
  - **Speed** (m/s, km/h, mph, Knots, Mach, Speed of Light)
  - **Angle** (Degrees, Radians, Gradians, Arcminutes, Arcseconds)
  - **Pressure** (Pascal, kPa, Bar, PSI, atm, Torr)
  - **Energy** (Joule, kJ, Calorie, kcal, Watt-hour, kWh, eV, BTU)
  - **Digital Data** (Byte, KB, MB, GB, TB, Bit)
- Quick transfer button to send converted figures directly to the calculator expression.

### 6. Tactile Audio Feedback & Premium Themes
- **Web Audio API Haptics**: Realistic micro-click feedback synthesized in real-time (no external sound files required; toggleable via sound icon).
- **Multiple Themes**:
  - 🌌 **Cyber Dark**: Neon cyan and deep space glassmorphism.
  - 🟢 **Emerald Matrix**: High-contrast terminal green aesthetic.
  - 🟣 **Nebula Purple**: Violet and crimson gradients.
  - ☀️ **Clean Titanium**: Crisp, daylight laboratory theme.

### 7. Calculation History Tape
- Slide-out history tape recording calculations with timestamps.
- Click any past calculation to restore or reuse the value.

---

## 🏃 How to Run Locally

### Option 1: Direct File (Simplest)
Double-click `index.html` in file explorer or open it in Google Chrome, Microsoft Edge, or Firefox.

### Option 2: Local Web Server
Open PowerShell in this directory:
```powershell
python -m http.server 8080
```
Then visit:
[http://localhost:8080](http://localhost:8080)

---

## ⌨️ Keyboard Shortcuts Reference

| Key | Action |
| :--- | :--- |
| `0` – `9` | Digits |
| `+`, `-`, `*`, `/` | Basic arithmetic (`*` inserts `×`, `/` inserts `÷`) |
| `^` | Exponentiation ($x^y$) |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last character |
| `Escape` or `c` | All Clear (AC) |
| `s` | `sin()` |
| `o` | `cos()` |
| `t` | `tan()` |
| `l` | `log()` |
| `n` | `ln()` |
| `r` | `sqrt()` ($\sqrt{x}$) |
| `p` | $\pi$ (Pi) |
| `e` | $e$ (Euler's number) |
| `!` | Factorial ($n!$) |
| `(`, `)` | Parentheses |

---

## 📂 File Architecture

```
scientific-calculator/
├── index.html        # Semantic UI structure, OLED display, keypad grid, modals
├── style.css         # Glassmorphism design system, 4 themes, responsive layout
├── calculator.js     # Tokenizer, recursive-descent math parser, precision evaluator
├── grapher.js        # 2D canvas function plotter with dynamic grid & zoom/pan
├── converter.js      # Scientific physical unit converter
├── constants.js      # Reference dataset of universal & mathematical constants
├── app.js            # Main application controller, Web Audio clicks, history, keyboard
└── README.md         # Documentation and presentation guide
```
