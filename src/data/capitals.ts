// List of countries and their capitals grouped by continent
export interface Capital {
  id: number;
  country: string;
  capital: string;
  continent: string;
}

export const capitals: Capital[] = [
  // Europe
  { id: 1, country: "Albania", capital: "Tirana", continent: "Europe" },
  { id: 2, country: "Andorra", capital: "Andorra la Vella", continent: "Europe" },
  { id: 3, country: "Austria", capital: "Vienna", continent: "Europe" },
  { id: 4, country: "Belarus", capital: "Minsk", continent: "Europe" },
  { id: 5, country: "Belgium", capital: "Brussels", continent: "Europe" },
  { id: 6, country: "Bosnia and Herzegovina", capital: "Sarajevo", continent: "Europe" },
  { id: 7, country: "Bulgaria", capital: "Sofia", continent: "Europe" },
  { id: 8, country: "Croatia", capital: "Zagreb", continent: "Europe" },
  { id: 9, country: "Czech Republic", capital: "Prague", continent: "Europe" },
  { id: 10, country: "Denmark", capital: "Copenhagen", continent: "Europe" },
  { id: 11, country: "Estonia", capital: "Tallinn", continent: "Europe" },
  { id: 12, country: "Finland", capital: "Helsinki", continent: "Europe" },
  { id: 13, country: "France", capital: "Paris", continent: "Europe" },
  { id: 14, country: "Germany", capital: "Berlin", continent: "Europe" },
  { id: 15, country: "Greece", capital: "Athens", continent: "Europe" },
  
  // Asia
  { id: 16, country: "Afghanistan", capital: "Kabul", continent: "Asia" },
  { id: 17, country: "Armenia", capital: "Yerevan", continent: "Asia" },
  { id: 18, country: "Azerbaijan", capital: "Baku", continent: "Asia" },
  { id: 19, country: "Bahrain", capital: "Manama", continent: "Asia" },
  { id: 20, country: "Bangladesh", capital: "Dhaka", continent: "Asia" },
  { id: 21, country: "Bhutan", capital: "Thimphu", continent: "Asia" },
  { id: 22, country: "Brunei", capital: "Bandar Seri Begawan", continent: "Asia" },
  { id: 23, country: "Cambodia", capital: "Phnom Penh", continent: "Asia" },
  { id: 24, country: "China", capital: "Beijing", continent: "Asia" },
  { id: 25, country: "Cyprus", capital: "Nicosia", continent: "Asia" },
  
  // Africa
  { id: 26, country: "Algeria", capital: "Algiers", continent: "Africa" },
  { id: 27, country: "Angola", capital: "Luanda", continent: "Africa" },
  { id: 28, country: "Benin", capital: "Porto-Novo", continent: "Africa" },
  { id: 29, country: "Botswana", capital: "Gaborone", continent: "Africa" },
  { id: 30, country: "Burkina Faso", capital: "Ouagadougou", continent: "Africa" },
  
  // North America
  { id: 31, country: "Canada", capital: "Ottawa", continent: "North America" },
  { id: 32, country: "Mexico", capital: "Mexico City", continent: "North America" },
  { id: 33, country: "United States", capital: "Washington, D.C.", continent: "North America" },
  { id: 34, country: "Jamaica", capital: "Kingston", continent: "North America" },
  { id: 35, country: "Cuba", capital: "Havana", continent: "North America" },
  
  // South America
  { id: 36, country: "Argentina", capital: "Buenos Aires", continent: "South America" },
  { id: 37, country: "Bolivia", capital: "La Paz", continent: "South America" },
  { id: 38, country: "Brazil", capital: "Brasília", continent: "South America" },
  { id: 39, country: "Chile", capital: "Santiago", continent: "South America" },
  { id: 40, country: "Colombia", capital: "Bogotá", continent: "South America" },
  
  // Oceania
  { id: 41, country: "Australia", capital: "Canberra", continent: "Oceania" },
  { id: 42, country: "Fiji", capital: "Suva", continent: "Oceania" },
  { id: 43, country: "New Zealand", capital: "Wellington", continent: "Oceania" },
  { id: 44, country: "Papua New Guinea", capital: "Port Moresby", continent: "Oceania" },
  { id: 45, country: "Samoa", capital: "Apia", continent: "Oceania" }
];