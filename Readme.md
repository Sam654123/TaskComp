# TaskComp Site

A simple and efficient Task Completing website, built using **React**, **Tailwind CSS**, **Vite**, and **React Icons**. Users can add, edit, delete, and save their tasks to their local storage.

## Features

1. **Add Tasks**: Easily add new tasks to your list.
2. **Edit Tasks**: Modify task descriptions as needed.
3. **Delete Tasks**: Remove completed or unnecessary tasks.
4. **Local Storage**: Tasks are saved in the user's local storage, ensuring persistence across sessions.

## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid styling.
- **Vite**: A fast build tool and development server for modern web projects.
- **React Icons**: A collection of popular icons for React applications.

## Getting Started

1. **Prerequisites**:

   - Basic knowledge of HTML, CSS, and JavaScript.
   - Node.js and npm installed on your computer.
   - A code editor like Visual Studio Code.
   - A web browser for testing your app.

2. **Add more Functionalities or Clone this Repository**:

   - To **Clone** this repository and run the app locally:

     1. Open your terminal and navigate to your desired directory.

     2. Run the following command:

        ```
        git clone https://github.com/your-username/my-todo-app.git
        ```

     3. Change your working directory to the cloned folder:

        ```
        cd my-todo-app
        ```

     4. Install dependencies:

        ```
        npm install
        ```

     5. Start the development server:

        ```
        npm run dev
        ```

     6. Click on the link of running localhost server and view the site.

   - To fork this repository and make your own changes:

     1. Click the “Fork” button at the top right of this repository page.
     2. Clone your forked repository to your local machine using the steps above.
     3. Make your desired changes to the code.
     4. Commit and push your changes to your forked repository.
     5. Create a pull request if you’d like to contribute your changes back to the original repository.

<center><b>OR</b></center>

3. **Set Up the Project for Your own App**:

   - Open your terminal and navigate to your preferred directory.
   - Run the following command to generate a new Vite project with React (replace "todo-app" with your desired project name):
     ```
     npm create vite@latest my-todo-app -- --template react
     ```
   - Change your working directory to the "my-todo-app" folder:
     ```
     cd my-todo-app
     ```
   - Install Tailwind CSS:
     ```
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
   - Configure your template paths in `tailwind.config.js`:
     ```javascript
     // tailwind.config.js
     export default {
       content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```
   - Add the Tailwind directives to your CSS in `src/index.css`:
     ```css
     /* src/index.css */
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Create the App Component**:

   - In your `src/App.jsx`, create the main `App` component:

     ```jsx
     import React from "react";
     import TodoList from "./components/TodoList";

     function App() {
       return (
         <div className="App">
           <TodoList />
         </div>
       );
     }

     export default App;
     ```

5. **Create the TodoList Component**:

   - In `src/components/TodoList.jsx`, manage the list of tasks and handle task-related functionality.
   - Use React Icons for task actions.

6. **Implement Local Storage**:
   - Use `localStorage` to save and retrieve tasks.
