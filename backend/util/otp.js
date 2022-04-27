const crypto = require("crypto");
// const res = require("express/lib/response");
const sendEmail = require("./sendEmail");

exports.generateOTP = async () => {
  const otp = crypto.randomInt(1000, 9999);
  return otp;
};

exports.hashOTP = (data) => {
  return crypto
    .createHmac("sha256", process.env.HASH_SECRET)
    .update(data)
    .digest("hex");
};

exports.verifyOTP = (hashedOTP, computedHash) => {
  //   let computedHash = hashOTP(data);
  if (hashedOTP === computedHash) {
    return true;
  }
  return false;
};

exports.sendByEmail = async (user, otp, hash, expire) => {
  const message = `your otp for registration is ${otp}. \n \n if not requested by you please Ignore it`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Registration OTP",
      message,
    });

    // res.status(200).json({
    //   success: true,
    //   message: `Email sent to ${user.email} successfully`,
    //   hash: `${hash}.${expire}`,
    //   user,
    // });
  } catch (error) {
    // res.status(200).json({
    //   sucess: false,
    //   message: error.message,
    // });
    console.log(error);
  }
};
