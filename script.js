// Configure os links da PH SHOP abaixo.
// O link do grupo é usado nos botões de chamada para ação.
const GROUP_LINK = "https://chat.whatsapp.com/HGH25cdAvebKKftlFB6A7S";
// Cole aqui o link principal da sua página/lista de recomendações do Mercado Livre.
const MARKET_LINK = "https://www.mercadolivre.com.br/social/paul_henriquee";

function configureLink(selector, url, message) {
  document.querySelectorAll(selector).forEach((element) => {
    const valid = typeof url === "string" && url.startsWith("https://");
    element.href = valid ? url : "#";
    if (!valid) {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        alert(message);
      });
    }
  });
}
configureLink("[data-group-link]", GROUP_LINK, "Adicione o link real do grupo de WhatsApp no arquivo script.js, na variável GROUP_LINK.");
configureLink("[data-market-link]", MARKET_LINK, "Adicione o link das suas listas do Mercado Livre no arquivo script.js, na variável MARKET_LINK.");
