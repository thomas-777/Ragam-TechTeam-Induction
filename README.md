Task for Ragam Tech team inductions- Library management.

Backend work completed. Demonstrated using postman.

Since the operations on users and books are similar , I'm showing demonstrating only the book manipulations. THe user manipulation can be done in the similar manner.


Implemented jwt authorizations for all operations.


Delete endpoint is protected by password.

API endpoimts:
- `POST /api/auth/login` - Login and get a JWT token.
-  `POST /api/auth/logout` - Logout


- `POST /book/add` - Add a book.
- `GET /book/all` - List all books.
- `PUT /book/update/:id` - Update book details.
- `DELETE /book/delete/:id` - Delete a book.

-  `POST /user/add` - Add a user.
- `GET /user/all` - List all users.
- `PUT /user/update/:id` - Update user details.
- `DELETE /user/delete/:id` - Delete a user.


Only authorized admin can login to the system (Here I have created a admin credential)



![Screenshot From 2024-12-09 01-50-21](https://github.com/user-attachments/assets/634214e9-df85-478c-98cd-66948c22b536)

A jwt token is created. All the following operations are done only after the token verification.


![Screenshot From 2024-12-09 01-52-36](https://github.com/user-attachments/assets/2091824e-0a5d-43c3-acef-1dcedbcb7838)

The following are the add, showAll, update and delete operations performed for the books:

Adding a book:
![Screenshot From 2024-12-09 01-51-23](https://github.com/user-attachments/assets/ed3ff857-91de-4665-add9-5f50589a2976)

Showing all available books:
![Screenshot From 2024-12-09 01-53-45](https://github.com/user-attachments/assets/013a71d3-f960-480a-b0fe-98af07c98463)

Updating a book:
![Screenshot From 2024-12-09 02-14-08](https://github.com/user-attachments/assets/d13f7873-0ef3-400f-8625-036378826593)
![Screenshot From 2024-12-09 02-16-48](https://github.com/user-attachments/assets/33f4ff9f-8e85-4a78-a2af-f2cf5e114f1f)

Deleting a book(Only allowed if we give correct password):
![Screenshot From 2024-12-09 01-54-10](https://github.com/user-attachments/assets/32f06ba3-5c39-4543-b5c2-ce707dceb333)

Logging out:
![Screenshot From 2024-12-09 01-54-10](https://github.com/user-attachments/assets/eb229ac9-be8b-4515-9516-7223952661c8)
