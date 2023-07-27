import { articleModel } from "../shared/database/models/articleSchema.js";
import _ from 'lodash';
import { userModel } from "../shared/database/models/usersSchema.js";

export const getAllArticles = async () => {
    try {
        const articles = await articleModel.find().lean();
        return articles;
    }
    catch (err) {
        return err;
    }
}

export const getAllPublicArticles = async () => {
    try {
        const publicArticles = await articleModel.find({ visibility: 'public' });
        return publicArticles;
    }
    catch (err) {
        return err;
    }
}

export const getLoggiedInArticles = async (verified) => {
    try {
        const userFound = userModel.findOne({ email: verified })
        if (userFound) {
            const loggedInArticles = await articleModel.find({
                $or: [
                    { visibility: { $in: ['logged_in', 'public'] } },
                    { $and: [{user_id:verified},{visibility: 'private'}] }
                ]
            });

            return loggedInArticles;
        }
        else {

            const loggedInArticles = await articleModel.find({ visibility: 'logged_in' || 'public' });
            return loggedInArticles;
        }
    }
    catch (err) {
        return err;
    }
}