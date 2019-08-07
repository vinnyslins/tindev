const Dev = require('../models/Dev');

module.exports = {
	async store(req, res) {
		const { devId } = req.params;
		const { user } = req.headers;

		const loggedDev = await Dev.findById(user);
		const targetDev = await Dev.findById(devId);

		if (!targetDev) return res.status(404).json({ message: 'Dev not exists' });

		loggedDev.likes.push(targetDev._id);
		await loggedDev.save();

		return res.json(loggedDev);
	}
};
