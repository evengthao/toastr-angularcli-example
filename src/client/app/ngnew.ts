import {Component,ElementRef,OnInit} from 'angular2/core';
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
  styleUrls: ['ngnew.css','toastr.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class NgnewApp implements OnInit {
  defaultMeaning: number = 42;

  constructor(private elementRef:ElementRef){}

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }

  ngOnInit():any{



    jQuery(this.elementRef.nativeElement).find('button').on('click',function(){
     toastr['success']("message","title");
      toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

    });


  }
}
