// Data fra Excel-arkene
const venues = [
    { id: 'berskaug-1', name: 'Berskaug', lane: 'Bane 1', capacity: 1560 },
    { id: 'berskaug-2', name: 'Berskaug', lane: 'Bane 2', capacity: 1560 },
    { id: 'brandengen-1', name: 'Brandengen', lane: 'Bane 1', capacity: 1560 },
    { id: 'drammenshallen-a', name: 'Drammenshallen', lane: 'Bane A', capacity: 840 },
    { id: 'drammenshallen-b', name: 'Drammenshallen', lane: 'Bane B', capacity: 840, noKlister: true },
    { id: 'drammenshallen-c', name: 'Drammenshallen', lane: 'Bane C', capacity: 840, noKlister: true },
    { id: 'drammenshallen-d', name: 'Drammenshallen', lane: 'Bane D', capacity: 840 },
    { id: 'drammenshallen-stutta-a', name: 'Drammenshallen', lane: 'Stuttspilbane A', capacity: 540 },
    { id: 'drammenshallen-stutta-b', name: 'Drammenshallen', lane: 'Stuttspilbane B', capacity: 285 },
    { id: 'drammenshallen-stutta-c', name: 'Drammenshallen', lane: 'Stuttspilbane B+C', capacity: 240 },
    { id: 'drammenshallen-stuttc', name: 'Drammenshallen', lane: 'Stuttspilbane C', capacity: 285 },
    { id: 'drammenshallen-stuttd', name: 'Drammenshallen', lane: 'Stuttspilbane D', capacity: 540 },
    { id: 'konnerud-1', name: 'Konnerud', lane: 'Bane 1', capacity: 1560 },
    { id: 'orenhallen-1', name: 'Ørenhallen', lane: 'Bane 1', capacity: 1560, noKlister: true }
];

const pools = [
    { id: 'g-junior-a', class: 'G junior', pool: 'A', time: 186, klister: true },
    { id: 'g-junior-stutta', class: 'G junior', pool: 'Stuttspill', time: 96, klister: true },
    { id: 'g12-a', class: 'G12', pool: 'A', time: 168 },
    { id: 'g12-b', class: 'G12', pool: 'B', time: 168 },
    { id: 'g13-a', class: 'G13', pool: 'A', time: 280 },
    { id: 'g13-stutta', class: 'G13', pool: 'Stuttspill', time: 116 },
    { id: 'g14-a', class: 'G14', pool: 'A', time: 280 },
    { id: 'g14-b', class: 'G14', pool: 'B', time: 116 },
    { id: 'g14-c', class: 'G14', pool: 'C', time: 168 },
    { id: 'g14-b-stutta', class: 'G14', pool: 'B-Stuttspill', time: 174 },
    { id: 'g14-stutta', class: 'G14', pool: 'Stuttspill', time: 145 },
    { id: 'g16-niva1-a', class: 'G16', pool: 'nivå 1 A', time: 186, klister: true },
    { id: 'g16-niva1-stutta', class: 'G16', pool: 'nivå 1 Stuttspill', time: 64, klister: true },
    { id: 'g16-niva2-a', class: 'G16', pool: 'nivå 2 A', time: 186, klister: true },
    { id: 'g16-niva2-stutta', class: 'G16', pool: 'nivå 2 Stuttspill', time: 96, klister: true },
    { id: 'g16-elite-a', class: 'G16', pool: 'elite A', time: 360, klister: true },
    { id: 'j-junior-a', class: 'J junior', pool: 'A', time: 310, klister: true },
    { id: 'j-junior-stutta', class: 'J junior', pool: 'Stuttspill', time: 128, klister: true },
    { id: 'j11-a', class: 'J11', pool: 'A', time: 280 },
    { id: 'j11-b', class: 'J11', pool: 'B', time: 280 },
    { id: 'j11-c', class: 'J11', pool: 'C', time: 280 },
    { id: 'j12-a', class: 'J12', pool: 'A', time: 280 },
    { id: 'j12-b', class: 'J12', pool: 'B', time: 280 },
    { id: 'j12-c', class: 'J12', pool: 'C', time: 280 },
    { id: 'j13-a', class: 'J13', pool: 'A', time: 168 },
    { id: 'j13-b', class: 'J13', pool: 'B', time: 168 },
    { id: 'j13-c', class: 'J13', pool: 'C', time: 168 },
    { id: 'j13-d', class: 'J13', pool: 'D', time: 168 },
    { id: 'j13-b-stutta', class: 'J13', pool: 'B-Stuttspill', time: 203 },
    { id: 'j13-stutta', class: 'J13', pool: 'Stuttspill', time: 203 },
    { id: 'j14-a', class: 'J14', pool: 'A', time: 168 },
    { id: 'j14-b', class: 'J14', pool: 'B', time: 168 },
    { id: 'j14-c', class: 'J14', pool: 'C', time: 168 },
    { id: 'j14-d', class: 'J14', pool: 'D', time: 168 },
    { id: 'j14-b-stutta', class: 'J14', pool: 'B-Stuttspill', time: 203 },
    { id: 'j14-stutta', class: 'J14', pool: 'Stuttspill', time: 203 },
    { id: 'j15-a', class: 'J15', pool: 'A', time: 310, klister: true },
    { id: 'j15-b', class: 'J15', pool: 'B', time: 310, klister: true },
    { id: 'j15-c', class: 'J15', pool: 'C', time: 186, klister: true },
    { id: 'j15-b-stutta', class: 'J15', pool: 'B-Stuttspill', time: 224, klister: true },
    { id: 'j15-stutta', class: 'J15', pool: 'Stuttspill', time: 160, klister: true },
    { id: 'j16-niva1-a', class: 'J16', pool: 'nivå 1 A', time: 186, klister: true },
    { id: 'j16-niva1-stutta', class: 'J16', pool: 'nivå 1 Stuttspill', time: 96, klister: true },
    { id: 'j16-niva2-a', class: 'J16', pool: 'nivå 2 A', time: 310, klister: true },
    { id: 'j16-niva2-stutta', class: 'J16', pool: 'nivå 2 Stuttspill', time: 128, klister: true }
];

