// Skills Animation
const skills = [
    { name: 'HTML', percent: 25 },
    { name: 'JAVASCRIPT', percent: 85 },
    { name: 'CSS', percent: 70 },
    { name: 'PHP', percent: 65 },
    { name: 'WORDPRESS', percent: 55 },
    { name: 'JQUERY', percent: 50 },
    { name: 'ANGULAR', percent: 65 },
    { name: 'REACT', percent: 45 }
];

const experienceData = [
    {
        year: '2018 - Present',
        title: 'WEB DEVELOPER',
        company: 'ENVATO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        year: '2016 - 2018',
        title: 'UI/UX DESIGNER',
        company: 'THEMEFOREST',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    // Add more experience items as needed
];

const portfolioItems = [
    {
        image: 'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?w=800',
        category: 'logo',
        title: 'Logo Design'
    },
    {
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800',
        category: 'graphic',
        title: 'Graphic Design'
    }
    // Add more portfolio items as needed
];

const blogPosts = [
    {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
        title: 'How to Grow Your Audience by Creating an Email List',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800',
        title: 'Top 10 Tricks for Deep Learning in 2023',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    // Add more blog posts as needed
];

// Initialize skills
function initializeSkills() {
    const skillsContainer = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const skillHTML = `
            <div class="skill-item">
                <div class="skill-info">
                    <span>${skill.name}</span>
                    <span>${skill.percent}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.percent}%"></div>
                </div>
            </div>
        `;
        skillsContainer.innerHTML += skillHTML;
    });
}

// Initialize portfolio
function initializePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioItems.forEach(item => {
        const itemHTML = `
            <div class="portfolio-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-info">
                    <h3>${item.title}</h3>
                </div>
            </div>
        `;
        portfolioGrid.innerHTML += itemHTML;
    });
}

// Initialize blog
function initializeBlog() {
    const blogGrid = document.querySelector('.blog-grid');
    blogPosts.forEach(post => {
        const postHTML = `
            <div class="blog-item">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-info">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                </div>
            </div>
        `;
        blogGrid.innerHTML += postHTML;
    });
}

// Portfolio filtering
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        
        // Filter portfolio items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form handling logic here
    console.log('Form submitted');
});

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeSkills();
    initializePortfolio();
    initializeBlog();
});
