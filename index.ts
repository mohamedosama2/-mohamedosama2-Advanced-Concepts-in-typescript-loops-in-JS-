////Abstract Class

abstract class Base {
  protected abstract hello: string;
  abstract race(): void;
  sum() {
    console.log("Initiated");
  }
}

class Derived extends Base {
  /////////////////////MUST BE INITIATED
  hello = "as";

  race(): void {
    console.log("Hello World1");
  }
}

const lato = new Derived();
lato.race();
lato.sum();
/* const lato1=new Base() */ /////Cant be init
