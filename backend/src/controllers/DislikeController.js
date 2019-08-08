const Dev = require('../models/Dev');

module.exports = {
	async store(req, res) {
		const { devId } = req.params;
		const { user } = req.headers;

		if (devId === user) return res.status(400).json({ error: 'Can not like yourself' });

		const loggedDev = await Dev.findById(user);
		const targetDev = await Dev.findById(devId);

		if (!targetDev) return res.status(404).json({ error: 'Dev not exists' });

		loggedDev.dislikes.push(targetDev._id);
		await loggedDev.save();

		return res.json(loggedDev);
	}
};
