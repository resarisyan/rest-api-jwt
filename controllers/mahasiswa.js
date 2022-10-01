import jwt from 'jsonwebtoken';
import { findUser, findMahasiswa } from '../utils/mahasiswa.js';

export const Login = async (req, res) => {
  const user = findUser(req.body.npm, req.body.password);
  if (!user) return res.status(400).json({ msg: 'Wrong Password' });
  const npm = req.body.npm;

  const accessToken = jwt.sign(
    { npm },
    process.env.ACCESS_TOKEN_SECRET
  );
  req.session.npm = npm;
  res.status(201).json({ accessToken });
};

export const getMahasiswa = async (req, res) => {
  const user = findMahasiswa(req.session.npm);
  if (!user)
    return res.status(400).json({ msg: 'Data Tidak Ditemukan' });
  res.status(200).json({ user });
};
