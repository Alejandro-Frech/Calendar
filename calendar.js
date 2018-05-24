(function() {

    document.getElementById('btnSubmit').onclick = createCalendar;

    function createCalendar() {
     
        let startDate = document.getElementById('startDate').value;
        let days = document.getElementById('days').value;
        let countryCode = document.getElementById('countryCode').value;

        console.log(startDate);
        console.log(days);
        console.log(countryCode);
    
    };

})();