// Global state
let allocations = {};
let currentFilter = 'all';
let selectedPools = new Set();
let lastSelectedIndex = -1;
let allocationHistory = [];

// Helper function to format minutes to hours and minutes
function formatMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours === 0) {
        return `${mins}min`;
    } else if (mins === 0) {
        return `${hours}t`;
    } else {
        return `${hours}t ${mins}min`;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeVenues();
    initializePools();
    initializeFilters();
    initializeButtons();
    updateStats();
});

// Initialize venues
function initializeVenues() {
    const venuesGrid = document.getElementById('venuesGrid');
    
    venues.forEach(venue => {
        const venueEl = document.createElement('div');
        venueEl.className = 'venue-column';
        venueEl.dataset.venueId = venue.id;
        
        // Check if this is a stuttspill-only venue
        const isStuttspillOnly = venue.lane.toLowerCase().includes('stuttspil');
        if (isStuttspillOnly) {
            venueEl.classList.add('stuttspill-only');
        }
        
        // Check if this is a no-klister venue
        if (venue.noKlister) {
            venueEl.classList.add('no-klister');
        }
        
        // Set height based on capacity (same scale as pools: 0.5px per minute)
        const heightScale = 0.5;
        const minHeight = 200;
        const calculatedHeight = Math.max(venue.capacity * heightScale, minHeight);
        venueEl.style.height = `${calculatedHeight}px`;
        
        venueEl.innerHTML = `
            <div class="venue-header">${venue.name}</div>
            <div class="venue-info" data-original-capacity="${venue.capacity}">${venue.lane} - ${formatMinutes(venue.capacity)}${venue.noKlister ? ' (ikke klister)' : ''}</div>
            <div class="venue-slots" data-capacity="${venue.capacity}" data-used="0"></div>
        `;
        
        // Add drag and drop event listeners
        venueEl.addEventListener('dragover', handleDragOver);
        venueEl.addEventListener('drop', handleDrop);
        venueEl.addEventListener('dragleave', handleDragLeave);
        
        venuesGrid.appendChild(venueEl);
        allocations[venue.id] = [];
    });
}

// Initialize pools
function initializePools() {
    displayPools();
}

