# teksystems

Backend: I created the back-end using mongoDB as the database.
methods: 
GET: /api/registrations : list all registrations
POST: /api/registrations : create a new registration
PATCH: /api/registrations/:registrationId : update registration (approvation by registrar or approvation by advisor)

TODO in Future:
-add login controller and routes
-implement JWT with roles to secure end points


FrontEnd: Implemented in Angular JS
Pages:
/student : form to create a registation and see what registration were submmited and their status
/registrar: list all registation and have action to aprove of reject.

Todo In future:
Advisor page:
-List aplications that were approved(isApproved is true) by the registrar;
-add page with calendar for schedule the meeting between student and the Advisor
-list applications of programs submited by student
Create  Program list to show all programs to let the student choose
