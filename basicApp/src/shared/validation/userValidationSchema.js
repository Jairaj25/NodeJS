import Joi from "joi";

const userSchema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "in", "co"] } } ),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    name: Joi.string().required().min(1).max(225)
})

export { userSchema }