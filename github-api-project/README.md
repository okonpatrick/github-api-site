visit: https://github-api-app-livid.vercel.app/

### Problem

Instruction
Answer the question carefully, and follow the instructions below carefully and rigorously.I. You can use any form of styling, from Tailwind to vanilla CSS, CSS Modules, and StyleComponent.
II. You are advised to use a UI library like Chakra UI, React-Aria, ShadCN to get you to move faster.
III. Make sure you submit the correct URL for GitHub and the hosted version of your work. Use any hosting platform you are familiar with. 
Questions:
Implement a Web App using GitHub API to fetch your GitHub repositories portfolio
Show a page listing all your repositories on GitHub with pagination enabled 20mks. Bonus: Implement Search and Filter. 
Create another page showing data for a single repo when clicked from the page. Show all repos using nested routes while using all the necessary tools in React. 10mks
Implement an Error Boundary (show a page to test the error boundary) 5mks
a 404 page  (show a page to test the 404 page). 5mks
Good Layout, UI, and Designs are essential. Accessibility techniques taught in semester one are Important. 10mksBONUS: Provide a button to Create a new repo using a Modal, allow a way to update some details of the created repo, and finally add a way to delete the repo. Instructors Award of Recognition ????.
Modality of submissionYour code should be well documented with a README.md file that contains all necessary information about the Application.
Push your code to GitHub.
Host your application on Netlify, Vercel.
Submit using the link below.


## A Modern React Portfolio App: Showcase Your GitHub Repos with Style!

This professional React application provides a visually appealing and interactive platform to showcase your GitHub repositories and development skills. Leverage the power of React and modern libraries to create a dynamic and user-friendly portfolio experience. 

**Key Features:**

* **Seamless Data Fetching:** Utilizes the GitHub API to effortlessly retrieve and display your repositories.
* **Enhanced Navigation:** Pagination allows for browsing through a large number of projects in clear, manageable sections.
* **Intuitive Search and Filtering:** This implementation encompasses powerful search capabilities and filtering functionality to pinpoint specific projects effortlessly.
* **Detailed Repository Views:** Dive deeper into each project with a dedicated page offering comprehensive details alongside engaging visuals. Nested routing facilitates smooth navigation between the main project list and individual repo pages.
* **Robust Error Handling:** An integrated error boundary catches potential issues during the application's lifecycle, ensuring a smooth user experience even in unexpected scenarios.
* **Customizable User Interface:** Built with accessibility best practices in mind, the application caters to a broad user base with an inclusive design framework.

**Optional Advanced Features:**

* **Streamlined Repository Creation:**  (Future Implementation) A convenient modal window allows you to effortlessly create new repositories directly through the GitHub API, streamlining your workflow.
* **Flexible Repository Management:** (Future Implementation) Modify existing repositories from within intuitive modal interfaces, granting you the power to update details and enhance your project presentations.
* **Secure Repository Deletion:** (Future Implementation) A dedicated modal window cautiously guides you through the deletion process for unwanted repositories. Utilize this feature with discretion to maintain a well-curated portfolio.

## Getting Started

Dive right in and get your portfolio up and running with just a few simple steps:

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.

**Installation:**

1. Clone the Repository:

  ```bash
  git clone https://github.com/your-username/my-github-portfolio.git
  ```

2. Install Dependencies:

  ```bash
  cd my-github-portfolio
  npm install
  ``` (or `yarn install`)

3. Generate a GitHub Personal Access Token:

  - Visit your GitHub settings ([https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)).
  - Under "Developer settings," locate "Personal access tokens."
  - Create a new token with the required permissions (e.g., `repo`).

4. Securely Store Your Access Token:

  - Create a file named `.env` in the project's root directory (never commit this file!).
  - Add the following line, replacing `<YOUR_ACCESS_TOKEN>` with your actual token:

  ```
  VITE_GITHUB_TOKEN=<YOUR_ACCESS_TOKEN>
  VITE_GITHUB_PAT = <YOUR_ACCESS_TOKEN>
VITE_GITHUB_USERNAME=<YOUR_USER_NAME>

VITE_SERVICE_ID=<EMAILJS_SERVICE_ID>
VITE_TEMPLATE_ID=<TEMPLATE_ID>
VITE_PUBLIC_KEY=<EMAILJS_PUBLIC_ID>

VITE_MAILCHIMP_URL=<MAILCHIMP_URL>
VITE_MAILCHIMP_U=<MAILCHIMP_U>
VITE_MAILCHIMP_ID=<MAILCHIMP_ID>
  ```

5. Start the Application:

  ```bash
  npm start
  ``` (or `yarn start`)

Your portfolio will be accessible at http://localhost:5173 by default.

## Technology Stack

* **React:** The industry-standard JavaScript library for building dynamic and interactive user interfaces.
* **React Router:** Handles navigation and routing within the application, ensuring a seamless user experience.
* **Axios:** Simplifies asynchronous communication with the GitHub API, enabling effortless retrieval of your repository data.
* **Accessible UI Library (Optional):** Choose from popular options like Chakra UI or React Bootstrap to create an inclusive and user-friendly interface.
* **CSS Framework/Styling (Optional):** Consider incorporating Tailwind CSS, Material UI, or vanilla CSS for a visually appealing and maintainable stylesheet.

## Project Structure

A well-organized project structure promotes code readability and maintainability:

```
my-github-portfolio/
  - README.md (Documentation)
  - package.json (Project dependencies)
  - public/ (Static assets like images, fonts)
  - src/ (Source code)
    - App.js (Main application component)
    - components/ (Reusable components)
        - ... (Component files)
    - styles/ (Global styles or component-specific CSS)
```

## Contribution

Feel free to fork this repository, make improvements, and submit pull requests! We encourage collaboration and the creation of a valuable resource for the developer community.

site is hosted here: https://github-api-app-livid.vercel.app/