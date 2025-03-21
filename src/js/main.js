/**
 * Gestion du menu mobile et des menus déroulants
 */
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdownMenus();
    initPatientGrid();
});

/**
 * Initialisation du menu mobile
 */
function initMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    
    if (hamburgerBtn && mobileNavLinks) {
        hamburgerBtn.addEventListener('click', function() {
            mobileNavLinks.classList.toggle('active');
        });
    }
}

/**
 * Initialisation des menus déroulants
 */
function initDropdownMenus() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Récupère le menu déroulant associé
            const dropdownMenu = this.nextElementSibling;
            const dropdownArrow = this.querySelector('.dropdown-arrow');
            
            // Vérifie si c'est un élément de menu déroulant
            if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                // Toggle entre masqué et affiché
                dropdownMenu.classList.toggle('hidden');
                dropdownMenu.classList.toggle('active');
                
                // Rotation de la flèche
                if (dropdownArrow) {
                    dropdownArrow.classList.toggle('active');
                }
            }
        });
    });
}

/**
 * Données des patients
 */
const patientsData = [
    {
        id: 1,
        name: "Cécile Moulin",
        age: 81,
        phone: "04 77 36 65 95",
        email: "cecilemoulin@gmail.com",
        address: "16 rue Maurice Bouchor",
        city: "68007 Lyon",
        image: "/src/assets/images/cecile.png",
        type: "primary" // primary = vert, secondary = blanc avec bordure
    },
    {
        id: 2,
        name: "Juliette Masselis",
        age: 39,
        phone: "04 77 36 65 95",
        email: "juliettemasselis@gmail.com",
        address: "16 rue Maurice Bouchor",
        city: "68007 Lyon",
        image: "/src/assets/images/juliette.png",
        type: "secondary"
    },
    {
        id: 3,
        name: "René Guitsay",
        age: 81,
        phone: "04 77 36 65 95",
        email: "reneguitsay@gmail.com",
        address: "16 rue Maurice Bouchor",
        city: "68007 Lyon",
        image: "/src/assets/images/rene.png",
        type: "primary"
    },
    {
        id: 4,
        name: "Lola Dufour",
        age: 81,
        phone: "04 77 36 65 95",
        email: "loladufour@gmail.com",
        address: "16 rue Maurice Bouchor",
        city: "68007 Lyon",
        image: "/src/assets/images/LolaDufour.png",
        type: "secondary"
    },
    {
        id: 5,
        name: "Etienne Morlé",
        age: 81,
        phone: "04 77 36 65 95",
        email: "etiennemorle@gmail.com",
        address: "16 rue Maurice Bouchor",
        city: "68007 Lyon",
        image: "/src/assets/images/etienne.png",
        type: "primary"
    },
    {
        id: 6,
        name: "Clara Camalet",
        age: 31,
        phone: "04 77 36 65 95",
        email: "claracamalet@gmail.com",
        address: "16 rue Maurice Bouchor",
        city: "68007 Lyon",
        image: "/src/assets/images/cecile.png",
        type: "secondary"
    }
];

/**
 * Initialisation de la grille des patients
 */
function initPatientGrid() {
    const patientsGrid = document.getElementById('patients-grid');
    
    if (!patientsGrid) return;
    
    // Vider la grille
    patientsGrid.innerHTML = '';
    
    // Ajouter chaque patient
    patientsData.forEach(patient => {
        const patientCard = createPatientCard(patient);
        patientsGrid.appendChild(patientCard);
    });
}

/**
 * Crée une carte de patient
 * @param {Object} patient - Données du patient
 * @returns {HTMLElement} - Élément de la carte patient
 */
function createPatientCard(patient) {
    const cardType = patient.type === 'primary' ? 'bg-[#E4F4ED]' : 'bg-white border-2 border-[#3CE0A0]';
    
    const cardElement = document.createElement('div');
    cardElement.className = `rounded-lg p-5 shadow-sm relative pt-14 mt-12 ${cardType}`;
    
    cardElement.innerHTML = `
        <div class="flex flex-col items-center">
            <div class="rounded-full w-28 h-28 flex items-center justify-center absolute -top-16 left-1/2 transform -translate-x-1/2">
                <img src="${patient.image}" alt="${patient.name}" class="w-24 h-24 rounded-full"
                     onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzRkMzk5IiBzdHJva2Utd2lkdGg9IjIiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI5IiByPSIzIi8+PHBhdGggZD0iTTYgMjAgQzYgMTcgOCAxNSAxMiAxNSBDMTYgMTUgMTggMTcgMTggMjAiLz48L3N2Zz4='">
            </div>
            <h3 class="text-[#3CE0A0] text-xl font-black">${patient.name}</h3>
            <p class="text-gray-600 font-medium">${patient.age} ans</p>
        </div>
        <hr class="my-4 border-t border-gray-200">
        <div class="mt-4 space-y-3">
            <div class="flex items-center space-x-2">
                <div class="text-[#3CE0A0]">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                </div>
                <span class="text-gray-700 font-extrabold">${patient.phone}</span>
            </div>
            <div class="flex items-center space-x-2">
                <div class="text-[#3CE0A0]">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>
                <span class="text-gray-700 font-extrabold">${patient.email}</span>
            </div>
            <div class="flex items-start space-x-2">
                <div class="text-[#3CE0A0] mt-1">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </div>
                <div>
                    <span class="text-gray-700 font-extrabold">${patient.address}</span>
                    <span class="text-gray-700 font-extrabold block">${patient.city}</span>
                </div>
            </div>
            <div class="pt-3">
                <button class="text-gray-700 font-extrabold hover:underline flex items-center space-x-2">
                    <div class="text-[#3CE0A0]">
                        <img src="/src/assets/images/plus.png" alt="Plus" class="w-3 h-3">
                    </div>
                    <span>voir ses ordonnances</span>
                </button>
            </div>
        </div>
    `;
    
    return cardElement;
} 