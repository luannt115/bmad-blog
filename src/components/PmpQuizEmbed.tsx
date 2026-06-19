"use client";

import { PMP_QUIZ_HTML_PATH } from "@/lib/pmp-quiz";

export function PmpQuizEmbed() {
  return (
    <div className="mt-6 overflow-hidden rounded-xl border-2 border-amber-200/70 shadow-sm dark:border-amber-800/50">
      <iframe
        src={PMP_QUIZ_HTML_PATH}
        title="PMP Full Questions — Luyện tập trắc nghiệm"
        className="block w-full border-0 bg-white"
        style={{ minHeight: "calc(100vh - 8rem)" }}
      />
    </div>
  );
}
