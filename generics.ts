//////////////////1
const gen1 = <T>(obgj: { value: T }) => {
  console.log(obgj.value);
};

gen1<number>({ value: 2 });

//////////////////2
const gen2 = <T extends { value: string | null }>(obgj: T) => {
  console.log(obgj.value);
};

gen2({ value: null });
gen2({ value: "Hello" });

////////////////////3 INTERFACES GENRICS

interface latos<T> {
  name: T[];
  data: T;
}

interface NumType<Y> extends latos<Y> {
  omar: Y;
}

const objAllNumbers: NumType<number> = {
  name: [1],
  data: 2,
  omar: 8,
};
const objAllStrings: NumType<string> = {
  name: ["as"],
  data: "12",
  omar: "vvv",
};
///////////////////////////////////4 Abstract With Genrics

abstract class BaseAbstractGen<T> {
  protected name: T;
  constructor(ourName: T) {
    this.name = ourName;
  }

  abstract fun1(): T[];
  print() {
    console.log(this.name);
  }
}

class Louta<X> extends BaseAbstractGen<X> {
  constructor(param: X) {
    super(param);
  }
  fun1(...params: X[]): X[] {
    console.log(params);
    return params;
  }
}

const l = new Louta("2222222222222222");
l.print();
l.fun1("aa", "fff");
//////////////////////////////////////5

interface implementable {
  getFullname(): string;
}
/* class DeriveInterface extends implementable{/////////EROOR
    
} */
class DeriveInterface implements implementable {
  getFullname(): string {
    return "";
  }
}
//////////////////STATICS

class Statically {
  static nameF = 20;
  fun3() {
    /*  console.log(nameF); */
    ///////////error
  }
}

const user = new Statically();
/* user.nameF//////////////////////ERROR */
let nameing = Statically.nameF; /////////////////ONLY WAY TO ACCESS STATIC
console.log(nameing);




//////////////////PROTECTED
class Protection {
  protected naming = "sgsg";
  public namning2 = "333";
  func5() {
    console.log(this.naming);
  }
}

class ExteProtection extends Protection {
  func6() {
    console.log(this.naming);
    console.log(this.namning2);
  }
}

const prot = new ExteProtection();
/* console.log(prot.naming); */ /////////////ERRROR
console.log(prot.namning2);

////////////////////////////////////////

class ReadingOnle {
  readonly nameUnChangable = 5;
  funChange() {
    /*  this.nameUnChangable=3 */
    ///////////////////////CANT BE CHANGED
  }
}
const r=new ReadingOnle()


////////////////////////////////////SUPPPER


class BaseSuper {
  constructor(
    public name: string,
    private name2: string,
    readonly name3: string
  ) {}
}

class DerivedSuper extends BaseSuper {
  public name4: string;
  constructor(name1: string, name2: string, name3: string, name4: string) {
    super(name1, name2, name3);
    this.name4 = name4;
  }
}
const laots = new DerivedSuper("w", "a", "c", "f");

////////////////////////////////////////
