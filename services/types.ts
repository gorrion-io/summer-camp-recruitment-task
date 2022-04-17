export type CsvParsedUser = {
  name: string;
  username: string;
  email: string;
  avatar: string;
  'address.photo': string;
  'address.street': string;
  'address.suite': string;
  'address.city': string;
  'address.zipcode': string;
  'address.localization.lat': string;
  'address.localization.lon': string;
  phone: string;
  website: string;
  'company.name': string;
  'company.catchPhrase': string;
  'company.bs': string;
  'bio.gender': 'Male' | 'Female';
  'bio.dob': string;
  'imgs.0': string;
  'imgs.1': string;
  'imgs.2': string;
  'imgs.3': string;
};

export type JsonParsedUser = {
  full_name: string;
  nickname: string;
  email_address: string;
  user_image: string;
  user_address: {
    city: {
      city_name: string;
      city_photo: string;
      city_zip_code: string;
    };
    street_address: string;
    gps: [string, string];
  };
  phone_number: string;
  user_url: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  age: number;
  gender: 'Male' | 'Female';
  imgs: string[];
};
