import VideoCard from "../Layout/VideoCard";

const videos = [
    {
        id: 1,
        username: "Mohamed Ali",
        caption: "Mumbai City, India",
        video:
            "/videos/india.mp4",
    },

    {
        id: 2,
        username: "Tsubasa Aki",
        caption: "Tokyo at night",
        video:
            "/videos/japan.mp4",
    },
];

function Feed() {
    return (
        <div
            className="
                h-screen
                snap-y
                snap-mandatory
                scrollbar-hide
            "
        >
            <div className="w-[420px]">
                {videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                    />
                ))}
            </div>
        </div>
    );
}

export default Feed;

