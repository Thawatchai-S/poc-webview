# Ionic Capacitor ReactJS Template

This project is a starter template for building cross-platform applications using **Ionic**, **Capacitor**, and **ReactJS**.

## Features

- **Ionic Framework** for UI components and styling.
- **Capacitor** for accessing native device features.
- **ReactJS** for building modern, component-based UIs.
- Cross-platform support: iOS, Android, and Web.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd ionic-template
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Add platforms:
    ```bash
    npx cap add android
    npx cap add ios
    ```

### Development

To start the development server, run:
```bash
ionic serve
```

### Build

To build the project for production:
```bash
ionic build
```

### Deploy to Native Platforms

1. Sync the project with Capacitor:
    ```bash
    ionic capacitor sync
    ```

2. Open the native project:
    ```bash
    ionic capacitor run
    ```

3. Build and run using the respective platform tools.

## Learn More

- [Ionic Documentation](https://ionicframework.com/docs)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [ReactJS Documentation](https://reactjs.org/docs/getting-started.html)

## License

This project is licensed under the [MIT License](LICENSE).  