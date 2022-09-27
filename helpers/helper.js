import jwt from "jsonwebtoken";

const helpers = {
  jwtEncrypt: (data) => {
    return jwt.sign(data, "shani185");
  },
};

export default helpers;
