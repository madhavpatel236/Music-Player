import { useDispatch } from "react-redux";
import { ShowPlaylistData } from "./playlistDataSlice";

export const allSongs = [
  {
    album: {
      href: "https://api.spotify.com/v1/albums/1IwC3SdQXPgXSs8FLvOUju",
      id: "1IwC3SdQXPgXSs8FLvOUju",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2736b047c1401c8c18a54e4377d",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e026b047c1401c8c18a54e4377d",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048516b047c1401c8c18a54e4377d",
          width: 64,
          height: 64,
        },
      ],
      name: "Airlift",
      release_date: "2015-12-17",
      release_date_precision: "day",
      uri: "spotify:album:1IwC3SdQXPgXSs8FLvOUju",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/76fuWYgIf3TVIopTs3vaJ6",
          },
          href: "https://api.spotify.com/v1/artists/76fuWYgIf3TVIopTs3vaJ6",
          id: "76fuWYgIf3TVIopTs3vaJ6",
          name: "Amaal Mallik",
          type: "artist",
          uri: "spotify:artist:76fuWYgIf3TVIopTs3vaJ6",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/0E02VcvA5p1ndkLdqWD5JB",
          },
          href: "https://api.spotify.com/v1/artists/0E02VcvA5p1ndkLdqWD5JB",
          id: "0E02VcvA5p1ndkLdqWD5JB",
          name: "Ankit Tiwari",
          type: "artist",
          uri: "spotify:artist:0E02VcvA5p1ndkLdqWD5JB",
        },
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/1IwC3SdQXPgXSs8FLvOUju",
      },
      total_tracks: 5,
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0E02VcvA5p1ndkLdqWD5JB",
        },
        href: "https://api.spotify.com/v1/artists/0E02VcvA5p1ndkLdqWD5JB",
        id: "0E02VcvA5p1ndkLdqWD5JB",
        name: "Ankit Tiwari",
        type: "artist",
        uri: "spotify:artist:0E02VcvA5p1ndkLdqWD5JB",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw",
        },
        href: "https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw",
        id: "4YRxDV8wJFPHPTeXepOstw",
        name: "Arijit Singh",
        type: "artist",
        uri: "spotify:artist:4YRxDV8wJFPHPTeXepOstw",
      },
    ],
    duration_ms: 271330,
    href: "https://api.spotify.com/v1/tracks/4KfIDhVW9WUwUEouFcf6YN",
    id: "4KfIDhVW9WUwUEouFcf6YN",
    name: "Dil Cheez Tujhe Dedi",
    popularity: 50,
    uri: "spotify:track:4KfIDhVW9WUwUEouFcf6YN",
    is_local: false,
  },
  {
    album: {
      available_markets: [],
      type: "album",
      album_type: "single",
      href: "https://api.spotify.com/v1/albums/0SW0gTZGHVkOQI0goJ6sFw",
      id: "0SW0gTZGHVkOQI0goJ6sFw",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734f1501e365f82aaa1c900825",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024f1501e365f82aaa1c900825",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514f1501e365f82aaa1c900825",
          width: 64,
          height: 64,
        },
      ],
      name: "Ram Setu",
      release_date: "2022-09-19",
      release_date_precision: "day",
      uri: "spotify:album:0SW0gTZGHVkOQI0goJ6sFw",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3b9iVRjKkiC4oIHXB7pbzJ",
          },
          href: "https://api.spotify.com/v1/artists/3b9iVRjKkiC4oIHXB7pbzJ",
          id: "3b9iVRjKkiC4oIHXB7pbzJ",
          name: "Narci",
          type: "artist",
          uri: "spotify:artist:3b9iVRjKkiC4oIHXB7pbzJ",
        },
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/0SW0gTZGHVkOQI0goJ6sFw",
      },
      total_tracks: 4,
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3b9iVRjKkiC4oIHXB7pbzJ",
        },
        href: "https://api.spotify.com/v1/artists/3b9iVRjKkiC4oIHXB7pbzJ",
        id: "3b9iVRjKkiC4oIHXB7pbzJ",
        name: "Narci",
        type: "artist",
        uri: "spotify:artist:3b9iVRjKkiC4oIHXB7pbzJ",
      },
    ],
    disc_number: 1,
    track_number: 3,
    duration_ms: 309019,
    external_ids: {
      isrc: "QZNWY2237771",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/14zTx6i2o5bB5Re8pS2BMd",
    },
    href: "https://api.spotify.com/v1/tracks/14zTx6i2o5bB5Re8pS2BMd",
    id: "14zTx6i2o5bB5Re8pS2BMd",
    name: "Ram Darshan",
    popularity: 0,
    uri: "spotify:track:14zTx6i2o5bB5Re8pS2BMd",
    is_local: false,
  },
  {
    album: {
      available_markets: [],
      type: "album",
      album_type: "single",
      href: "https://api.spotify.com/v1/albums/5HwDqY57GHF4LhBvXUrilS",
      id: "5HwDqY57GHF4LhBvXUrilS",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734cb746742f164d1a0cc91c5f",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024cb746742f164d1a0cc91c5f",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514cb746742f164d1a0cc91c5f",
          width: 64,
          height: 64,
        },
      ],
      name: "Shoorveer III",
      release_date: "2022-02-19",
      release_date_precision: "day",
      uri: "spotify:album:5HwDqY57GHF4LhBvXUrilS",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/7FmygnepJt3fhiZQDmoC0P",
          },
          href: "https://api.spotify.com/v1/artists/7FmygnepJt3fhiZQDmoC0P",
          id: "7FmygnepJt3fhiZQDmoC0P",
          name: "Rapperiya Baalam",
          type: "artist",
          uri: "spotify:artist:7FmygnepJt3fhiZQDmoC0P",
        },
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/5HwDqY57GHF4LhBvXUrilS",
      },
      total_tracks: 1,
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7FmygnepJt3fhiZQDmoC0P",
        },
        href: "https://api.spotify.com/v1/artists/7FmygnepJt3fhiZQDmoC0P",
        id: "7FmygnepJt3fhiZQDmoC0P",
        name: "Rapperiya Baalam",
        type: "artist",
        uri: "spotify:artist:7FmygnepJt3fhiZQDmoC0P",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5IzIL7dnJku61Le2Qv9Ehu",
        },
        href: "https://api.spotify.com/v1/artists/5IzIL7dnJku61Le2Qv9Ehu",
        id: "5IzIL7dnJku61Le2Qv9Ehu",
        name: "SHAMBHO",
        type: "artist",
        uri: "spotify:artist:5IzIL7dnJku61Le2Qv9Ehu",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3TwDjxq0xKO564mxocDOhJ",
        },
        href: "https://api.spotify.com/v1/artists/3TwDjxq0xKO564mxocDOhJ",
        id: "3TwDjxq0xKO564mxocDOhJ",
        name: "Rajneesh Jaipuri",
        type: "artist",
        uri: "spotify:artist:3TwDjxq0xKO564mxocDOhJ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0jwEjjVUUOLop2Nhnoh16H",
        },
        href: "https://api.spotify.com/v1/artists/0jwEjjVUUOLop2Nhnoh16H",
        id: "0jwEjjVUUOLop2Nhnoh16H",
        name: "Jagirdar RV",
        type: "artist",
        uri: "spotify:artist:0jwEjjVUUOLop2Nhnoh16H",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4LYY7MCgBn5wXuIt2UOfFq",
        },
        href: "https://api.spotify.com/v1/artists/4LYY7MCgBn5wXuIt2UOfFq",
        id: "4LYY7MCgBn5wXuIt2UOfFq",
        name: "Meetu Solanki",
        type: "artist",
        uri: "spotify:artist:4LYY7MCgBn5wXuIt2UOfFq",
      },
    ],
    disc_number: 1,
    track_number: 1,
    duration_ms: 213000,
    external_ids: {
      isrc: "TCAFY2170572",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/4BLqBzCkmC4rA9pYzjr0Hq",
    },
    href: "https://api.spotify.com/v1/tracks/4BLqBzCkmC4rA9pYzjr0Hq",
    id: "4BLqBzCkmC4rA9pYzjr0Hq",
    name: "Shoorveer III",
    popularity: 1,
    uri: "spotify:track:4BLqBzCkmC4rA9pYzjr0Hq",
    is_local: false,
  },
  {
    preview_url: null,
    
    explicit: false,
    type: "track",
    episode: false,
    track: true,
    album: {
      type: "album",
      album_type: "single",
      href: "https://api.spotify.com/v1/albums/2lamKVwMlqQWKWs1xsjJkG",
      id: "2lamKVwMlqQWKWs1xsjJkG",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273e7c04de440551fe74643638a",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02e7c04de440551fe74643638a",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851e7c04de440551fe74643638a",
          width: 64,
          height: 64,
        },
      ],
      name: 'Ghamand Kar (From "Tanhaji - The Unsung Warrior")',
      release_date: "2019-12-24",
      release_date_precision: "day",
      uri: "spotify:album:2lamKVwMlqQWKWs1xsjJkG",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6WOdPJmexxFINcKMkP2jMG",
          },
          href: "https://api.spotify.com/v1/artists/6WOdPJmexxFINcKMkP2jMG",
          id: "6WOdPJmexxFINcKMkP2jMG",
          name: "Sachet Tandon",
          type: "artist",
          uri: "spotify:artist:6WOdPJmexxFINcKMkP2jMG",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1E6arsXf5Fgsnv9YpSzjpE",
          },
          href: "https://api.spotify.com/v1/artists/1E6arsXf5Fgsnv9YpSzjpE",
          id: "1E6arsXf5Fgsnv9YpSzjpE",
          name: "Parampara Tandon",
          type: "artist",
          uri: "spotify:artist:1E6arsXf5Fgsnv9YpSzjpE",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1SyKki7JI1AZNKwgNMkn25",
          },
          href: "https://api.spotify.com/v1/artists/1SyKki7JI1AZNKwgNMkn25",
          id: "1SyKki7JI1AZNKwgNMkn25",
          name: "Sachet-Parampara",
          type: "artist",
          uri: "spotify:artist:1SyKki7JI1AZNKwgNMkn25",
        },
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/2lamKVwMlqQWKWs1xsjJkG",
      },
      total_tracks: 1,
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6WOdPJmexxFINcKMkP2jMG",
        },
        href: "https://api.spotify.com/v1/artists/6WOdPJmexxFINcKMkP2jMG",
        id: "6WOdPJmexxFINcKMkP2jMG",
        name: "Sachet Tandon",
        type: "artist",
        uri: "spotify:artist:6WOdPJmexxFINcKMkP2jMG",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1E6arsXf5Fgsnv9YpSzjpE",
        },
        href: "https://api.spotify.com/v1/artists/1E6arsXf5Fgsnv9YpSzjpE",
        id: "1E6arsXf5Fgsnv9YpSzjpE",
        name: "Parampara Tandon",
        type: "artist",
        uri: "spotify:artist:1E6arsXf5Fgsnv9YpSzjpE",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1SyKki7JI1AZNKwgNMkn25",
        },
        href: "https://api.spotify.com/v1/artists/1SyKki7JI1AZNKwgNMkn25",
        id: "1SyKki7JI1AZNKwgNMkn25",
        name: "Sachet-Parampara",
        type: "artist",
        uri: "spotify:artist:1SyKki7JI1AZNKwgNMkn25",
      },
    ],
    disc_number: 1,
    track_number: 1,
    duration_ms: 282822,
    external_ids: {
      isrc: "INS181905944",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/4FcZBCb6dANhvsEnFlgJwG",
    },
    href: "https://api.spotify.com/v1/tracks/4FcZBCb6dANhvsEnFlgJwG",
    id: "4FcZBCb6dANhvsEnFlgJwG",
    name: 'Ghamand Kar (From "Tanhaji - The Unsung Warrior")',
    popularity: 56,
    uri: "spotify:track:4FcZBCb6dANhvsEnFlgJwG",
    is_local: false,
  },
  {
    preview_url: null,
    
    explicit: false,
    type: "track",
    episode: false,
    track: true,
    album: {
     
      type: "album",
      album_type: "single",
      href: "https://api.spotify.com/v1/albums/0gCcyIYaX8OK2BcKs8behf",
      id: "0gCcyIYaX8OK2BcKs8behf",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273e7fe7d656750737e8d369f95",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02e7fe7d656750737e8d369f95",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851e7fe7d656750737e8d369f95",
          width: 64,
          height: 64,
        },
      ],
      name: "Shivaay",
      release_date: "2016-10-07",
      release_date_precision: "day",
      uri: "spotify:album:0gCcyIYaX8OK2BcKs8behf",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/09UmIX92EUH9hAK4bxvHx6",
          },
          href: "https://api.spotify.com/v1/artists/09UmIX92EUH9hAK4bxvHx6",
          id: "09UmIX92EUH9hAK4bxvHx6",
          name: "Mithoon",
          type: "artist",
          uri: "spotify:artist:09UmIX92EUH9hAK4bxvHx6",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/74OaRjmyh0XyRZsQQQ5l7c",
          },
          href: "https://api.spotify.com/v1/artists/74OaRjmyh0XyRZsQQQ5l7c",
          id: "74OaRjmyh0XyRZsQQQ5l7c",
          name: "Jasleen Royal",
          type: "artist",
          uri: "spotify:artist:74OaRjmyh0XyRZsQQQ5l7c",
        },
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/0gCcyIYaX8OK2BcKs8behf",
      },
      total_tracks: 5,
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/09UmIX92EUH9hAK4bxvHx6",
        },
        href: "https://api.spotify.com/v1/artists/09UmIX92EUH9hAK4bxvHx6",
        id: "09UmIX92EUH9hAK4bxvHx6",
        name: "Mithoon",
        type: "artist",
        uri: "spotify:artist:09UmIX92EUH9hAK4bxvHx6",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5GnnSrwNCGyfAU4zuIytiS",
        },
        href: "https://api.spotify.com/v1/artists/5GnnSrwNCGyfAU4zuIytiS",
        id: "5GnnSrwNCGyfAU4zuIytiS",
        name: "Mohit Chauhan",
        type: "artist",
        uri: "spotify:artist:5GnnSrwNCGyfAU4zuIytiS",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/19MVxKZZdPj2X0F8pi0OCT",
        },
        href: "https://api.spotify.com/v1/artists/19MVxKZZdPj2X0F8pi0OCT",
        id: "19MVxKZZdPj2X0F8pi0OCT",
        name: "Sukhwinder Singh",
        type: "artist",
        uri: "spotify:artist:19MVxKZZdPj2X0F8pi0OCT",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0y59o4v8uw5crbN9M3JiL1",
        },
        href: "https://api.spotify.com/v1/artists/0y59o4v8uw5crbN9M3JiL1",
        id: "0y59o4v8uw5crbN9M3JiL1",
        name: "Badshah",
        type: "artist",
        uri: "spotify:artist:0y59o4v8uw5crbN9M3JiL1",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2KhDedackjZfysiu7T7AwN",
        },
        href: "https://api.spotify.com/v1/artists/2KhDedackjZfysiu7T7AwN",
        id: "2KhDedackjZfysiu7T7AwN",
        name: "Megha Sriram Dalton",
        type: "artist",
        uri: "spotify:artist:2KhDedackjZfysiu7T7AwN",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1ZCPRtzF2CRFnP9OYHQGmN",
        },
        href: "https://api.spotify.com/v1/artists/1ZCPRtzF2CRFnP9OYHQGmN",
        id: "1ZCPRtzF2CRFnP9OYHQGmN",
        name: "Anugrah",
        type: "artist",
        uri: "spotify:artist:1ZCPRtzF2CRFnP9OYHQGmN",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7qATomOqJzoJiuEpAaxOXd",
        },
        href: "https://api.spotify.com/v1/artists/7qATomOqJzoJiuEpAaxOXd",
        id: "7qATomOqJzoJiuEpAaxOXd",
        name: "Sandeep Shrivastava",
        type: "artist",
        uri: "spotify:artist:7qATomOqJzoJiuEpAaxOXd",
      },
    ],
    disc_number: 1,
    track_number: 1,
    duration_ms: 294331,
    external_ids: {
      isrc: "INS181601543",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/7rMqbvNImA6wy8lxlNUMmj",
    },
    href: "https://api.spotify.com/v1/tracks/7rMqbvNImA6wy8lxlNUMmj",
    id: "7rMqbvNImA6wy8lxlNUMmj",
    name: "Bolo Har Har Har (feat. Mohit Chauhan, Sukhwinder Singh, Badshah, Megha Sriram Dalton, Anugrah, Sandeep Shrivastava)",
    popularity: 58,
    uri: "spotify:track:7rMqbvNImA6wy8lxlNUMmj",
    is_local: false,
  },
  {
    preview_url: null,
   
    explicit: false,
    type: "track",
    episode: false,
    track: true,
    album: {
    
      type: "album",
      album_type: "single",
      href: "https://api.spotify.com/v1/albums/2yR95YZtyVUEkqlSEgbTJI",
      id: "2yR95YZtyVUEkqlSEgbTJI",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2732061c9c78a7b9247f8f69eb7",
          width: 640,
          height: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e022061c9c78a7b9247f8f69eb7",
          width: 300,
          height: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048512061c9c78a7b9247f8f69eb7",
          width: 64,
          height: 64,
        },
      ],
      name: "Ishare Tere",
      release_date: "2018-07-25",
      release_date_precision: "day",
      uri: "spotify:album:2yR95YZtyVUEkqlSEgbTJI",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5rQoBDKFnd1n6BkdbgVaRL",
          },
          href: "https://api.spotify.com/v1/artists/5rQoBDKFnd1n6BkdbgVaRL",
          id: "5rQoBDKFnd1n6BkdbgVaRL",
          name: "Guru Randhawa",
          type: "artist",
          uri: "spotify:artist:5rQoBDKFnd1n6BkdbgVaRL",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1OPqAyxsQc8mcRmoNBAnVk",
          },
          href: "https://api.spotify.com/v1/artists/1OPqAyxsQc8mcRmoNBAnVk",
          id: "1OPqAyxsQc8mcRmoNBAnVk",
          name: "Dhvani Bhanushali",
          type: "artist",
          uri: "spotify:artist:1OPqAyxsQc8mcRmoNBAnVk",
        },
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/2yR95YZtyVUEkqlSEgbTJI",
      },
      total_tracks: 1,
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5rQoBDKFnd1n6BkdbgVaRL",
        },
        href: "https://api.spotify.com/v1/artists/5rQoBDKFnd1n6BkdbgVaRL",
        id: "5rQoBDKFnd1n6BkdbgVaRL",
        name: "Guru Randhawa",
        type: "artist",
        uri: "spotify:artist:5rQoBDKFnd1n6BkdbgVaRL",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1OPqAyxsQc8mcRmoNBAnVk",
        },
        href: "https://api.spotify.com/v1/artists/1OPqAyxsQc8mcRmoNBAnVk",
        id: "1OPqAyxsQc8mcRmoNBAnVk",
        name: "Dhvani Bhanushali",
        type: "artist",
        uri: "spotify:artist:1OPqAyxsQc8mcRmoNBAnVk",
      },
    ],
    disc_number: 1,
    track_number: 1,
    duration_ms: 189151,
    external_ids: {
      isrc: "INS181801712",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/0qeGjhiTk5xg4OcRUejXPs",
    },
    href: "https://api.spotify.com/v1/tracks/0qeGjhiTk5xg4OcRUejXPs",
    id: "0qeGjhiTk5xg4OcRUejXPs",
    name: "Ishare Tere",
    popularity: 51,
    uri: "spotify:track:0qeGjhiTk5xg4OcRUejXPs",
    is_local: false,
  },
];

