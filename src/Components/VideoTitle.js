let VideoTitle = ({data})=>{


    return(

        <div className="  aspect-video  pt-40 pl-16 w-screen  absolute top-0 text-white bg-gradient-to-r from-black  ">
            <h1 className="text-6xl font-bold m-4 ">{data?.original_title}</h1>
            <p className="w-4/12 m-4 text-sm  " >{data.overview}</p>
            <button className=" bg-white text-black p-3 m-3 w-15 rounded-lg w-32 font-semibold">▶️ Play</button>
            <button className="bg-white text-white p-3 m-3 rounded-lg font-semibold bg-opacity-20">ℹ️ More Info</button>

        </div>
    )
}

export default VideoTitle