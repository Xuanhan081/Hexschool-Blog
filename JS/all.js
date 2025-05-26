AOS.init({
        offset: 450, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 3000 // values from 0 to 3000, with step 50ms
      })
/*收合的function 參考GPT*/
function toggleText(contentId, buttonId) {
  const content = document.getElementById(contentId);
  const button = document.getElementById(buttonId);

  if (content.classList.contains("collapsed")) {
    content.classList.remove("collapsed");
    content.classList.add("expanded");
    button.textContent = "收起內文";
  } else {
    content.classList.remove("expanded");
    content.classList.add("collapsed");
    button.textContent = "閱讀全文";
  }
}