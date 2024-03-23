async function fetchChamberMembers() {
    try {
        const response = await fetch('chamber/data/members.json'); // Replace 'members.json' with the path to your JSON file
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching chamber members:', error);
    }
}
const chamberMembers = [
    {
        "name": "Company A",
        "address": "123 Main St, City, State",
        "phone": "123-456-7890",
        "website": "https://www.companyA.com",
        "image": "companyA.jpg",
        "membershipLevel": "Gold",
        "otherInfo": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    // Include more member data here...
];

// Filter gold level members
const goldMembers = chamberMembers.filter(member => member.membershipLevel === 'Gold');

// Display gold level members
const goldMemberContainer = document.getElementById('gold-members');
goldMembers.slice(0, 3).forEach(member => {
    const memberCard = `
        <div class="member-card">
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p>${member.otherInfo}</p>
        </div>
    `;
    goldMemberContainer.innerHTML += memberCard;
});