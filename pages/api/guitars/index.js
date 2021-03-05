import connectDB from '../../../utils/connectDB';
import Guitar from '../../../models/Guitar';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

connectDB();

export default async (req, res, next) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        // Run the middleware
        await runMiddleware(req, res, cors);
        const guitars = await Guitar.find({});
        res.status(200).json({ success: true, data: guitars });
      } catch (error) {
        res.json({ success: false, data: error });
      }
      break;

    case 'POST':
      try {
        // Run the middleware
        await runMiddleware(req, res, cors);
        const guitar = await Guitar.create({ name: req.body.name });
        res.json(guitar);
      } catch (error) {
        res.json({ success: false, data: error });
      }
      break;

    default:
      break;
  }
};