// Display pools based on filter
function displayPools(filter = 'all') {
    const poolsList = document.getElementById('poolsList');
    poolsList.innerHTML = '';
    
    let filteredPools;
    if (filter === 'all') {
        filteredPools = pools;
    } else if (filter === 'stuttspill') {
        filteredPools = pools.filter(pool => pool.pool.toLowerCase().includes('stuttspill'));
    } else if (filter === 'klister') {
        filteredPools = pools.filter(pool => pool.klister === true);
    } else if (filter === 'no-klister') {
        filteredPools = pools.filter(pool => !pool.klister);
    } else {
        filteredPools = pools.filter(pool => pool.class === filter);
    }
    
    filteredPools.forEach((pool, index) => {
        const poolEl = document.createElement('div');
        poolEl.className = 'pool-item';
        
        // Check if this is a stuttspill pool
        if (pool.pool.toLowerCase().includes('stuttspill')) {
            poolEl.classList.add('stuttspill');
        }
        
        // Check if this pool uses klister
        if (pool.klister) {
            poolEl.classList.add('klister');
        }
        
        poolEl.dataset.poolId = pool.id;
        poolEl.dataset.class = pool.class;
        poolEl.dataset.time = pool.time;
        poolEl.dataset.index = index;
        poolEl.draggable = true;
        
        // Set height based on time (0.5px per minute, with minimum height)
        const heightScale = 0.5;
        const minHeight = 30;
        const calculatedHeight = Math.max(pool.time * heightScale, minHeight);
        poolEl.style.height = `${calculatedHeight}px`;
        
        poolEl.innerHTML = `
            <span>${pool.class} - ${pool.pool}</span>
            <span class="pool-time">${formatMinutes(pool.time)}</span>
        `;
        
        // Add drag event listeners
        poolEl.addEventListener('dragstart', handleDragStart);
        poolEl.addEventListener('dragend', handleDragEnd);
        
        // Add click event for selection
        poolEl.addEventListener('click', handlePoolClick);
        
        poolsList.appendChild(poolEl);
    });
    
    // Clear selections when redisplaying
    selectedPools.clear();
    lastSelectedIndex = -1;
}

// Initialize filter buttons
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            displayPools(currentFilter);
        });
    });
}

// Initialize export and reset buttons
function initializeButtons() {
    document.getElementById('exportBtn').addEventListener('click', exportAllocations);
    document.getElementById('resetBtn').addEventListener('click', resetAllocations);
    document.getElementById('autoAllocateBtn').addEventListener('click', autoAllocate);
    document.getElementById('undoBtn').addEventListener('click', undoLastAllocation);
    document.getElementById('saveBtn').addEventListener('click', saveLayout);
    
    // Load saved layouts
    loadSavedLayouts();
}

// Pool selection handlers
function handlePoolClick(e) {
    const poolEl = e.currentTarget;
    const currentIndex = parseInt(poolEl.dataset.index);
    
    if (e.metaKey || e.ctrlKey) {
        // Command/Control click - toggle selection
        if (selectedPools.has(poolEl.dataset.poolId)) {
            selectedPools.delete(poolEl.dataset.poolId);
            poolEl.classList.remove('selected');
        } else {
            selectedPools.add(poolEl.dataset.poolId);
            poolEl.classList.add('selected');
        }
        lastSelectedIndex = currentIndex;
    } else if (e.shiftKey && lastSelectedIndex !== -1) {
        // Shift click - select range
        const start = Math.min(lastSelectedIndex, currentIndex);
        const end = Math.max(lastSelectedIndex, currentIndex);
        
        // Clear existing selections
        document.querySelectorAll('.pool-item').forEach(item => {
            item.classList.remove('selected');
        });
        selectedPools.clear();
        
        // Select range
        const allPools = document.querySelectorAll('.pool-item');
        for (let i = start; i <= end; i++) {
            if (allPools[i]) {
                selectedPools.add(allPools[i].dataset.poolId);
                allPools[i].classList.add('selected');
            }
        }
    } else {
        // Regular click - select only this one
        document.querySelectorAll('.pool-item').forEach(item => {
            item.classList.remove('selected');
        });
        selectedPools.clear();
        selectedPools.add(poolEl.dataset.poolId);
        poolEl.classList.add('selected');
        lastSelectedIndex = currentIndex;
    }
}

// Drag and drop handlers
let draggedElements = [];

