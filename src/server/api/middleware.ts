import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @desc Hash a password
 * @param req Request
 * @param res Response
 * @param next Next
 * @returns {Promise<void>}
 */
export const hashPassword = async (
  req: any,
  res: any,
  next: any
): Promise<void> => {
  console.log("before hash", req.body);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  next();
};

/**
 * @desc Authenticate a JWT token
 * @param req Request
 * @param res Response
 * @param next Next
 */
export const authenticateToken = (req: any, res: any, next: any) => {
  console.log(req.headers);
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};
