// Nepal Olympiad Hub - Main JavaScript
// Handles dynamic content loading, dark mode, and interactive features

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Olympiad Data - Based on comprehensive research
const olympiadsData = [
    {
        id: 'imo',
        name: 'International Mathematical Olympiad',
        shortName: 'IMO',
        field: 'Mathematics',
        icon: '🔢',
        color: '#2563eb',
        description: 'The world\'s most prestigious mathematics olympiad since 1959',
        organizer: 'Mathematical Association of Nepal',
        contact: 'binod@kusoed.edu.np',
        website: 'https://www.mathassociationnepal.org.np',
        registrationFee: 'NPR 500',
        nextDeadline: 'January 2026',
        eligibility: 'Under 20 years, currently in high school',
        performance: '9 participations since 2017, 1 Bronze, 8 Honourable Mentions'
    },
    {
        id: 'ipho',
        name: 'International Physics Olympiad',
        shortName: 'IPhO',
        field: 'Physics',
        icon: '⚛️',
        color: '#dc2626',
        description: 'Premier physics competition testing theoretical and experimental skills',
        organizer: 'Nepal Physical Society',
        contact: 'info@nps.org.np',
        website: 'https://nps.org.np',
        registrationFee: 'NPR 200-300',
        nextDeadline: 'February 2026',
        eligibility: 'Under 20 years by June 30, not yet in university',
        performance: 'Active participation, multiple Honourable Mentions'
    },
    {
        id: 'ioaa',
        name: 'International Olympiad on Astronomy and Astrophysics',
        shortName: 'IOAA',
        field: 'Astronomy',
        icon: '🌌',
        color: '#7c3aed',
        description: 'Astronomy olympiad with observational and theoretical components',
        organizer: 'Nepal Astronomical Society',
        contact: 'nasoneal@gmail.com',
        website: 'https://www.nepalastronomicalsociety.org',
        registrationFee: 'NPR 500-1000',
        nextDeadline: 'January 2026',
        eligibility: 'Under 20 years, currently in school',
        performance: 'Bronze Medal 2023 (Drishant Kumar Maharjan), hosted IOAA-Jr 2024',
        special: 'Nepal hosted 3rd IOAA-Junior in October 2024 - FIRST international olympiad hosted by Nepal!'
    },
    {
        id: 'noi',
        name: 'Nepal Olympiad in Informatics',
        shortName: 'NOI',
        field: 'Computer Science',
        icon: '💻',
        color: '#059669',
        description: 'BRAND NEW 2025: Nepal\'s first competitive programming olympiad',
        organizer: 'NPLCoder',
        contact: 'work@nplcoder.org',
        website: 'https://k12.nplcoder.org',
        registrationFee: 'TBD (likely minimal)',
        nextDeadline: 'October 30, 2025',
        eligibility: 'Grade 8-12, no prior programming experience required',
        performance: 'First year - historic opportunity for Nepal!',
        special: 'Nepal\'s first official pathway to IOI - be part of history!'
    },
    {
        id: 'hlon',
        name: 'Himalayan Linguistic Olympiad',
        shortName: 'HLON',
        field: 'Linguistics & AI',
        icon: '🗣️',
        color: '#f59e0b',
        description: 'Linguistics olympiad with computational and AI tracks',
        organizer: 'Language Technology Kendra',
        contact: 'Check website',
        website: 'https://hlon.org',
        registrationFee: 'NPR 500 (standard), NPR 1000 (late)',
        nextDeadline: 'February 28, 2026',
        eligibility: 'Grade 8-12, gap year students allowed',
        performance: '2023 winners represented Nepal at IOL Bulgaria'
    },
    {
        id: 'ibo',
        name: 'International Biology Olympiad',
        shortName: 'IBO',
        field: 'Biology',
        icon: '🧬',
        color: '#10b981',
        description: 'Biology olympiad with theoretical, practical, and group project components',
        organizer: 'Science Teachers Association of Nepal',
        contact: 'TBD',
        website: 'TBD',
        registrationFee: 'TBD',
        nextDeadline: 'TBD',
        eligibility: 'Currently Grade 12, under 20 years',
        performance: 'Established participation'
    },
    {
        id: 'icho',
        name: 'International Chemistry Olympiad',
        shortName: 'IChO',
        field: 'Chemistry',
        icon: '🧪',
        color: '#8b5cf6',
        description: 'Chemistry olympiad testing theoretical and practical knowledge',
        organizer: 'Nepal Chemistry Society',
        contact: 'TBD - verification needed',
        website: 'TBD',
        registrationFee: 'TBD',
        nextDeadline: 'TBD',
        eligibility: 'Under 20 years, currently in high school',
        performance: 'Participation status - verify with organization'
    }
];

// Load Olympiad Cards Dynamically
function loadOlympiadCards() {
    const container = document.getElementById('olympiad-list');
    if (!container) return;

    olympiadsData.forEach(olympiad => {
        const card = document.createElement('div');
        card.className = 'olympiad-card';
        card.style.borderColor = olympiad.color;
        
        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 1rem;">${olympiad.icon}</div>
            <h3 style="color: ${olympiad.color};">${olympiad.shortName}</h3>
            <h4>${olympiad.name}</h4>
            <p><strong>Field:</strong> ${olympiad.field}</p>
            <p>${olympiad.description}</p>
            ${olympiad.special ? `<p><strong>🌟 ${olympiad.special}</strong></p>` : ''}
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
                <p><strong>Organizer:</strong> ${olympiad.organizer}</p>
                <p><strong>Contact:</strong> ${olympiad.contact}</p>
                <p><strong>Fee:</strong> ${olympiad.registrationFee}</p>
                <p><strong>Next Deadline:</strong> ${olympiad.nextDeadline}</p>
                <p><strong>Eligibility:</strong> ${olympiad.eligibility}</p>
                <p><strong>Nepal Performance:</strong> ${olympiad.performance}</p>
            </div>
            <a href="${olympiad.website}" target="_blank" style="display: inline-block; margin-top: 1rem; padding: 0.5rem 1rem; background: ${olympiad.color}; color: white; text-decoration: none; border-radius: 6px;">Learn More →</a>
        `;
        
        container.appendChild(card);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadOlympiadCards);
} else {
    loadOlympiadCards();
}

// Update footer year
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = `&copy; ${currentYear} Nepal Olympiad Hub | Created by Nepal Olympiad Community`;
}
