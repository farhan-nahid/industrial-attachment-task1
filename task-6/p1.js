const totalBill = {
  currentBill: 1450,
  gasBill: 1800,
  waterBill: 700,
  telephoneBill: 5000,
  internetBill: 500,
  tvBill: 250,
};

// currentBill start

let currentBill = totalBill.currentBill;
if (currentBill <= 400) {
  currentBill += 5;
} else if (currentBill <= 1500) {
  currentBill += 10;
} else if (currentBill <= 5000) {
  currentBill += 15;
} else {
  currentBill += 20;
}

console.log(`currentBill :${currentBill} TK`);

// currentBill end

// gasBill start

let gasBill = totalBill.gasBill;
const gasCharge = gasBill * 0.01;
if (gasCharge >= 30) {
  gasBill += 30;
} else {
  gasBill += gasCharge;
}

console.log(`gasBill :${gasBill} TK`);

// gasBill start

// waterBill start

let waterBill = totalBill.waterBill;
const waterCharge = waterBill * 0.01;
if (waterCharge >= 30) {
  waterBill += 30;
} else {
  waterBill += waterCharge;
}

console.log(`waterBill :${waterBill} TK`);

// waterBill end

// telephoneBill start

let telephoneBill = totalBill.telephoneBill;
const telephoneCharge = telephoneBill * 0.01;
if (telephoneCharge >= 30) {
  telephoneBill += 30;
} else {
  telephoneBill += telephoneCharge;
}

console.log(`telephoneBill :${telephoneBill} TK`);

// telephoneBill end

// internetBill start

const internetBill = totalBill.internetBill;

console.log(`internetBill :${internetBill} TK`);

// internetBill end

// tvBill start

const tvBill = totalBill.tvBill;

console.log(`tvBill :${tvBill} TK`);

// tvBill end

const totalCost = currentBill + gasBill + waterBill + telephoneBill + internetBill + tvBill;

console.log(`totalCost :${totalCost} TK`);
