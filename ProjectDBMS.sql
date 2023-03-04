-- CREATE TABLE admin(
-- adminID varchar(20) NOT NULL UNIQUE,
-- fname varchar(50) NOT NULL,
-- lname varchar(50),
-- email varchar(60) NOT NULL UNIQUE,
-- pass varchar(30) NOT NULL
-- );

-- CREATE TABLE cart(
-- cartID varchar(20) NOT NULL UNIQUE,
-- noOfProducts int NOT NULL,
-- totalPrice int NOT NULL
-- );

-- CREATE TABLE shipper(
-- shipperID varchar(20) NOT NULL UNIQUE,
-- cnic varchar(30) NOT NULL UNIQUE,
-- phno varchar(30) NOT NULL UNIQUE,
-- address varchar(60) NOT NULL,
-- salary int
-- );

-- CREATE TABLE customer(
-- custID varchar(20) NOT NULL UNIQUE,
-- fname varchar(50) NOT NULL,
-- lname varchar(50),
-- email varchar(60) NOT NULL UNIQUE,
-- phno varchar(30) NOT NULL UNIQUE,
-- address varchar(60) NOT NULL,
-- country varchar(30) NOT NULL DEFAULT 'Pakistan',
-- city varchar (30) NOT NULL,
-- postalCode int NOT NULL
-- );

-- CREATE TABLE product(
-- prodID varchar(20) NOT NULL UNIQUE,
-- prodname varchar(50) NOT NULL,
-- prodDesc varchar(100) NOT NULL,
-- discount int NOT NULL DEFAULT 0,
-- unitweightKg float NOT NULL,
-- unitprice int NOT NULL
-- );

-- CREATE TABLE orders(
-- orderID varchar(20) NOT NULL UNIQUE,
-- shipperID varchar(20) NOT NULL UNIQUE,
-- custID varchar(20) NOT NULL UNIQUE,
-- quantity int NOT NULL,
-- orderDate DATE NOT NULL,
-- shippedDate DATE
-- );


-- INSERT INTO admin (adminID,fname,lname,email,pass)
-- VALUES
-- ('ad1','Areeb','Azim','areebbinazim360@gmail.com','abc'),
-- ('ad2','Moiz','Ali','amoiz3731@gmail.com','abc'),
-- ('ad3','S.Saad','Ali','16610122182wwe@gmail.com','abc'),
-- ('ad4','M.Zain','Ammad','zainammad05@gmail.com','abc');

-- INSERT INTO cart (cartID,noOfProducts,totalPrice)
-- VALUES
-- ('cart1',2,20),
-- ('cart2',4,50),
-- ('cart3',3,70),
-- ('cart4',2,20);

-- INSERT INTO customer (custID,fname,lname,email,phno,address,country,city,postalCode)
-- VALUES
-- ('ct1','Areeb','Azim','areebbinazim360@gmail.com','03122885343','House-7,Street4','Pakistan','Karachi',75950),
-- ('ct2','Moiz','Ali','amoiz3731@gmail.com','03122885344','House-8,Street4','Pakistan','Karachi',75951),
-- ('ct3','S.Saad','Ali','16610122182wwe@gmail.com','03122885345','House-9,Street4','Pakistan','Karachi',75952),
-- ('ct4','M.Zain','Ammad','zainammad05@gmail.com','03122885346','House-10,Street4','Pakistan','Karachi',75953);

-- INSERT INTO shipper (shipperID,cnic,phno,address,salary)
-- VALUES
-- ('sp1','123','03123456567','House-7,Street8',15000),
-- ('sp2','456','03123456568','House-8,Street7',16000),
-- ('sp3','789','03123456569','House-9,Street6',25000),
-- ('sp4','0321','03123456560','House-10,Street5',18000);

-- INSERT INTO product (prodID,prodname,prodDesc,discount,unitweightKg,unitprice)
-- VALUES
-- ('pd1','Adidas T-shirt','Full Cotton',0,0.2,700),
-- ('pd2','Denim Jeans Pant','Wash Faded quality',0,0.5,1100),
-- ('pd3','Rado Mens Watch','Silver Plated',0,0.22,2000),
-- ('pd4','Nike Mens Shoes','Very Light',0,0.54,3000);

-- INSERT INTO orders (orderID,shipperID,custID,quantity,orderDate,shippedDate)
-- VALUES
-- ('od1','sp1','ct1',2,'2021-09-01','2021-09-04'),
-- ('od2','sp2','ct2',1,'2021-09-02','2021-09-05'),
-- ('od3','sp3','ct3',5,'2021-09-03','2021-09-04'),
-- ('od4','sp4','ct4',4,'2021-09-01','2021-09-05');


-- ALTER TABLE orders
-- ADD FOREIGN KEY(shipperID) REFERENCES shipper(shipperID),
-- ADD FOREIGN KEY(custID) REFERENCES customer(custID);











