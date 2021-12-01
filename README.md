# PlaylistExplorer

This project displays a collection of Playlists obtained from `https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json`.

The app uses @ngrx/store to manage its state, @angular/router to manage navigation between routes and @ngrx/effects to isolate side effects.

The search input in the toolbar filters the Playlist collection in real time.

# Quick start

```
## Clone the repo
git clone https://github.com/sergipr/playlist-explore.git

## Change directory to repo
cd playlist-explore

## Use npm or yarn to install the dependencies:
npm install

## OR
yarn

## Start the server
ng serve
```

# Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
