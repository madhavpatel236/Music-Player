import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.png";
import { showSongInfo } from "../utils/songInfoSlice";

function ContentPage() {
  const dispatch = useDispatch()
  const playlist = useSelector((store) => store?.playlistData?.Data);
  const allSongs = playlist[0];
  // console.log(allSongs);

  const [selectedButton, setSelectedButton] = useState(null);

  const handleMusic = (song_id) => {
    fetchSongFromID(song_id);
    setSelectedButton(song_id);
  };

  const fetchSongFromID = (id) => {
    const matchingObject = allSongs.find(item => item.id === id);
    // console.log(matchingObject)
    dispatch(showSongInfo(matchingObject));
  }


  return (
    // <div></div>
    <div className="md:bg-red-950 md:md:w-auto md:flex-col md:flex ">
      {/* nav */}
      <section className="w-auto flex justify-evenly  md:mt-6  md:p-4">
        <span to="/comingsoon" className="pt-1">
          Music
        </span>
        <span to="/comingsoon" className="pt-1">
          Podcast
        </span>
        <span to="/comingsoon" className="pt-1">
          Live
        </span>
        <span to="/comingsoon" className="pt-1">
          Radio
        </span>
        <input
          placeholder="search"
          className="md:bg-red-950  border pl-5 w-52 border-white p-1 rounded-full"
        />
      </section>

      {/* playlist photos */}
      <section className="md:flex md:mt-10 xl:mt-4 md:justify-center  ">
        <section
          className="md:relative  md:bg-cover md:bg-center md:shadow-md md:shadow-current md:h-80 xl:h-52 md:w-10/12 xl:w-6/12 md:flex md:rounded-2xl md:items-center md:justify-center md:text-white"
          style={{
            backgroundImage: `url(${logo})`,
          }}
        >
          <div className="md:absolute md:inset-0  md:bg-opacity-50"></div>
        </section>
      </section>

      {/* songs list */}
      <section className="md:mt-7 xl:mt-4 xl:mb-4 md:mb-6">
        <article className="md:bg-red-950  md:flex md:flex-col  md:rounded-xl md:text-white ">
          {/* Playlist name  */}
          <div className="md:font-bold md:ml-2 md:text-2xl">Playlist</div>
        </article>
      </section>
      <section>
        <div className="  md:p-2 md:flex md:text-gray-400">
          <span className="md:text-center w-1/12   ">#</span>
          <span className="md:text-start w-5/12  ">TITLE</span>
          <span className="w-3/12  md:pl-3">ALBUM</span>
          <span className="w-3/12  flex justify-center">DURATION</span>
        </div>
        <div className="w-auto border border-gray-500"></div>

        { allSongs && allSongs.map((eachSong, index) => (
          // console.log(eachSong)
          <button
            onClick={() => handleMusic(eachSong?.id)}
            className={`md:w-full xl:hover:bg-red-900 m text- md:mt-3 p-2 md:flex md:justify-between  " // Active button styles
                 // Default button styles
            }`}
          >
            <span className="md:text-center w-1/12  ">{index + 1}</span>
            <span className="hidden md:text-start md:flex  md:w-5/12  ">
              <img
                src={`${eachSong?.track?.album?.images[0]?.url}`}
                className="hidden xl:w-16 xl:h-16"
              />
              <span className="md:line-clamp-1">{eachSong?.name}</span>
            </span>
            <span className="w-3/12 xl:text-start md:text-start  md:line-clamp-1 pl-3">
              {eachSong?.album?.name}
            </span>
            <span className="w-3/12  flex justify-center">
              {(eachSong?.duration_ms / 60000).toFixed(2) + " " + "min"}
            </span>
          </button>
        ))}
      </section>
    </div>
  );
}

export default ContentPage;