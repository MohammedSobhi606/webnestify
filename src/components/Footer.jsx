import React from "react";
import { footer } from "../assets/content";

export default function Footer() {
  return (
    <div className="border-t border-neutral-800 flex justify-between items-center text-xs py-4 flex-wrap gap-4">
      {/* links */}
      <div className="flex gap-2">
        {footer.links.map((link) => (
          <a href="#">{link}</a>
        ))}
      </div>
      {/* copyWrite */}
      <p>{footer.copyright}</p>
    </div>
  );
}
