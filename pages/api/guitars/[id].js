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
    try {
      const { id } = req.query;
      const guitar = await Guitar.findById(id);
      res.json(guitar);
    } catch (error) {
      console.log(error);
    }
  });

export default handler;
