var customerDB = [
  {
    id: "C00-001",
    name: "Sasmith Manawadu",
    address: "Galle Ambalangoda",
    contact: "077-1234567",
  },
  {
    id: "C00-002",
    name: "Nimashi Dewanmini",
    address: "Galle",
    contact: "077-1234567",
  },
  {
    id: "C00-003",
    name: "Peter",
    address: "Colombo",
    contact: "077-1234567",
  },
  {
    id: "C00-004",
    name: "John",
    address: "Colombo Kotte",
    contact: "077-1234567",
  },
  {
    id: "C00-005",
    name: "Eric",
    address: "Colombo 07",
    contact: "077-1234567",
  },
];

var itemDB = [
    {code:"I00-001",name:"CPU",unitPrice: 200.00,qty: 500},
    {code:"I00-002",name:"Moniter",unitPrice: 400.00,qty: 100},
    {code:"I00-002",name:"DDR5-Ram 64GB",unitPrice: 300.00,qty: 200}
];

var orderDB = [
    {oid:"OID-001", orderDate:"2023/10/06", custID:"C00-001", discount: 5, finalPrice: 2033,
        orderDetails:[
            {itmCode:"I00-001", unitPrice:145.00, qty:10},
            {itmCode:"I00-002", unitPrice:345.00, qty:2}
        ]
    }
];