const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];

function filterUsersByMonth(users, month) {
	users.forEach(user => {
	    let birthday = new Date(user.birthday);
	    if (birthday.getMonth() === month) {
	      console.log(user);
	    }
  	});
}

filterUsersByMonth(users, 0) 