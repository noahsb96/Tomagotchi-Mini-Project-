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
let hunger = document.querySelector('#hunger')
let sleepiness = document.querySelector('#sleep')
let boredom = document.querySelector('#bored')
let age = document.querySelector('#age')
let buttons = document.querySelector('.buttons')
let backgroundImage = document.body.style.backgroundImage

class Pet {
    constructor(name, hunger, sleepiness, boredom, age) {
        this.name = prompt('Name your tomagotchi!', 'Name')
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    }

    begin() {
        let startTimer = setInterval(() => {
            if(this.hunger >= 1 && this.sleepiness >= 1 && this.boredom >= 1) {
                this.hunger--
                hunger.innerHTML = (`Hunger: ${this.hunger}`)
                this.sleepiness--
                sleepiness.innerHTML = (`Sleepiness: ${this.sleepiness}`)
                this.boredom--
                boredom.innerHTML = (`Boredom: ${this.boredom}`)
                age.innerHTML = (`age: ${this.age}`)
            } 
    
            else if(this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0) {
                document.getElementById('pet').src='/Tomagotchi-Mini-Project-/ghost-clipart-transparent-background-808673.png'
                alert(`${this.name} has gone to Tomagotchi heaven`)
                clearInterval(startTimer)
            } else {

            }
        
        }, 3000)
    }

    feed() {
        this.hunger++
        hunger.innerHTML = (`Hunger: ${this.hunger}`)
    }

    sleep() {
        this.sleepiness++
        sleepiness.innerHTML = (`Sleepiness: ${this.sleepiness}`)
        document.body.style.backgroundImage="url(/Tomagotchi-Mini-Project-/lightsoff.png)"
        function lightsOn() {
            document.body.style.backgroundImage="url(/Tomagotchi-Mini-Project-/Background.jpg)"
        }
        setTimeout(lightsOn, 1000)
    }

    play() {
        this.boredom++
        boredom.innerHTML = boredom.innerHTML = (`Boredom: ${this.boredom}`)
    }

    older() {
        let ageClock = setInterval(() => {
            this.age++
            if (this.age === 10) {
                document.getElementById('pet').src='/Tomagotchi-Mini-Project-/NicePng_tamagotchi-png_3497120.png'
                alert(`${this.name} has hatched and is now a baby!`)
            }
            if (this.age === 20) {
                document.getElementById('pet').src='/Tomagotchi-Mini-Project-/pngwing.com.png'
                alert(`${this.name} has grown from a baby to a child!`)
            }
            if (this.age === 30) {
                document.getElementById('pet').src='/Tomagotchi-Mini-Project-/com_tamagotchi-png_3497548.png'
                alert(`${this.name} has grown from a child to a teenager!`)
            }
            if (this.age === 40) {
                document.getElementById('pet').src='/Tomagotchi-Mini-Project-/pngegg.png'
                alert(`${this.name} has grown from a teenager to an adult!`)
            }
            if (this.age === 50) {
                document.getElementById('pet').src='/Tomagotchi-Mini-Project-/kisspng-lovelin-portable-network-graphics-image-character-tamagotchi-mxcharacter-list-tamagotchi-wiki-fand-5d1337e1cc34f4.6405991715615405778364.png'
                alert(`${this.name} has grown from an adult to an senior!`)
                clearInterval(ageClock)
            }
            if(this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0) {
                clearInterval(ageClock)
            }
        }, 3000)
    }
}

let tomagotchi = new Pet(`${this.name}`, 10, 10, 10, 0)

document.getElementById("begin").addEventListener("click",(e)=>{tomagotchi.older(), tomagotchi.begin()})
document.getElementById('give food').addEventListener('click', (e)=>{tomagotchi.feed()})
document.getElementById('go to sleep').addEventListener('click',(e)=>{tomagotchi.sleep()})
document.getElementById('play').addEventListener('click', (e)=>{tomagotchi.play()})