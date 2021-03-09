# fibonacci_delivery_user
This is the user page (client side) that will retrieve the data from the API.
Using React would have seem to me a bit of an overkill, mostly because there are not this many components I could have split the small application
into (also if it could have been a fun excercise to start the fetch call from a useEffect hook), so I decided to stick to plain old Js. 

Setup:
- application.js
- index.html
- main.css

Styles:
For the applications styles I started firstly to look at an image I would have find fitted for the layout. After this decision I took out the main 
colors through color-picker and then fill up the components with the different colors so that they would fit all together nicely without creating inconsistencies.
The background is created as well through a liner gradient of colors that are present in the image.

Other considerations:
Obviously the application could have had further developed and enhanced. On this front end layout and js file things to note would be the impossibility for the 
user to input negative numbers and the elasticity of the card when dinamically injected with new values.
