import React, { useState } from "react";
import { FaCalendarAlt, FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { MdCopyAll } from "react-icons/md";

const CardBlog = ({ id, src, title, date, description, miniLogo }) => {
  const [showLink, setShowLink] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://International-Pathway-Malaysia.com/blog/${id}`,
      );
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("copy failed:", err);
    }
  };
  return (
    <div className="group max-w-sm rounded-2xl bg-white shadow-sm transition-all duration-300 lg:hover:scale-[1.1] hover:shadow-xl border-l-4 border-transparent hover:border-secondary">
      {/* Image Section */}
      <div className="relative h-45 w-full overflow-hidden rounded-t-2xl">
        <img
          src={src}
          alt="Blog"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-10 w-0.75 rounded-full bg-linear-to-b from-secondary to-purple-500" />
          <span className="text-xs tracking-widest uppercase text-gray-400">
            Featured Blog
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-gray-800 leading-snug group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Meta Info */}
        <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <img src={miniLogo} alt="logo" className="h-10 w-10 rounded-full" />
            <FaCalendarAlt size={14} />
            <span>{date}</span>
          </div>

          <div className="relative">
            <button
              className="cursor-pointer p-1 hover:text-secondary transition"
              onClick={() => setShowLink(!showLink)}
            >
              <FaShareAlt size={16} />
            </button>

            {showLink && (
              <div className="py-px absolute top-6 right-0 bg-gray-400 text-white text-sm rounded-sm shadow-lg   px-2">
                <span className="truncate max-w-xs">{`https://International-Pathway-Malaysia.com/blog/${id}`}</span>
                <button
                  className=" hover:text-secondary rounded cursor-pointer transition"
                  onClick={handleCopy}
                >
                  <MdCopyAll />
                </button>
                {copied && (
                  <span className="ml-2 text-xs text-white">Copied!</span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-5 text-sm text-gray-600 leading-relaxed line-clamp-4">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={() => navigate(`/blog/${id}`)}
          className="inline-flex items-center gap-2 rounded-full border border-secondary px-5 py-2 text-sm font-medium text-secondary transition-all hover:bg-secondary hover:text-white cursor-pointer"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default CardBlog;
