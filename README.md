**User Management System**

-This is an Angular application for managing user data. 
-The application allows users to add, edit, and delete user information. 
-It consists of two components: `UserUpsertComponent` for adding and updating user information and `UserListComponent` for displaying a list of users.

*Usage*

## Adding a User:

-Click on the "Add New User" button in the user list view.
-Fill in the required details in the form.
-Click the "Submit" button to add the user.

## Editing a User:

-Click on the "edit" icon next to the user in the user list view.
-Modify the user details in the form.
-Click the "Submit" button to update the user.

## Deleting a User:

-Click on the "delete" icon next to the user in the user list view.
Project Structure

## UserUpsertComponent:

-Handles user creation and updating.
-Uses Angular Reactive Forms for form handling.
-Validates user input.
-Utilizes the UserServiceService for user data management.

## UserListComponent:

-Displays a list of users.
-Allows editing and deleting users.
-Navigates to UserUpsertComponent for user editing.

## UserServiceService:
-Manages user data, including adding, updating, and deleting users.

## Dependencies:
-Angular Material: Provides UI components and styles.
-SweetAlert2: Used for displaying informative pop-up messages.
-FlexLayout: Used for Layout Alignments.

## Additional Notes
-The application uses Angular Reactive Forms for form handling and validation.
-SweetAlert2 is integrated for user-friendly alert messages.

The application uses a simple in-memory data store managed by the UserServiceService for storing user information.