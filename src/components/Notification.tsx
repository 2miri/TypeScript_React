import { useState } from "react";

export default function Notification() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      {showNotification && <h1>📢 새로운 알림이 도착했습니다!</h1>}

      <button
        onClick={() =>
          setShowNotification((showNotification) => !showNotification)
        }
      >
        {showNotification ? "알림닫기" : "알림보기"}
      </button>
    </>
  );
}
