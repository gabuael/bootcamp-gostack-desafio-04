import React from "react";
import FeedItem from "./FeedItem";

function Feed({ feeditems }) {
  return (
    <div className="feed">
      {feeditems.map(feeditem => (
        <FeedItem {...feeditem} key={feeditem.id} />
      ))}
    </div>
  );
}

export default Feed;
