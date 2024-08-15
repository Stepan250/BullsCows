const input = document.getElementById('input');
const listUser = document.getElementById('listUser');
const listComputer = document.getElementById('listComputer');
const winString = document.getElementById('winString');

let bullsComputerList = [null, null, null, null];
let y = 0
function getRandomNumber() {
    let numbers = [];
    while (numbers.length < 4) {
        let number = Math.floor(Math.random() * 10);
        if (!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    return numbers;
}

function finishComputer() {
    const newStringComputer = document.createElement('p')
    newStringComputer.textContent = (randomNumbers.join('') + ' - Комьютер победил')
    listComputer.appendChild(newStringComputer);
    listComputer.lastChild.removeChild('p')
    console.log('Компьютер победил');
}

const randomNumbers = getRandomNumber();

console.log('Загаданное число ' + randomNumbers);

input.addEventListener('input', () => {
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4);
    }
});

document.getElementById('btn1').addEventListener('click', bullsCows);
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        bullsCows();
    }
})
function bullsCows() {
    const inputValue = input.value;
    let inputArray = inputValue.split('').map(num => Number(num.trim()));

    let cows = 0;
    let bulls = 0;

    if (inputArray.length === 4) {
        const numbersComputer = getRandomNumber();
        console.log('Число комьютера ' + numbersComputer);

        let userNumbers = Array(10).fill(false);
        let userBulls = Array(4).fill(false);

        for (let j = 0; j < inputArray.length; j++) {
            if (inputArray[j] === randomNumbers[j]) {
                bulls++;
                userBulls[j] = true;
                userNumbers[inputArray[j]] = true;
            }
        }
        for (let j = 0; j < inputArray.length; j++) {
            if (!userBulls[j] && randomNumbers.includes(inputArray[j]) && !userNumbers[inputArray[j]]) {
                cows++;
                userNumbers[inputArray[j]] = true;
            }
        }


        if (y < 9) {
            for (let x of bullsComputerList) {
                for (let j = 0; j < 4; j++) {
                    if (numbersComputer[j] === randomNumbers[j]) {
                        if (bullsComputerList[j] === null) {
                            bullsComputerList[j] += numbersComputer[j];
                        }
                    }
                }
            }
            y++
        } else {
            finishComputer()
        }

        console.log(bullsComputerList);

        input.value = '';
        console.log('Число пользователя ' + inputArray);

        if (inputArray.join('') === randomNumbers.join('')) {
            console.log('Вы победили')
            input.disabled = true;
            const newStringUser = document.createElement('p');
            newStringUser.textContent = inputArray.join('');
            newStringUser.textContent += ' - Вы победили';
            winString.appendChild(newStringUser);
        } else if (bullsComputerList.every(value => value !== null)) {
            finishComputer()
        }

        const bullsSum = `Быки: ${bulls}`;
        const cowsSum = `Коровы: ${cows}`;

        document.getElementById('bullsSum').textContent = bullsSum;
        document.getElementById('cowsSum').textContent = cowsSum;

        const newStringUser = document.createElement('p');
        newStringUser.textContent = inputArray.join('');
        newStringUser.textContent += ' - ' + bullsSum + ' ' + cowsSum;
        listUser.appendChild(newStringUser);

        const newStringComputer = document.createElement('p');
        newStringComputer.textContent += numbersComputer.join('');
        listComputer.appendChild(newStringComputer);

    } else {
        console.log("error");
        input.value = '';
    }
    document.getElementById('btn2').addEventListener('click', () => {
        location.reload();
    });
}
