import { Type } from '@angular/core';

export class ProjectView {
  constructor(public component: Type<any>, public data: any) {}
}