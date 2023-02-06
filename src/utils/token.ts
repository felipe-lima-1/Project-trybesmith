import jwtToken from 'jsonwebtoken';

const SECRET = 'secret';

const jwt = (username: string, id: number) => {
  const token = jwtToken.sign({ username, id }, SECRET);
  return token;
};

export default jwt;