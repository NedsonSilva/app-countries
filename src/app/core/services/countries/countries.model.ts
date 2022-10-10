export class Countries {
  name: {
    common: string;
    official: string;
    nativeName: {
      spa: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  subregion: string;
  capital: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  cioc: string;
  currencies: {
    [property: string]: { name: string; symbol: string }
  }
  languages: {
    [language: string]: string
  }
  borders: string[]
  /**Top Level Domain */
  tld: string[]
}

export class Country {}
