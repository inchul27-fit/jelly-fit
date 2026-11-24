// 버튼 링크·주소·사진은 index.html에 직접 적혀 있습니다. 이 파일은 GA4 이벤트만 보냅니다.
function track(eventName, params) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

for (const [id, eventName] of [
  ["kakao", "카카오톡_상담_클릭"],
  ["phone", "전화_문의_클릭"],
  ["place", "시설사진_위치_클릭"],
  ["blog", "블로그_클릭"],
  ["instagram", "인스타그램_클릭"],
]) {
  document.getElementById(id).addEventListener("click", () => {
    track(eventName, { transport_type: "beacon" });
  });
}

for (const [id, eventName] of [["info", "센터정보_열기"]]) {
  document.getElementById(id).addEventListener("toggle", (event) => {
    if (event.target.open) track(eventName);
  });
}

const viewer = document.getElementById("photo-viewer");
document.querySelector("[data-zoom]").addEventListener("click", (event) => {
  if (typeof viewer.showModal !== "function") return;
  event.preventDefault();
  viewer.showModal();
});
viewer.addEventListener("click", (event) => { if (event.target === viewer) viewer.close(); });
