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
        "name": "MGM Resorts International",
        "address": "3600 S Las Vegas Blvd Bellagio Hotel & Casino,",
        "phone": "1855-788-6775",
        "website": "https://www.mgmresorts.com/",
        "image": "./images/mgm.jpeg",
        "membershipLevel": "Gold",
        "otherInfo": "The best place to come and relax and enjoy the wonderful city of Las Vegas."
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
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
        <img src="${member.image}" alt="${member.name}" width="300" height="100"> <!-- Update this line -->
        <p>Membership Level: ${member.membershipLevel}</p>
        <p>${member.otherInfo}</p>
        </div>
    `;
    goldMemberContainer.innerHTML += memberCard;
});