## Genom-T

Google authorization, Express for MVC, NOdejs under the hood, Mongoose for db, Twitter Bootstrap for style

In other words: Genom-T a boilerplate for modern web apps with google authentication.

This is based on https://github.com/madhums/node-express-mongoose/

## Usage

Clone this repository

    $ npm install

Create a script file start.sh and make it executable

	$ touch start.sh
	$ chmod +x start.sh
	$ nano start.sh

and enter:

PORT="3000" \
GOOGLE_CLIENT_ID="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com" \
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_CLIENT_SECRET" \
GOOGLE_CALLBACK="YOUR_DOMAIN.COM/auth/google/return" \
SESSION_SECRET="AnyRandomCharactersHere" \
DB_CONNECTION_STRING="mongodb://DBUSER:USERPASSWORD@YOURSERVER.mongolab.com:412$
DB_API_KEY="DB_API_KEY" \
node server.js



Add routes (`config/routes.js`), create models (`app/models/`), views (`app/views/`) and controllers (`app/controllers/`), expand authentication (`config\passport.js`)

## License

MIT
