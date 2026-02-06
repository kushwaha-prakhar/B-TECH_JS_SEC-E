// function handleCick() {
//     const button = document.
//     getElementById("btn");
//     button.textcontent = "Clicked"
// }

// function handleClick() {
//   document.querySelector("h1").style.color = "red"
//   const button = document.getElementById("btn");
//   button.textcontent = "color changed"
// }


function handleClick() {
    // Get the container where elements will be added
    const renderArea = document.getElementById('render-area');
    
    // Check if elements are already rendered to prevent duplicates on multiple clicks
    if (renderArea.children.length > 0) {
        return; 
    }

    // 1. Create and configure the h2 tag
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = 'A New Heading Has Appeared!'; // Set the text content
    
    // 2. Create and configure the image tag
    const imgTag = document.createElement('img');
    imgTag.src = document.getElementById('hidden-image').src; // Get image source
    imgTag.alt = 'Dynamically rendered image'; // Set alt text
    imgTag.style.display = 'block'; // Make the image visible
    imgTag.style.marginTop = '10px'; // Add some spacing
    
    // 3. Append the new elements to the container
    renderArea.appendChild(h2Tag);
    renderArea.appendChild(imgTag);
}
