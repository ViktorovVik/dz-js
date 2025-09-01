
class Billing {
  amount;

  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    return this.amount;
  }
}

class HourBilling extends Billing {

  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {

  constructor(amount, item) {
    super(amount);
    this.item = item;
  }

  calculateTotal() {
    return this.amount * this.item;
  }
}

class DiscountBilling  extends Billing {
  constructor(amount, discount) {
    super(amount);
    this.discount = discount;
  }

  calculateTotal() {
    const result = this.amount * (this.discount / 100);
    return this.amount - result;
  }
}

const fixedBilling = new Billing(100);
console.log("Fixed:", fixedBilling.calculateTotal());

const hourBilling = new HourBilling(50, 3);
console.log("Hour:", hourBilling.calculateTotal());

const itemBilling = new ItemBilling(20, 5);
console.log("Item:", itemBilling.calculateTotal());

const discountBilling = new DiscountBilling(100, 20);
console.log("Discount:", discountBilling.calculateTotal());