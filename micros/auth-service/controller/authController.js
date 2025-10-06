import prisma from '../DB/db.config.js';

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send('All the Fields Are Required');
  }

  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
};
