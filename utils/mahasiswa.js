import fs from 'fs';

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = (filename) => {
  return dirPath + filename;
};

// if (!fs.existsSync(dataPath)) {
//   fs.writeFileSync(dataPath, '[]', 'utf-8');
// }

const loadData = (filename) => {
  const file = fs.readFileSync(dataPath(filename), 'utf-8');
  const data = JSON.parse(file);
  return data;
};

export const findUser = (npm, password) => {
  const users = loadData('/user.json');
  const user = users.find(
    (user) => user.npm === npm && user.password === password
  );
  return user;
};

export const findMahasiswa = (npm) => {
  const data = loadData('/mahasiswa.json');
  const mahasiswa = data.find((user) => user.npm === npm);
  return mahasiswa;
};
