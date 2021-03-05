import next from 'next';
import connectDB from '../../../utils/connectDB';
import Guitar from '../../../models/Guitar';

connectDB();

export default async (req, res, next) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const guitars = await Guitar.find({});
        res.status(200).json({ success: true, data: guitars });
      } catch (error) {
        res.json({ success: false, data: error });
      }
      break;

    default:
      break;
  }
};
