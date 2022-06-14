const FormDataModel = require('../database/models/FormData');

const readAllForms = async (req, res) => {
    try {
        const forms = await FormDataModel.find();
        res.status(200).json(forms);
    }catch(err){
        console.log(err);
        res.status(500).json({err:err.message});
    }
}

const submitForm = async (req, res) => {
    const name = req.body?.name;
    const email = req.body?.email;
    const age = req.body?.age;
    const phone = req.body?.phone;
    const businessName = req.body?.businessName;
    const GSTNo = req.body?.GSTNo;
    const street = req.body?.street;
    const city = req.body?.city;
    const state = req.body?.state;
    const zip = req.body?.zip;
    const amountINR = req.body?.amountINR;
    const tenureYrs = req.body?.tenureYrs;
    const interestRate = req.body?.interestRate;
    try {
        const data = {
            personal: {
                name: name,
                email: email,
                age: age,
                phone: phone
            },
            business: {
                name: businessName,
                GSTNo: GSTNo,
                address: {
                    street: street,
                    city: city,
                    state: state,
                    zip: zip
                }
            },
            loan: {
                amountINR: amountINR,
                tenureYrs: tenureYrs,
                interestRate: interestRate
            }
        }
        const form = await FormDataModel.create(data);
        res.status(201).json(form);
    }catch(err){
        if(err.name === 'ValidationError'){
            return res.status(400).json({err:err.message});
        }
        res.status(500).json({err:err.message});
    }
}

module.exports = {
    readAllForms,
    submitForm
}