const express=require("express")
const router=express.Router()

const {getalljobs,getjob,deletejob,updatejob,creatjob}=require("../controller/jobscontroller")

router.route("/").get(getalljobs).post(creatjob)
router.route("/:id").delete(deletejob).get(getjob).patch(updatejob)

module.exports=router