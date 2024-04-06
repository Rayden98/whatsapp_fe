import { useEffect } from "react";

export default function CallTimes(totalSecInCall, setTotalSecInCall) {
  useEffect(() => {
    const setSecInCall = () => {
      setTotalSecInCall((prev) => prev + 1);
      setTimeout(setSecInCall, 1000);
    };
  });
  return <div>CallTimes</div>;
}
