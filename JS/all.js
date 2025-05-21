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