import { loadPlaylistsSuccess } from './../store/playlists.actions';
import * as fromReducer from 'src/app/store/playlists.reducers';
import { PlaylistsState } from 'src/app/store/playlists.reducers';

describe('PlaylistsReducer', () => {
  describe('Unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.playlistsReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LoadPlaylistsSuccess action', () => {
    it('should retrieve all playlists and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: PlaylistsState = {
          playlists: [{
          id: "pl.2b0e6e332fdf4b7a91164da3162127b5",
          kind: "playlist",
          name: "New Music Daily",
          url: "https://music.apple.com/us/playlist/new-music-daily/pl.2b0e6e332fdf4b7a91164da3162127b5?app=music&at=1000l4QJ&ct=330&itscg=10000&itsct=330",
          curator_name: "Apple Music",
          artwork: "https://is3-ssl.mzstatic.com/image/thumb/Features126/v4/78/27/00/782700c7-deb1-eeab-0874-4f5f3c15785e/U0MtTVMtV1ctTk1ELUJhbmRfT2ZfSG9yc2VzLUFEQU1fSUQ9MTA1MzE2NTg1Ny5wbmc.png/600x600SC.DN01.jpg?l=en-US",
        }]
      }
      const action = loadPlaylistsSuccess({ playlists: newState.playlists });
      const state = fromReducer.playlistsReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
