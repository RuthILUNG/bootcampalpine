function transportFee(shifts) {
    if (shifts === 'morning') {
        return 'R20';
    } else if (shifts === 'afternoon') {
        return 'R10';
    } else if (shifts === 'nightshift') {
        return 'Free';
    } else {
        return 'Invalid shift';
    }
}

function widget() {
    return {
        selectedShift: '',
        fee: '',
        calculateFee() {
            this.fee = transportFee(this.selectedShift.toLowerCase());
        }
    };
}