# Lyft code sample

For running this application you should clone this repository, run `bundle install`, and start it up on local host using `rails s`

In order to make testing the app easier, I created a simple frontend folder that you can navigate to after cloning the repository and opening the rails server. Once you `cd` into the frontend folder, run `open index.html` to open up a simple html page. On this page you can enter any string that you would like to cut. After entering a string, the submit button will send a POST request to "/test" and return a JSON object with the key “return_string” and a string containing every third letter from the original string. 

This object will be displayed on the page in a list if you are makeing the post request through the frontend page. You can add to this list with new requests if you continue to submit more strings in the input field.

Otherwise, you may use any other method for making POST request to http://localhost:3000/test with the argument "string_to_cut" and it will return a JSON object with the key “return_string” and a string containing every third letter from the original string.
