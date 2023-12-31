import { Router } from "express";
import * as controller from "./controller.js";
import Auth from "./auth.js"

const router=Router();
router.route("/login").post(controller.login);
router.route("/home").get(Auth,controller.home);
router.route("/adduser").post(controller.addUser);
router.route("/addstaff").post(controller.addStaff);
router.route("/addstudent").post(controller.addStudent);
router.route("/loginstaff").post(controller.Staff_login);

router.route("/loginstudent").post(controller.Student_login);
router.route("/getdetsilsloginedstudent").get(Auth,controller.GetDtsilsLoginedStudent);

router.route("/staffgetdata").get(controller.Staff_getdata);
router.route("/studentgetdata").get(controller.Student_getdata);
router.route("/delstaff/:id").delete(controller.del_staff);
router.route("/delstudent/:id").delete(controller.del_student);
router.route("/getstaff_detail_one/:id").post(controller.getStaff_Details);
router.route("/getstaff_student_one/:id").post(controller.getStudent_Details);
router.route("/editstaff/:id").patch(controller.edit_staff);
router.route("/editstudent/:id").patch(controller.edit_student);
router.route("/forgotusername/:phone").get(controller.forgotUsername);
router.route("/forgotepwd/:phone").patch(controller.staffFrgtPwd);



// router.route("/display").post(controller.addtask);






    // res.status(200).send("this is controller"))
export default router;