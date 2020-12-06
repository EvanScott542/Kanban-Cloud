# Kanban Cloud

Student group project management application developed for CMSC 491 - Fall 2020 at Virginia Commonwealth University.


The front-end source code is broken down into componenents and services. The new-card directory contains all files relevant to the new-card component which houses the form for creating a new card before it is added to the board. Below that, we have a services directory which houses the KanbanService. This service is responsible for sending HTTP requests to the middle tier of our application. The most important files we have are app.component.ts and app.component.html. These comprise the root app component and are responsible for generating the Kanban board and displaying the new-card component as a ViewChild. As a side, app.component.ts is used to manage internal dependencies and imports. Other files not mentioned above are purely for dependency management, style, and testing. 


A Django REST Framework project that makes up the application middle tier. DRF is a third-party developed framework that allows the creation of RESTful HTTP resources that correspond to models. The important files in a DRF project, and this one in particular, are as follows:

•	admin.py – Used to display models in the boilerplate Django Admin panel.
•	apps.py – Used for application configurations.
•	models.py – Houses the models for the application.
•	serializers.py – Houses the Serializer class which converts querysets into native Python types and allows us to control the output of responses as JSON.
•	views.py – Contains the views and viewsets for the application.
