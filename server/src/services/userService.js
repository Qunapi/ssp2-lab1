import { User } from "../models/User";

class UserService {
  async create({ login, password }) {
    const newUser = new User({ login, password });
    return newUser.save();
  }
}

export const userService = new UserService();
