declare namespace ಠ_ಠ.clutz.rec {
  class Aclass extends Aclass_Instance {
  }
  class Aclass_Instance {
    private noStructuralTyping_: any;
    foo : ಠ_ಠ.clutz.rec.ns.Arr ;
  }
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'rec.Aclass'): typeof ಠ_ಠ.clutz.rec.Aclass;
}
declare module 'goog:rec.Aclass' {
  import alias = ಠ_ಠ.clutz.rec.Aclass;
  export default alias;
}
declare namespace ಠ_ಠ.clutz.rec.ns {
  type Arr = ಠ_ಠ.clutz.rec.ns.El [] ;
  type El = { arr : ಠ_ಠ.clutz.rec.ns.Arr } ;
  type T = { t : any } ;
  var foo : ಠ_ಠ.clutz.rec.ns.Arr ;
  var foo2 : ಠ_ಠ.clutz.rec.ns.El ;
  var tvar : ಠ_ಠ.clutz.rec.ns.T ;
}
declare namespace ಠ_ಠ.clutz.goog {
  function require(name: 'rec.ns'): typeof ಠ_ಠ.clutz.rec.ns;
}
declare module 'goog:rec.ns' {
  import alias = ಠ_ಠ.clutz.rec.ns;
  export = alias;
}
