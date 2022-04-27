import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/Router';
import { connect } from 'mongoose';
dotenv.config();

const app = express();
const PORT: number | any = process.env.PORT;

app.use(express.json());
app.use(routes);

const DBConnect = (host: string): void => {
  connect(host, {

  })
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log(err);
    });
};

app.listen(PORT, () => {
  const host: string | any = process.env.DATABASE_URL;
  DBConnect(host);
  console.log(`server listening on port ${PORT}`);
});
