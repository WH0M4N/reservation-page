"use client";
import React, { useState } from "react";

const ExpandableText = ({ desc }) => {
  const [isExpanded, setExpanded] = useState(false);

  //   const isdescShown = desc.length > 50 ? desc.slice(0, 50) : desc;

  return (
    <div className="text-gray-600">
      <p className="leading-relaxed">
        {isExpanded ? desc : `${desc.slice(0, 50)} ...`}
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="mt-2 text-sm font-medium text-blue-600 hover:underline focus:outline-none"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
