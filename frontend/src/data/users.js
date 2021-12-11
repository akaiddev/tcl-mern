import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin@123', 10),
    isAdmin: true,
  },
  {
    name: 'user',
    email: 'user@gmail.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: false,
  },
]

export default users
