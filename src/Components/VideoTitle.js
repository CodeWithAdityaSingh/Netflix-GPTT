let VideoTitle = ({data})=>{


    return(

        <div className=" p-4 w-screen">
            <h1 className="text-6xl font-bold m-4">{data?.original_title}</h1>
            <p className="w-4/12 m-4 text-sm " >{data.overview}</p>
            <button className="bg-black text-red-800 p-3 m-3 w-15 rounded-lg  font-bold">▶️ Play</button>
            <button className="bg-black text-white p-3 m-3 rounded-lg font-bold">ℹ️ More Info</button>

        </div>
    )
}

export default VideoTitle