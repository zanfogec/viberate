interface Coordinates {
  lat: number;
  lng: number;
}

interface Country {
  code: string;
  iso3: string;
  slug: string;
  name: string;
  coordinates: Coordinates;
  continent_code: string;
}

interface Genre {
  id: number;
  slug: string;
  name: string;
  subgenres: null;
}

interface Subgenre {
  id: number;
  slug: string;
  name: string;
}

interface RankCategories {
  overall: number | null;
  country: number | null;
  genre: number | null;
  subgenre_1: number | null;
  subgenre_2: number | null;
  subgenre_3: number | null;
}

interface RankPeriods {
  current: RankCategories;
  previous: RankCategories;
}

interface SocialLink {
  channel: string;
  link: string;
}

interface BeatportGenre {
  id: number;
  name: string;
}

interface ChannelRank {
  current: RankCategories;
  previous: RankCategories;
}

interface ChannelRanks {
  airplay: ChannelRank;
  beatport: ChannelRank;
  social: ChannelRank;
  spotify: ChannelRank;
  youtube: ChannelRank;
}

interface Analytics {
  airplay: boolean;
  audience: boolean;
  basic: boolean;
  beatport: boolean;
  overview: boolean;
  social: boolean;
  spotify: boolean;
  youtube: boolean;
  shazam: boolean;
  soundcloud: boolean;
  deezer: boolean;
  playlists: boolean;
  'apple-playlists': boolean;
  facebook: boolean;
  instagram: boolean;
  tiktok: boolean;
  twitter: boolean;
  events: boolean;
  tracks: boolean;
  network: boolean;
}

export interface PopularityData {
  city: string;
  value: string;
}

export interface ArtistData {
  uuid: string;
  slug: string;
  name: string;
  image: string;
  country: Country;
  genre: Genre;
  subgenres: Subgenre[];
  rank: number;
  rank_categories: RankPeriods;
  bookmarked: boolean;
  verified: boolean;
  claimed: boolean;
  trending: boolean;
  badges: null;
  social_links: SocialLink[];
  status: string;
  booking_available: boolean;
  contact_available: boolean;
  meta_image: string;
  hot_on_charts: null;
  created_at: string;
  beatport_genres: BeatportGenre[];
  channel_ranks: ChannelRanks;
  analytics: Analytics;
  most_popular_in: PopularityData[];
}

export interface ArtistResponse {
  api_version: string;
  data: ArtistData;
}
