# CIGMABank Project

## Overview

This project is a web application developed for CIGMABank as part of a graduation requirement. The application is built using Angular for the frontend and .NET Core for the backend.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication:** Secure login and registration with JWT.
- **Account Management:** View and manage bank accounts.
- **Transaction History:** Track and view transaction details.
- **Funds Transfer:** Transfer money between accounts.
- **Admin Panel:** Manage users and accounts.

## Technologies Used

- **Frontend:** Angular
- **Backend:** .NET Core
- **Database:** SQL Server
- **Authentication:** JWT

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/package-manager/current)
- [Angular CLI](https://v17.angular.io/cli)
- [.NET Core SDK](https://dotnet.microsoft.com/en-us/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/cigmabank-project.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd cigmabank-project
    ```
3. **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    ```
4. **Install backend dependencies:**
    ```bash
    cd ../backend
    dotnet restore
    ```
5. **Set up the database:**
    - Create a new SQL Server database.
    - Update the connection string in `appsettings.json` with your database details.
    - Run the migrations to set up the database schema.
        ```bash
        dotnet ef database update
        ```
6. **Run the application:**
    - Start the backend server.
        ```bash
        cd backend
        dotnet run
        ```
    - Start the frontend server.
        ```bash
        cd frontend
        ng serve
        ```

## Usage

1. Navigate to `http://localhost:4200` in your web browser.
2. Register a new user or log in with existing credentials.
3. Explore the features like account management and transaction history.

## API Endpoints

### User Authentication

- **POST** `/api/auth/login` - Log in a user
- **POST** `/api/auth/register` - Register a new user

### Account Management

- **GET** `/api/accounts` - Get all accounts
- **POST** `/api/accounts` - Create a new account
- **GET** `/api/accounts/{id}` - Get account details

### Transactions

- **GET** `/api/transactions` - Get all transactions
- **POST** `/api/transactions` - Create a new transaction

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please contact:
### Myself Frontend
- **Name:** Khalid Ait M'Hamed
- **Email:** khalid.aitmhamed@hotmail.com
- **GitHub:** [Khaimed](https://github.com/khaimed)
### Co-team Backend
- **Name:** Younes Benfaida
- **Email:** younesbenfaida2020@gmail.com
- **GitHub:** [xnetero](https://github.com/xnetero)
