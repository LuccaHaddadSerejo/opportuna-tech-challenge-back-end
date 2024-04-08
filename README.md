# Opportuna Tecnologia Technical Test - Backend

Backend for the technical test of Opportuna Tecnologia company.

## Index

- <a href="#-requirements">Service Requirements</a>
- <a href="#-install">Installing and Running the Project</a>
- <a href="#-features">Features</a>
- <a href="#-docs">Documentation</a>
- <a href="#-libraries">Used Libraries</a>

## <h2 id="-requirements">Service Requirements</h2>

- The database used was PostgreSQL.
- Have PostgreSQL installed and running on your machine.
- Have a PostgreSQL database created to use in the project's environment variables.

## <h2 id=#-install>Installing and Running the Project</h2>

```bash
# Install dependencies:
$ yarn install

# Create and configure the .env file:
# Have a PostgreSQL database created and running to configure the environment variables correctly.
$ Create a .env file at the root of the project and configure it based on the .env.example file.

# Run migrations:
$ npx prisma migrate dev

# Run the application:
$ yarn start:dev
```

## <h2 id="-features">Features</h2>

### General

- Reminder creation;
- Reading reminders;
- Reminder deletion;
- Reminder update;
- Deletion of all reminders in a given day.

## <h2 id="-docs">Documentation</h2>

```bash
# Start the application:
$ yarn start:dev

# Access the following route to see the documentation:
$ http://localhost:3000/api/v1/docs/

```

## <h2 id="-libraries">Used Libraries</h2>

- [x] Nest
- [x] Prisma
- [x] dotenv
- [x] cors
