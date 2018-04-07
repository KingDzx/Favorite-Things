function loginfo(){
    var info = confirm("Is this information correct?");
    if(info === true){
        alert("Information Saved!");
    }else{
        alert("Hopefully you sign up another time!");
    }

    var songVal = document.getElementById("sel").value;
    switch(songVal){
        case "Holy":
            console.log("Good Choice!");
            break;
        case "Moving Hectic":
            console.log("Good Choice!");
            break;
        case "Unity":
            console.log("Good Choice!");
            break;
        case "Decoy World":
            console.log("Good Choice!");
            break;
        case "Love Back On":
            console.log("Good Choice!");
            break;
        case "Without You":
            console.log("Good Choice!");
            break;
        case "Stay Tonight":
            console.log("Good Choice!");
            break;
        case "Sight of Your Soul":
            console.log("Good Choice!");
            break;
        case "Doji":
            console.log("Good Choice!");
            break;
        case "Subside":
            console.log("Good Choice!");
            break;
        default:
            console.log("Just Incase");
            break;
    }
    return true;
}

function ChangeSongs(){
    var e=event.target;
    var audio = document.getElementById("mcatMusic");
    
    var source = document.getElementById("mcatMusicSrc");
    source.src=e.getAttribute('data-song');

    audio.load();
    audio.play();
};

function GOBACKGOBACKK(){
    var yaes = prompt("Are you enjoying the site? Yes/No");
    // if(yaes==="Yes" || yaes==="yes"){
    //     alert("Thanks for the feedback!");
    // }else{
    //     alert("Well time to head back to the drawing board");
    // }
    switch(yaes){
        case "Yes":
        case "yes":
            alert("Glad you're enojoying it! Thank you for the feedback!");
            break;
        case "No":
        case "no":
            alert("Oh, well I'll work on it some more! Thank you for the feedback!");
            break;
        default:
            alert("Hmm, no opinion? Well that in of itself is feedback, so thanks nonetheless!");
            break;
    }
    window.location.href = 'index.html';
}

function GoNintendo(){
    window.location.href = 'Nintendo.html';
}

function GoMcat(){
    window.location.href = 'Monstercat.html';
}

$(function () {
    var myChart = Highcharts.chart('lifetime', {
    chart: {
        type: 'bar',
        plotBackgroundColor: '#aaaaaa'
    },
    title: {
        text: 'Age of Consoles'
    },
    xAxis: {
        categories: ['Switch', 'Wii U', '3DS XL', 'DSi', 'Wii', 'DS Lite', 'GBA SP']
    },
    yAxis: {
        title: {
            text: 'Age in Use'
        }
    },
    plotOptions:{
        column:{
            colorByPoint: true
        }
    },
    series: [{
        name: 'Age in years',
        data: [0.417, 2.5, 4.17, 3, 5, 3, 3],

    }]
});
});