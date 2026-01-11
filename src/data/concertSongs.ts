// Import all concert audio files
import bratislava01 from "@/assets/31 Hudba - koncerty/ZMVL - bratislava/bratislava-pt1.mp3";
import bratislava02 from "@/assets/31 Hudba - koncerty/ZMVL - bratislava/bratislava-pt2.mp3";

import prerov01 from "@/assets/31 Hudba - koncerty/ZMVL - prerov/prerov-pt1.mp3";
import prerov02 from "@/assets/31 Hudba - koncerty/ZMVL - prerov/prerov-pt2.mp3";

import koprivnice01 from "@/assets/31 Hudba - koncerty/ZMVL - live Koprivnice/ZMVL live Koprivnice.mp3";

import nezname01 from "@/assets/31 Hudba - koncerty/ZMVL - nezname miesto/ZMVL 1 - cely set.mp3";

import { Track, Album } from "./albumSongs";

export const concertAlbums: Album[] = [
  {
    id: "bratislava",
    title: "Bratislava",
    tracks: [
      { id: "brat-01", title: "Part 1", audioUrl: bratislava01 },
      { id: "brat-02", title: "Part 2", audioUrl: bratislava02 },
    ],
  },
  {
    id: "prerov",
    title: "Přerov",
    tracks: [
      { id: "pre-01", title: "Part 1", audioUrl: prerov01 },
      { id: "pre-02", title: "Part 2", audioUrl: prerov02 },
    ],
  },
  {
    id: "koprivnice",
    title: "Koprivnice",
    tracks: [
      { id: "kopr-01", title: "Full Set", audioUrl: koprivnice01 },
    ],
  },
  {
    id: "nezname",
    title: "Neznáme miesto",
    tracks: [
      { id: "nez-01", title: "Full Set", audioUrl: nezname01 },
    ],
  },
];

// Flatten all concert tracks for easy access
export const allConcertTracks: Track[] = concertAlbums.flatMap((album) => album.tracks);

// Get album name by track ID
export function getConcertAlbumByTrackId(trackId: string): Album | undefined {
  return concertAlbums.find((album) => album.tracks.some((track) => track.id === trackId));
}
