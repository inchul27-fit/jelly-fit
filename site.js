const site = {
  kakaoChatUrl: "https://pf.kakao.com/_xeXpNX/chat",
  phoneNumber: "010-4538-9195",
  naverPlaceUrl: "https://naver.me/GQGxaCWJ",
  blogUrl: "https://blog.naver.com/jellyfitness",
  address: "인천 부평구 길주남로10번길 21",
  entranceNote: "상가 정면의 유리문 계단 입구로 들어와 지하 1층(B1)으로 내려오세요.",
  entrancePhotoPath: "./assets/entrance.jpg",
  entrancePhotoCaption: "상가 정면 계단 입구 · 간판 교체 전 사진",
};

function webUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function enableLink(id, href, eventName) {
  if (!href) return;
  const link = document.getElementById(id);
  link.href = href;
  link.removeAttribute("aria-disabled");
  link.removeAttribute("role");
  link.addEventListener("click", () => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, { transport_type: "beacon" });
  });
}

enableLink("kakao", webUrl(site.kakaoChatUrl), "kakao_click");
const phone = site.phoneNumber.trim().replace(/[\s().-]/g, "");
enableLink("phone", /^\+?\d{7,15}$/.test(phone) ? `tel:${phone}` : "", "phone_click");
enableLink("place", webUrl(site.naverPlaceUrl), "naver_place_click");
enableLink("blog", webUrl(site.blogUrl), "blog_click");

function showText(id, value) {
  if (!value) return;
  const element = document.getElementById(id);
  element.textContent = value;
  element.hidden = false;
}

showText("address", site.address);
showText("entrance-note", site.entranceNote);

if (site.entrancePhotoPath) {
  const photo = document.getElementById("entrance-photo");
  photo.addEventListener("load", () => {
    document.getElementById("entrance-placeholder").hidden = true;
    photo.hidden = false;
    showText("entrance-caption", site.entrancePhotoCaption);
  }, { once: true });
  photo.src = site.entrancePhotoPath;
}
