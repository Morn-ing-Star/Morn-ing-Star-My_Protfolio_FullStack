document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var formData = new FormData(this);

    // Send form data to server
    fetch('/send-email', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        alert('Message sent successfully');
        // You may redirect the user to another page or perform other actions here
      } else {
        alert('Failed to send message');
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
      alert('Failed to send message');
    });
  });