//program entry point
function getValues2() {

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if they are in fact integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //generate a list of numbers
        let numbers = generateNumbers(startValue, endValue);


        //display a list of numbers
        displayNumbers(numbers);

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Only integers are allowed for Hundo"
        })
    }
}

function generateNumbers(start, end) {

    let numbers = [];
    for (let index = start; index <= end; index++) {
        numbers.push(index);
    }

    return numbers;



    /*
   pos=  0,1,2,3,4,5,6,7,8 
        [1,2,3,4,5,6,7,8,9]
*/

}

function displayNumbers(numbers) {

    let templateRows = "";
    let className = "";
    for (let index = 0; index < numbers.length; index++) {

         let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd"
        }
        let row = `<tr><td class="${className}">${number}</td></tr>`;
        templateRows += row;

    }

    document.getElementById("results").innerHTML = templateRows;

}