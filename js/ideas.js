// Filter functionality for ideas
function applyFilters() {
    const typeFilter = document.getElementById('type-filter').value;
    const budgetFilter = document.getElementById('budget-filter').value;
    const machineFilter = document.getElementById('machine-filter').value;
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    
    const ideaCards = document.querySelectorAll('.idea-card');
    
    ideaCards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        const cardBudget = card.getAttribute('data-budget');
        const cardMachine = card.getAttribute('data-machine');
        const cardTitle = card.querySelector('.idea-card-title').textContent.toLowerCase();
        const cardDesc = card.querySelector('.idea-card-desc').textContent.toLowerCase();
        
        const typeMatch = !typeFilter || cardType === typeFilter;
        const budgetMatch = !budgetFilter || cardBudget === budgetFilter;
        const machineMatch = !machineFilter || cardMachine === machineFilter;
        const searchMatch = !searchInput || 
                           cardTitle.includes(searchInput) || 
                           cardDesc.includes(searchInput);
        
        if (typeMatch && budgetMatch && machineMatch && searchMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize filter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to filter elements
    document.getElementById('type-filter').addEventListener('change', applyFilters);
    document.getElementById('budget-filter').addEventListener('change', applyFilters);
    document.getElementById('machine-filter').addEventListener('change', applyFilters);
    document.getElementById('search-input').addEventListener('input', applyFilters);
    
    // Add enter key functionality to search input
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });
});