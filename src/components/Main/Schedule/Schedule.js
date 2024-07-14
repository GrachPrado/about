import React, {useState, useEffect} from "react";
import TimeTable from "./TimeTable/TimeTable";
import MobileTimeTable from "./MobileTimeTable/MobileTimeTable";


function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export default function Schedule() {
  const check = useWindowWidth();
  return (
    <>
   {check >= 1440 ? <TimeTable /> : <MobileTimeTable />}
    </>
  );
}
