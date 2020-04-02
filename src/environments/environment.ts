// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCXLbcLz5l_DTWJ9TifitDM0v6XYNwLCSs",
    authDomain: "corso-angular-pro.firebaseapp.com",
    databaseURL: "https://corso-angular-pro.firebaseio.com",
    projectId: "corso-angular-pro",
    storageBucket: "corso-angular-pro.appspot.com",
    messagingSenderId: "1014951085541",
    appId: "1:1014951085541:web:73afbbcfeb778c2759db0c",
    measurementId: "G-6W7H7ZYB14"
  },
  moviedb: {
    access_token:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWNmNTg0ZjczZWEzMWE0ZjA5ZWEzOTljNzBlYWEwOSIsInN1YiI6IjU5ZTlhNTg4OTI1MTQxMGM3NDAwYjUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._U1Aw268w9cBgvwMy5LGQr4qBBSLOwTgNPdwt59ZI6k",
    baseUrl: "https://api.themoviedb.org/3"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
