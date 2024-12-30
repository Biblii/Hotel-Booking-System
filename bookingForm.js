// Show or hide the payment amount field based on selected payment option
document.getElementById('payNow').addEventListener('change', function() {
    document.getElementById('paymentAmountDiv').style.display = 'block';
  });
  
  document.getElementById('payLater').addEventListener('change', function() {
    document.getElementById('paymentAmountDiv').style.display = 'none';
  });
  
  // Handle form submission
  document.getElementById('reg-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle it with JavaScript
  
    // Get user inputs
    const userName = document.querySelector('input[name="user_name"]').value;
    const contactNo = document.querySelector('input[name="contact_no"]').value;
    const checkInDate = document.querySelector('input[name="dob"]:nth-of-type(1)').value;
    const checkOutDate = document.querySelector('input[name="dob"]:nth-of-type(2)').value;
    const roomType = document.querySelector('select[name="room_type"]').value;
    
    const paymentOption = document.querySelector('input[name="paymentOption"]:checked').value;
    const paymentAmount = document.getElementById('paymentAmount').value;
  
    // Prepare booking record
    let bookingRecord = `Name: ${userName}, Contact No.: ${contactNo}, Room Type: ${roomType}, Check-in Date: ${checkInDate}, Check-out Date: ${checkOutDate}, Payment Option: ${paymentOption}`;
  
    if (paymentOption === 'payNow' && paymentAmount) {
      bookingRecord += `, Payment Amount: $${paymentAmount}`;
    }
  
    // Add the booking record to booking history section
    const bookingHistoryDiv = document.getElementById('bookingHistory');
    const bookingRecordElement = document.createElement('div');
    bookingRecordElement.textContent = bookingRecord;
    bookingHistoryDiv.appendChild(bookingRecordElement);
  
    // Clear the form after submission (optional)
    document.getElementById('reg-form').reset();
  });
  