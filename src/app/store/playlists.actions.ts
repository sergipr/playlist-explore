import { createAction, props } from "@ngrx/store";
import Playlist from "../models/playlist.model";

export const loadPlaylists = createAction('[Playlists] Load Playlists');
export const loadPlaylistsSuccess = createAction('[Playlists] Load Playlists Success', props<{playlists: Playlist[]}>());
export const loadPlaylistsError = createAction('[Playlists] Load Playlists Error');
