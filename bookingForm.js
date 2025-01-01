document.getElementById('payNow').addEventListener('change', function() {
    document.getElementById('paymentAmountDiv').style.display = 'block';
  });
  
  document.getElementById('payLater').addEventListener('change', function() {
    document.getElementById('paymentAmountDiv').style.display = 'none';
  });
  
  document.getElementById('reg-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const userName = document.querySelector('input[name="user_name"]').value;
    const contactNo = document.querySelector('input[name="contact_no"]').value;
    const checkInDate = document.querySelector('input[name="dob"]:nth-of-type(1)').value;
    const checkOutDate = document.querySelector('input[name="dob"]:nth-of-type(2)').value;
    const roomType = document.querySelector('select[name="room_type"]').value;
    
    const paymentOption = document.querySelector('input[name="paymentOption"]:checked').value;
    const paymentAmount = document.getElementById('paymentAmount').value;
  
    let bookingRecord = `Name: ${userName}, Contact No.: ${contactNo}, Room Type: ${roomType}, Check-in Date: ${checkInDate}, Check-out Date: ${checkOutDate}, Payment Option: ${paymentOption}`;
  
    if (paymentOption === 'payNow' && paymentAmount) {
      bookingRecord += `, Payment Amount: $${paymentAmount}`;
    }
  
    const bookingHistoryDiv = document.getElementById('bookingHistory');
    const bookingRecordElement = document.createElement('div');
    bookingRecordElement.textContent = bookingRecord;
    bookingHistoryDiv.appendChild(bookingRecordElement);
  
    document.getElementById('reg-form').reset();
  });
  