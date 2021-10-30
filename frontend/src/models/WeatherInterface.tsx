export default interface WeatherInterface {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  minutely?: MinutelyEntity[] | null;
}

export interface Current {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherEntity[];
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MinutelyEntity {
  dt: number;
  precipitation: number;
}
