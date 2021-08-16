// Angular controller that now contains all cookies and images in an array of dictionaries.
angular.module('myApp', []).controller('cookieCtrl', function ($scope) {
    // Array of dictionaries containing cookie info
    $scope.cookies = [
        { 'Name': 'Oatmeal Raisin', 'Img': '/images/OatRaisW.png' },
        { 'Name': 'Oatmeal & Cinnamon Chip', 'Img': '/images/OatCinW.png' },
        { 'Name': 'Oatmeal & Butterscotch', 'Img': '/images/OatButterW.png' },
        { 'Name': 'Lemon with White Chocolate Chip', 'Img': '/images/LemWChocW.png' },
        { 'Name': 'White Chocolate Macadamia Nut', 'Img': '/images/WChocMacNutW.png' },
        { 'Name': 'Sugar Cookie', 'Img': '/images/SugarW.png' },
        { 'Name': 'Snickerdoodle', 'Img': '/images/SnickerW.png' },
        { 'Name': 'Peanut Butter Chocolate Chip', 'Img': '/images/PeanutChocW.png' },
        { 'Name': 'Chocolate Chip', 'Img': '/images/ChocW.png' },
    ];
    // setting search variable to nothing to start
    $scope.search = "";
});
