// Angular controller that now contains all cookies and images in an array of dictionaries.
angular.module('myApp', []).controller('cookieCtrl', function ($scope) {
    $scope.cookieRowOne = [
        { name: 'Oatmeal Raisin', img: '/images/OatRaisW.png' },
        { name: 'Oatmeal & Cinnamon Chip', img: '/images/OatCinW.png' },
        { name: 'Oatmeal & Butterscotch', img: '/images/OatButterW.png' },
        { name: 'Lemon with White Chocolate Chip', img: '/images/LemWChocW.png' },
        { name: 'White Chocolate Macadamia Nut', img: '/images/WChocMacNutW.png' },
        { name: 'Sugar Cookie', img: '/images/SugarW.png' },
        { name: 'Snickerdoodle', img: '/images/SnickerW.png' },
        { name: 'Peanut Butter Chocolate Chip', img: '/images/PeanutChocW.png' },
        { name: 'Chocolate Chip', img: '/images/ChocW.png'}
    ];
    $scope.search = "";
});
