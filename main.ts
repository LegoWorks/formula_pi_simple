input.onButtonPressed(Button.A, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 15)
    neZha.setMotorSpeed(neZha.MotorList.M2, 15)
})
input.onButtonPressed(Button.B, function () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
})
basic.showIcon(IconNames.StickFigure)
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
basic.pause(500)
basic.forever(function () {
    if (15 < PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 150)
    } else {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 70)
    }
})
