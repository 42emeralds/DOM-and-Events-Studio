// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let height = Number(shuttleHeight.innerHTML);
    let background = document.getElementById("shuttleBackground");
    let rocketPosition = 0;

    let takeOff = document.getElementById('takeoff');
    takeOff.addEventListener("click", function() {
        result = window.confirm("Are you sure the shuttle is ready for takeoff?");
        if (result) {
        background.style.backgroundColor = 'blue';
        status.innerHTML = "Shuttle in flight";
        shuttleHeight.innerHTML = height + 10000;
        }
        
    });

    let land = document.getElementById('landing');
    land.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        background.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
    });

    let abortMission = document.getElementById('missionAbort');
    abortMission.addEventListener("click", function () {
        result = window.confirm('Confirm that you want to abort the mission.');
        if (result) {
            status.innerHTML = "Mission aborted.";
            background.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = 0;
        }
    });

    let leftButton = document.getElementById('left');
    leftButton.addEventListener("click", function () {
        rocketPosition -= 10;
        rocket.style.left = `${rocketPosition}px`;
    });

    let rightButton = document.getElementById('right');
    rightButton.addEventListener("click", function () {
        rocketPosition += 10;
        rocket.style.left = `${rocketPosition}px`;
    });

    let upButton = document.getElementById('up');
    upButton.addEventListener("click", function () {
        rocketPosition -= 10;
        rocket.style.top = `${rocketPosition}px`;
    });

    let  downButton = document.getElementById('down');
    downButton.addEventListener("click", function () {
        rocketPosition += 10;
        rocket.style.top = `${rocketPosition}px`;
    });

});