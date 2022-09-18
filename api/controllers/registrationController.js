require("../repository/model/registration-model")
const mongoose = require("mongoose");
const Registration = mongoose.model("Registration");

let response={
    status:"",
    message:""
};
const _sendResponse = function(res,response){
    res.status(parseInt(response.status)).json(response.message);
}

const getAll = function (req,res){
    console.log("get All registrations");
   let offset = process.env.OFFSET;
   let count = process.env.COUNT;
   let condition;
    if(req.query && req.query.count){
        count = parseInt(req.query.count,10);
    };
    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset,10);
    };
    if(req.query &&req.query.condition){
        condition=req.query.condition;
    }

    Registration.find(condition).skip(offset).limit(count).exec().then(registrations=>{
        console.log(`registrations found: ${registrations.length}`);
        response.status=200;
        response.message=registrations;
    }).catch(err=>{
        console.log(`error: ${err}`);
        response.status=500;
        response.message=`Error get registration`
    }).finally(()=>{
        _sendResponse(res,response);
    });
};

const createOne = function (req,res){
    console.log(`create registration controller called`);
    const newRegistration = {
        name:req.body.name,
        email:req.body.email,
        reason:req.body.reason,
        isApprovedByRegistrar:false,
        isProgramApproved:false,
        status:"NEW"
    };
    Registration.create(newRegistration).then(registrationPosted=>{
        console.log(`Registration received: ${registrationPosted}`);
        response.status=201;
        response.message=registrationPosted;
    }).catch(err=>{
        console.log(`error: ${err}`);
        response.status=500;
        response.message=err;
    }).finally(()=>{
        _sendResponse(res,response)
    });

}

const _fillFields = function (registration, req){
    if(req.body && req.body.isApprovedByRegistrar===true){
        registration.isApprovedByRegistrar = req.body.isApprovedByRegistrar;
        registration.status=process.env.APPROVED_BY_REGISTRAR_MSG;
    }else{
        registration.isApprovedByRegistrar = req.body.isApprovedByRegistrar;
        registration.status=process.env.REJECTED_BY_REGISTRAR_MSG;
    }
    if(req.body && req.body.isProgramApproved===true){
        registration.isProgramApproved = req.body.isProgramApproved
        registration.program=req.body.program;
        registration.status=process.env.APPROVED_BY_ADVISOR_MSG;
    }else{
        registration.isProgramApproved = req.body.isProgramApproved
        registration.program="";
        registration.status=process.env.REJECTED_BY_ADVISOR_MSG;
    }
    return registration;

}
const updateOne = function (req,res){
    console.log(`update registration controller requested`);
    const registrationId=req.params.registrationId;
    response.status=process.env.UPDATE_SUCCESS_STATUS_CODE;
    response.message={};
    Registration.findById(registrationId).exec().then(registration=>{
        console.log(`found registration: ${registration}`);
        response.status=parseInt(process.env.UPDATE_SUCCESS_STATUS_CODE);
        response.message=registration;
        let updatedRegistration =_fillFields(registration, req);
        updatedRegistration.save().then(update=>{
            console.log(`registration updated successfully`);
            response.message=update;
            response.status=parseInt(process.env.UPDATE_SUCCESS_STATUS_CODE);
        }).catch(err=>{
            console.log(`error updating registration: ${err}`);
            response.message=err;
            response.status=parseInt(process.env.SERVER_ERROR_CODE);
        })
    }).catch(err=>{
        console.log(`error updating registration: ${err}`);
        response.message=err;
        response.status=parseInt(process.env.SERVER_ERROR_CODE);
    }).finally(()=>{
        _sendResponse(res, response);
    });

}



module.exports = {
    getAll, createOne, updateOne
}



