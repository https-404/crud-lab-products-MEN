const joi = require('joi');

const AddProductValidation = (req, res, next) =>{
 const Schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    quantity: joi.number().required(),
    price: joi.number().required(),
    description: joi.string().min(6).max(150).required()
 });

 const {error, value} = Schema.validate(req.body);

 if (error) {
    return res.status(400).json({
        message: "Bad Request",
        error,
    });
}

next();

}

// const Schema = joi.object({
//     fullname: joi.string().min(3).max(20).required(),
//     role: joi.string().required(),
//     email: joi.string().email().required(),
//     password: joi.string().min(6).max(20).alphanum().required(),
// });

// // Validate the request body against the schema
// const { error, value } = Schema.validate(req.body);

// // If validation fails, return a 400 Bad Request response with the error details
// if (error) {
//     return res.status(400).json({
//         message: "Bad Request",
//         error,
//     });
// }

// // If validation succeeds, call the next middleware function
// next();
const updateProductValidation = (req, res, next)=>{
    const Schema = joi.object({
        name: joi.string().min(3).max(20),
        quantity: joi.number(),
        price: joi.number(),
        description: joi.string().min(6).max(150)
    }).or('name', 'quantity', 'price', 'description');

    const {error, value} = Schema.validate(req.body);

    if (error) {
    return res.status(400).json({
        message: "Bad Request",
        error,
    });
}
next();

}

module.exports = {
    AddProductValidation,
    updateProductValidation,
}