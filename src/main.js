import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Joke, makeUpper } from './joke.js';



$(document).ready(function () {
    let newCategory = new Joke();
    let promise = newCategory.getCategories();

    promise.then(function (response) {
        let body = JSON.parse(response);
        $('#categories').text('Categories:');

        for(let i=0; i< body.length; i++){
            $('#categories').append(`<br><a href="#" id="${body[i]}">${makeUpper(body[i])}</a>`);
            let type = body[i];
            $('#'+body[i]).last().click(() => {
                let newPromise = newCategory.getCategoryJoke(type);

                newPromise.then( (response) => {
                    let body = JSON.parse(response);
                    $('#displayJoke').text(`Joke Type: ${type} -- `);
                    $('#displayJoke').append(`${body.value}`);
                }, function (error) {
                    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
                });                
            });     
        }
    }, function (error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });



    $('#joke').click(function () {

        let newJoke = new Joke();
        let promise = newJoke.getrandomJoke();

        promise.then(function (response) {
            let body = JSON.parse(response);
            $('#displayJoke').text(`Joke Type: Random `);            
            $('#displayJoke').text(`${body.value}`);
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });
    });
});