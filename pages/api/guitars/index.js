import nc from 'next-connect';
import cors from 'cors';
import connectDB from '../../../utils/connectDB';
import Guitar from '../../../models/Guitar';

connectDB();
const handler = nc()
  // use connect based middleware
  .use(cors())
  // express like routing for methods
  .get(async (req, res) => {
    const guitars = await Guitar.find({});
    res.status(200).json({ success: true, data: guitars });
  })
  .post((req, res) => {
    res.json({ hello: 'world' });
  })
  .put(async (req, res) => {
    res.end('hello');
  });

export default handler;
