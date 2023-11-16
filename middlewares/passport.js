import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt  } from "passport-jwt";

export default passport.use(
  "jwt",
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    },
    async (jwt_payload, done) => {
      try {
      console.log( "Javier hasta aca llegaste")
        let user = await User.findOne(
          { mail: jwt_payload.mail },
          "-password -__v -_id"
        );
        if (user) {
          return done(null, user);
        } else {
          return done(null);
        }
      } catch (error) {
        console.log(error)
        return done(error);
      }
    }
  )
);