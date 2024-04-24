window.onload = function() {
    var cwab = document.querySelector("#cwab")
    var power = 1
    var counter = document.querySelector("#counter")
    var points = 0
    var buypowercost = 25
    var buypowerpower = 10
    var buypower = document.querySelector("#buypower")
    var buypowerdesc = document.querySelector("#buypowerdesc")
    
    buypower.addEventListener("click",() => {
        
        if (points < buypowercost) {
            points = points
        }
        else {
            power += buypowerpower
            points = points - buypowercost
            buypowercost += 295
            counter.innerHTML = `You have: ${points} points`
            buypowerdesc.innerHTML = `cost:${buypowercost}, power:10, adds 10 power to your clicks.`
            
            console.log(points)
        }
    })
    
    cwab.addEventListener("click",() => {
        if (points <= 0) {
            points = 0
        }
        points += power
        counter.innerHTML = `You have: ${points} points`
        console.log(points)
    })
    
    
}