import {Component,ElementRef,ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import * as jQuery_ from 'jquery';
import * as toastr_ from 'toastr';

const jQuery  = (<any>jQuery_)['default'] || jQuery_;
const toastr = (<any>toastr_)['default'] || toastr_;
@Component({
  moduleId: __moduleName,
  selector: 'ngnew-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'ngnew.html',
  styleUrls: ['ngnew.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class NgnewApp  {
  defaultMeaning: number = 42;

  constructor(private elementRef:ElementRef){
    toastr.options = { positionClass: 'toast-bottom-right', }
  }

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }

  displayToastr() {
    toastr.info('message');
  }

  // ngOnInit():any{

    //
    //
    // jQuery(this.elementRef.nativeElement).find('button').on('click',function(){
    //  toastr.success("good");
    //   toastr.info('message');
    //   toastr.options = {
    //     "closeButton": false,
    //     "debug": false,
    //     "newestOnTop": false,
    //     "progressBar": false,
    //     "positionClass": "toast-top-right",
    //     "preventDuplicates": false,
    //     "onclick": null,
    //     "showDuration": "300",
    //     "hideDuration": "1000",
    //     "timeOut": "5000",
    //     "extendedTimeOut": "1000",
    //     "showEasing": "swing",
    //     "hideEasing": "linear",
    //     "showMethod": "fadeIn",
    //     "hideMethod": "fadeOut"
    //   }
    //
    // });


  //}
}
