// if you click how to play, another screen pops up with rules and directions on how to play
// when you press begin 
    // a prompt comes up that lets you name your tomagotchi
    // the timer on the stats begin
        // every 5 seconds, hunger goes up by 1
            // when hunger goes up, you can press give food to make the hunger level go up by 1
                // hunger can not go lower than 0
                // if the hunger level goes up to 10, the tomagotchi dies
                    // if the tomagotchi dies, alert comes up that says 'name of the tomagotchi' has gone to tomagotchi heaven
                    // death ends the program and gives option to restart game
        // every 10 seconds, sleepiness goes up by 1
            // when sleepiness goes up, you can click the button go to sleep to make sleep go down by 1
                // when the tomagotchi goes to bed, the lights go off in the room
                // sleepiness can not go lower than 0
                // if the sleepiness level goes up to 10, the tomagotchi dies
                    // if the tomagotchi dies, alert comes up that says 'name of the tomagotchi' has gone to tomagotchi heaven
                    // death ends the program and gives option to restart game
        // every 7 seconds, boredom goes up by 1
            // when boredom goes up you can click the button play time to make boredom go down by 1
                // boredom can not go lower than 0
                // if boredom level goes to 10, tomagotchi dies
                    // if the tomagotchi dies, alert comes up that says 'name of the tomagotchi' has gone to tomagotchi heaven
                    // death ends the program and gives option to restart game
        // Every 10 seconds, age goes up by 1
        // If tomagotchi doesn't die after age hits 10
            // tomagotchi evolves 
                // alert says 'name of tomagotchi' is evolving
                // picture changes
                // same function as above applies
            // tomagotchi evolves every 100 seconds from egg to baby to teenager to adult to old
            // tomagotchi dies from old age after 400 seconds
                // alert says 'tomagotchi name' died from old age
                // death ends program and gives option to restart game

const name = prompt('Name your tomagotchi!', 'Name')

class Pet {
    constructor(name) {
        name = this.name
        hunger = 0
        sleepiness = 0
        boredom = 0
        age = 0
    }

    hungry() {
        this.hunger += 1
    }

    sleepy() {
        this.sleepiness += 1
    }
    
    bored() {
        this.boredom += 1
    }

    older() {
        this.age += 1
    }
}

function begin() {
    let name = prompt('Name your Tomagotchi!', 'Name')
    const tomagotchi = new Pet(name)
    setInterval(tomagotchi.hungry, 5000)
    setInterval(tomagotchi.sleepy, 10000)
    setInterval(tomagotchi.bored, 7000)
    setInterval(tomagotchi.older, 10000)
}

document.getElementById('begin').addEventListener('click', begin)