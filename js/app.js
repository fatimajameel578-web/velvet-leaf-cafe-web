// Velvet & Leaf - Cafe & Tea Lounge Application Controller

// SVG Icons Dictionary
const ICONS = {
    coffee: `<svg viewBox="0 0 24 24"><path d="M2,21h18v-2H2v2zM20,8h-2V5h2c1.1,0 2,0.9 2,2v1c0,1.1 -0.9,2 -2,2zM4,19h12c1.1,0 2,-0.9 2,-2V5H4v12c0,1.1 0.9,2 2,2z"/></svg>`,
    leaf: `<svg viewBox="0 0 24 24"><path d="M17,8C8,10 5.9,16.17 3.82,21.34l1.89,0.66C7.2,17.9 9.38,13.72 17,12V8zM21,3c-4.97,0 -11.9,3.03 -14.65,7.35C5.45,11.75 5,13.34 5,15c0,0.34 0.02,0.67 0.06,1C7.88,14.65 12.55,14 17,14c1.1,0 2,-0.9 2,-2V6.44C20.19,5.29 21,3.87 21,3z"/></svg>`,
    croissant: `<svg viewBox="0 0 24 24"><path d="M12,6c-3.87,0 -7,3.13 -7,7c0,1.14 0.27,2.21 0.76,3.16L8,14l2.5,2.5L12,14l1.5,2.5L16,14l2.24,2.16C18.73,15.21 19,14.14 19,13c0,-3.87 -3.13,-7 -7,-7zM3,13c0,4.97 4.03,9 9,9s9,-4.03 9,-9H3z"/></svg>`,
    sparkles: `<svg viewBox="0 0 24 24"><path d="M9,21c0,-0.55 0.45,-1 1,-1 2.76,0 5,-2.24 5,-5 0,-0.55 0.45,-1 1,-1s1,0.45 1,1c0,3.87 -3.13,7 -7,7 -0.55,0 -1,-0.45 -1,-1zM19,10.5c0,-0.83 0.67,-1.5 1.5,-1.5 1.93,0 3.5,-1.57 3.5,-3.5 0,-0.83 0.67,-1.5 1.5,-1.5s1.5,0.67 1.5,1.5c0,3.59 -2.91,6.5 -6.5,6.5 -0.83,0 -1.5,-0.67 -1.5,-1.5zM12,2L10.26,6.74 5.52,8.5l4.74,1.76L12,15l1.74,-4.74 4.74,-1.76 -4.74,-1.76z"/></svg>`,
    star: `<svg viewBox="0 0 24 24"><path d="M12,17.27L18.18,21l-1.64,-7.03L22,9.24l-7.19,-0.61L12,2 9.19,8.63 2,9.24l5.46,4.73L5.82,21z"/></svg>`,
    cart: `<svg viewBox="0 0 24 24"><path d="M7,18c-1.1,0 -1.99,0.9 -1.99,2S5.9,22 7,22s2,-0.9 2,-2 -0.9,-2 -2,-2zM1,2v2h2l3.6,7.59 -1.35,2.45c-0.16,0.28 -0.25,0.61 -0.25,0.96 0,1.1 0.9,2 2,2h12v-2H7.42c-0.14,0 -0.25,-0.11 -0.25,-0.25l0.03,-0.12 0.9,-1.63h7.45c0.75,0 1.41,-0.41 1.75,-1.03l3.58,-6.49c0.08,-0.14 0.12,-0.31 0.12,-0.48 0,-0.55 -0.45,-1 -1,-1H5.21l-0.94,-2H1zM17,18c-1.1,0 -1.99,0.9 -1.99,2s0.89,2 1.99,2 2,-0.9 2,-2 -0.9,-2 -2,-2z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24"><path d="M11.99,2C6.47,2 2,6.48 2,12s4.47,10 9.99,10C17.52,22 22,17.52 22,12S17.52,2 11.99,2zM12,20c-4.42,0 -8,-3.58 -8,-8s3.58,-8 8,-8 8,3.58 8,8 -3.58,8 -8,8zM12.5,7H11v6l5.25,3.15 0.75,-1.23 -4.5,-2.67z"/></svg>`,
    logout: `<svg viewBox="0 0 24 24"><path d="M17,7l-1.41,1.41L18.17,11H8v2h10.17l-2.58,2.58L17,17l5,-5zM4,5h8V3H4c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h8v-2H4V5z"/></svg>`,
    eye: `<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
    eyeOff: `<svg viewBox="0 0 24 24"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/></svg>`
};

// Application State
const State = {
    user: null,
    cart: [],
    selectedCategory: 'all',
    showingFavorites: false
};

// DOM Elements
const views = {
    login: document.getElementById('view-login'),
    register: document.getElementById('view-register'),
    dashboard: document.getElementById('view-dashboard')
};

// Toast notification helper
function showToast(message) {
    const toast = document.getElementById('toastNotice');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// View Navigator
function switchView(viewName) {
    Object.values(views).forEach(v => v.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Init App
function initApp() {
    // Load persisted user or default
    const savedUser = localStorage.getItem('velvet_leaf_user');
    if (savedUser) {
        State.user = JSON.parse(savedUser);
    }

    // Load persisted cart or seed with 2 Spanish Lattes for preview
    const savedCart = localStorage.getItem('velvet_leaf_cart');
    if (savedCart) {
        State.cart = JSON.parse(savedCart);
    } else {
        State.cart = [{ menuItem: CAFE_MENU_ITEMS[0], quantity: 2 }];
    }

    setupAuthEvents();
    setupDashboardEvents();

    // Check if remember me session exists
    const shouldRemember = localStorage.getItem('velvet_leaf_remember') === 'true';
    if (State.user && shouldRemember) {
        renderDashboard();
        switchView('dashboard');
    } else {
        switchView('login');
    }
}

// ================= AUTH CONTROLLERS =================
function setupAuthEvents() {
    // Switch between Login and Register views
    document.getElementById('toRegisterLink').addEventListener('click', (e) => {
        e.preventDefault();
        clearAuthErrors();
        switchView('register');
    });

    document.getElementById('toLoginLink').addEventListener('click', (e) => {
        e.preventDefault();
        clearAuthErrors();
        switchView('login');
    });

    // Password Visibility Toggles
    setupPasswordToggle('toggleLoginPassword', 'loginPassword');
    setupPasswordToggle('toggleRegPassword', 'regPassword');
    setupPasswordToggle('toggleRegConfirmPassword', 'regConfirmPassword');

    // Quick Demo Login Button
    document.getElementById('btnDemoLogin').addEventListener('click', () => {
        document.getElementById('loginEmail').value = DEFAULT_USER.email;
        document.getElementById('loginPassword').value = 'BaristaGold2026!';
        document.getElementById('rememberMe').checked = true;

        showToast('Demo account applied! Welcome Sophia.');
        setTimeout(() => {
            loginUser(DEFAULT_USER, true);
        }, 400);
    });

    // Login Form Submission
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        clearAuthErrors();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const rememberMe = document.getElementById('rememberMe').checked;

        let valid = true;

        if (!email) {
            showInputError('loginEmail', 'emailError', 'Please enter your email');
            valid = false;
        } else if (!isValidEmail(email)) {
            showInputError('loginEmail', 'emailError', 'Please enter a valid email address');
            valid = false;
        }

        if (!password) {
            showInputError('loginPassword', 'passwordError', 'Please enter your password');
            valid = false;
        } else if (password.length < 6) {
            showInputError('loginPassword', 'passwordError', 'Password must be at least 6 characters');
            valid = false;
        }

        if (valid) {
            const userName = email.includes('@')
                ? email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase())
                : 'Sophia Miller';

            const user = {
                name: userName,
                email: email,
                phone: '+1 (555) 019-2834',
                loyaltyPoints: 350,
                activeOrdersCount: 1,
                tier: 'Gold Bean Tier'
            };

            loginUser(user, rememberMe);
        }
    });

    // Register Form Submission
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        clearAuthErrors();

        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value.trim();
        const confirmPassword = document.getElementById('regConfirmPassword').value.trim();
        const agreeTerms = document.getElementById('agreeTerms').checked;

        let valid = true;

        if (!name) {
            showInputError('regName', 'regNameError', 'Please enter your full name');
            valid = false;
        }

        if (!email) {
            showInputError('regEmail', 'regEmailError', 'Please enter your email');
            valid = false;
        } else if (!isValidEmail(email)) {
            showInputError('regEmail', 'regEmailError', 'Please enter a valid email address');
            valid = false;
        }

        if (!password) {
            showInputError('regPassword', 'regPasswordError', 'Please enter a password');
            valid = false;
        } else if (password.length < 6) {
            showInputError('regPassword', 'regPasswordError', 'Password must be at least 6 characters');
            valid = false;
        }

        if (password !== confirmPassword) {
            showInputError('regConfirmPassword', 'regConfirmError', 'Passwords do not match');
            valid = false;
        }

        if (!agreeTerms) {
            showToast('Please agree to the Terms & Loyalty Club');
            valid = false;
        }

        if (valid) {
            const newUser = {
                name: name,
                email: email,
                phone: phone || '+1 (555) 019-2834',
                loyaltyPoints: 450, // 350 + 100 bonus
                activeOrdersCount: 1,
                tier: 'Gold Bean Tier'
            };

            showToast(`Welcome ${name}! +100 bonus brew points unlocked!`);
            loginUser(newUser, true);
        }
    });

    // Forgot Password Action
    document.getElementById('forgotPasswordLink').addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        if (email && isValidEmail(email)) {
            showToast(`Password reset instructions sent to ${email}`);
        } else {
            showToast('Enter your registered email address above');
        }
    });
}

function loginUser(user, remember) {
    State.user = user;
    localStorage.setItem('velvet_leaf_user', JSON.stringify(user));
    localStorage.setItem('velvet_leaf_remember', remember ? 'true' : 'false');

    renderDashboard();
    switchView('dashboard');
    showToast(`Welcome back, ${user.name}! ☕`);
}

function setupPasswordToggle(btnId, inputId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);

    btn.innerHTML = ICONS.eye;
    btn.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            btn.innerHTML = ICONS.eyeOff;
        } else {
            input.type = 'password';
            btn.innerHTML = ICONS.eye;
        }
    });
}

function showInputError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add('input-error');
    error.textContent = message;
    error.style.display = 'block';

    input.addEventListener('input', () => {
        input.classList.remove('input-error');
        error.style.display = 'none';
    }, { once: true });
}

function clearAuthErrors() {
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ================= DASHBOARD CONTROLLER =================
function setupDashboardEvents() {
    // Logout Action
    document.getElementById('btnLogout').addEventListener('click', () => {
        localStorage.removeItem('velvet_leaf_remember');
        showToast('Signed out of Velvet & Leaf');
        switchView('login');
    });

    // Quick Widgets
    document.getElementById('widgetOrders').addEventListener('click', () => {
        showToast('Order #VL-8429: Spanish Latte • Grinding & Brewing at Station 1');
    });

    document.getElementById('widgetRewards').addEventListener('click', () => {
        showToast(`You have ${State.user.loyaltyPoints} points! 100 points = Free Pastry.`);
    });

    document.getElementById('widgetFavorites').addEventListener('click', () => {
        State.showingFavorites = !State.showingFavorites;
        renderMenuItems();
        showToast(State.showingFavorites ? 'Showing your favorite brews ❤️' : 'Showing all brews');
    });

    // Cart Drawer Open/Close
    const cartBar = document.getElementById('floatingCartBar');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const cartDrawer = document.getElementById('cartDrawer');

    cartBar.addEventListener('click', () => openCartDrawer());
    drawerOverlay.addEventListener('click', () => closeCartDrawer());

    // Clear Cart
    document.getElementById('btnClearCart').addEventListener('click', () => {
        State.cart = [];
        saveCart();
        updateCartUI();
        closeCartDrawer();
        showToast('Order basket cleared');
    });

    // Confirm & Place Order
    document.getElementById('btnConfirmOrder').addEventListener('click', () => {
        if (State.cart.length === 0) return;

        const subtotal = State.cart.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
        const earnedPoints = Math.round(subtotal * 10);

        State.user.loyaltyPoints += earnedPoints;
        State.user.activeOrdersCount += 1;
        localStorage.setItem('velvet_leaf_user', JSON.stringify(State.user));

        State.cart = [];
        saveCart();
        updateCartUI();
        closeCartDrawer();
        renderUserData();

        showToast(`Order Confirmed! Barista is brewing. +${earnedPoints} points earned! 🎉`);
    });
}

function openCartDrawer() {
    renderCartDrawerItems();
    document.getElementById('drawerOverlay').classList.add('active');
    document.getElementById('cartDrawer').classList.add('active');
}

function closeCartDrawer() {
    document.getElementById('drawerOverlay').classList.remove('active');
    document.getElementById('cartDrawer').classList.remove('active');
}

function renderDashboard() {
    renderUserData();
    renderCategories();
    renderMenuItems();
    updateCartUI();
}

function renderUserData() {
    const user = State.user || DEFAULT_USER;
    document.getElementById('userName').textContent = user.name;
    document.getElementById('loyaltyHeaderPoints').textContent = `${user.loyaltyPoints} pts`;
    document.getElementById('widgetPointsVal').textContent = `${user.loyaltyPoints} Pts`;
    document.getElementById('widgetOrdersVal').textContent = `${user.activeOrdersCount} Brewing`;

    // Time-based greeting
    const hour = new Date().getHours();
    let greeting = 'Good Day ☕';
    if (hour >= 4 && hour < 12) greeting = 'Good Morning ☕';
    else if (hour >= 12 && hour < 17) greeting = 'Good Afternoon 🍵';
    else greeting = 'Good Evening ✨';

    document.getElementById('userGreeting').textContent = greeting;
}

function renderCategories() {
    const container = document.getElementById('categoryScroll');
    container.innerHTML = '';

    CAFE_CATEGORIES.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = `cat-chip ${State.selectedCategory === cat.id ? 'active' : ''}`;
        chip.innerHTML = `${ICONS[cat.icon] || ''} <span>${cat.title}</span>`;
        chip.addEventListener('click', () => {
            State.selectedCategory = cat.id;
            State.showingFavorites = false;
            renderCategories();
            renderMenuItems();
        });
        container.appendChild(chip);
    });
}

function renderMenuItems() {
    const container = document.getElementById('menuGrid');
    container.innerHTML = '';

    let items = CAFE_MENU_ITEMS;

    // Apply category filter
    if (State.selectedCategory === 'coffee') {
        items = items.filter(i => i.category === 'Coffee');
    } else if (State.selectedCategory === 'tea') {
        items = items.filter(i => i.category === 'Special Tea');
    } else if (State.selectedCategory === 'bakery') {
        items = items.filter(i => i.category === 'Bakery & Snacks');
    }

    // Apply favorites filter if toggled
    if (State.showingFavorites) {
        items = items.filter(i => i.isFavorite);
    }

    document.getElementById('itemCountLabel').textContent = `${items.length} items`;

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="item-avatar">
                ${ICONS[item.icon] || ICONS.coffee}
            </div>
            <div class="item-info">
                <div class="item-badge-row">
                    <span class="item-badge">${item.badge}</span>
                </div>
                <h4 class="item-title">${item.name}</h4>
                <p class="item-desc">${item.description}</p>
                <div class="item-meta-row">
                    <div class="price-rating">
                        <span class="item-price">$${item.price.toFixed(2)}</span>
                        <div class="item-rating">
                            ${ICONS.star}
                            <span>${item.rating}</span>
                        </div>
                    </div>
                    <button class="btn-add-item" data-id="${item.id}">+ Add</button>
                </div>
            </div>
        `;

        card.querySelector('.btn-add-item').addEventListener('click', () => {
            addToCart(item);
        });

        container.appendChild(card);
    });
}

