# SWEN-661: CareConnect User Interface
## Project Description
This is the repository for the CareConnect User Interface implementation for users with Cerebral Palsy and Multiple Sclerosis (MS). This will involve producing a customized user interface for the CareConnect mobile application for care recipients with cerebral palsy and/or MS, ensuring that the interface meets relevant accessibility concerns for said users as laid out under WCAG 2.2 standards.
## Team Members
- Vindhya Sood - GitHub: pristine-cpu
- Ian Ard - GitHub: ianscottard
- Lucrece Nsoesie - GitHub: lnsoesie

## Team Charter
The team charter can be found at the following link: https://umuc365-my.sharepoint.com/:w:/g/personal/vsood_student_umgc_edu/IQAzqldJc9OIT4xptp6mU8mPATRAUvpZWsxfeGpoIplOEbI?e=1UQcwP

## Setup

Once you have cloned this repo, you can set up each user interface with the instructions below.

{{ROOT}} refers to the root folder the project was cloned to.

### Prerequisites
- Elevated Powershell or other command line interface
- Node.js LTS: https://nodejs.org/
- Flutter SDK: https://docs.flutter.dev/get-started/install
- React Native Command Line Interface: https://reactnative.dev/docs/environment-setup
- Expo Command Line Interface: https://docs.expo.dev/get-started/installation/
- Electron: https://www.electronjs.org/docs/latest/tutorial/installation
- Vite with React: https://vitejs.dev/guide/
- Android device with Expo Go: https://docs.expo.dev/get-started/set-up-your-environment/?mode=expo-go

### Flutter Mobile UI
- Navigate to {{ROOT}}\care_connect_flutter in your command line interface
- Check your devices with `flutter devices`; if none are available, either activate an Android emulator or connect a debug-capable developer mode Android device
- Activate the application with `flutter run` to run the application on your connected mobile device

### Expo Mobile UI
- Navigate to {{ROOT}}\Expo\CareConnectAndroid in your command line interface
- Download dependencies with `npm install`
- Activate Expo Go on your mobile device
- Run the Expo application with `npm start`
- Scan the provided QR code with your Expo Go device to run the application

### Electron Desktop UI
- Navigate to {{ROOT}}\Electron in your command line interface
- Download dependencies with `npm install`
- Run Electron with `npm start` to open a new desktop window with the Electron UI

### Vite Web UI
- Navigate to {{ROOT}}\Vite\vite in your command line interface
- Run `npm install` to download dependencies
- Run Vite with `npm run dev` to start the local web server
- Navigate to the shown localhost page in your browser to access the web interface
