import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized user - No token provided",
      });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.SECRET);
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized -Invalid token",
      });
    }
    const user = await db.user.findUnique({
      where: {
        id: decoded.id,
      },
      select: {
        id: true,
        image: true,
        name: true,
        email: true,
        role: true,
      },
    });
    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error authenticating user ", error);
    res.status(500).json({
      message: "Error authenticating user ",
    });
  }
};
