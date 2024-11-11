document.getElementById("send-button").addEventListener("click", function() {
  const userInput = document.getElementById("user-input").value;
  if (!userInput) return; // Prevent sending empty messages

  // Create a message container for the user
  const userMessage = document.createElement("div");
  userMessage.className = "message user";

  // Create user profile element
  const userProfile = document.createElement("div");
  userProfile.className = "profile user-profile";
  userProfile.style.backgroundImage = "url('images/user-profile.jpg')"; // Path to the user's profile picture
  userProfile.style.backgroundSize = "cover";
  userProfile.style.backgroundPosition = "center";

  // Add user message text
  userMessage.innerHTML += `<span>${userInput}</span>`;
  
  // Append profile to message
  userMessage.appendChild(userProfile);

  // Add user message to chat
  document.getElementById("messages").appendChild(userMessage);

  // Clear input field
  document.getElementById("user-input").value = "";

  // Display loading message for AI
  const loadingMessage = document.createElement("div");
  loadingMessage.className = "message ai";
  loadingMessage.id = "loading-message";

  // Add AI profile
  const aiProfile = document.createElement("div");
  aiProfile.className = "profile ai-profile";
  aiProfile.style.backgroundImage = "url('C:\Users\HP\Downloads\download.jpeg')"; // Path to AI profile picture
  aiProfile.style.backgroundSize = "cover";
  aiProfile.style.backgroundPosition = "center";

  loadingMessage.appendChild(aiProfile); // Append AI profile to loading message
  loadingMessage.innerHTML += `<span>Loading...</span>`; // Loading text
  document.getElementById("messages").appendChild(loadingMessage);

  // Simulate AI response delay
  setTimeout(() => {
    // Create AI message
    const aiMessage = document.createElement("div");
    aiMessage.className = "message ai";

    // Add AI profile image to message
    aiMessage.appendChild(aiProfile);
    aiMessage.innerHTML += `<span>Hello! How can I assist you today?</span>`; // AI response

    // Append AI message to chat
    document.getElementById("messages").appendChild(aiMessage);

    // Remove loading message
    loadingMessage.remove();
  }, 2000); // 2-second delay for loading effect
});
