import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(dado: IUser): Promise<IUser> {
    const { username, vocation, level, password } = dado;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.users
        (username, vocation, level, password) VALUES (?,?,?,?)`,
      [username, vocation, level, password],
    );
    const newUser = {
      id: insertId,
      username,
      vocation,
      level,
      password,
    };
    return newUser;
  }
}