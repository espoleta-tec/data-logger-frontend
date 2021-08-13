export class StationVariableDto {
  wind: {
    speed?: number,
    direction?: string
  } = {}
  lightPower = 0
  precipitation = 0
  temperature = 0
  humidity = 0
  pressure = 0

  get transpiration() {
    return 0
  }
}
