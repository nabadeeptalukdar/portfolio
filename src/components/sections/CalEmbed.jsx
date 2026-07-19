"use client";

import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function CalEmbed() {
  const calRef = useRef(null);

  useEffect(() => {
    (async function initCal() {
      const Cal = await getCalApi();
      Cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      Cal("inline", {
        elementOrSelector: "#cal-booking",
        calLink: "nabadeep-talukdar-business-ka9r2t",
        config: {
          layout: "month_view",
          theme: "dark",
        },
      });
    })();
  }, []);

  return (
    <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/40">
      <div id="cal-booking" ref={calRef} className="min-h-[720px] w-full" />
    </div>
  );
}
