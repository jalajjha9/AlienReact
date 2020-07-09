const sendResponse = require("./../common/customResponse");
const mySql = require("./../../mySqlConfig");

const api = {
    authLogin: async (req, res) => {
        console.log(req.body);
        let message = "";
        let responseData = {};
        try {
            const email = req.body.email ? req.body.email : "";
            const password = req.body.password ? req.body.password : "";
            if (email && password) {
                message = "Login successful";
                responseData = {
                    email: email,
                    password: password,
                };
            } else {
                message = "Email or password cannot be empty";
            }
            sendResponse(res, 200, 1, message, responseData);
        } catch (e) {
            message = "Something went wrong. Please try again";
            sendResponse(res, 500, 0, message, responseData);
        }
    },
};

module.exports = api;
