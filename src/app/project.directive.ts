import { Component, OnInit, Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[project-html]',
})

export class ProjectDirective {
  constructor(public viewContainerRef: ViewContainerRef)
  { }
}