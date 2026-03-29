import * as authService from "./auth.service.js";
import ApiResponse from "../../common/utils/api-response.js";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  ApiResponse.created(res, "Registration success", user);
};

const login = async (req, res) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  ApiResponse.ok(res, "Login successful", { user, accessToken });
};

const logout = async (req, res) => {
  await authService.logout(req.user.id);
  res.clearCookie("refreshToken");
  ApiResponse.ok(res, "Logout Success");
};

// const verifyEmail = async (req, res) => {
//   const { token } = req.params;

//   const user = await authService.verifyEmail(token);

//   ApiResponse.ok(res, "Email verified successfully", user);
// };

// const forgotPassword = async (req, res) => {
//   await authService.forgotPassword(req.body.email);
//   ApiResponse.ok(res, "Password reset link sent to email");
// };

const getMe = async (req, res) => {
  const user = await authService.getMe(req.user.id);
  ApiResponse.ok(res, "User Profile", user);
};

export { register, login, logout, getMe };
