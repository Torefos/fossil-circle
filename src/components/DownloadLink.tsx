import React from "react";
import { ExternalLink } from "lucide-react";

interface DownloadLinkProps {
  title: string;
  url: string;
  description: string;
}

const DownloadLink = ({ title, url, description }: DownloadLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white rounded-lg border hover-scale group"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold group-hover:text-blue-600">{title}</h3>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
};

export default DownloadLink;