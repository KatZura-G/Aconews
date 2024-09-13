# aconews

aconews is a React application that displays the latest news headlines from various categories using the GNews API.

## Installation

1. Clone the repository: `git clone https://github.com/KatZura-G/Aconews.git`
2. Navigate to the project directory: `cd aconews`
3. Install dependencies: `npm install`
4. Start the application: `npm start`

## Features

- Display the latest news headlines from various categories
- Click on a category to filter the news by that category
- Click on a news headline to view more details in a modal
- Responsive design for mobile and desktop

## Technologies Used

- React
- Axios
- Firebase
- CSS

## API

The application uses the GNews API to fetch the latest news headlines.

## Deployment

To deploy the application using Firebase, follow these steps:

1. Create a Firebase project in the Firebase console.
2. Install the Firebase CLI by running `npm install -g firebase-tools`.
3. Initialize Firebase in your React app by running `firebase init` and selecting "Hosting" as the feature to set up.
4. Configure Firebase hosting by adding the following configuration to your `firebase.json` file:
```json
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}
```
5. Build your React app by running npm run build.
6. Deploy your app to Firebase by running firebase deploy.
7. Verify your app in the Firebase console.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
