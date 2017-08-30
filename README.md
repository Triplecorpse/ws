# Advertima

To run the project:
- clone repository - input `git clone https://github.com/Triplecorpse/ws.git`
- go to project folder, install dependencies `npm install`
- go to `%PROJECT_DIR%/public` and run `npm install` again and then `ng build`
    - you should have global ng generator installed
- to run the project type `npm start` in project dir and go to `localhost:3333`

To use the project:
- press `Add New Person` to simulate person coming.
It will have random lifetime and will disappear automatically.
- to force remove random person press `Remove Random Person`
- content will change after first person comes and will changed randomly

All application works through websockets.