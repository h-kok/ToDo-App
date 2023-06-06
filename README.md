# To-Do App

## Requirements / Purpose

-   The MVP is to create the front end of a To-Do App that allows you to track, add and delete tasks, as well as manage categories of tasks.
-   The purpose of the project is to develop skills in and develop an app using a Typescript React framework.
-   The stack used is Typescript, React (Vite) and Styled Components for CSS, with Vitest for unit testing

---

## Build Steps

-   Pull repo from main branch. To install node modules:

```
npm install
```

## Design Goals / Approach

-   I have focused on implementing one feature at a time, before moving onto the next. As categories has a many-to-one relationship with tasks, I focused on being able to add and store categories as the initial step, before moving onto adding and manipulating tasks.
-   This is my first time using Typescript in an individual project and Typescript within a React framework. Through building the project, I aim to further develop my skills in both Typescript and React.
-   I have used Styled Components for the first time in a project, to learn more about its use and benefits. I have created basic styling components and will complete the styling for the app as my last step.

## Known issues

-   Need to fix type issues in Task (id) and AddTask (newArr) components.

---

## Change logs

### 31/05/23

-   Set up react app with Vite
-   Install styled components
-   Create GitHub workflow file
-   Create components and containers for app structure

### 01/06/23

-   Move form components to own file
-   install Vitest for testing

### 03/06/23

-   Create feature to add categories and store categories in state in array.

### 04/06/23

-   Error handling for duplicate categories.
-   Add feature to add new tasks tagged with task category.
-   Add feature to update tasks automatically by changing the task name and the category
-   Add feature to duplicate tasks. Need to adjust count state to add correct ID to duplicate tasks, so they will render correctly.

### 06/06/23

-   Move count state to Tasks level so all duplicate tasks have correct ID.
-   Pass task props to AddTask and Task components so that tasks array retains duplicate tasks and re-renders correctly.

---

## Further details, related projects, reimplementations

-   This project is the front-end/UI for the To-Do App. An API will be implemented as a separate project following this and will be linked upon completion.
