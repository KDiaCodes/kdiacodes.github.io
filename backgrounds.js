function randomBackground() {
    /*
      Change the number before 1 with the amount of backgrounds you have
      Files must be .jpg and names background[NUMBER].jpg
    */
    var randomNumber = Math.floor(Math.random() * 8) + 1;
    $('body').css({
        'background' : 'url(\'images/background'+randomNumber+'.jpg\')',
        'background-repeat' : 'no-repeat',
        'background-size' : 'cover'
    });
}
