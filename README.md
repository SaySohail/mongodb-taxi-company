



<h3 align="center"> MongoDB semi-structured database for a taxi company</h3>

<div align="center">

  [![code coverage](coverage.svg "Code coverage")]()
</div>

---


## 🧐 About <a name = "about"></a>

This coursework entailed the design and development of a MongoDB semi-structured database for a taxi company. The coursework required to model and store information about drivers, cars, operators, bookings, payments, shifts, clients, and revenue for the taxi company.

### Assumptions
During the development of the system, several assumptions were made about the nature of the company's operations, the structure of its data, and the relationships between various entities. These assumptions formed the basis of the system's design and implementation.
  1. Cars are owned by individuals, who may or may not be Taxi Drivers.
  2. Cars are then lent out to the Taxi Company.
  3. Each Taxi Driver can have several cars.
  4. Shift for each Taxi driver contains the start and end time when the driver is available for duty.
  5. Clients are of two types Private and Corporate.
  6. Operators work in shifts, First, Second and Third Shifts.
  7. The Taxi Company receives 40% of the payments made for each booking.

### Design Diagram
A UML class diagram was developed to visualize the relationships between the different entities within the system. This diagram proved essential in guiding the creation of the MongoDB collections and the mapping of the high-level design into the database.

### Mapping into MongoDB Collections
The mapping of the high-level design into MongoDB collections involved careful consideration of the structure of the data and the nature of the relationships between entities. Various strategies, including the use of arrays, embedded documents, and linking, were employed to implement the design effectively.

### MongoDB Queries
A set of twelve MongoDB queries was created to extract information from the system. These queries demonstrated a broad understanding of the MongoDB query language, with at least six queries making use of the MongoDB Aggregation Framework. Each query was accompanied by a description of its purpose, the MongoDB code to implement the query, and the output produced by the query.

### Conclusion
Overall, this coursework provided valuable experience in designing and implementing a MongoDB database for a real-world application. The exercise demonstrated the flexibility and power of MongoDB in handling semi-structured data and provided an opportunity to apply advanced data modelling techniques to a practical problem.

The coursework deliverables met the high standards required for a mark above 80%, exhibiting excellent attention to detail, accuracy, and an ability to address issues beyond the given specifications. I leveraged materials beyond the taught course to create a comprehensive, high-functioning MongoDB database that met the needs of a taxi company.