function addToCart(item) {
    const existing = State.cart.find(ci => ci.menuItem.id === item.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        State.cart.push({ menuItem: item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${item.name} to order ☕`);
}

function saveCart() {
    localStorage.setItem('velvet_leaf_cart', JSON.stringify(State.cart));
}

function updateCartUI() {
    const totalCount = State.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = State.cart.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);

    const cartBar = document.getElementById('floatingCartBar');

    if (totalCount > 0) {
        cartBar.classList.remove('hidden');
        document.getElementById('cartBadgeCount').textContent = totalCount;
        document.getElementById('cartBarCount').textContent = `${totalCount} ${totalCount === 1 ? 'item' : 'items'} in order`;
        document.getElementById('cartBarPrice').textContent = `$${subtotal.toFixed(2)}`;
    } else {
        cartBar.classList.add('hidden');
    }
}

function renderCartDrawerItems() {
    const container = document.getElementById('drawerItemsList');
    container.innerHTML = '';

    if (State.cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color: var(--text-secondary); padding: 24px;">Your brew basket is empty.</p>`;
        updateDrawerTotals(0);
        return;
    }

    State.cart.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'drawer-item-row';
        row.innerHTML = `
            <div class="drawer-item-details">
                <h4>${item.menuItem.name}</h4>
                <p>$${item.menuItem.price.toFixed(2)} each</p>
            </div>
            <div class="quantity-stepper">
                <button class="stepper-btn btn-minus" data-index="${index}">-</button>
                <span class="stepper-count">${item.quantity}</span>
                <button class="stepper-btn btn-plus" data-index="${index}">+</button>
            </div>
        `;

        row.querySelector('.btn-plus').addEventListener('click', () => {
            item.quantity += 1;
            saveCart();
            updateCartUI();
            renderCartDrawerItems();
        });

        row.querySelector('.btn-minus').addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                State.cart.splice(index, 1);
            }
            saveCart();
            updateCartUI();
            renderCartDrawerItems();
            if (State.cart.length === 0) {
                closeCartDrawer();
            }
        });

        container.appendChild(row);
    });

    const subtotal = State.cart.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
    updateDrawerTotals(subtotal);
}

function updateDrawerTotals(subtotal) {
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    document.getElementById('drawerSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('drawerTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('drawerTotal').textContent = `$${total.toFixed(2)}`;
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
