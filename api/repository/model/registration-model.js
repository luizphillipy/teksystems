const mongoose = require("mongoose");

const registrationSchema = mongoose.Schema({
    name:String,
    email:String,
    reason:String,
    isApprovedByRegistrar:false,
    program:String,
    isProgramApproved:false,
    status:String
});
mongoose.model("Registration",registrationSchema,"registrations");
//STATUS:
//NEW: posted by Student;
//

