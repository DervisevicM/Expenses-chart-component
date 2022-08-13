//import JSON

const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => console.log(error));


/* Convert data into array
const dataArray = Object.values(data);    
let daysContainer = document.querySelector('.days-container');

dataArray.forEach(function (item) {
    let chart = document.createElement('div');
    chart.classList.add('chart');
    chart.innerHTML = `${item.day}`;
    chart.style.backgroundColor = item.color;
    daysContainer.appendChild(chart);
});
*/

let chartContainer = document.querySelector('.chart-container');
// Map through data and populate chart

data.then(data => {
    data.forEach(item => {

        let chart = document.createElement('div');
        const height = item.amount/7;
        let value = ""

        chart.classList.add('chart');

        if (item.day =="wed"){
            value = `<div class="chart-value active" style="--height:${height}em"></div>`
        }else{
           value = `<div class="chart-value" style="--height:${height}em"></div>`;
        }
        chart.innerHTML = `
        <div class="chart-wrapper">
        ${value}
        </div>

        <div class="chart-title">${item.day}</div>`;

        chartContainer.appendChild(chart);  
    })
})