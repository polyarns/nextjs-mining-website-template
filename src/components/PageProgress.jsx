import { useEffect, useRef } from 'react';

const PageProgress = () => {
  const progressWrapRef = useRef(null);
  const progressPathRef = useRef(null);

  useEffect(() => {
    const progressWrap = progressWrapRef.current;
    const progressPath = progressPathRef.current;

    if (!progressPath || !progressWrap) return;

    const offsetToShow = 50; // Scroll offset to toggle visibility of progress indicator
    const pathLength = progressPath.getTotalLength();

    // Initialize the SVG path for the progress indicator
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    // Scroll event handler to update progress
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = pathLength - (scrollTop * pathLength) / scrollHeight;

      // Update stroke offset to reflect scroll progress
      progressPath.style.strokeDashoffset = progress.toString();

      // Toggle visibility of progress indicator based on scroll position
      if (scrollTop >= offsetToShow) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    };

    // Click event handler for smooth scroll to top
    const handleClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // Attach event listeners
    window.addEventListener('scroll', handleScroll);
    progressWrap.addEventListener('click', handleClick);

    // Initial call to set the progress on mount
    handleScroll();

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      progressWrap.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="progress-wrap" ref={progressWrapRef} aria-label="Page scroll progress indicator" role="button" tabIndex={0}>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        aria-hidden="true"
      >
        {/* Circular path representing scroll progress */}
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" ref={progressPathRef} />
      </svg>
    </div>
  );
};

export default PageProgress;
