type VideoPlayerProps = {
  url: string;
  height: string | number;
  width: string | number;
  className?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  height,
  width,
  className,
}) => {
  return (
    <video
      src={url}
      height={height}
      width={width}
      autoPlay
      muted
      loop
      style={{ maxWidth: '100%', height: 'auto' }} // Ensures responsiveness
      className={className}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
