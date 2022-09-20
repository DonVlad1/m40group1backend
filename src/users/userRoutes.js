const { Router } = require("express")
const userRouter = Router()
const {
        listUsers, listUserName, listUserEmail,
        addUser, login, deleteUser, 
        editEmail, editName, editPassword, 
    } = require("./userControllers")
const { hashPassword, tokenCheck } = require("../middleware")


// ---------------------- create ----------------------
userRouter.post("/user/login", login);
userRouter.post("/user/signup",[hashPassword], addUser);
        
// ---------------------- read ----------------------
userRouter.get("/user", listUsers);
userRouter.get("/user/name", listUserName);
userRouter.get("/user/email", listUserEmail);

// ---------------------- update ----------------------
// userRouter.put("/user", [hashPassword, tokenCheck], editUser);
userRouter.put("/user/editname", [tokenCheck], editName)

userRouter.put("/user/editemail", [tokenCheck], editEmail)

userRouter.put("/user/editpassword", [hashPassword, tokenCheck], editPassword)

// ---------------------- delete ----------------------
userRouter.delete("/user", [tokenCheck], deleteUser);


module.exports = userRouter