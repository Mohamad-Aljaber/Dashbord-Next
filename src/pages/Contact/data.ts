import { GridColDef } from "@mui/x-data-grid";

interface RowData {
  id: number;
  registerId: string;
  Name: string;
  Age: number;
  PhoneNumber: number;
  Email: string;
  Address: string;
  City: string;
  ZipCode: string;
}
export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "registerId",
    headerName: "Registrar ID",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Name",
    headerName: "Name",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Age",
    headerName: "Age",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "PhoneNumber",
    headerName: "Phone Number",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Email",
    headerName: "Email",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Address",
    headerName: "Address",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "City",
    headerName: "City",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "ZipCode",
    headerName: "Zip Code",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
];
export const rows: RowData[] = [
  {
    id: 1,
    registerId: "REG001",
    Name: "Mohamad",
    Age: 18,
    PhoneNumber: 94762168,
    Email: "mohamadAljaber@gmail.com",
    Address: "Syria",
    City: "Idlib",
    ZipCode: "12345",
  },
  {
    id: 2,
    registerId: "REG002",
    Name: "Ali",
    Age: 25,
    PhoneNumber: 94872169,
    Email: "aliAhmad@gmail.com",
    Address: "Syria",
    City: "Aleppo",
    ZipCode: "54321",
  },
  {
    id: 3,
    registerId: "REG003",
    Name: "Reem",
    Age: 22,
    PhoneNumber: 94532168,
    Email: "reemSalem@gmail.com",
    Address: "Syria",
    City: "Homs",
    ZipCode: "67890",
  },
  {
    id: 4,
    registerId: "REG004",
    Name: "Salem",
    Age: 30,
    PhoneNumber: 94762163,
    Email: "salemAljaber@gmail.com",
    Address: "Syria",
    City: "Latakia",
    ZipCode: "98765",
  },
  {
    id: 5,
    registerId: "REG005",
    Name: "Housam",
    Age: 28,
    PhoneNumber: 94767168,
    Email: "housamKhaled@gmail.com",
    Address: "Syria",
    City: "Tartus",
    ZipCode: "24680",
  },
  {
    id: 6,
    registerId: "REG006",
    Name: "Omar",
    Age: 27,
    PhoneNumber: 94712168,
    Email: "omarHassan@gmail.com",
    Address: "Syria",
    City: "Hama",
    ZipCode: "13579",
  },
  {
    id: 7,
    registerId: "REG007",
    Name: "Tasmin",
    Age: 24,
    PhoneNumber: 94732168,
    Email: "tasminNoor@gmail.com",
    Address: "Syria",
    City: "idlib",
    ZipCode: "86420",
  },
  {
    id: 8,
    registerId: "REG008",
    Name: "Yousef",
    Age: 29,
    PhoneNumber: 94792168,
    Email: "yousefAli@gmail.com",
    Address: "Syria",
    City: "Damascus",
    ZipCode: "75319",
  },
  {
    id: 9,
    registerId: "REG009",
    Name: "Ahmad",
    Age: 35,
    PhoneNumber: 94752168,
    Email: "ahmadOmar@gmail.com",
    Address: "Syria",
    City: "Hasakah",
    ZipCode: "19283",
  },
];
