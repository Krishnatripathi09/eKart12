import express from 'express';

const app = express();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).send('This is a Get Route');
});
