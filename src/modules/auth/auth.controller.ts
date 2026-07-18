import { catchAsync } from "../../utils/catchAsync";

const loginUser = catchAsync();
const refreshToken = catchAsync();

export const authController = {
  loginUser,
  refreshToken,
};
