
export interface Indexable {
  [index: string]: string | number | undefined
}

export class StationVariableDto {
  temperature = 0

  windSpeed = 0

  windDirection = ''

  humidity = 0

  pressure = 0

  evapoTranspiration = 0

  precipitation = 0

}

