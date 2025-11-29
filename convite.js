// Função para pegar parâmetros da URL
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Personalizar o nome do convidado
function personalizeInvitation() {
    const guestName = getURLParameter('nome');
    const guestNameElement = document.getElementById('guestName');
    
    if (guestName) {
        // Decodificar e capitalizar o nome
        const decodedName = decodeURIComponent(guestName);
        const capitalizedName = decodedName.charAt(0).toUpperCase() + decodedName.slice(1);
        
        // Personalizar a mensagem
        guestNameElement.textContent = capitalizedName.toUpperCase();
        
        // Atualizar o título da página
        document.title = `Convite de Casamento - ${capitalizedName}`;
        
        console.log('Convite personalizado para:', capitalizedName);
    } else {
        // Manter o texto padrão se não houver nome
        guestNameElement.textContent = 'CONVIDAM';
    }
}

// Criar pétalas flutuantes
function createPetals() {
    const container = document.getElementById('petalsContainer');
    const petalCount = 12; // Menos pétalas para não interferir na leitura
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.animationDuration = (Math.random() * 4 + 8) + 's';
        container.appendChild(petal);
    }
}

// Função removida - substituída por confirmPresenceWithSave

// Função para ver localização da cerimônia
function viewLocation() {
    // Coordenadas da Igreja São José (você deve ajustar para o local real)
    const mapsURL = 'https://maps.app.goo.gl/c8Lq8aw9DRryhmty8';
    window.open(mapsURL, '_blank');
}

// Função para ver lista de presentes
function viewGiftList() {
    // URL da loja/site de presentes (você deve ajustar para a URL real)
    const giftsURL = 'https://luizluana.site/#presentes';
    window.open(giftsURL, '_blank');
}

// Função para ir ao site dos noivos
function visitWebsite() {
    // URL do site dos noivos
    const websiteURL = 'https://www.instagram.com/luana_e_luiz_2025/';
    window.open(websiteURL, '_blank');
}

// Função removida - consolidada no DOMContentLoaded

// Verificar se já foi confirmado anteriormente (usando localStorage)
function checkPreviousConfirmation() {
    const guestName = getURLParameter('nome');
    if (guestName) {
        const confirmationKey = `confirmed_${guestName.toLowerCase()}`;
        const isConfirmed = localStorage.getItem(confirmationKey);
        
        if (isConfirmed === 'true') {
            const confirmBtn = document.getElementById('confirmBtn');
            confirmBtn.classList.add('confirmed');
        }
    }
}

// Salvar confirmação no localStorage
function saveConfirmation() {
    const guestName = getURLParameter('nome');
    if (guestName) {
        const confirmationKey = `confirmed_${guestName.toLowerCase()}`;
        localStorage.setItem(confirmationKey, 'true');
    }
}

// Função aprimorada de confirmação que salva o estado
function confirmPresenceWithSave() {
    const confirmBtn = document.getElementById('confirmBtn');
    const guestName = getURLParameter('nome') || 'Convidado';
    
    // Adicionar classe de confirmado
    confirmBtn.classList.add('confirmed');
    
    // Salvar confirmação
    saveConfirmation();
    
    // Mensagem para WhatsApp
    const message = `Olá! Sou ${guestName} e confirmo minha presença no casamento da Luana e Luiz! 💕`;
    const whatsappURL = `https://wa.me/5511982570495?text=${encodeURIComponent(message)}`;
    
    // Aguardar um pouco para mostrar a animação e depois abrir WhatsApp
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
    }, 800);
}

// Efeito parallax removido - não necessário sem flores decorativas

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    personalizeInvitation();
    createPetals();
    checkPreviousConfirmation();
    
    // Atualizar event listeners para usar a nova função de confirmação
    const confirmBtn = document.getElementById('confirmBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function(e) {
            e.preventDefault();
            confirmPresenceWithSave();
        });
    }
    
    // Inicializar outros event listeners
    const locationBtn = document.getElementById('locationBtn');
    const giftsBtn = document.getElementById('giftsBtn');
    const websiteBtn = document.getElementById('websiteBtn');
    
    if (locationBtn) {
        locationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            viewLocation();
        });
    }
    
    if (giftsBtn) {
        giftsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            viewGiftList();
        });
    }
    
    if (websiteBtn) {
        websiteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            visitWebsite();
        });
    }
});

// Log para debug
console.log('Convite de Casamento - Scripts carregados com sucesso!');
console.log('URL atual:', window.location.href);

// Verificar se há parâmetro nome na URL
const guestName = getURLParameter('nome');
if (guestName) {
    console.log('Convidado:', decodeURIComponent(guestName));
} else {
    console.log('Visualização geral do convite');
}
