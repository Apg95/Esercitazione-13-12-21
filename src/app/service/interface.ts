export interface IAppWeather {
    main: {
        temp: number;
    },
    name: string;
    sys:{
        country:string;
    },
    weather: [{
        description: string;
        icon: string;
    }]
}