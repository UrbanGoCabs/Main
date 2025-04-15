<script>
  const form = document.getElementById('bookingForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    }).then(res => {
      if (res.ok) {
        alert("Booking Successful!");
        form.reset();
      } else {
        alert("Booking Failed. Please try again.");
      }
    });
  });
</script>
