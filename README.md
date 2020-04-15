# Complete Node.js Registration and Authentication with Passport.js

## Technologies used
+ Node.js
+ Express
+ Validator
+ ejs
+ Passport
+ HTML

### Essential Features of the application
+ Validates user registration on the following fields
  + username
  + email
  + password
  + confirm password
+ checks whether user is already registered
+ checks email validity
+ checks whether email is already taken
+ accepts only aphanumeric username
+ checks password length for atleast 8 characters

#### How to install and run the app locally
+  Clone the repo
+  create a .env file and assign the following environment valriables
    - PORT=3000 
    - CONNECTIONSTRING=your mongodb connection string
+ Open terminal to run npm install/yarn install to install all dependencies


#### New fetaures coming soon
+ Password reset option
+ Limit user login attempts 
+ Authentication with other strategies, e.g facebook, twitter and others

_contribute to this project for usage by all_