const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) {
    let adult = []; 
    const currentYear = new Date().getFullYear();
    users.forEach(user => {
        const birthdayYear = new Date(user.birthday).getFullYear();
        const userAge = currentYear - birthdayYear;
        if (userAge >= 18) {
        adult.push(`${user.name} ${userAge}`);
        }
    });
    console.log(adult.reduce((acc, elem) => (acc + ", " + elem)));
}

getAdultNames(users);