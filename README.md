# Tugas Belajar - File Storage and Wallet Integration

## Overview

Tugas Belajar is a web application built on the Internet Computer (ICP) that enables users to store files and images securely while integrating wallet functionality for a seamless user experience. This project utilizes the DFINITY SDK and Motoko for backend development.

## Features

- **File Upload**: Users can upload images and files to the storage canister.
- **Wallet Connection**: Easy integration with crypto wallets for secure transactions.
- **User Authentication**: Users can manage their files through a personalized dashboard.
- **Responsive Design**: The application is designed to work on various devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Motoko (for smart contracts)
- **Blockchain**: DFINITY Internet Computer (ICP)
- **Development Tools**: DFX, Webpack

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [DFX SDK](https://sdk.dfinity.org/docs/quickstart/quickstart.html) (version 0.23.0)
- [Git](https://git-scm.com/) (for version control)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/tugas-belajar.git
   cd tugas-belajar
   ```

2. **Install Dependencies**:

   Navigate to the project directory and install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Start the DFX Local Development Environment**:

   ```bash
   dfx start --background
   ```

4. **Build and Deploy the Canisters**:

   ```bash
   dfx deploy
   ```

5. **Run the Frontend**:

   If you are using Webpack, run:

   ```bash
   npx webpack serve
   ```

   Then, navigate to `http://localhost:9000` in your web browser.

## Usage

1. Connect your wallet using the provided interface.
2. Upload files and images through the dashboard.
3. View and manage your stored files.

## Testing

Currently, there are no automated tests. However, you can manually test the functionality by following the usage instructions above.
