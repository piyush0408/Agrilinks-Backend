const ErrorHandler = require("../util/errorhandler");

const reportDetails = require("../models/reportModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.register = catchAsyncErrors(async (req, res, next) => {
  const {
    userID,
    cmdtyID,
    marketID,
    marketName,
    cmdtyName,
    priceUnit,
    convFctr,
    price,
  } = req.body;

  console.log(
    userID,
    cmdtyID,
    marketID,
    marketName,
    cmdtyName,
    priceUnit,
    convFctr,
    price
  );
  const reportDetail = await reportDetails.findOne({ cmdtyID, marketID });

  const timestamp = Date.now();

  //check if user exist or not

  if (reportDetail) {
    let newPrice = price / convFctr;
    let users = reportDetail.users;
    const newUsers = users.filter((user) => {
      if (userID != user) return user;
    });

    newUsers.push(userID);

    newPrice = (newPrice + reportDetail.price) / newUsers.length;
    console.log(newPrice, users);
    reportDetail.price = newPrice;
    reportDetail.users = newUsers;
    reportDetail.timestamp = timestamp;

    const newReportDetail = await reportDetails.findByIdAndUpdate(
      reportDetail._id,
      reportDetail,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    res.status(200).json({
      success: true,
      newReportDetail,
    });
  } else {
    let users = [];
    users.push(userID);
    const report = await reportDetails.create({
      // userID,
      cmdtyID,
      marketID,
      marketName,
      cmdtyName,
      users,
      price,
      timestamp,
    });

    res.status(200).json({
      success: true,
      message: "New Report Created Successfully",
      reportID: report._id,
    });
  }
});

exports.getReportDetail = catchAsyncErrors(async (req, res, next) => {
  const id = req.query.reportID;

  console.log(id);
  const reportDetail = await reportDetails.findById(id);
  console.log(reportDetail);
  if (reportDetail) {
    res.status(200).json({
      success: true,
      reportDetail,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "incorrect Id",
    });
  }
});
