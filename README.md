## To run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Link:

```bash
https://appxdashboard.netlify.app/
```

## Implementations:

- Nextjs framework is used to create this application.
- Loading component is displayed until side nav is loaded in the app.
- Sidenav component is updated dynamically using data from configuration file appConfig.json
- On selecting app from side navigation opens the app on the view panel.
- Top navigation gets updated when a new application is loaded.
- Input data provided in the App2 (registration form) is displayed in App 3 : apps interact with each other using redux.
- Feature flagging feature - App2 loads registerationformV2 dynamically based on a configuration in appConfig.json that specifies the version of the component. e.g. V2. If this is changed to V1 in config, V1 version of registerationform loads.
- Attempted this test - App 4 renders a react-flow diagram with node that embeds another subflow.
- Clicking on App logo refreshes page/go back to home page.

## Tech Stack:

- NextJS
- React
- Javascript
- Tailwind CSS
- Redux
- React Flow
