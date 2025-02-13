                                                                Basic Counter App

**Description**

This is a simple React-based counter application that allows users to increment and decrement a counter value while ensuring it stays within the range of 0 to 20. Additionally, a reset button has been added to set the counter back to zero.

**Features**
Increment the counter (maximum limit: 20)

Decrement the counter (minimum limit: 0)

Reset the counter to 0

Displays the current counter value

**Installation & Setup**
Prerequisites

Node.js and npm installed on your system

A code editor like VS Code

**Steps to Run the Project**

Clone the repository (if applicable) or create a new React project:

npx create-react-app counter-app

cd counter-app

Replace the content of src/App.js with the provided code.

Start the development server:

npm start

**Code Overview**

The application uses the useState hook to manage the counter state.

addValue() increases the counter by 1 but not beyond 20.

removeValue() decreases the counter by 1 but not below 0.

resetValue() resets the counter back to 0.

**Technologies Used**

React.js + Vite

React.js

JavaScript (ES6+)

HTML & CSS (for basic structure)

**Future Improvements**

Improve the UI with better styling.

Implement animations for button clicks.

Author

Kamaljeet😎

Happy Coding! 🚀