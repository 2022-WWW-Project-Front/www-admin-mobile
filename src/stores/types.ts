export interface Artist {
  id: number;
  genre: string;
  nickname: string;
  profileImage: string;
}

interface Asset {
  genre?: string;
  type?: string;
  url: string;
  isMain?: boolean;
}

export interface Artwork extends Asset {
  artist: { id: number };
}

export interface ArtistProps {
  id?: number;
  code?: string;
  genre?: string;
  name?: string;
  nickname?: string;
  type?: string;
  profileImage?: string;
  email?: string;
  contact?: string;
  linkTree?: string;
  description?: string;
  bio?: string;
  assets?: {
    genre: string;
    type: string;
    url: string;
  }[];
}

export interface ResponseArtist {
  id: number;
  code: string;
  genre: string;
  name: string;
  nickname: string;
  type: string;
  profileImage: string;
  email: string;
  contact: string;
  linkTree: string;
  description: string;
  bio: string;
  assets: {
    genre: string;
    type: string;
    url: string;
  }[];
}

export interface ArtworkDetailByArtist {
  id: number;
  title: string;
  description: string;
  artist: Artist;
  assets: Artwork[];
}

export interface EditArtworkProps {
  title?: string;
  description?: string;
  assets?: string[];
}
