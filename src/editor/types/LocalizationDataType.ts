export interface Data {
   data: BrandData;
}

export interface BrandData {
   BrandLocalizations: BrandLocalization[];
}

export interface BrandLocalization {
   language: Language;
   key:      string;
   value:    string;
}

export enum Language {
   Da = "da",
   En = "en"
}
