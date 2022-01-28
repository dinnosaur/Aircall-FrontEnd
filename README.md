# Aircall 

### Introduction 
This app was created using react which that allows calls to be displayed and details of each call to been seen. The app is paginated with all the calls that are fetched. The app in total has 2 pages that can be navigated within each other. 

### Before Running the app 

- Clone the project into your local machine
- npm install 
- npm start 

### Program In action 
![Home Page](https://github.com/dinnosaur/Aircall-FrontEnd/blob/main/Images/Screenshot%202022-01-28%20at%2018.06.27.png?raw=true)

>This is the main page that authorises the user and fetches all the calls, the user can click on a button and redirected to the specific calls details. The calls ordered by the date in a descending order

&nbsp;

![Home Page](https://github.com/dinnosaur/Aircall-FrontEnd/blob/main/Images/Screenshot%202022-01-28%20at%2018.09.18.png?raw=true)

>This page shows the details of a specific call and allows users to archive or unarchive calls which is updated in the database as well as on the web app in real time.

### Libraries used 
Material UI was used for the pagination componenet as well as MUI's styling solution that uses jss for all my css code.
Tractor Aircall design system was also used for most of the elements.


### Problems that were faced 
-There was one issue that I was not able to fix which is to request a refresh token after the token has expired. I get the error that I am unauthorized. 
-I was not able to sort all the calls by the date as I only receive a limited number of calls. 





