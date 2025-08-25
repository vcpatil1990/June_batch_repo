
class patient{
     constructor(Name,age,dose){

      this.Name=Name;
      this.age=age;
      this.dose=dose;
     }
    pInformation(){
        console.log(`patient name is =${this.Name} his age is ${this.age} and his daily doses are ${this.dose}`);
    }
}
const p=new patient("Amit",24,5);
// p.Name='Prathmesh'
// p.age=45
// p.dose=8
p.pInformation();