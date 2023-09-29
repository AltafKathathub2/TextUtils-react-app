import React, { useEffect } from 'react';
import '../index.css'; // Import your custom CSS for styling

export default function New() {
  useEffect(() => {
    const container = document.querySelector('.scrolling-container');
    const content = document.querySelector('.scrolling-content');

    const scrollSpeed = 50; // Adjust the scroll speed (lower values are faster)

    function scroll() {
      if (container.scrollLeft + container.offsetWidth >= content.offsetWidth) {
        // If the scroll position is at the end of the content
        container.scrollLeft = 0; // Reset to the beginning
      } else {
        container.scrollLeft += 1; // Scroll to the right
      }
    }

    const scrollInterval = setInterval(scroll, scrollSpeed);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        {/* Add your content here */}
        <div className="col-4">
          <img src="https://via.placeholder.com/300x200?text=Image+1" alt="Image 1" />
        </div>
        <div className="col-4">
          <img src="https://via.placeholder.com/300x200?text=Image+2" alt="Image 2" />
        </div>
        <div className="col-4">
          <img src="https://via.placeholder.com/300x200?text=Image+3" alt="Image 3" />
        </div>
        <div className="col-4">
          <img src="https://via.placeholder.com/300x200?text=Image+4" alt="Image 4" />
        </div>
      </div>
    </div>
  );
}
