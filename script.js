'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// for (const movement of movements){
//   if(movement > 0 ){
//     console.log(`You deposit ${movement}`)
//   }else{
//     console.log(`You withdrew ${Math.abs(movement)}`)
//   }
// }


movements.forEach(function(movement){
  if(movement > 0 ){
    console.log(`You deposit ${movement}`)
  }else{
    console.log(`You withdrew ${Math.abs(movement)}`)

  }

})
/////////////////////////////////////////////////

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i){
    const type = mov > 0 ?'deposit' : 'withdrawal';



    const html = ` <div class="movements">
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>`
        containerMovements.insertAdjacentHTML('afterbegin', html)
  })

}
displayMovements(account1.movements)


const euroToUsd = 1.1

const movementsUSD = movements.map(function(mov){
  return mov * euroToUsd
})
console.log(movementsUSD)

// FUNCTION ARRAY

// const movementUSDarray = movements.map(mov=> mov * euroToUsd)
// console.log(movementUSDarray)


const movmentDescriptions = movements.map((mov, i)=>
  `Movement ${i + 1} You ${mov > 0 ?'deposited':'Withdrew'} ${Math.abs(mov)}`
)
console.log(movmentDescriptions)



const createUserName = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('')
  
  })

}
createUserName(accounts)
console.log(accounts)

const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc,mov)=>acc + mov, 0)
  labelBalance.textContent = `${balance} EUR` 
}
calcDisplayBalance(account1.movements)




 const deposits = movements.filter(function(mov){
return mov > 0
})
console.log(movements)
console.log(deposits)


const depositfor = []

for (const mov of movements)if (mov > 0) depositfor.push(mov)
  console.log(depositfor) 

// FILTER METHOD******************************************************************
const withdrawalfor = []

for(const mov of movements) if(mov < 0) withdrawalfor.push(mov)
  console.log(withdrawalfor)

withdrawalfor.filter(function(mov){
  return mov < 0
})
console.log(withdrawalfor)

// REDUCE METHOD **************************************************************************************


const balance = movements.reduce((acc, curr,)=> acc + curr,0);
console.log(balance)

let balance2 = 0
for(const mov of movements){
balance2 += mov 
}
console.log(balance2)



// MAXIMUM VALUE


const max = movements.reduce((acc,mov)=>{
  if(acc > mov)
    return acc
  else
    return mov
},movements[0])




// CHALLENGE ******************************************

/* 
CHALLENGE #2
Challenge Overview
This is coding challenge number two. In this challenge, we return to the Julia case study about dogs. 
The task is to convert the ages of dogs to human ages and then calculate their average age. 
Your job is to create a function called calcAverageHumanAge that accepts an array of dog ages and performs the following three tasks.

Task 1: Convert Dog Ages to Human Ages
Calculate the age of all dogs in human years using this formula:

If the dog is less than or equal to two years old, the human age is simply twice the dog's age.
If the dog is older than two years, the human age is calculated by the formula: 16 + dog’s age × 4

Task 2: Filter Adult Dogs
Exclude all dogs that are less than 18 human years old. 
Essentially, keep only the dogs that are at least 18 years old in human years.

Task 3: Calculate Average Human Age
Calculate the average human age of all the adult dogs. 
From previous challenges, you should already know how to calculate averages. 
In this challenge, you will do it differently by using the map, filter, and reduce methods.

Finally, run this function for both provided test data sets. 
This challenge serves as practice for using the map, filter, and array methods studied earlier.
*/

// Test data 1:[5,2,4,1,15,8,3]
// Test data 2:[16,6,10,5,6,1,4]

const DogsAge = [5,2,4,1,15,8,3]
const  DogsAge2 = [2,4,6,33,2,34,]



const calcAverageHymanAge = function(DogsAge){
const humanAge = DogsAge.map(age=>{
  if(age >2){
    return 16+age*4
  }else{
    return age * 2
  }
})

const ExcludeDogsAge = humanAge.filter(Age=> Age >= 18)


const AverageDogs = ExcludeDogsAge.reduce((acc, age)=>acc + age,0) / ExcludeDogsAge.length
return AverageDogs
}
console.log(calcAverageHymanAge(DogsAge))

// // ====================== NOTATKA O METODACH MAP, FILTER I REDUCE ======================


// // ****************************** MAP() ********************************
// // - Służy do przekształcania każdego elementu tablicy na coś innego.
// // - Zwraca nową tablicę z przekształconymi elementami.
// // - W Twoim kodzie: zamieniamy wiek psa na odpowiadający wiek człowieka.

// const humanAge = DogsAge.map(age => {
//   if (age > 2) {
//     return 16 + age * 4;  // starsze psy - wzór: 16 + wiek * 4
//   } else {
//     return age * 2;       // młodsze psy - wzór: wiek * 2
//   }
// });


// // ****************************** FILTER() *****************************
// // - Służy do "filtrowania" tablicy, czyli wybrania tylko tych elementów, które spełniają warunek.
// // - Zwraca nową tablicę z wybranymi elementami.
// // - W Twoim kodzie: wybieramy tylko te ludzkie wieki, które są równe lub większe niż 18.

// const ExcludeDogsAge = humanAge.filter(age => age >= 18);


// // ****************************** REDUCE() *****************************
// // - Służy do redukcji tablicy do jednej wartości, np. sumy, średniej, max, min itp.
// // - W Twoim kodzie: sumujemy wszystkie wybrane wieki i dzielimy przez ich liczbę, aby obliczyć średnią.

// const AverageDogs = ExcludeDogsAge.reduce((acc, age) => acc + age, 0) / ExcludeDogsAge.length;


// // ====================== PEŁNY KOD Z WYJAŚNIENIAMI =====================

// const DogsAge = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = function(DogsAge) {
//   const humanAge = DogsAge.map(age => {
//     if (age > 2) {
//       return 16 + age * 4;
//     } else {
//       return age * 2;
//     }
//   });

//   const ExcludeDogsAge = humanAge.filter(age => age >= 18);

//   const AverageDogs = ExcludeDogsAge.reduce((acc, age) => acc + age, 0) / ExcludeDogsAge.length;

//   return AverageDogs;
// }

// console.log(calcAverageHumanAge(DogsAge));


// /*
// PODSUMOWANIE:
// - map:      zmienia tablicę wieków psów na wiek ludzki
// - filter:   wybiera tylko wieki >= 18
// - reduce:   oblicza średnią z wybranych wieków
// */
