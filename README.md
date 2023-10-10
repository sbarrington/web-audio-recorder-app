# Audio Speech Recorder
This web app contains a cross-browser speech recorder that connects to a client microphone, captures audio, and stores it on a server. 

The core client recording code was forked from the open source Vocaroo directory. 

# Usage
## Code 
This code requires two app servers to be run: a front end client port (defaults to 8080) and a backend sevrer port (defaults to 3000). The two must be running simultaneously. 

* Navigate to the 'audio-speech-recorder' folder 
* Run the backend express server: node server/server.js
* Run the broswer client server: npm start
* This will open a browser window and the app will be running. 

## Integration with Qualtrics or MTurk
* A unique identifier is returned at the point of recording completion. 
* This identifier also names the file on the server. 
* Respondents can paste this back into the survey as a link to their file. 

# Backlog
* Create single app start up process to open both ports (instead of manually starting both)
* Enable participant tracking across browser windows 
* Host code on a VM and integrate with server management tools to protect against server failures 

# Contact
Please contact sbarrington@ischool.berkeley.edu for any queries. 