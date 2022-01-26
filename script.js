let d = new Date()

let year = d.getFullYear()
let month = d.getMonth()+1;
let day = d.getDate()

let totalDays = new Date(year, month, 0).getDate()

let output = 
(month<10 ? '0' : '') + month + '/' +
(day<10 ? '0' : '') + day + '/' + year


$('.date').text('${output}')



let row = 0, length = 0, column = 0

let timeObj = {
    "5 AM" : 1,
    "6 AM" : 2,
    "7 AM" : 3,
    "8 AM" : 4,
    "9 AM" : 5,
    "10 AM" : 6,
    "11 AM" : 7,
    "12 AM" : 8,
    "1 PM" : 9,
    "2 PM" : 10,
    "3 PM" : 11,
    "4 PM" : 12,
    "5 PM" : 13,
    "6 PM" : 14,
    "7 PM" : 15,
    "8 PM" : 16,
    "9 PM" : 17,
    "10 PM" : 18,
    "11 PM" : 19,
    "12 PM" : 20,
    "1 AM" : 21,
    "2 AM" : 22,
    "3 AM" : 23,
    "4 PM" : 24,

}

$('.modal-container').toggle()

$('.model-container--close').click(function(){
    $('.modal-container').css('display', 'none')
})
