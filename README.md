# React Account Management Application

This is a simple React application for account management. Users can register, log in, and manage their account details. The application is built using React (v16+), React Router, and Bootstrap for responsiveness and styling.

## Features

1. **Registration Page**: 
   - Allows users to create an account with fields for first name, last name, username, email, password, phone number, and gender.
   - Validations include:
     - Required fields cannot be empty.
     - Name fields allow only alphabetic characters.
     - Email must be valid.
     - Phone number must be numeric and exactly 10 digits.

2. **Login Page**:
   - Users can log in with their username and password.
   - Validates the entered credentials.

3. **Manage_Account page**:
   - Displays user details in a clean and responsive UI.
   - Includes buttons to edit the profile or log out.
   - On editing, users can update their details with validation.
   - Displays a confirmation popup after saving changes.
   - Logout redirects users to the login page.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **React Router**: For navigation between pages.
- **Bootstrap**: For styling and responsive design.
- **CSS**: Minimal custom styles for additional design tweaks.


## Project Structure

```
react-account-management/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── ManageAccount.js
|   ├── App.css
│   └── App.js
├── public/
├── index.html
├── package.json
└──  README.md

```

## Usage

1. **Register**:
   - Go to the registration page.
   - Fill in all the required fields.
   - Submit the form to create an account.

2. **Login**:
   - Enter the username and password you used during registration.
   - Log in to access your profile.

3. **Manage_Account**:
   - View your account details on the profile page.
   - Click "Update Profile" to edit your information.
   - Save the changes to update your profile.
   - Logout to end the session and return to the login page.

## Validation Rules

- **First Name/Last Name**: Must only contain alphabetic characters.
- **Email**: Must follow standard email format.
- **Phone**: Must be exactly 10 numeric digits.
- **Password**: Must not be empty.

## Responsive Design

- The application is fully responsive and adapts to various screen sizes using Bootstrap classes.



## Deployment

1. **Prepare the Build**:
   - Run the build command to generate an optimized production build:
     ```bash
     npm run build
     ```
   - This will create a `build/` directory containing static files.



 **Deploy Using GitHub Pages**:
   - Install the `gh-pages` package:
     ```bash
     npm install gh-pages --save-dev
     ```
   - Add the following scripts to `package.json`:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```
   - Deploy the application:
     ```bash
     npm run deploy
     ```