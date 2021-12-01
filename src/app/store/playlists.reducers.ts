import { createReducer, on } from "@ngrx/store";
import Playlist from "../models/playlist.model";
import { loadPlaylistsSuccess } from '../store/playlists.actions';

export interface PlaylistsState {
  playlists: Playlist[];
}

export const initialState: PlaylistsState = {
  playlists: []
};

export const playlistsReducer = createReducer(
  initialState,
  on(loadPlaylistsSuccess, (state, { playlists }) => ({
    ...state,
    playlists: playlists,
  })),
);
