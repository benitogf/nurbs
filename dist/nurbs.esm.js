// @flow
class Nurbs {
  constructor (opt) {
    this.name = (opt && opt.name) ? opt.name : 'nurb';
    this.version = (opt && opt.version) ? opt.version : 1;
  }
}

export default Nurbs;
