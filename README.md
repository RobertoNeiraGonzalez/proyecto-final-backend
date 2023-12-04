# proyecto-final-backend

# API

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `firstName`,`lastName`, `email`, `password` | { token: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { token: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | YES   | admin | Get All Users            |  `query params`                            | [{user}]
GET    | /user/me    | YES   | user | Get Own Profile          |                                                |  {user}
GET    | /user/:userId        | YES   | admin | Get One User             |                                             |  {user}
POST   | /user            | YES   | admin | Create one user         |`firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date`  | {user}
PUT    | /user/me    | YES   | user | Update own profile       |`firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date`  | {message: 'Profile updated'}
PUT    | /user/password   | YES   | user  | Reset password          | `newPassword` `repeatPassword`                                    | { message: 'Password updated }
PUT    | /user/:userId       | YES   | admin | Update one user         |  `firstName`,`lastName`, `email`, `password`, `phone`, `birth_Date` | {message: 'User updated'}
DELETE | /user/:userId      | YES   | admin | Delete one user         |                                                   | {message: 'User deleted'}
DELETE | /user/me   | YES   | user | Delete own profile       |                                                    | { message: 'Profile deleted' }

###  Pets Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /pets        | -   |- | See All Pets        |              `query params`               | [{ pets }]
GET    | /pets/:petId    | -   | - | See one Pet Info         |                                            |  { pet }
POST   | /pets/me    | YES      | user | Create Own pet Info             | `name`, `role`, `userId`, `especies`, `race`, `character`, `gender`, `size`, `info`, `location`, `{ image }`| { pets }
POST   | /pets           | YES   | admin | Create one pet         | { body }  | {user}
PUT   | /pets/me    | YES      | user | Update own pet Info             |        { pet }                     | {message: 'Your Pet Info have been updated'}
PUT    | /pets/:petId 🐈‍⬛      | YES   | admin | Update one pet         |  { body } | {message: 'User updated'}
DELETE | /pets/:petId 🐶    | YES   | admin | Delete one pet        |                                                   | {message: 'User deleted'}
DELETE   | /pets/me    | YES      | user | Delete own pet Info          |                            | {message: 'Your Pet Info have been deleted'}

### Comments Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
GET   | /comment ☄️    | YES     | Admin | Get all Comments              |  `query params`  | [{comments}]
GET   | /comment/inbox/me     | YES      | user | Get own Comments (receiver)              |                            | [{comments}]
GET   | /comment/send/me     | YES      | user | Get own Comments (author)             |                            | [{comments}]
GET   | /comment/:commentId     | YES      | Admin | Get a specific Comment               |                            | [{comments}]
POST   | /comment/me     | YES      | user | Create own comment              |  | {comment}
POST   | /comment   | YES      | Admin | Create a comment              |  | {comment}
PUT   | /comment/me/:commentId    | YES      | user | Update own comment              |                            | {message: 'Your comment have been updated'}
PUT   | /comment/:commentId    | YES      | Admin | Update a specific comment              |                            | {message: 'The comment have been updated'}
DELETE   | /comment/me/:commentId    | YES      | user | Delete own comment             |                            | {message: 'Comment deleted'}
DELETE   | /comment/:commentId     | YES      | Admin | Delete a specific comment             |                            | {message: 'Comment deleted'}

### Ratings Endpoints

| Method | Endpoint                  | Token Required | Role         | Description                              | Post Params                              | Returns                                  |
|--------|---------------------------|----------------|--------------|------------------------------------------|------------------------------------------|------------------------------------------|
| GET    | /ratings              | Yes            | Admin, User   | Get all ratings                          | N/A                                      | List of rating objects                   |
| GET    | /ratings/{id}         | Yes            | Admin, User   | Get a specific rating by ID              | N/A                                      | Rating object                            |
| POST   | /ratings              | Yes            | User         | Add a new rating                         | `{ "user_id": 1, "score": 4.5 }`         | Newly created rating object              |
| PUT    | /ratings/{id}         | Yes            | User         | Update an existing rating by ID          | `{ "score": 3.0 }`                       | Updated rating object                    |
| DELETE | /ratings/{id}         | Yes            | Admin        | Delete a rating by ID                    | N/A                                      | Status: 204 No Content                   |
