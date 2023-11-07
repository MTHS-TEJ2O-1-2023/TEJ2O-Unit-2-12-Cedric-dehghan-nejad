/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Cedric
 * Created on: Oct 2023
 * This program this code shows
*/

// variable
let neopixelStrip: neopixel.Strip = null
let distanceToObject: number = 0

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// find distance from sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )

  // if distanceToObject is less than 10 than light up Red
  if (distanceToObject < 10) {
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
    basic.showNumber(distanceToObject)
    
  // if distancetoobject is greater 10 light up Green
      } else { (distanceToObject >= 10) 
      basic.showIcon(IconNames.Happy)
      basic.showIcon(IconNames.Happy)
      neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.show()
      basic.showNumber(distanceToObject)
      basic.showIcon(IconNames.Happy)
 }
})
