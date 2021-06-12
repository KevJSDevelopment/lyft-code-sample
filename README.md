# Lyft code sample

For running this application you should clone this repository. 

Next, run command `bundle install` in the root of the repository you just cloned.

Now you can start up the rails server on local host using command `rails s`


You may use any method for making POST request to http://localhost:3000/test with the argument "string_to_cut" and it will return a JSON object with the key “return_string” and a string containing every third letter from the original string. 

For testing purposes I used an app called Postman to send my POST request to http://localhost:3000/test with a body that contained the json object {"string_to_cut": *my-string*}. (replace *my-string* with any string you want to test)

Alternatively,

In order to make testing the app easier, I created a simple frontend folder that you can navigate to after cloning the repository and opening the rails server. Once you `cd` into the frontend folder, run `open index.html` to open up a simple html page. On this page you can enter any string that you would like to cut. 
![Alt text](lyft-sample-screenshot.png?raw=true)
After entering a string, the submit button will send a POST request to "/test" and return a JSON object with the key “return_string” and a string containing every third letter from the original string. 

This object will be displayed on the page in a list if you are makeing the post request through the frontend page. You can add to this list with new requests if you continue to submit more strings in the input field.
