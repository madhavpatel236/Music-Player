import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSongInfo } from "../utils/songInfoSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import logo from "../images/logo.png";

function ContentPage() {
  const dispatch = useDispatch();
  const playlist = useSelector((store) => store?.playlistData?.Data);
  const song = useSelector((store) => store?.songInfo?.info);
  const songPhoto = song?.album?.images[0]?.url;
  console.log(songPhoto);
  const allSongs = playlist[0];
  const [selectedButton, setSelectedButton] = useState(null);
  const [songs, setSongs] = useState(allSongs);

  useEffect(() => {
    setSongs(allSongs);
  }, [allSongs]);

  const handleMusic = (song_id) => {
    fetchSongFromID(song_id);
    setSelectedButton(song_id);
  };

  const fetchSongFromID = (id) => {
    const matchingObject = allSongs.find((item) => item.id === id);
    dispatch(showSongInfo(matchingObject));
  };

  // Handle drag and drop reorder
  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If dropped outside the list
    if (!destination) return;

    // If the position hasn't changed
    if (destination.index === source.index) return;

    // Reorder the songs array
    const reorderedSongs = Array.from(songs);
    const [removed] = reorderedSongs.splice(source.index, 1);
    reorderedSongs.splice(destination.index, 0, removed);

    setSongs(reorderedSongs); // Update the songs state with new order

    // Dispatch the new ordered playlist to update Redux store
    dispatch(ShowPlaylistData([songs])); // Update store with the new playlist
    // new reducer: deletefirst -> add new playllist
  };

  return (
    <div className=" flex flex-col md:bg-red-950 md:md:w-auto md:flex-col md:flex ">
      {/* nav */}
      <section className="hidden md:w-auto md:flex md:justify-evenly  md:mt-6  md:p-4">
        <span to="/comingsoon" className="md:pt-1">
          Music
        </span>
        <span to="/comingsoon" className="md:pt-1">
          Podcast
        </span>
        <span to="/comingsoon" className="md:pt-1">
          Live
        </span>
        <span to="/comingsoon" className="pmd:t-1">
          Radio
        </span>
        <input
          placeholder="search"
          className="md:bg-red-950 md:border md:pl-5 md:w-52 md:border-white md:p-1 md:rounded-full"
        />
      </section>

      {/* playlist photos */}
      <section className="md:flex flex mt-10 md:mt-10 justify-center xl:mt-4 md:justify-center">
        <img
          className="relative bg-cover bg-center shadow-md shadow-current rounded-2xl mb-10  h-72 w-7/12 md:h-80 xl:h-52 md:w-10/12 xl:w-6/12 md:flex md:rounded-2xl md:items-center md:justify-center md:text-white"
          src={songPhoto || logo}
        >
        </img>
          {/* <div className="md:absolute md:inset-0 md:bg-opacity-50"></div> */}
      </section>

      {/* songs list */}
      <section className="md:mt-7 xl:mt-4 xl:mb-4 md:mb-6">
        <article className="md:bg-red-950 md:flex md:flex-col md:rounded-xl md:text-white">
          <div className="font-bold text-center ml-2 text-2xl">Playlist</div>
        </article>
      </section>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="songsList" direction="vertical">
          {(provided) => (
            <section
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="mt-7 xl:mt-4 xl:mb-4 mb-6"
            >
              {songs &&
                songs.map((eachSong, index) => (
                  <Draggable
                    key={eachSong.id}
                    draggableId={eachSong.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => handleMusic(eachSong.id)}
                        className="w-full xl:hover:bg-red-900  text-md mt-3 p-2 flex justify-around border-b border-gray-500"
                      >
                        <span className="md:text-center  w-1/12">
                          {index + 1}
                        </span>
                        <span className=" hidden xl:text-start xl:flex xl:w-5/12">
                          <img
                            src={`${eachSong?.album?.images[0]?.url}`}
                            className=" xl:w-7 xl:mr-2 xl:h-7"
                          />
                          <span className="md:line-clamp-1">
                            {eachSong?.name}
                          </span>
                        </span>
                        <span className="w-3/12 line-clamp-2 xl:text-start md:text-start md:line-clamp-1 pl-3">
                          {eachSong?.album?.name}
                        </span>
                        <span className="w-3/12 flex justify-center">
                          {(eachSong?.duration_ms / 60000).toFixed(2) +
                            " " +
                            "min"}
                        </span>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default ContentPage;
