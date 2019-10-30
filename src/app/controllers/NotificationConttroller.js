import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationContoller {
  async index(req, res) {
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort('createdAt')
      .limit(20);
    return res.json(notifications);
  }
}

export default new NotificationContoller();
