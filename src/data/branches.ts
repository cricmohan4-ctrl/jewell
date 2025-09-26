export interface Branch {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export const branches: Branch[] = [
  { id: 1, name: "Mumbai - Bandra", address: "123 Diamond Street, Bandra, Mumbai", lat: 19.0596, lng: 72.8407 },
  { id: 2, name: "Delhi - Connaught Place", address: "456 Gemstone Road, Connaught Place, New Delhi", lat: 28.6330, lng: 77.2193 },
  { id: 3, name: "Bangalore - Koramangala", address: "789 Gold Avenue, Koramangala, Bangalore", lat: 12.9352, lng: 77.6245 },
  { id: 4, name: "Chennai - T. Nagar", address: "101 Silver Plaza, T. Nagar, Chennai", lat: 13.0410, lng: 80.2342 },
  { id: 5, name: "Kolkata - Park Street", address: "202 Platinum Lane, Park Street, Kolkata", lat: 22.5514, lng: 88.3580 },
];