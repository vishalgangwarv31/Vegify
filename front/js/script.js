function refreshValue()
{
    const temp = document.getElementById("tableDate").value;
    console.log(temp);
    const currOrange = 60;
    const orange = document.getElementById('orange').innerHTML = currOrange;

    const currOnion = 40;
    const onion = document.getElementById('onion').innerHTML = currOnion;

    const currPotato = 45;
    const potato = document.getElementById('potato').innerHTML = currPotato;

    const currAvacado = 80;
    const acacado = document.getElementById('avocado').innerHTML = currAvacado;

    const currCarrot = 39;
    const carrot = document.getElementById('carrot').innerHTML = currCarrot;

    const currLemon = 10;
    const lemon = document.getElementById('lemon').innerHTML = currLemon;
} 

function refreshGraph()
{
    function chartt()
    {
        const xValues = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
        var yValues;
        const prod = document.getElementById('prod').value;
        

        if(prod === 'O')
        {
            yValues = [30,32,32,40,38,38,42,45,48,52,50];
        }
        else if(prod === 'ON')
        {
            yValues = [30,33,32,36,29,41,45,48,40,38];
        }
        else if(prod === 'P')
        {
            yValues = [10,11,13,13,13,15,20,21,18,20,25];
        }
        else if(prod === 'C')
        {
            yValues = [20, 22, 22, 23, 28, 30, 32, 32, 35, 38];
        }
        else{
            yValues = [5, 8, 8, 11, 14, 20, 21, 23, 29, 30];
        }

        new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            scales: {
            yAxes: [{ticks: {min: 0, max:80}}],
            }
        }
        });
    }
    chartt();
}


function chartt()
{
    const xValues = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
    yValues = [30,32,32,40,38,38,42,45,48,52,50];
    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
        }]
    },
    options: {
        legend: {display: false},
        scales: {
        yAxes: [{ticks: {min: 0, max:80}}],
        }
    }
    });
}
chartt();

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