function handleDragStart(e) {
    const poolEl = e.target;
    
    // If dragging a selected item, drag all selected items
    if (selectedPools.has(poolEl.dataset.poolId)) {
        draggedElements = Array.from(selectedPools).map(poolId => {
            const el = document.querySelector(`[data-pool-id="${poolId}"]`);
            return pools.find(p => p.id === poolId);
        }).filter(pool => pool !== undefined);
    } else {
        // If dragging an unselected item, only drag that item
        draggedElements = [pools.find(p => p.id === poolEl.dataset.poolId)];
    }
    
    // Add dragging class to all dragged elements
    draggedElements.forEach(pool => {
        const el = document.querySelector(`[data-pool-id="${pool.id}"]`);
        if (el) el.classList.add('dragging');
    });
    
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    // Remove dragging class from all elements
    document.querySelectorAll('.pool-item.dragging').forEach(el => {
        el.classList.remove('dragging');
    });
    draggedElements = [];
}

function handleDragOver(e) {
    e.preventDefault();
    const venueColumn = e.target.closest('.venue-column');
    if (venueColumn) {
        venueColumn.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    const venueColumn = e.target.closest('.venue-column');
    if (venueColumn) {
        venueColumn.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    
    const venueColumn = e.target.closest('.venue-column');
    if (!venueColumn || draggedElements.length === 0) return;
    
    venueColumn.classList.remove('drag-over');
    
    const venueId = venueColumn.dataset.venueId;
    const venue = venues.find(v => v.id === venueId);
    const venueSlots = venueColumn.querySelector('.venue-slots');
    const capacity = parseInt(venueSlots.dataset.capacity);
    let used = parseInt(venueSlots.dataset.used);
    
    // Check klister restrictions
    if (venue.noKlister) {
        const hasKlisterPool = draggedElements.some(pool => pool.klister);
        if (hasKlisterPool) {
            alert('Denne banen tillater ikke klister!');
            return;
        }
    }
    
    // Calculate total time needed
    const totalTimeNeeded = draggedElements.reduce((sum, pool) => sum + pool.time, 0);
    
    // Add all dragged pools
    draggedElements.forEach(pool => {
        // Add to allocations
        allocations[venueId].push(pool);
        
        // Update UI
        const allocatedEl = document.createElement('div');
        allocatedEl.className = 'allocated-pool';
        
        // Check if this is a stuttspill pool
        if (pool.pool.toLowerCase().includes('stuttspill')) {
            allocatedEl.classList.add('stuttspill');
        }
        
        // Check if this pool uses klister
        if (pool.klister) {
            allocatedEl.classList.add('klister');
        }
        
        allocatedEl.dataset.poolId = pool.id;
        allocatedEl.dataset.class = pool.class;
        
        // Set height based on time
        const heightScale = 0.5;
        const minHeight = 30;
        const calculatedHeight = Math.max(pool.time * heightScale, minHeight);
        allocatedEl.style.height = `${calculatedHeight}px`;
        
        // Get color from CSS variable
        const colorVar = `--color-${pool.class.toLowerCase().replace(' ', '-')}`;
        const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
        allocatedEl.style.backgroundColor = color;
        
        allocatedEl.innerHTML = `
            ${pool.class} - ${pool.pool} (${formatMinutes(pool.time)})
            <button class="remove-btn" onclick="removeAllocation('${venueId}', '${pool.id}')">×</button>
        `;
        
        venueSlots.appendChild(allocatedEl);
        
        // Remove from pool list
        const poolEl = document.querySelector(`.pool-item[data-pool-id="${pool.id}"]`);
        if (poolEl) poolEl.remove();
        
        used += pool.time;
    });
    
    // Update capacity
    venueSlots.dataset.used = used;
    
    // Update venue display
    updateVenueDisplay(venueColumn, capacity, used);
    
    // Clear selections
    selectedPools.clear();
    
    // Update stats
    updateStats();
}

// Save current state to history
function saveStateToHistory() {
    const state = {
        allocations: JSON.parse(JSON.stringify(allocations)),
        poolElements: []
    };
    
    // Save current pool elements
    document.querySelectorAll('.pool-item').forEach(poolEl => {
        state.poolElements.push({
            id: poolEl.dataset.poolId,
            class: poolEl.dataset.class,
            time: poolEl.dataset.time
        });
    });
    
    allocationHistory.push(state);
    document.getElementById('undoBtn').disabled = false;
}

// Restore state from history
function restoreState(state) {
    // Clear current allocations
    Object.keys(allocations).forEach(venueId => {
        allocations[venueId] = [];
    });
    
    // Restore allocations
    Object.keys(state.allocations).forEach(venueId => {
        allocations[venueId] = state.allocations[venueId];
    });
    
    // Clear all venue slots
    document.querySelectorAll('.venue-column').forEach(venueColumn => {
        const slots = venueColumn.querySelector('.venue-slots');
        slots.innerHTML = '';
        slots.dataset.used = '0';
    });
    
    // Rebuild venue displays
    Object.keys(allocations).forEach(venueId => {
        const venueColumn = document.querySelector(`[data-venue-id="${venueId}"]`);
        const venueSlots = venueColumn.querySelector('.venue-slots');
        const venue = venues.find(v => v.id === venueId);
        let totalUsed = 0;
        
        allocations[venueId].forEach(pool => {
            const allocatedEl = document.createElement('div');
            allocatedEl.className = 'allocated-pool';
            
            if (pool.pool.toLowerCase().includes('stuttspill')) {
                allocatedEl.classList.add('stuttspill');
            }
            if (pool.klister) {
                allocatedEl.classList.add('klister');
            }
            
            allocatedEl.dataset.poolId = pool.id;
            allocatedEl.dataset.class = pool.class;
            
            const heightScale = 0.5;
            const minHeight = 30;
            const calculatedHeight = Math.max(pool.time * heightScale, minHeight);
            allocatedEl.style.height = `${calculatedHeight}px`;
            
            const colorVar = `--color-${pool.class.toLowerCase().replace(' ', '-')}`;
            const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
            allocatedEl.style.backgroundColor = color;
            
            allocatedEl.innerHTML = `
                ${pool.class} - ${pool.pool} (${formatMinutes(pool.time)})
                <button class="remove-btn" onclick="removeAllocation('${venueId}', '${pool.id}')">×</button>
            `;
            
            venueSlots.appendChild(allocatedEl);
            totalUsed += pool.time;
        });
        
        venueSlots.dataset.used = totalUsed;
        updateVenueDisplay(venueColumn, venue.capacity, totalUsed);
    });
    
    // Restore pool list
    displayPools(currentFilter);
    
    updateStats();
}

// Undo last allocation
function undoLastAllocation() {
    if (allocationHistory.length === 0) return;
    
    const lastState = allocationHistory.pop();
    restoreState(lastState);
    
    if (allocationHistory.length === 0) {
        document.getElementById('undoBtn').disabled = true;
    }
}

// Auto allocate using knapsack algorithm
function autoAllocate() {
    saveStateToHistory();
    
    // Get all unallocated pools
    const unallocatedPools = [];
    document.querySelectorAll('.pool-item').forEach(poolEl => {
        const poolId = poolEl.dataset.poolId;
        const pool = pools.find(p => p.id === poolId);
        if (pool) {
            unallocatedPools.push(pool);
        }
    });
    
    if (unallocatedPools.length === 0) {
        alert('Ingen ufordelte puljer å allokere!');
        return;
    }
    
    // Sort pools by time (descending) for better allocation
    unallocatedPools.sort((a, b) => b.time - a.time);
    
    // Try to allocate each pool
    let allocatedCount = 0;
    
    unallocatedPools.forEach(pool => {
        // Find best venue for this pool
        let bestVenue = null;
        let bestFit = Infinity;
        
        venues.forEach(venue => {
            // Check klister compatibility
            if (venue.noKlister && pool.klister) return;
            
            const venueColumn = document.querySelector(`[data-venue-id="${venue.id}"]`);
            const venueSlots = venueColumn.querySelector('.venue-slots');
            const used = parseInt(venueSlots.dataset.used);
            const remaining = venue.capacity - used;
            
            // Check if pool fits
            if (remaining >= pool.time) {
                // Prefer venues with less wasted space
                const waste = remaining - pool.time;
                if (waste < bestFit) {
                    bestFit = waste;
                    bestVenue = venue;
                }
            }
        });
        
        // Allocate to best venue if found
        if (bestVenue) {
            const venueColumn = document.querySelector(`[data-venue-id="${bestVenue.id}"]`);
            const venueSlots = venueColumn.querySelector('.venue-slots');
            const used = parseInt(venueSlots.dataset.used);
            
            // Add to allocations
            allocations[bestVenue.id].push(pool);
            
            // Update UI
            const allocatedEl = document.createElement('div');
            allocatedEl.className = 'allocated-pool';
            
            if (pool.pool.toLowerCase().includes('stuttspill')) {
                allocatedEl.classList.add('stuttspill');
            }
            if (pool.klister) {
                allocatedEl.classList.add('klister');
            }
            
            allocatedEl.dataset.poolId = pool.id;
            allocatedEl.dataset.class = pool.class;
            
            const heightScale = 0.5;
            const minHeight = 30;
            const calculatedHeight = Math.max(pool.time * heightScale, minHeight);
            allocatedEl.style.height = `${calculatedHeight}px`;
            
            const colorVar = `--color-${pool.class.toLowerCase().replace(' ', '-')}`;
            const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
            allocatedEl.style.backgroundColor = color;
            
            allocatedEl.innerHTML = `
                ${pool.class} - ${pool.pool} (${formatMinutes(pool.time)})
                <button class="remove-btn" onclick="removeAllocation('${bestVenue.id}', '${pool.id}')">×</button>
            `;
            
            venueSlots.appendChild(allocatedEl);
            
            // Update capacity
            venueSlots.dataset.used = used + pool.time;
            updateVenueDisplay(venueColumn, bestVenue.capacity, used + pool.time);
            
            // Remove from pool list
            const poolEl = document.querySelector(`.pool-item[data-pool-id="${pool.id}"]`);
            if (poolEl) poolEl.remove();
            
            allocatedCount++;
        }
    });
    
    updateStats();
    
    if (allocatedCount < unallocatedPools.length) {
        alert(`Allokerte ${allocatedCount} av ${unallocatedPools.length} puljer. ${unallocatedPools.length - allocatedCount} puljer fikk ikke plass.`);
    } else {
        alert(`Alle ${allocatedCount} puljer ble allokert!`);
    }
}

// Remove allocation
function removeAllocation(venueId, poolId) {
    const pool = allocations[venueId].find(p => p.id === poolId);
    if (!pool) return;
    
    // Remove from allocations
    allocations[venueId] = allocations[venueId].filter(p => p.id !== poolId);
    
    // Update UI
    const venueColumn = document.querySelector(`[data-venue-id="${venueId}"]`);
    const venueSlots = venueColumn.querySelector('.venue-slots');
    const allocatedEl = venueSlots.querySelector(`[data-pool-id="${poolId}"]`);
    
    if (allocatedEl) {
        allocatedEl.remove();
    }
    
    // Update capacity
    const used = parseInt(venueSlots.dataset.used);
    const newUsed = used - pool.time;
    venueSlots.dataset.used = newUsed;
    
    // Update venue display
    const capacity = parseInt(venueSlots.dataset.capacity);
    updateVenueDisplay(venueColumn, capacity, newUsed);
    
    // Add back to pool list if matching filter
    if (currentFilter === 'all' || pool.class === currentFilter) {
        displayPools(currentFilter);
    }
    
    // Update stats
    updateStats();
}

// Update venue display
function updateVenueDisplay(venueColumn, capacity, used) {
    const venueInfo = venueColumn.querySelector('.venue-info');
    const remaining = capacity - used;
    
    if (remaining < 0) {
        venueColumn.classList.add('over-capacity');
        venueInfo.innerHTML = `${venueInfo.textContent.split(' - ')[0]} - SPRENGT! (${formatMinutes(Math.abs(remaining))} over)`;
    } else {
        venueColumn.classList.remove('over-capacity');
        venueInfo.innerHTML = `${venueInfo.textContent.split(' - ')[0]} - ${formatMinutes(capacity)} (${formatMinutes(remaining)} ledig)`;
    }
}

// Update statistics
function updateStats() {
    const totalCapacity = venues.reduce((sum, v) => sum + v.capacity, 0);
    let usedCapacity = 0;
    
    Object.values(allocations).forEach(venueAllocations => {
        venueAllocations.forEach(pool => {
            usedCapacity += pool.time;
        });
    });
    
    document.querySelector('#totalCapacity strong').textContent = formatMinutes(totalCapacity);
    document.querySelector('#usedCapacity strong').textContent = formatMinutes(usedCapacity);
    document.querySelector('#remainingCapacity strong').textContent = formatMinutes(totalCapacity - usedCapacity);
}

// Export allocations
function exportAllocations() {
    const result = [];
    
    venues.forEach(venue => {
        const venueAllocations = allocations[venue.id] || [];
        venueAllocations.forEach(pool => {
            result.push({
                anlegg: venue.name,
                bane: venue.lane,
                klasse: pool.class,
                pulje: pool.pool,
                tid: pool.time
            });
        });
    });
    
    // Convert to CSV
    const csv = [
        'Anlegg,Bane,Klasse,Pulje,Tid (min)',
        ...result.map(r => `${r.anlegg},${r.bane},${r.klasse},${r.pulje},${r.tid}`)
    ].join('\n');
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'baneallokering.csv';
    a.click();
    URL.revokeObjectURL(url);
}

// Reset all allocations
function resetAllocations() {
    if (!confirm('Er du sikker på at du vil nullstille alle allokeringer?')) return;
    
    // Clear allocations
    Object.keys(allocations).forEach(venueId => {
        allocations[venueId] = [];
    });
    
    // Clear UI
    document.querySelectorAll('.venue-column').forEach(venueColumn => {
        const slots = venueColumn.querySelector('.venue-slots');
        slots.innerHTML = '';
        slots.dataset.used = '0';
        
        // Reset venue display
        const capacity = parseInt(slots.dataset.capacity);
        updateVenueDisplay(venueColumn, capacity, 0);
    });
    
    // Restore all pools
    displayPools(currentFilter);
    
    // Update stats
    updateStats();
}

// Save layout to localStorage
function saveLayout() {
    const name = prompt('Navngi dette oppsettet:');
    if (!name) return;
    
    const layout = {
        name: name,
        date: new Date().toISOString(),
        allocations: JSON.parse(JSON.stringify(allocations))
    };
    
    // Get existing layouts
    const layouts = JSON.parse(localStorage.getItem('dhc2025-layouts') || '[]');
    
    // Check if name already exists
    if (layouts.some(l => l.name === name)) {
        if (!confirm(`Et oppsett med navn "${name}" finnes allerede. Vil du overskrive?`)) {
            return;
        }
        // Remove existing layout with same name
        const index = layouts.findIndex(l => l.name === name);
        layouts.splice(index, 1);
    }
    
    // Add new layout
    layouts.push(layout);
    
    // Save to localStorage
    localStorage.setItem('dhc2025-layouts', JSON.stringify(layouts));
    
    // Refresh saved layouts list
    loadSavedLayouts();
    
    alert(`Oppsettet "${name}" er lagret!`);
}

// Load saved layouts list
function loadSavedLayouts() {
    const layouts = JSON.parse(localStorage.getItem('dhc2025-layouts') || '[]');
    const container = document.getElementById('savedLayoutsList');
    
    container.innerHTML = '';
    
    if (layouts.length === 0) {
        container.innerHTML = '<span style="color: #999;">Ingen lagrede oppsett</span>';
        return;
    }
    
    layouts.forEach(layout => {
        const item = document.createElement('div');
        item.className = 'saved-layout-item';
        item.innerHTML = `
            ${layout.name}
            <span class="delete-btn" data-name="${layout.name}">×</span>
        `;
        
        // Click to load
        item.addEventListener('click', (e) => {
            if (!e.target.classList.contains('delete-btn')) {
                loadLayout(layout.name);
            }
        });
        
        // Delete button
        item.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteLayout(layout.name);
        });
        
        container.appendChild(item);
    });
}

// Load a saved layout
function loadLayout(name) {
    const layouts = JSON.parse(localStorage.getItem('dhc2025-layouts') || '[]');
    const layout = layouts.find(l => l.name === name);
    
    if (!layout) {
        alert('Oppsettet finnes ikke!');
        return;
    }
    
    if (!confirm(`Vil du laste inn oppsettet "${name}"? Dette vil erstatte gjeldende oppsett.`)) {
        return;
    }
    
    // Save current state for undo
    saveStateToHistory();
    
    // Clear and restore allocations
    const state = {
        allocations: layout.allocations,
        poolElements: []
    };
    
    restoreState(state);
}

// Delete a saved layout
function deleteLayout(name) {
    if (!confirm(`Vil du slette oppsettet "${name}"?`)) {
        return;
    }
    
    const layouts = JSON.parse(localStorage.getItem('dhc2025-layouts') || '[]');
    const index = layouts.findIndex(l => l.name === name);
    
    if (index !== -1) {
        layouts.splice(index, 1);
        localStorage.setItem('dhc2025-layouts', JSON.stringify(layouts));
        loadSavedLayouts();
    }
}