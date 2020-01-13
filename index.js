const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
require("dotenv").config();

const app = express();

app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use(
	new OAuth2Strategy(
		{
			authorizationURL: "https://www.example.com/oauth2/authorize",
			tokenURL: "https://www.example.com/oauth2/token",
			clientID: EXAMPLE_CLIENT_ID,
			clientSecret: EXAMPLE_CLIENT_SECRET,
			callbackURL: "http://localhost:3000/auth/example/callback"
		},
		function(accessToken, refreshToken, profile, cb) {}
	)
);

const PORT = process.env.PORT | 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
