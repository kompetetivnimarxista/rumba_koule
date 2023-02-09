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

s = input.acceleration(Dimension.Strength)
basic.pause(300)
deltaS = Math.abs(s - input.acceleration(Dimension.Strength))
normalS = deltaS + 300
basic.showNumber(deltaS)
basic.pause(100)
basic.clearScreen()


basic.forever(function() {
    s = input.acceleration(Dimension.Strength)
    basic.pause(40)
    deltaS = Math.abs(s - input.acceleration(Dimension.Strength))
    basic.pause(40)
    console.logValue("delta", deltaS)
    if(deltaS > normalS){
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
        
    }
})


