const menu = document.querySelector("#menu-mobile")
const fechar = document.querySelector("#btn-close")
const btnMenu = document.querySelector("#btnMenu")


btnMenu.addEventListener("click", () => {
  menu.classList.add("translate-x-0")
  menu.classList.remove("translate-x-full")
 
})
fechar.addEventListener("click", () => {
  menu.classList.add("translate-x-full")
  menu.classList.remove("translate-x-0")
  
})

const media = window.matchMedia("(min-width: 768px)");

media.addEventListener("change", (e) => {
    if (e.matches) {
        menu.classList.remove("translate-x-0");
        menu.classList.add("translate-x-full");
      
    }
});

const header = document.querySelector("header");

function updateHeaderHeight(){
    document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
    );
}

updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);

// ENVIO WHATSAPP//

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const evento = document.getElementById("evento").value;
    const convidados = document.getElementById("convidados").value;
    const data = document.getElementById("data").value;
    const observacoes = document.getElementById("observacoes").value.trim();

    // Validação
    if (!nome || !telefone || !evento || !convidados || !data) {
        Swal.fire({
            icon: "warning",
            title: "Campos obrigatórios",
            text: "Preencha todos os campos antes de continuar."
        });

        return;
    }
    const dataFormatada = new Date(data).toLocaleDateString("pt-BR");
    const mensagem = `Olá! Gostaria de solicitar um orçamento.

🔥 Nome: ${nome}

📱 WhatsApp: ${telefone}

📧 E-mail: ${email}

🎉 Evento: ${evento}

👥 Convidados: ${convidados}

📅 Data: ${dataFormatada}

📝 Observações:
${observacoes}`;

    const numero = "5514998401664";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    Swal.fire({
        icon: "success",
        title: "Redirecionando...",
        text: "Você será direcionado para o WhatsApp.",
        timer: 800,
        showConfirmButton: false
    });

    setTimeout(() => {
        window.open(url, "_blank");
        form.reset();
    }, 1200);
});