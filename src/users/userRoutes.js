const { Router } = require("express")
const {listUsers, addUser, login, deleteUser, editUsername, editEmail, editPassword, editPhone, editBio, editDarkmode} = require("./userControllers")
const userRouter = Router()
// const {
//         listUsers, listUserName, listUserEmail,
//         addUser, login, deleteUser, 
//         editEmail, editName, editPassword, 
//     } = require("./userControllers")
const { hashPassword, tokenCheck } = require("../middleware")



// ---------------------- create ----------------------
userRouter.post("/user/login", login);
userRouter.post("/user/signup", [hashPassword], addUser);

// ---------------------- read ----------------------
userRouter.get("/user", listUsers);
// userRouter.get("/user/name", listUserName);
// userRouter.get("/user/email", listUserEmail);


// // ---------------------- update ----------------------
// // userRouter.put("/user", [hashPassword, tokenCheck], editUser);
userRouter.put("/user/editname", [tokenCheck], editUsername)
userRouter.put("/user/editemail", [tokenCheck], editEmail)
userRouter.put("/user/editpassword", [hashPassword, tokenCheck], editPassword)
userRouter.put("/user/editphone", [tokenCheck], editPhone)
userRouter.put("/user/editbio", [tokenCheck], editBio)
userRouter.put("/user/editdarkmode", [tokenCheck], editDarkmode)

// // ---------------------- delete ----------------------
userRouter.delete("/user", [tokenCheck], deleteUser);


module.exports = userRouter