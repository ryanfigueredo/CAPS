// Helper para usar Phosphor Icons
// Usa o CDN do Phosphor Icons

function createPhosphorIcon(
  iconName,
  size = 32,
  weight = "duotone",
  color = "currentColor"
) {
  const icon = document.createElement("i");
  icon.className = `ph ph-${iconName}`;
  icon.style.fontSize = `${size}px`;
  icon.style.color = color;

  // Adicionar weight via data attribute ou classe
  if (weight !== "regular") {
    icon.setAttribute("data-weight", weight);
  }

  return icon;
}

// Função para renderizar ícone como HTML string
function getPhosphorIconHTML(
  iconName,
  size = 32,
  weight = "duotone",
  color = "currentColor"
) {
  const weightClass = weight !== "regular" ? `ph-${weight}` : "";
  return `<i class="ph ph-${iconName} ${weightClass}" style="font-size: ${size}px; color: ${color};"></i>`;
}

// Mapeamento de ícones comuns
const iconMap = {
  mensagem: "chat-circle-dots",
  biblioteca: "book-open",
  meditacao: "lotus",
  quiz: "clipboard-text",
  voltar: "arrow-left",
  carregando: "spinner",
  vazio: "cloud-slash",
  erro: "warning",
  sucesso: "check-circle",
  admin: "lock",
  usuario: "user",
  editar: "pencil",
  excluir: "trash",
  adicionar: "plus-circle",
  salvar: "floppy-disk",
  video: "play-circle",
  audio: "speaker-high",
  link: "link",
  arquivo: "file",
  estatistica: "chart-line",
  calendario: "calendar",
  relogio: "clock",
};

// Função helper para obter nome do ícone
function getIcon(iconKey) {
  return iconMap[iconKey] || iconKey;
}
