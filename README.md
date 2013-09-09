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
GOOGLE_CLIENT_ID="`google client id here`" \
GOOGLE_CLIENT_SECRET="`google client secret here`" \
GOOGLE_CALLBACK="`yourdomain.com`/auth/google/return" \
SESSION_SECRET="`replace with random characters`" \
DB_CONNECTION_STRING="`mongodb connection string here`" \
DB_API_KEY="`db api key here`" \
node server.js

and execute script

	$ ./start.sh

Add routes (`config/routes.js`), create models (`app/models/`), views (`app/views/`) and controllers (`app/controllers/`), expand authentication (`config\passport.js`)

## License

MIT
