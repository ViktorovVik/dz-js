const arrayUsers = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const setUsersId = new Set(arrayUsers.map(obj => obj.id))
const setArrayUsersId = [...setUsersId]

const result = setArrayUsersId.map(id => {
  return arrayUsers.find(obj => obj.id === id)
})

console.log(result)