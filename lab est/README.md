# Props Drilling Example

This is a simple React app demonstrating how to pass data through props without using Context API.

## Component Hierarchy

```
App (source of truth for username)
└── Header (receives username prop)
    └── Navbar (receives username prop)
        └── UserProfile (receives and displays username prop)
```

## How it Works

1. **App.js** - The root component that holds the `username` state
2. **Header.js** - Receives `username` prop and passes it down
3. **Navbar.js** - Receives `username` prop and passes it down
4. **UserProfile.js** - Receives and displays the `username` prop

## Setup & Run

```bash
npm install
npm start
```

The app will open in your browser at `http://localhost:3000`

## Key Features

✓ Props drilling (prop passing through component hierarchy)
✓ No Context API
✓ Simple and straightforward data flow
✓ Easy to trace where data comes from
✓ Styled components for visual hierarchy

## File Structure

```
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── Header.js
│   ├── Navbar.js
│   ├── UserProfile.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Expected Output

When you run the app, you'll see:

- **App Component** displays the main title
- **Header Component** displays a section with the Navbar
- **Navbar Component** displays a navigation area with the UserProfile
- **UserProfile Component** displays: "Welcome, John Doe!" with a confirmation that the username was received via props

The username "John Doe" is passed through the entire component chain from App → Header → Navbar → UserProfile using props only!
