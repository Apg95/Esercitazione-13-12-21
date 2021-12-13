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


export interface IMappWeather {
        temp: number;
        name: string;
        country:string;
        description: string;
        icon: string;
}