import Joi from "joi";

const usersSchema = Joi.object({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "in", "co"] } } ),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    firstname: Joi.string().required().min(1).max(32550),
    lastname: Joi.string().required().min(1).max(255)
})

export { usersSchema }