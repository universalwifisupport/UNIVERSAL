import { Play } from "lucide-react";

const videos = [
  {
    title: "Fix Slow Internet Speed",
    desc: "Learn quick tips to boost your WiFi signal and fix slow connections.",
    embedId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    title: "Router Setup Guide",
    desc: "Step-by-step instructions for setting up your home router correctly.",
    embedId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    title: "Cable Troubleshooting",
    desc: "Common cable TV issues and how to resolve them in minutes.",
    embedId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
];

const VideoSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Helpful <span className="text-gradient-electric">Videos</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Watch quick guides to troubleshoot common internet & cable issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <div key={i} className="glass-card-light overflow-hidden group">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center electric-glow group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{video.title}</h3>
                <p className="text-muted-foreground text-sm">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
