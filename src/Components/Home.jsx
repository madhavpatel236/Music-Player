import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../images/logo.png";
import ContentPage from "../Components/ContentPage";
import AudioCard from "./AudioCard";
// import nextBtn from "../images/nextBtn.png";
// import prevBtn from "../images/previousBtn.png";
// import pauseBtn from "../images/playBtn.png";

function Home() {
  const dispatch = useDispatch();
  const playlistData = useSelector((store) => store?.PlaylistData?.Data);

  // -----------------------------------------------------------------
  return (
    <div className="">
      {/* tablet and laptop screen  */}
      <div className="hidden md:text-white md:flex md:w-screen md:min-h-screen md:bg-red-950 ">
        {/* left side navigation bar */}
        <section className="md:flex-col md:flex md: md:items-center md:h-screen md:bg-black  md:w-2/12">
          <section className="md:h-1/4 md:flex md:flex-col md:justify-between">
            <div className="md:mt-10 md:mb-16">
              <img
                src={logo}
                alt="logo"
                className="md:w-16 md:h-16  md:rounded-full "
              />
            </div>
            <div className="md:flex md:flex-col md:gap-2">
              <div className="md:text-gray-500 md:items-start">MENU</div>
              <span className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Home</span>
              </span>
              <span className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">trends</span>
              </span>
              <span className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Library</span>
              </span>
              <span className="md:flex md:items-start">
                <img src={logo} className="md:w-6" />
                <span className="md:pl-4">Discover</span>
              </span>
            </div>
          </section>
          <section className="md:h-3/4 md:mb-10 md:flex md:flex-col md:justify-end gap-3">
            <div className="md:hover:underline">Setting</div>
            <div className="md:hover:underline">Logout</div>
          </section>
        </section>

        {/* middle part of the Home screen */}
        <ContentPage />

        {/* right side of the screen media player */}
        <section className="xl:flex-col xl:mr-10 xl:flex xl xl:items-center xl:h-screen xl:bg-red-950  xl:w-3/12">
          <AudioCard />
        </section>
      </div>

      {/* mobile screen */}
    </div>
  );
}

export default Home;

// <div className="md:hidden bg-red-800 flex flex-col pt-5 flex-wrap justify-start items-center gap-3 w-[100vw] min-h-[100vh]">
//         {/* playlist name */}
//         <article className="text-white mt-3 mb-2 font-bold text-2xl">
//           <div> Playlist- {playlistName}</div>
//         </article>

//         {/* img */}
//         <article className="w-60 h-60 mt-3">
//           <img
//             src={
//               songInfo?.album?.images[0].url || playlistData[0]?.images[1]?.url
//             }
//             alt="photo"
//             className="rounded-2xl"
//           />
//         </article>

//         {/* song Name */}
//         <article className="text-white mt-3 mb-2 max-w-[90vw] text-center line-clamp-2 font-semibold text-xl">
//           <div>{songInfo?.name}</div>
//         </article>

//         {/* next, prev btn */}
//         <article className="flex justify-center gap-x-2 items-center align-middle w-screen mb-2 rounded-lg ">
//           <button onClick={handlePrevBtn}>
//             <img src={prevBtn} className="w-14 h-14  " />
//           </button>
//           <button>
//             <img src={pauseBtn} className="w-16 h-16 " />
//           </button>
//           <button onClick={handlenextBtn}>
//             <img src={nextBtn} className="w-14 h-14" />
//           </button>
//         </article>

//         {/* list of songs */}
//         <article className="bg-red-950 p-3 flex flex-col h-auto rounded-xl text-white max-w-[90vw]">
//           {songs.map((eachSong) => (
//             // console.log(songs)

//             <button
//               onClick={() => handleSong(eachSong?.track)}
//               key={eachSong?.track?.id}
//               className="flex bottom-0 gap-3 mb-4   "
//             >
//               <img
//                 src={eachSong?.track?.album?.images[0].url}
//                 className="w-10 h-10x rounded-md mr-3"
//               />
//               <span className="flex justify-between w-full p-1 ">
//                 <span className="flex flex-col text-start">
//                   <span className=" line-clamp-1 font-semibold ">
//                     {eachSong?.track?.name}
//                   </span>
//                   <span className=" line-clamp-1 text-sm ">
//                     {eachSong?.track?.artists[0].name}
//                   </span>
//                 </span>
//                 <span className="mr-2 flex items-end mb-1 min-w-16">
//                   {(eachSong?.track?.duration_ms / 60000).toFixed(2) +
//                     " " +
//                     "min"}
//                 </span>
//               </span>
//             </button>
//           ))}
//         </article>
//       </div>
