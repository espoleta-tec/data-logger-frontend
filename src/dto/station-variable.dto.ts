export class StationVariableDto {
  windDirection = ''
  windSpeed = 0
  lightPower = 0
  precipitation = 0
  temperature = 0
  humidity = 0
  pressure = 0

  get transpiration() {
    return 0
  }
}
