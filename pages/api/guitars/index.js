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

const allowCors = (fn) => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

module.exports = allowCors(handler);

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
