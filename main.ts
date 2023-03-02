input.setAccelerometerRange(AcceleratorRange.TwoG)



// basic.forever(function() {
//     let x = input.acceleration(Dimension.X)
//     let y = input.acceleration(Dimension.Y)
//     let z = input.acceleration(Dimension.Z)
//     let s = input.acceleration(Dimension.Strength)
//     console.logValue("x", x)
//     basic.pause(40)
//     console.logValue("y", y)
//     basic.pause(40)
//     console.logValue("z", z)
//     basic.pause(40)
//     console.logValue("strength", s)

let x = input.acceleration(Dimension.X)
let y = input.acceleration(Dimension.Y)
let z = input.acceleration(Dimension.Z)
let s = input.acceleration(Dimension.Strength)
let deltaS = 0
let normalS = 0
let deltaX = 0
let normalX = 0
let diffX = 0
let deltaY = 0
let normalY = 0
let diffY = 0
let ledX = 0
let ledY = 0
led.plot(2, 2)

if(input.buttonIsPressed(Button.A)){
basic.pause(300)
deltaS = Math.abs(s - input.acceleration(Dimension.Strength))
normalS = deltaS + 300
basic.showNumber(deltaS)
basic.pause(100)
basic.clearScreen()

basic.pause(1000)
normalX = (x + deltaX) / 2
deltaX = input.acceleration(Dimension.X)
console.logValue("X", deltaX)
console.logValue("normal", normalX)
basic.pause(100)
diffX = normalX + 200

basic.pause(1000)
normalY = (y + deltaY) / 2
deltaY = input.acceleration(Dimension.Y)
console.logValue("Y", deltaY)
console.logValue("normal", normalY)
basic.pause(100)
diffY = normalY + 200
}

basic.forever(function() {
    s = input.acceleration(Dimension.Strength)
    basic.pause(40)
    deltaS = Math.abs(s - input.acceleration(Dimension.Strength))
    basic.pause(40)
    console.logValue("delta", deltaS)

    if (deltaS > normalS - 200) {
        control.inBackground(function () {
            music.playTone(Note.B, music.beat(BeatFraction.Whole))
        }
        )
        if (deltaS > normalS - 100) {
            control.inBackground(function () {
                music.playTone(Note.F, music.beat(BeatFraction.Whole))
            }
            )
        }
    }
    if(deltaS > normalS){
        control.inBackground(function() {
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        })
        
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        basic.clearScreen()
        
    }
})

basic.forever(function () {
    x = Math.abs(input.acceleration(Dimension.X))
    basic.pause(40)
    console.logValue("X", x)
    console.logValue("normal", normalX)
    if (x > diffX - 100) {
        control.inBackground(function () {
            music.playTone(Note.B, music.beat(BeatFraction.Whole))
        }
        )
        if (x > diffX - 50)  {
            control.inBackground(function () {
                music.playTone(Note.F, music.beat(BeatFraction.Whole))
            }
            )
        }
    }
    if (x > diffX)  {
        control.inBackground(function () {
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        })

        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        basic.clearScreen()

    }
})

basic.forever(function () {
    y = Math.abs(input.acceleration(Dimension.Y))
    basic.pause(40)
    console.logValue("Y", y)
    console.logValue("normal", normalY)
    if (y > diffY - 100) {
        control.inBackground(function () {
            music.playTone(Note.B, music.beat(BeatFraction.Whole))
        }
        )
        if (y > diffY - 50) {
            control.inBackground(function () {
                music.playTone(Note.F, music.beat(BeatFraction.Whole))
            }
            )
        }
    }
    if (y > diffY) {
        control.inBackground(function () {
            music.playTone(Note.C, music.beat(BeatFraction.Whole))
        })

        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        basic.clearScreen()

    }
})
