README

Developers: Annie Fisher, Patrick Gaston, Steve Nagle, Steven Zuber


Full Stack Group MVC Project - JIST: Job Information Search Tracker

Technologies used:
Java
Spring MVC
JPA
MySQL
HTML 5/CSS 3
Bootstrap
Git
XML
Javascript
Angular
JQuery
Maven


Introduction:

At the end of week 15 of Skill Distillery we built a full stack app in a group. The goals were to create a persistent back-end
database connected to a dynamic front end, using Java technologies to connect them.
We wanted to make an application that wasn't just functional, but useful. Our app gives users a streamlined way to
keep track of all of their active job applications. Users can add jobs to an index that stores all of the relevant information
about that job, including contact information for the party the user is interacting with, url of the original posting, and
the date you applied. This date is used to remind the user to maintain contact with the company regarding the status of the application.

We began by discussing our proposal at length with each other before presenting the project to our instructors.
Our next step was to build our database. We then made entity classes in the JPA portion of our workspace
and then moved on to the MVC portion and spent the majority of the project time on the client-side of the application.


How to use:

Users begin by accessing the site through one of the websites below. The application exists on each of the developers personal websites.
Users can then choose a login option. If they don't have an existing account, they can make one by providing a username and password, as
well as optional fields of name and city. The password is stored in an encrypted form using BCryptEncoder. If the user is logged in with a
username, they can add add jobs to the directory described above, as well as update any relevant field. The chart on the dashboard
displays the current status of your applications.

Obstacles/Challenges:

We each had opportunities to practice working with Angular in ways that we hadn't used before. We utilized some of the plugins for Angular
to build the chart on the dashboard and work with the accordion functions.

Future Goals:

One of the stretch goals that we were unable to implement in the timeframe we had was to automate calls to GlassDoor's REST API to
automatically provide users with information about the position and company for each job they entered.


Access on AWS

Patrick Gaston: http://patgaston.com:8080/Jist/

Steve Nagle: http://stevenagle.tech:8080/Jist/

Annie Fisher: http://52.10.144.122:8080/Jist/

Steven Zuber: http://stevenzuber.info:8080/Jist/
