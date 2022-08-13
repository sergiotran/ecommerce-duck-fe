export interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  date_of_birth: string;
  email: string;
  profile_image: string;
  role: string;
  country_code: string;
  products: any[];
  password?: string;
}