![FIS-Assist-Logo](https://raw.githubusercontent.com/ObieMunoz/fis-assist/main/src/assets/fis_logo.png)
# FIS Assistance Program

## Live Deployment Links
- [FIS Assist (Frontend)](https://obiemunoz.github.io/fis-assist/)
- [FIS Assist (Backend/API)](https://fis-assist.herokuapp.com/)

## Learning Goals

As this application was built during Phase 3 of the Flatiron School's Software Engineering program, our primary goal was to continue learning. The focus of this project was to build a [Sinatra API backend](http://www.github.com/obiemunoz/fis-assist-backend) that uses ActiveRecord to access and persist data in a database, which will be used by a separate React frontend that interacts with the database via the API.

## Development Team
- [Obie Munoz](http://www.linkedin.com/in/obedmunozjr)
- [Joshua Hawks](http://www.linkedin.com/in/joshuahawks1)
- [Rodrigo Alba](http://www.linkedin.com/in/rodrigoqalba)

## Purpose

Aside from learning more in Ruby, Sinatra, and React, a goal was to create a useful application for other students currently enrolled in the Flatiron School. Many students frequent Flatiron slack channels requesting assistance for various lab assignments they are stuck on. A greater need for a more organized method of requesting assistance seemed to be present and we decided to address the issue together.


## Project Planning

- Frontend : As far as the frontend development goes, we had several goals in mind:
  - The student user can see all courses available.
  - The student user can see all assignments available in each course.
  - The student user can see all questions linked to each assignment.
  - The student user can submit a new question.
  - The frontend will be live and hosted using Github Pages.

- Backend : To reach the listed goals for the frontend, a database plan was created. See the table layout image below for further information regarding the setup.
  - The backend will be live and hosted using Heroku.
    - The production database will be PostgreSQL.

![db-tables-plan](https://raw.githubusercontent.com/ObieMunoz/fis-assist/main/src/assets/plan-tables.png)