export interface CurDataType {
  weather: [{ main: string }];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: { speed: number };
  rain: number;
  clouds: {
    all: number;
  };
  dt: number;
  name: string;
}

export interface WeekDataType {
  list: CurDataType[];
}

export interface InitialStateProp {
  loading: boolean;
  value: CurDataType;
  weekValue: WeekDataType;
  error?: string;
}
export interface GetCurDataArgs {
  lat: number;
  lon: number;
}
