
function totalPhoneBill(d) {
    var thelist = d.split(', ');   
    var calls = 0;
    var sms = 0;   
    for (var j = 0; j < thelist.length; j++) {
        if (thelist[j] === 'call') {
            calls++;
        } else if (thelist[j] === 'sms') {
            sms++;
        }
    }

    const cost = (calls * 2.75) + (sms * 0.65);
    const rcost = 'R' + cost.toFixed(2);
   
    return rcost;
}

// Alpine.js component for total phone bill calculation
Alpine.data('phoneBillCalculator', function() {
    return {
        phoneString: '',
        totalCost: '',
        calculateTotal: function() {
            this.totalCost = totalPhoneBill(this.phoneString);
        }
    };
});
