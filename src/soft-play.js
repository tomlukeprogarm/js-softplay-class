class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    if (numAdults >= numChildren) {
      this.numAdults += numAdults
      this.numChildren += numChildren
      return true
    }
    return false
  }

  leave(numAdults, numChildren) {
    if (
      this.numAdults >= numAdults &&
      this.numChildren >= numChildren &&
      numAdults >= numChildren &&
      this.numAdults - numAdults === this.numChildren - numChildren
    ) {
      this.numAdults -= numAdults
      this.numChildren -= numChildren
      return true
    }
    return false
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

sp = new Softplay(0, 0)
sp.enter(6, 6)
sp.leave(3, 2)
console.log(sp.occupancy())

module.exports = Softplay
