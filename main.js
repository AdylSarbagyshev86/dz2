
const users  = [
    {
    username: 'Jason Tatum',
    points: 28
},
    {
    username: 'Ja Morant',
    points: 43
    },

    {
        username: 'Luka Doncic',
        points: 36
    },

    {    username: 'Stephen Curry',
    points: 32
    },
]

const filteredpoints= users.filter(user => user.points > 35)
console.log(filteredpoints);




