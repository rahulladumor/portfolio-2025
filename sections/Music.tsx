"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaHeadphones, FaMusic, FaSpotify } from "react-icons/fa";
import { Section } from "types/Sections";
import { getSectionHeading, openURLInNewTab } from "utils";

const musicData = [
  {
    id: 1,
    title: "My Everyday Playlist",
    subtitle: "A dynamic collection of my daily music roster, featuring the latest and greatest hits across genres.",
    url: "https://open.spotify.com/playlist/58Kg5IirKtASXLYosizqnm",
    icon: FaSpotify,
  },
  {
    id: 2,
    title: "Music & Personality",
    subtitle: "Studies show that a person's music taste reveals a lot about their personality and preferences.",
    icon: FaHeadphones,
  },
  {
    id: 3,
    title: "Curated Collections",
    subtitle:
      "Known for my eclectic taste in music, I share carefully curated playlists that tell stories through sound.",
    icon: FaMusic,
  },
];

const MusicCard: React.FC<{
  music: (typeof musicData)[0];
  index: number;
}> = ({ music, index }) => {
  const Icon = music.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group p-6 bg-white dark:bg-gray-800/50 rounded-xl
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="p-2 rounded-lg mt-1
                       bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                       border border-gray-200 dark:border-gray-700"
          >
            <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>

          <div>
            <h3
              className="font-bold text-gray-900 dark:text-white
                        group-hover:text-blue-500 dark:group-hover:text-blue-400
                        transition-colors duration-300"
            >
              {music.title}
            </h3>
            <p className="mt-1 text-gray-600 dark:text-gray-300">{music.subtitle}</p>
          </div>
        </div>

        {music.url && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openURLInNewTab(music.url!)}
            className="flex-shrink-0 p-2 rounded-lg
                     bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                     border border-gray-200 dark:border-gray-700
                     group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20
                     transition-all duration-300"
          >
            <FaExternalLinkAlt className="w-4 h-4 text-gray-700 dark:text-gray-300" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

const Music = () => (
  <section id={Section.Music} className="space-y-8">
    {getSectionHeading(Section.Music)}

    <div className="grid gap-6">
      <div className="grid gap-6 lg:grid-cols-3">
        {musicData.map((item, index) => (
          <MusicCard key={item.id} music={item} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden
                border border-gray-200 dark:border-gray-700
                hover:border-blue-500/50 dark:hover:border-blue-500/50
                transition-all duration-300"
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/58Kg5IirKtASXLYosizqnm"
          width="100%"
          height="352"
          frameBorder="0"
          allow="encrypted-media"
          className="w-full"
        />
      </motion.div>
    </div>
  </section>
);

export default Music;
