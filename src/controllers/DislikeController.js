const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev) {  //Main handle to requisitions
            return res.status(400).json({ error: 'Developer does not exists.'});
        } else if(loggedDev.dislikes.includes(targetDev._id)) {
            return res.status(400).json({ error: 'Developer was already already disliked.'});
        }
        else
            loggedDev.dislikes.push(targetDev._id);
            await loggedDev.save();

            return res.json(loggedDev);
    }
};