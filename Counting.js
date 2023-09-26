function main(income, hour, shift, overtime, tax ){

    let ot = overTime(hour);    
    let otp = overTimePay(overtime, income);
    let tot = ot * otp;
    let pps = income * shift;
    let tp = income * hour + tot;
    let tx = tp *(tax / 100);
    let tpax = tp - tx;
    let esp = extraShiftPay(shift, otp, pps );
    alert(`
        Du har jobbat totalt : ${hour} timmar.
        Totalt belopp före skatt : ${tp}kr.
        Totalt belopp efter skatt : ${tpax}kr.
        Varje pass ger dig : ${pps}kr.
        Efter du nått övertid får du : ${esp}kr per pass. 
        `);


};

function overTime(time){
   let overTime = 0;
    if (time > 165)
    {
        overTime = time - 165;
        
    }
    
    return time;

};

function overTimePay(overTimeProcent, income){
    let overTimePay = income * (overTimeProcent / 100);

    return overTimePay;
};

function extraShiftPay(shiftHours, overTimePay, payPerShift){
    let extraShiftPay = payPerShift + (shiftHours * overTimePay);
    return extraShiftPay;

};