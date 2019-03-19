const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-0-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];

function usersToObject(users) {
	return users.reduce((previousValue, item, arr) => {
		previousValue[item.id] = item;
		return previousValue;
	}, {});
}

console.log(usersToObject(users));