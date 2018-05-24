(function() {

    document.getElementById('btnSubmit').onclick = createCalendar;

    function createCalendar() {
        document.getElementById('calendar').innerHTML = '';
        let dateParts = document.getElementById('startDate').value.split('-');
        let days = document.getElementById('days').value;
        let countryCode = document.getElementById('countryCode').value;

        let startDate = new Date(dateParts[0],dateParts[1]-1,dateParts[2]);
        let endDate = new Date(startDate.getTime() + (days*24*60*60*1000));
        BuildCalendars(startDate,endDate);
    
    };

})();

function BuildCalendars(beginDate , endDate){
    console.log(beginDate);
    console.log(endDate);
}