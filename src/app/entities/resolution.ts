export class Resolution {
    id : number = 0;
    cause : string = '';
    subCause : string = '';
    construction : string = '';
    material : string = '';

    constructor(cause : string,subcause:string,construction:string,material:string){
      this.cause=cause;
      this.subCause=subcause;
      this.construction=construction;
      this.material=material;
    }
}
