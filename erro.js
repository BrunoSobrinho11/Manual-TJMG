document.addEventListener('DOMContentLoaded', () => {
    
    // 1. REFERÊNCIAS E CHECKS DE SEGURANÇA (IDs obrigatórios)
    const elements = {
        viewer: document.getElementById('errorViewer'),
        viewerImageContainer: document.querySelector('.viewer-image-container'),
        viewerSolution: document.getElementById('viewerSolutionText'),
        grid: document.querySelector('.error-grid'),
        closeSideViewerBtn: document.getElementById('closeViewer'),
        search: document.getElementById('errorSearch'),
        imageModal: document.getElementById("imageModal"),
        modalImage: document.getElementById("modalImage"),
        modalCloseBtn: document.getElementById("modalClose")
    };

    const allCards = document.querySelectorAll('.error-card'); 

    // Cheque de segurança para evitar erros se faltar algum ID no HTML
    if (!elements.viewer || !elements.grid || !elements.imageModal) {
        console.error("ERRO JS: Estrutura HTML incompleta. Verifique os IDs/Classes.");
        return;
    }

    // --- FUNÇÕES MODAL DE IMAGEM (Controle do Lightbox) ---
    const fecharModalImagem = () => {
        elements.imageModal.classList.remove("active");
    };

    function abrirImagemMaior(src) {
        elements.modalImage.src = src;
        elements.imageModal.classList.add("active");
    }

    // --- FUNÇÃO FECHAR VISUALIZADOR LATERAL ---
    const closeViewer = () => {
        elements.viewer.classList.remove('active');
        elements.grid.style.display = 'grid'; 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- FUNÇÃO PRINCIPAL DE VISUALIZAÇÃO LATERAL (showSolution) ---
    // Aceita string ou ARRAY de URLs
    window.showSolution = function(imageUrls, solutionText) {
        
        // 1. Limpa o container de imagens anterior
        elements.viewerImageContainer.innerHTML = ''; 
        
        // Trata a entrada como array, mesmo que seja uma string única
        const urls = Array.isArray(imageUrls) ? imageUrls : [imageUrls]; 
        
        // 2. Cria as novas imagens e adiciona o listener de zoom
        urls.forEach(url => {
            const newImg = document.createElement('img');
            newImg.src = url;
            newImg.alt = "Imagem da Solução";
            newImg.style.display = 'block'; 
            
            // Adiciona o listener de zoom a CADA imagem no painel lateral
            newImg.addEventListener('click', () => {
                abrirImagemMaior(url);
            });
            
            elements.viewerImageContainer.appendChild(newImg);
        });
        
        // 3. Exibe o painel de solução
        elements.grid.style.display = 'none';
        elements.viewer.classList.add('active'); 
        elements.viewerSolution.innerHTML = solutionText;
        elements.viewer.scrollIntoView({ behavior: 'smooth' });
    };


    // --- LISTENERS E EVENTOS ---

    // A. FECHAMENTO POR TECLA ESC (CORRIGIDO)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' || event.keyCode === 27) {
            
            // Impede ações padrão do navegador, como sair do fullscreen
            event.preventDefault(); 

            // 1. Prioridade: Fechar o Modal de Imagem (FullScreen)
            if (elements.imageModal.classList.contains('active')) {
                fecharModalImagem();
            // 2. Prioridade: Fechar o Painel Lateral de Solução
            } else if (elements.viewer.classList.contains('active')) {
                closeViewer();
            }
        }
    });

    // B. Fechar Modais/Visualizadores com Botão
    if (elements.closeSideViewerBtn) {
        elements.closeSideViewerBtn.addEventListener('click', closeViewer);
    }
    if (elements.modalCloseBtn) {
        elements.modalCloseBtn.addEventListener('click', fecharModalImagem);
    }
    
    // C. Fechar Modal Imagem ao clicar fora
    elements.imageModal.addEventListener('click', (event) => {
        if (event.target === elements.imageModal) {
            fecharModalImagem();
        }
    });

    // D. Filtro de Busca
    if (elements.search) {
        elements.search.addEventListener('input', () => {
            const searchTerm = elements.search.value.toLowerCase();
            
            if (elements.viewer.classList.contains('active')) {
                closeViewer();
            }

            allCards.forEach(card => {
                const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
                const cardData = card.getAttribute('onclick').toLowerCase(); 
                
                if (cardTitle.includes(searchTerm) || cardData.includes(searchTerm)) {
                    card.style.display = 'block'; 
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    }
});