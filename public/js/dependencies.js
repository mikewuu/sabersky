$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
});
$(document).ready(function () {
    autosize($('.autosize'));
});


$(document).ready(function () {
    $('.datepicker').datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0
    });

    $('.filter-datepicker').datepicker({
        dateFormat: "dd/mm/yy"
    });
});
Dropzone.autoDiscover = false;


//
// $(document).ready(function() {
//
//     // Dropzone
//     Dropzone.options.addPhotosForm = {
//         paramName: 'photo',                             // name of the input, in controller: $request->file('photo')
//         maxFileSize: 3,                                 // File size in Mb
//         acceptedFiles: '.jpg, .jpeg, .png, .bmp',       // file formats accepted
//     };
// });
$(document).ready(function() {
    $(".fancybox").fancybox();
});
// $('.bs-file-input').fileinput();
//
// (function () {
//     $('.bs-file-input').fileinput({
//         'showUpload': false,
//         'allowedFileExtensions': ['jpg', 'gif', 'png'],
//         'showRemove': false,
//         'showCaption': false,
//         'previewSettings': {
//             image: {width: "120px", height: "120px"}
//         },
//         'browseLabel': 'Photo',
//         'browseIcon': '<i class="fa fa-plus"></i> &nbsp;',
//         'browseClass': 'btn btn-outline-grey',
//         'layoutTemplates': {
//             preview: '<div class="file-preview {class}">\n' +
//             '    <div class="close fileinput-remove">Clear</div>\n' +
//             '    <div class="{dropClass}">\n' +
//             '    <div class="file-preview-thumbnails">\n' +
//             '    </div>\n' +
//             '    <div class="clearfix"></div>' +
//             '    <div class="file-preview-status text-center text-success"></div>\n' +
//             '    <div class="kv-fileinput-error"></div>\n' +
//             '    </div>\n' +
//             '</div>'
//         }
//     });
// })();
//
// (function () {
//     var uploadUrl = 'http:' + $('#form-item-photo').attr('action');
//     var $input = $('#purchase-request-single .input-item-photos');
//     $input.fileinput({
//         uploadUrl: uploadUrl,
//         uploadAsync: true,
//         allowedFileExtensions: ['jpg', 'gif', 'png'],
//         showRemove: false,
//         showCaption: false,
//         showPreview: false,
//         showCancel: false,
//         showUpload: false,
//         browseIcon: '<i class="fa fa-plus"></i> &nbsp;',
//         browseClass: 'btn btn-outline-grey',
//         browseLabel: 'Photo'
//     }).on("filebatchselected", function (event, files) {
//         $input.fileinput("upload");
//     }).on('filebatchuploadcomplete', function (event, files, extra) {
//         location.reload();
//     });
// })();

$(document).ready(function () {
    // Moment JS
    moment.locale('en'); // 'en';
});
// $(document).ready(function () {
//     $.noty.themes.customTheme = {
//         name    : 'customTheme',
//         helpers : {
//             borderFix: function() {
//                 if(this.options.dismissQueue) {
//                     var selector = this.options.layout.container.selector + ' ' + this.options.layout.parent.selector;
//                     switch(this.options.layout.name) {
//                         case 'top':
//                         case 'topCenter':
//                         case 'topLeft':
//                         case 'topRight':
//                         case 'bottomCenter':
//                             $(selector).css({
//                                 borderRadius: '0',
//                                 width: '100%'
//                             });
//                             $(selector).first().css({
//                                 'border-top-left-radius': '0',
//                                 'border-top-right-radius': '0',
//                                 width: '100%'
//                             });
//                             $(selector).last().css({'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
//                             break;
//                         case 'bottomLeft':
//                         case 'bottomRight':
//                         case 'center':
//                         case 'centerLeft':
//                         case 'centerRight':
//                         case 'inline':
//                         case 'bottom':
//                         default:
//                             break;
//                     }
//                 }
//             }
//         },
//         modal   : {
//             css: {
//                 position       : 'fixed',
//                 width          : '100%',
//                 height         : '100%',
//                 backgroundColor: '#000',
//                 zIndex         : 10000,
//                 opacity        : 0.6,
//                 display        : 'none',
//                 left           : 0,
//                 top            : 0
//             }
//         },
//         style   : function() {
//
//             this.$bar.css({
//                 overflow  : 'hidden'
//             });
//
//             this.$message.css({
//                 fontSize  : '16px',
//                 lineHeight: '16px',
//                 textAlign : 'center',
//                 padding   : '8px 10px 9px',
//                 width     : 'auto',
//                 position  : 'relative',
//                 height: '60px',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             });
//
//             this.$closeButton.css({
//                 position  : 'absolute',
//                 top       : 4, right: 4,
//                 width     : 10, height: 10,
//                 background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
//                 display   : 'none',
//                 cursor    : 'pointer'
//             });
//
//             this.$buttons.css({
//                 padding        : 5,
//                 textAlign      : 'right',
//                 borderTop      : '1px solid #ccc',
//                 backgroundColor: '#fff'
//             });
//
//             this.$buttons.find('button').css({
//                 marginLeft: 5
//             });
//
//             this.$buttons.find('button:first').css({
//                 marginLeft: 0
//             });
//
//             this.$bar.on({
//                 mouseenter: function() {
//                     $(this).find('.noty_close').stop().fadeTo('normal', 1);
//                 },
//                 mouseleave: function() {
//                     $(this).find('.noty_close').stop().fadeTo('normal', 0);
//                 }
//             });
//
//             switch(this.options.layout.name) {
//                 case 'top':
//                 case 'topCenter':
//                 case 'center':
//                 case 'bottomCenter':
//                     this.$bar.css({
//                         borderRadius: '0',
//                         borderTop      : '2px solid #eee',
//                         boxShadow   : "0 2px 4px rgba(0, 0, 0, 0.1)"
//                     });
//                     break;
//                 case 'inline':
//                 case 'topLeft':
//                 case 'topRight':
//                 case 'bottomLeft':
//                 case 'bottomRight':
//                 case 'centerLeft':
//                 case 'centerRight':
//                 case 'bottom':
//                 default:
//                     this.$bar.css({
//                         border   : '2px solid #eee',
//                         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
//                     });
//                     break;
//             }
//
//             switch(this.options.type) {
//                 case 'alert':
//                 case 'notification':
//                     this.$bar.css({backgroundColor: '#A1A4AA', borderColor: '#989898', color: '#FFF'});
//                     break;
//                 case 'warning':
//                     this.$bar.css({backgroundColor: '#F1C40F', borderColor: '#F39C12', color: '#FFF'});
//                     this.$buttons.css({borderTop: '1px solid #FFC237'});
//                     break;
//                 case 'error':
//                     this.$bar.css({
//                         backgroundColor: '#E74C3C', borderColor: '#C0392B', color: '#FFFFFF'
//                     });
//                     this.$buttons.css({borderTop: '1px solid darkred'});
//                     break;
//                 case 'information':
//                     this.$bar.css({backgroundColor: '#3498DB', borderColor: '#2980B9', color: '#FFFFFF'});
//                     this.$buttons.css({borderTop: '1px solid #0B90C4'});
//                     break;
//                 case 'success':
//                     this.$bar.css({backgroundColor: '#2ECC71', borderColor: '#27AE60', color: '#FFF'});
//                     this.$buttons.css({borderTop: '1px solid #50C24E'});
//                     break;
//                 default:
//                     this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
//                     break;
//             }
//         },
//         callback: {
//             onShow : function() {
//                 $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
//             },
//             onClose: function() {
//                 $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
//             }
//         }
//     };
// });
//

$('.select-picker').selectpicker({
    iconBase: 'fa',
    tickIcon: 'fa-check'
});
/**
 * Selectize Instantiator
 *
 * Calls the selectize plugin with an added filter that won't let
 * you add new values that are duplicates. Ignores the case of
 * the value and sorts the dropdown selects using the text.
 */

function uniqueSelectize(el, placeholder) {
    var unique = $(el).selectize({
        create: true,
        sortField: 'text',
        placeholder: placeholder,
        createFilter: function(input) {
            input = input.toLowerCase();
            var array = $.map(unique.options, function(value) {
                return [value];
            });
            var unmatched = true;
            _.forEach(array, function (option) {
                if((option.text).toLowerCase() === input) {
                    unmatched = false;
                }
            });
            return unmatched;
        }
    })[0].selectize;

    return unique;
}
toastr.options = {
    "closeButton": true,
    "closeHtml": '<button type="button" class="btn-close"><i class="fa fa-close"></i></button>',
    "debug": false,
    "newestOnTop": true,
    "positionClass": "toast-bottom-right",
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
};
// Snap.svg 0.4.1
//
// Copyright (c) 2013 – 2015 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2015-04-13

!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g=/\s*,\s*/,h="*",i=function(a,b){return a-b},j={n:{}},k=function(){for(var a=0,b=this.length;b>a;a++)if("undefined"!=typeof this[a])return this[a]},l=function(){for(var a=this.length;--a;)if("undefined"!=typeof this[a])return this[a]},m=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=m.listeners(a),j=0,n=[],o={},p=[],q=b;p.firstDefined=k,p.lastDefined=l,b=a,c=0;for(var r=0,s=h.length;s>r;r++)"zIndex"in h[r]&&(n.push(h[r].zIndex),h[r].zIndex<0&&(o[h[r].zIndex]=h[r]));for(n.sort(i);n[j]<0;)if(e=o[n[j++]],p.push(e.apply(d,g)),c)return c=f,p;for(r=0;s>r;r++)if(e=h[r],"zIndex"in e)if(e.zIndex==n[j]){if(p.push(e.apply(d,g)),c)break;do if(j++,e=o[n[j]],e&&p.push(e.apply(d,g)),c)break;while(e)}else o[e.zIndex]=e;else if(p.push(e.apply(d,g)),c)break;return c=f,b=q,p};m._events=j,m.listeners=function(a){var b,c,d,e,g,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,g=m.length;g>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[h]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},m.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(g),d=0,e=c.length;e>d;d++)!function(a){for(var c,d=a.split(f),e=j,g=0,h=d.length;h>g;g++)e=e.n,e=e.hasOwnProperty(d[g])&&e[d[g]]||(e[d[g]]={n:{}});for(e.f=e.f||[],g=0,h=e.f.length;h>g;g++)if(e.f[g]==b){c=!0;break}!c&&e.f.push(b)}(c[d]);return function(a){+a==+a&&(b.zIndex=+a)}},m.f=function(a){var b=[].slice.call(arguments,1);return function(){m.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},m.stop=function(){c=1},m.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},m.nts=function(){return b.split(f)},m.off=m.unbind=function(a,b){if(!a)return void(m._events=j={n:{}});var c=a.split(g);if(c.length>1)for(var d=0,i=c.length;i>d;d++)m.off(c[d],b);else{c=a.split(f);var k,l,n,d,i,o,p,q=[j];for(d=0,i=c.length;i>d;d++)for(o=0;o<q.length;o+=n.length-2){if(n=[o,1],k=q[o].n,c[d]!=h)k[c[d]]&&n.push(k[c[d]]);else for(l in k)k[e](l)&&n.push(k[l]);q.splice.apply(q,n)}for(d=0,i=q.length;i>d;d++)for(k=q[d];k.n;){if(b){if(k.f){for(o=0,p=k.f.length;p>o;o++)if(k.f[o]==b){k.f.splice(o,1);break}!k.f.length&&delete k.f}for(l in k.n)if(k.n[e](l)&&k.n[l].f){var r=k.n[l].f;for(o=0,p=r.length;p>o;o++)if(r[o]==b){r.splice(o,1);break}!r.length&&delete k.n[l].f}}else{delete k.f;for(l in k.n)k.n[e](l)&&k.n[l].f&&delete k.n[l].f}k=k.n}}},m.once=function(a,b){var c=function(){return m.unbind(a,c),b.apply(this,arguments)};return m.on(a,c)},m.version=d,m.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=m:"function"==typeof define&&define.amd?define("eve",[],function(){return m}):a.eve=m}(this),function(a,b){if("function"==typeof define&&define.amd)define(["eve"],function(c){return b(a,c)});else if("undefined"!=typeof exports){var c=require("eve");module.exports=b(a,c)}else b(a,a.eve)}(window||this,function(a,b){var c=function(b){var c={},d=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},e=Array.isArray||function(a){return a instanceof Array||"[object Array]"==Object.prototype.toString.call(a)},f=0,g="M"+(+new Date).toString(36),h=function(){return g+(f++).toString(36)},i=Date.now||function(){return+new Date},j=function(a){var b=this;if(null==a)return b.s;var c=b.s-a;b.b+=b.dur*c,b.B+=b.dur*c,b.s=a},k=function(a){var b=this;return null==a?b.spd:void(b.spd=a)},l=function(a){var b=this;return null==a?b.dur:(b.s=b.s*a/b.dur,void(b.dur=a))},m=function(){var a=this;delete c[a.id],a.update(),b("mina.stop."+a.id,a)},n=function(){var a=this;a.pdif||(delete c[a.id],a.update(),a.pdif=a.get()-a.b)},o=function(){var a=this;a.pdif&&(a.b=a.get()-a.pdif,delete a.pdif,c[a.id]=a)},p=function(){var a,b=this;if(e(b.start)){a=[];for(var c=0,d=b.start.length;d>c;c++)a[c]=+b.start[c]+(b.end[c]-b.start[c])*b.easing(b.s)}else a=+b.start+(b.end-b.start)*b.easing(b.s);b.set(a)},q=function(){var a=0;for(var e in c)if(c.hasOwnProperty(e)){var f=c[e],g=f.get();a++,f.s=(g-f.b)/(f.dur/f.spd),f.s>=1&&(delete c[e],f.s=1,a--,function(a){setTimeout(function(){b("mina.finish."+a.id,a)})}(f)),f.update()}a&&d(q)},r=function(a,b,e,f,g,i,s){var t={id:h(),start:a,end:b,b:e,s:0,dur:f-e,spd:1,get:g,set:i,easing:s||r.linear,status:j,speed:k,duration:l,stop:m,pause:n,resume:o,update:p};c[t.id]=t;var u,v=0;for(u in c)if(c.hasOwnProperty(u)&&(v++,2==v))break;return 1==v&&d(q),t};return r.time=i,r.getById=function(a){return c[a]||null},r.linear=function(a){return a},r.easeout=function(a){return Math.pow(a,1.7)},r.easein=function(a){return Math.pow(a,.48)},r.easeinout=function(a){if(1==a)return 1;if(0==a)return 0;var b=.48-a/1.04,c=Math.sqrt(.1734+b*b),d=c-b,e=Math.pow(Math.abs(d),1/3)*(0>d?-1:1),f=-c-b,g=Math.pow(Math.abs(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},r.backin=function(a){if(1==a)return 1;var b=1.70158;return a*a*((b+1)*a-b)},r.backout=function(a){if(0==a)return 0;a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},r.elastic=function(a){return a==!!a?a:Math.pow(2,-10*a)*Math.sin(2*(a-.075)*Math.PI/.3)+1},r.bounce=function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b},a.mina=r,r}("undefined"==typeof b?function(){}:b),d=function(a){function c(a,b){if(a){if(a.nodeType)return w(a);if(e(a,"array")&&c.set)return c.set.apply(c,a);if(a instanceof s)return a;if(null==b)return a=y.doc.querySelector(String(a)),w(a)}return a=null==a?"100%":a,b=null==b?"100%":b,new v(a,b)}function d(a,b){if(b){if("#text"==a&&(a=y.doc.createTextNode(b.text||b["#text"]||"")),"#comment"==a&&(a=y.doc.createComment(b.text||b["#text"]||"")),"string"==typeof a&&(a=d(a)),"string"==typeof b)return 1==a.nodeType?"xlink:"==b.substring(0,6)?a.getAttributeNS(T,b.substring(6)):"xml:"==b.substring(0,4)?a.getAttributeNS(U,b.substring(4)):a.getAttribute(b):"text"==b?a.nodeValue:null;if(1==a.nodeType){for(var c in b)if(b[z](c)){var e=A(b[c]);e?"xlink:"==c.substring(0,6)?a.setAttributeNS(T,c.substring(6),e):"xml:"==c.substring(0,4)?a.setAttributeNS(U,c.substring(4),e):a.setAttribute(c,e):a.removeAttribute(c)}}else"text"in b&&(a.nodeValue=b.text)}else a=y.doc.createElementNS(U,a);return a}function e(a,b){return b=A.prototype.toLowerCase.call(b),"finite"==b?isFinite(a):"array"==b&&(a instanceof Array||Array.isArray&&Array.isArray(a))?!0:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||J.call(a).slice(8,-1).toLowerCase()==b}function f(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=f(a[c]));return b}function h(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function i(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),g=d.cache=d.cache||{},i=d.count=d.count||[];return g[z](f)?(h(i,f),c?c(g[f]):g[f]):(i.length>=1e3&&delete g[i.shift()],i.push(f),g[f]=a.apply(b,e),c?c(g[f]):g[f])}return d}function j(a,b,c,d,e,f){if(null==e){var g=a-c,h=b-d;return g||h?(180+180*D.atan2(-h,-g)/H+360)%360:0}return j(a,b,e,f)-j(c,d,e,f)}function k(a){return a%360*H/180}function l(a){return 180*a/H%360}function m(a){var b=[];return a=a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(a,c,d){return d=d.split(/\s*,\s*|\s+/),"rotate"==c&&1==d.length&&d.push(0,0),"scale"==c&&(d.length>2?d=d.slice(0,2):2==d.length&&d.push(0,0),1==d.length&&d.push(d[0],0,0)),b.push("skewX"==c?["m",1,0,D.tan(k(d[0])),1,0,0]:"skewY"==c?["m",1,D.tan(k(d[0])),0,1,0,0]:[c.charAt(0)].concat(d)),a}),b}function n(a,b){var d=ab(a),e=new c.Matrix;if(d)for(var f=0,g=d.length;g>f;f++){var h,i,j,k,l,m=d[f],n=m.length,o=A(m[0]).toLowerCase(),p=m[0]!=o,q=p?e.invert():0;"t"==o&&2==n?e.translate(m[1],0):"t"==o&&3==n?p?(h=q.x(0,0),i=q.y(0,0),j=q.x(m[1],m[2]),k=q.y(m[1],m[2]),e.translate(j-h,k-i)):e.translate(m[1],m[2]):"r"==o?2==n?(l=l||b,e.rotate(m[1],l.x+l.width/2,l.y+l.height/2)):4==n&&(p?(j=q.x(m[2],m[3]),k=q.y(m[2],m[3]),e.rotate(m[1],j,k)):e.rotate(m[1],m[2],m[3])):"s"==o?2==n||3==n?(l=l||b,e.scale(m[1],m[n-1],l.x+l.width/2,l.y+l.height/2)):4==n?p?(j=q.x(m[2],m[3]),k=q.y(m[2],m[3]),e.scale(m[1],m[1],j,k)):e.scale(m[1],m[1],m[2],m[3]):5==n&&(p?(j=q.x(m[3],m[4]),k=q.y(m[3],m[4]),e.scale(m[1],m[2],j,k)):e.scale(m[1],m[2],m[3],m[4])):"m"==o&&7==n&&e.add(m[1],m[2],m[3],m[4],m[5],m[6])}return e}function o(a){var b=a.node.ownerSVGElement&&w(a.node.ownerSVGElement)||a.node.parentNode&&w(a.node.parentNode)||c.select("svg")||c(0,0),d=b.select("defs"),e=null==d?!1:d.node;return e||(e=u("defs",b.node).node),e}function p(a){return a.node.ownerSVGElement&&w(a.node.ownerSVGElement)||c.select("svg")}function q(a,b,c){function e(a){if(null==a)return I;if(a==+a)return a;d(j,{width:a});try{return j.getBBox().width}catch(b){return 0}}function f(a){if(null==a)return I;if(a==+a)return a;d(j,{height:a});try{return j.getBBox().height}catch(b){return 0}}function g(d,e){null==b?i[d]=e(a.attr(d)||0):d==b&&(i=e(null==c?a.attr(d)||0:c))}var h=p(a).node,i={},j=h.querySelector(".svg---mgr");switch(j||(j=d("rect"),d(j,{x:-9e9,y:-9e9,width:10,height:10,"class":"svg---mgr",fill:"none"}),h.appendChild(j)),a.type){case"rect":g("rx",e),g("ry",f);case"image":g("width",e),g("height",f);case"text":g("x",e),g("y",f);break;case"circle":g("cx",e),g("cy",f),g("r",e);break;case"ellipse":g("cx",e),g("cy",f),g("rx",e),g("ry",f);break;case"line":g("x1",e),g("x2",e),g("y1",f),g("y2",f);break;case"marker":g("refX",e),g("markerWidth",e),g("refY",f),g("markerHeight",f);break;case"radialGradient":g("fx",e),g("fy",f);break;case"tspan":g("dx",e),g("dy",f);break;default:g(b,e)}return h.removeChild(j),i}function r(a){e(a,"array")||(a=Array.prototype.slice.call(arguments,0));for(var b=0,c=0,d=this.node;this[b];)delete this[b++];for(b=0;b<a.length;b++)"set"==a[b].type?a[b].forEach(function(a){d.appendChild(a.node)}):d.appendChild(a[b].node);var f=d.childNodes;for(b=0;b<f.length;b++)this[c++]=w(f[b]);return this}function s(a){if(a.snap in V)return V[a.snap];var b;try{b=a.ownerSVGElement}catch(c){}this.node=a,b&&(this.paper=new v(b)),this.type=a.tagName||a.nodeName;var d=this.id=S(this);if(this.anims={},this._={transform:[]},a.snap=d,V[d]=this,"g"==this.type&&(this.add=r),this.type in{g:1,mask:1,pattern:1,symbol:1})for(var e in v.prototype)v.prototype[z](e)&&(this[e]=v.prototype[e])}function t(a){this.node=a}function u(a,b){var c=d(a);b.appendChild(c);var e=w(c);return e}function v(a,b){var c,e,f,g=v.prototype;if(a&&"svg"==a.tagName){if(a.snap in V)return V[a.snap];var h=a.ownerDocument;c=new s(a),e=a.getElementsByTagName("desc")[0],f=a.getElementsByTagName("defs")[0],e||(e=d("desc"),e.appendChild(h.createTextNode("Created with Snap")),c.node.appendChild(e)),f||(f=d("defs"),c.node.appendChild(f)),c.defs=f;for(var i in g)g[z](i)&&(c[i]=g[i]);c.paper=c.root=c}else c=u("svg",y.doc.body),d(c.node,{height:b,version:1.1,width:a,xmlns:U});return c}function w(a){return a?a instanceof s||a instanceof t?a:a.tagName&&"svg"==a.tagName.toLowerCase()?new v(a):a.tagName&&"object"==a.tagName.toLowerCase()&&"image/svg+xml"==a.type?new v(a.contentDocument.getElementsByTagName("svg")[0]):new s(a):a}function x(a,b){for(var c=0,d=a.length;d>c;c++){var e={type:a[c].type,attr:a[c].attr()},f=a[c].children();b.push(e),f.length&&x(f,e.childNodes=[])}}c.version="0.4.0",c.toString=function(){return"Snap v"+this.version},c._={};var y={win:a.window,doc:a.window.document};c._.glob=y;{var z="hasOwnProperty",A=String,B=parseFloat,C=parseInt,D=Math,E=D.max,F=D.min,G=D.abs,H=(D.pow,D.PI),I=(D.round,""),J=Object.prototype.toString,K=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,L=(c._.separator=/[,\s]+/,/[\s]*,[\s]*/),M={hs:1,rg:1},N=/([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,O=/([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,P=/(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi,Q=0,R="S"+(+new Date).toString(36),S=function(a){return(a&&a.type?a.type:I)+R+(Q++).toString(36)},T="http://www.w3.org/1999/xlink",U="http://www.w3.org/2000/svg",V={};c.url=function(a){return"url('#"+a+"')"}}c._.$=d,c._.id=S,c.format=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return A(b).replace(a,function(a,b){return c(a,b,d)})}}(),c._.clone=f,c._.cacher=i,c.rad=k,c.deg=l,c.sin=function(a){return D.sin(c.rad(a))},c.tan=function(a){return D.tan(c.rad(a))},c.cos=function(a){return D.cos(c.rad(a))},c.asin=function(a){return c.deg(D.asin(a))},c.acos=function(a){return c.deg(D.acos(a))},c.atan=function(a){return c.deg(D.atan(a))},c.atan2=function(a){return c.deg(D.atan2(a))},c.angle=j,c.len=function(a,b,d,e){return Math.sqrt(c.len2(a,b,d,e))},c.len2=function(a,b,c,d){return(a-c)*(a-c)+(b-d)*(b-d)},c.closestPoint=function(a,b,c){function d(a){var d=a.x-b,e=a.y-c;return d*d+e*e}for(var e,f,g,h,i=a.node,j=i.getTotalLength(),k=j/i.pathSegList.numberOfItems*.125,l=1/0,m=0;j>=m;m+=k)(h=d(g=i.getPointAtLength(m)))<l&&(e=g,f=m,l=h);for(k*=.5;k>.5;){var n,o,p,q,r,s;(p=f-k)>=0&&(r=d(n=i.getPointAtLength(p)))<l?(e=n,f=p,l=r):(q=f+k)<=j&&(s=d(o=i.getPointAtLength(q)))<l?(e=o,f=q,l=s):k*=.5}return e={x:e.x,y:e.y,length:f,distance:Math.sqrt(l)}},c.is=e,c.snapTo=function(a,b,c){if(c=e(c,"finite")?c:10,e(a,"array")){for(var d=a.length;d--;)if(G(a[d]-b)<=c)return a[d]}else{a=+a;var f=b%a;if(c>f)return b-f;if(f>a-c)return b-f+a}return b},c.getRGB=i(function(a){if(!a||(a=A(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:Z};if(!(M[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=W(a)),!a)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z};var b,d,f,g,h,i,j=a.match(K);return j?(j[2]&&(f=C(j[2].substring(5),16),d=C(j[2].substring(3,5),16),b=C(j[2].substring(1,3),16)),j[3]&&(f=C((h=j[3].charAt(3))+h,16),d=C((h=j[3].charAt(2))+h,16),b=C((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=B(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),f=B(i[2]),"%"==i[2].slice(-1)&&(f*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100)),j[5]?(i=j[5].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b/=100),d=B(i[1]),"%"==i[1].slice(-1)&&(d/=100),f=B(i[2]),"%"==i[2].slice(-1)&&(f/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),c.hsb2rgb(b,d,f,g)):j[6]?(i=j[6].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b/=100),d=B(i[1]),"%"==i[1].slice(-1)&&(d/=100),f=B(i[2]),"%"==i[2].slice(-1)&&(f/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),c.hsl2rgb(b,d,f,g)):(b=F(D.round(b),255),d=F(D.round(d),255),f=F(D.round(f),255),g=F(E(g,0),1),j={r:b,g:d,b:f,toString:Z},j.hex="#"+(16777216|f|d<<8|b<<16).toString(16).slice(1),j.opacity=e(g,"finite")?g:1,j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z}},c),c.hsb=i(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=i(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=i(function(a,b,c,d){if(e(d,"finite")){var f=D.round;return"rgba("+[f(a),f(b),f(c),+d.toFixed(2)]+")"}return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)});var W=function(a){var b=y.doc.getElementsByTagName("head")[0]||y.doc.getElementsByTagName("svg")[0],c="rgb(255, 0, 0)";return(W=i(function(a){if("red"==a.toLowerCase())return c;b.style.color=c,b.style.color=a;var d=y.doc.defaultView.getComputedStyle(b,I).getPropertyValue("color");return d==c?null:d}))(a)},X=function(){return"hsb("+[this.h,this.s,this.b]+")"},Y=function(){return"hsl("+[this.h,this.s,this.l]+")"},Z=function(){return 1==this.opacity||null==this.opacity?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")"},$=function(a,b,d){if(null==b&&e(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&e(a,string)){var f=c.getRGB(a);a=f.r,b=f.g,d=f.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},_=function(a,b,d,f){a=D.round(255*a),b=D.round(255*b),d=D.round(255*d);var g={r:a,g:b,b:d,opacity:e(f,"finite")?f:1,hex:c.rgb(a,b,d),toString:Z};return e(f,"finite")&&(g.opacity=f),g};c.color=function(a){var b;return e(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):e(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):(e(a,"string")&&(a=c.getRGB(a)),e(a,"object")&&"r"in a&&"g"in a&&"b"in a&&!("error"in a)?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1,a.error=1)),a.toString=Z,a},c.hsb2rgb=function(a,b,c,d){e(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var f,g,h,i,j;return a=a%360/60,j=c*b,i=j*(1-G(a%2-1)),f=g=h=c-j,a=~~a,f+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],_(f,g,h,d)},c.hsl2rgb=function(a,b,c,d){e(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var f,g,h,i,j;return a=a%360/60,j=2*b*(.5>c?c:1-c),i=j*(1-G(a%2-1)),f=g=h=c-j/2,a=~~a,f+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],_(f,g,h,d)},c.rgb2hsb=function(a,b,c){c=$(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=E(a,b,c),g=f-F(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:X}},c.rgb2hsl=function(a,b,c){c=$(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=E(a,b,c),h=F(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:Y}},c.parsePathString=function(a){if(!a)return null;var b=c.path(a);if(b.arr)return c.path.clone(b.arr);var d={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},f=[];return e(a,"array")&&e(a[0],"array")&&(f=c.path.clone(a)),f.length||A(a).replace(N,function(a,b,c){var e=[],g=b.toLowerCase();if(c.replace(P,function(a,b){b&&e.push(+b)}),"m"==g&&e.length>2&&(f.push([b].concat(e.splice(0,2))),g="l",b="m"==b?"l":"L"),"o"==g&&1==e.length&&f.push([b,e[0]]),"r"==g)f.push([b].concat(e));else for(;e.length>=d[g]&&(f.push([b].concat(e.splice(0,d[g]))),d[g]););}),f.toString=c.path.toString,b.arr=c.path.clone(f),f};var ab=c.parseTransformString=function(a){if(!a)return null;var b=[];return e(a,"array")&&e(a[0],"array")&&(b=c.path.clone(a)),b.length||A(a).replace(O,function(a,c,d){{var e=[];c.toLowerCase()}d.replace(P,function(a,b){b&&e.push(+b)}),b.push([c].concat(e))}),b.toString=c.path.toString,b};c._.svgTransform2string=m,c._.rgTransform=/^[a-z][\s]*-?\.?\d/i,c._.transform2matrix=n,c._unit2px=q;y.doc.contains||y.doc.compareDocumentPosition?function(a,b){var c=9==a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a==d||!(!d||1!=d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b;)if(b=b.parentNode,b==a)return!0;return!1};c._.getSomeDefs=o,c._.getSomeSVG=p,c.select=function(a){return a=A(a).replace(/([^\\]):/g,"$1\\:"),w(y.doc.querySelector(a))},c.selectAll=function(a){for(var b=y.doc.querySelectorAll(a),d=(c.set||Array)(),e=0;e<b.length;e++)d.push(w(b[e]));return d},setInterval(function(){for(var a in V)if(V[z](a)){var b=V[a],c=b.node;("svg"!=b.type&&!c.ownerSVGElement||"svg"==b.type&&(!c.parentNode||"ownerSVGElement"in c.parentNode&&!c.ownerSVGElement))&&delete V[a]}},1e4),s.prototype.attr=function(a,c){var d=this,f=d.node;if(!a){if(1!=f.nodeType)return{text:f.nodeValue};for(var g=f.attributes,h={},i=0,j=g.length;j>i;i++)h[g[i].nodeName]=g[i].nodeValue;return h}if(e(a,"string")){if(!(arguments.length>1))return b("snap.util.getattr."+a,d).firstDefined();var k={};k[a]=c,a=k}for(var l in a)a[z](l)&&b("snap.util.attr."+l,d,a[l]);return d},c.parse=function(a){var b=y.doc.createDocumentFragment(),c=!0,d=y.doc.createElement("div");if(a=A(a),a.match(/^\s*<\s*svg(?:\s|>)/)||(a="<svg>"+a+"</svg>",c=!1),d.innerHTML=a,a=d.getElementsByTagName("svg")[0])if(c)b=a;else for(;a.firstChild;)b.appendChild(a.firstChild);return new t(b)},c.fragment=function(){for(var a=Array.prototype.slice.call(arguments,0),b=y.doc.createDocumentFragment(),d=0,e=a.length;e>d;d++){var f=a[d];f.node&&f.node.nodeType&&b.appendChild(f.node),f.nodeType&&b.appendChild(f),"string"==typeof f&&b.appendChild(c.parse(f).node)}return new t(b)},c._.make=u,c._.wrap=w,v.prototype.el=function(a,b){var c=u(a,this.node);return b&&c.attr(b),c},s.prototype.children=function(){for(var a=[],b=this.node.childNodes,d=0,e=b.length;e>d;d++)a[d]=c(b[d]);return a},s.prototype.toJSON=function(){var a=[];return x([this],a),a[0]},b.on("snap.util.getattr",function(){var a=b.nt();a=a.substring(a.lastIndexOf(".")+1);var c=a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});return bb[z](c)?this.node.ownerDocument.defaultView.getComputedStyle(this.node,null).getPropertyValue(c):d(this.node,a)});var bb={"alignment-baseline":0,"baseline-shift":0,clip:0,"clip-path":0,"clip-rule":0,color:0,"color-interpolation":0,"color-interpolation-filters":0,"color-profile":0,"color-rendering":0,cursor:0,direction:0,display:0,"dominant-baseline":0,"enable-background":0,fill:0,"fill-opacity":0,"fill-rule":0,filter:0,"flood-color":0,"flood-opacity":0,font:0,"font-family":0,"font-size":0,"font-size-adjust":0,"font-stretch":0,"font-style":0,"font-variant":0,"font-weight":0,"glyph-orientation-horizontal":0,"glyph-orientation-vertical":0,"image-rendering":0,kerning:0,"letter-spacing":0,"lighting-color":0,marker:0,"marker-end":0,"marker-mid":0,"marker-start":0,mask:0,opacity:0,overflow:0,"pointer-events":0,"shape-rendering":0,"stop-color":0,"stop-opacity":0,stroke:0,"stroke-dasharray":0,"stroke-dashoffset":0,"stroke-linecap":0,"stroke-linejoin":0,"stroke-miterlimit":0,"stroke-opacity":0,"stroke-width":0,"text-anchor":0,"text-decoration":0,"text-rendering":0,"unicode-bidi":0,visibility:0,"word-spacing":0,"writing-mode":0};b.on("snap.util.attr",function(a){var c=b.nt(),e={};c=c.substring(c.lastIndexOf(".")+1),e[c]=a;var f=c.replace(/-(\w)/gi,function(a,b){return b.toUpperCase()}),g=c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});bb[z](g)?this.node.style[f]=null==a?I:a:d(this.node,e)}),function(){}(v.prototype),c.ajax=function(a,c,d,f){var g=new XMLHttpRequest,h=S();if(g){if(e(c,"function"))f=d,d=c,c=null;else if(e(c,"object")){var i=[];for(var j in c)c.hasOwnProperty(j)&&i.push(encodeURIComponent(j)+"="+encodeURIComponent(c[j]));c=i.join("&")}return g.open(c?"POST":"GET",a,!0),c&&(g.setRequestHeader("X-Requested-With","XMLHttpRequest"),g.setRequestHeader("Content-type","application/x-www-form-urlencoded")),d&&(b.once("snap.ajax."+h+".0",d),b.once("snap.ajax."+h+".200",d),b.once("snap.ajax."+h+".304",d)),g.onreadystatechange=function(){4==g.readyState&&b("snap.ajax."+h+"."+g.status,f,g)},4==g.readyState?g:(g.send(c),g)}},c.load=function(a,b,d){c.ajax(a,function(a){var e=c.parse(a.responseText);d?b.call(d,e):b(e)})};var cb=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,h=e.clientLeft||d.clientLeft||0,i=b.top+(g.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(g.win.pageXOffset||e.scrollLeft||d.scrollLeft)-h;return{y:i,x:j}};return c.getElementByPoint=function(a,b){var c=this,d=(c.canvas,y.doc.elementFromPoint(a,b));if(y.win.opera&&"svg"==d.tagName){var e=cb(d),f=d.createSVGRect();f.x=a-e.x,f.y=b-e.y,f.width=f.height=1;var g=d.getIntersectionList(f,null);g.length&&(d=g[g.length-1])}return d?w(d):null},c.plugin=function(a){a(c,s,v,y,t)},y.win.Snap=c,c}(a||this);return d.plugin(function(d,e,f,g,h){function i(a,b){if(null==b){var c=!0;if(b=a.node.getAttribute("linearGradient"==a.type||"radialGradient"==a.type?"gradientTransform":"pattern"==a.type?"patternTransform":"transform"),!b)return new d.Matrix;b=d._.svgTransform2string(b)}else b=d._.rgTransform.test(b)?o(b).replace(/\.{3}|\u2026/g,a._.transform||""):d._.svgTransform2string(b),n(b,"array")&&(b=d.path?d.path.toString.call(b):o(b)),a._.transform=b;var e=d._.transform2matrix(b,a.getBBox(1));return c?e:void(a.matrix=e)}function j(a){function b(a,b){var c=q(a.node,b);c=c&&c.match(f),c=c&&c[2],c&&"#"==c.charAt()&&(c=c.substring(1),c&&(h[c]=(h[c]||[]).concat(function(c){var d={};d[b]=URL(c),q(a.node,d)})))}function c(a){var b=q(a.node,"xlink:href");b&&"#"==b.charAt()&&(b=b.substring(1),b&&(h[b]=(h[b]||[]).concat(function(b){a.attr("xlink:href","#"+b)})))}for(var d,e=a.selectAll("*"),f=/^\s*url\(("|'|)(.*)\1\)\s*$/,g=[],h={},i=0,j=e.length;j>i;i++){d=e[i],b(d,"fill"),b(d,"stroke"),b(d,"filter"),b(d,"mask"),b(d,"clip-path"),c(d);var k=q(d.node,"id");k&&(q(d.node,{id:d.id}),g.push({old:k,id:d.id}))}for(i=0,j=g.length;j>i;i++){var l=h[g[i].old];if(l)for(var m=0,n=l.length;n>m;m++)l[m](g[i].id)}}function k(a,b,c){return function(d){var e=d.slice(a,b);return 1==e.length&&(e=e[0]),c?c(e):e}}function l(a){return function(){var b=a?"<"+this.type:"",c=this.node.attributes,d=this.node.childNodes;if(a)for(var e=0,f=c.length;f>e;e++)b+=" "+c[e].name+'="'+c[e].value.replace(/"/g,'\\"')+'"';if(d.length){for(a&&(b+=">"),e=0,f=d.length;f>e;e++)3==d[e].nodeType?b+=d[e].nodeValue:1==d[e].nodeType&&(b+=u(d[e]).toString());a&&(b+="</"+this.type+">")}else a&&(b+="/>");return b}}var m=e.prototype,n=d.is,o=String,p=d._unit2px,q=d._.$,r=d._.make,s=d._.getSomeDefs,t="hasOwnProperty",u=d._.wrap;m.getBBox=function(a){if(!d.Matrix||!d.path)return this.node.getBBox();var b=this,c=new d.Matrix;if(b.removed)return d._.box();for(;"use"==b.type;)if(a||(c=c.add(b.transform().localMatrix.translate(b.attr("x")||0,b.attr("y")||0))),b.original)b=b.original;else{var e=b.attr("xlink:href");b=b.original=b.node.ownerDocument.getElementById(e.substring(e.indexOf("#")+1))}var f=b._,g=d.path.get[b.type]||d.path.get.deflt;try{return a?(f.bboxwt=g?d.path.getBBox(b.realPath=g(b)):d._.box(b.node.getBBox()),d._.box(f.bboxwt)):(b.realPath=g(b),b.matrix=b.transform().localMatrix,f.bbox=d.path.getBBox(d.path.map(b.realPath,c.add(b.matrix))),d._.box(f.bbox))}catch(h){return d._.box()}};var v=function(){return this.string};m.transform=function(a){var b=this._;if(null==a){for(var c,e=this,f=new d.Matrix(this.node.getCTM()),g=i(this),h=[g],j=new d.Matrix,k=g.toTransformString(),l=o(g)==o(this.matrix)?o(b.transform):k;"svg"!=e.type&&(e=e.parent());)h.push(i(e));for(c=h.length;c--;)j.add(h[c]);return{string:l,globalMatrix:f,totalMatrix:j,localMatrix:g,diffMatrix:f.clone().add(g.invert()),global:f.toTransformString(),total:j.toTransformString(),local:k,toString:v}}return a instanceof d.Matrix?(this.matrix=a,this._.transform=a.toTransformString()):i(this,a),this.node&&("linearGradient"==this.type||"radialGradient"==this.type?q(this.node,{gradientTransform:this.matrix}):"pattern"==this.type?q(this.node,{patternTransform:this.matrix}):q(this.node,{transform:this.matrix})),this},m.parent=function(){return u(this.node.parentNode)},m.append=m.add=function(a){if(a){if("set"==a.type){var b=this;return a.forEach(function(a){b.add(a)}),this}a=u(a),this.node.appendChild(a.node),a.paper=this.paper}return this},m.appendTo=function(a){return a&&(a=u(a),a.append(this)),this},m.prepend=function(a){if(a){if("set"==a.type){var b,c=this;return a.forEach(function(a){b?b.after(a):c.prepend(a),b=a}),this}a=u(a);var d=a.parent();this.node.insertBefore(a.node,this.node.firstChild),this.add&&this.add(),a.paper=this.paper,this.parent()&&this.parent().add(),d&&d.add()}return this},m.prependTo=function(a){return a=u(a),a.prepend(this),this},m.before=function(a){if("set"==a.type){var b=this;return a.forEach(function(a){var c=a.parent();b.node.parentNode.insertBefore(a.node,b.node),c&&c.add()}),this.parent().add(),this}a=u(a);var c=a.parent();return this.node.parentNode.insertBefore(a.node,this.node),this.parent()&&this.parent().add(),c&&c.add(),a.paper=this.paper,this},m.after=function(a){a=u(a);var b=a.parent();return this.node.nextSibling?this.node.parentNode.insertBefore(a.node,this.node.nextSibling):this.node.parentNode.appendChild(a.node),this.parent()&&this.parent().add(),b&&b.add(),a.paper=this.paper,this},m.insertBefore=function(a){a=u(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},m.insertAfter=function(a){a=u(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node.nextSibling),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},m.remove=function(){var a=this.parent();return this.node.parentNode&&this.node.parentNode.removeChild(this.node),delete this.paper,this.removed=!0,a&&a.add(),this},m.select=function(a){return u(this.node.querySelector(a))},m.selectAll=function(a){for(var b=this.node.querySelectorAll(a),c=(d.set||Array)(),e=0;e<b.length;e++)c.push(u(b[e]));return c},m.asPX=function(a,b){return null==b&&(b=this.attr(a)),+p(this,a,b)},m.use=function(){var a,b=this.node.id;return b||(b=this.id,q(this.node,{id:b})),a="linearGradient"==this.type||"radialGradient"==this.type||"pattern"==this.type?r(this.type,this.node.parentNode):r("use",this.node.parentNode),q(a.node,{"xlink:href":"#"+b}),a.original=this,a},m.clone=function(){var a=u(this.node.cloneNode(!0));return q(a.node,"id")&&q(a.node,{id:a.id}),j(a),a.insertAfter(this),a},m.toDefs=function(){var a=s(this);return a.appendChild(this.node),this},m.pattern=m.toPattern=function(a,b,c,d){var e=r("pattern",s(this));return null==a&&(a=this.getBBox()),n(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,a=a.x),q(e.node,{x:a,y:b,width:c,height:d,patternUnits:"userSpaceOnUse",id:e.id,viewBox:[a,b,c,d].join(" ")}),e.node.appendChild(this.node),e},m.marker=function(a,b,c,d,e,f){var g=r("marker",s(this));return null==a&&(a=this.getBBox()),n(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,e=a.refX||a.cx,f=a.refY||a.cy,a=a.x),q(g.node,{viewBox:[a,b,c,d].join(" "),markerWidth:c,markerHeight:d,orient:"auto",refX:e||0,refY:f||0,id:g.id}),g.node.appendChild(this.node),g};var w=function(a,b,d,e){"function"!=typeof d||d.length||(e=d,d=c.linear),this.attr=a,this.dur=b,d&&(this.easing=d),e&&(this.callback=e)};d._.Animation=w,d.animation=function(a,b,c,d){return new w(a,b,c,d)},m.inAnim=function(){var a=this,b=[];for(var c in a.anims)a.anims[t](c)&&!function(a){b.push({anim:new w(a._attrs,a.dur,a.easing,a._callback),mina:a,curStatus:a.status(),status:function(b){return a.status(b)},stop:function(){a.stop()}})}(a.anims[c]);return b},d.animate=function(a,d,e,f,g,h){"function"!=typeof g||g.length||(h=g,g=c.linear);var i=c.time(),j=c(a,d,i,i+f,c.time,e,g);return h&&b.once("mina.finish."+j.id,h),j},m.stop=function(){for(var a=this.inAnim(),b=0,c=a.length;c>b;b++)a[b].stop();return this},m.animate=function(a,d,e,f){"function"!=typeof e||e.length||(f=e,e=c.linear),a instanceof w&&(f=a.callback,e=a.easing,d=a.dur,a=a.attr);var g,h,i,j,l=[],m=[],p={},q=this;for(var r in a)if(a[t](r)){q.equal?(j=q.equal(r,o(a[r])),g=j.from,h=j.to,i=j.f):(g=+q.attr(r),h=+a[r]);var s=n(g,"array")?g.length:1;p[r]=k(l.length,l.length+s,i),l=l.concat(g),m=m.concat(h)}var u=c.time(),v=c(l,m,u,u+d,c.time,function(a){var b={};for(var c in p)p[t](c)&&(b[c]=p[c](a));q.attr(b)},e);return q.anims[v.id]=v,v._attrs=a,v._callback=f,b("snap.animcreated."+q.id,v),b.once("mina.finish."+v.id,function(){delete q.anims[v.id],f&&f.call(q)}),b.once("mina.stop."+v.id,function(){delete q.anims[v.id]}),q};var x={};m.data=function(a,c){var e=x[this.id]=x[this.id]||{};if(0==arguments.length)return b("snap.data.get."+this.id,this,e,null),e;
if(1==arguments.length){if(d.is(a,"object")){for(var f in a)a[t](f)&&this.data(f,a[f]);return this}return b("snap.data.get."+this.id,this,e[a],a),e[a]}return e[a]=c,b("snap.data.set."+this.id,this,c,a),this},m.removeData=function(a){return null==a?x[this.id]={}:x[this.id]&&delete x[this.id][a],this},m.outerSVG=m.toString=l(1),m.innerSVG=l(),m.toDataURL=function(){if(a&&a.btoa){var b=this.getBBox(),c=d.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',{x:+b.x.toFixed(3),y:+b.y.toFixed(3),width:+b.width.toFixed(3),height:+b.height.toFixed(3),contents:this.outerSVG()});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(c)))}},h.prototype.select=m.select,h.prototype.selectAll=m.selectAll}),d.plugin(function(a){function b(a,b,d,e,f,g){return null==b&&"[object SVGMatrix]"==c.call(a)?(this.a=a.a,this.b=a.b,this.c=a.c,this.d=a.d,this.e=a.e,void(this.f=a.f)):void(null!=a?(this.a=+a,this.b=+b,this.c=+d,this.d=+e,this.e=+f,this.f=+g):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0))}var c=Object.prototype.toString,d=String,e=Math,f="";!function(c){function g(a){return a[0]*a[0]+a[1]*a[1]}function h(a){var b=e.sqrt(g(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}c.add=function(a,c,d,e,f,g){var h,i,j,k,l=[[],[],[]],m=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],n=[[a,d,f],[c,e,g],[0,0,1]];for(a&&a instanceof b&&(n=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),h=0;3>h;h++)for(i=0;3>i;i++){for(k=0,j=0;3>j;j++)k+=m[h][j]*n[j][i];l[h][i]=k}return this.a=l[0][0],this.b=l[1][0],this.c=l[0][1],this.d=l[1][1],this.e=l[0][2],this.f=l[1][2],this},c.invert=function(){var a=this,c=a.a*a.d-a.b*a.c;return new b(a.d/c,-a.b/c,-a.c/c,a.a/c,(a.c*a.f-a.d*a.e)/c,(a.b*a.e-a.a*a.f)/c)},c.clone=function(){return new b(this.a,this.b,this.c,this.d,this.e,this.f)},c.translate=function(a,b){return this.add(1,0,0,1,a,b)},c.scale=function(a,b,c,d){return null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d),this},c.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var f=+e.cos(b).toFixed(9),g=+e.sin(b).toFixed(9);return this.add(f,g,-g,f,c,d),this.add(1,0,0,1,-c,-d)},c.x=function(a,b){return a*this.a+b*this.c+this.e},c.y=function(a,b){return a*this.b+b*this.d+this.f},c.get=function(a){return+this[d.fromCharCode(97+a)].toFixed(4)},c.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")"},c.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},c.determinant=function(){return this.a*this.d-this.b*this.c},c.split=function(){var b={};b.dx=this.e,b.dy=this.f;var c=[[this.a,this.c],[this.b,this.d]];b.scalex=e.sqrt(g(c[0])),h(c[0]),b.shear=c[0][0]*c[1][0]+c[0][1]*c[1][1],c[1]=[c[1][0]-c[0][0]*b.shear,c[1][1]-c[0][1]*b.shear],b.scaley=e.sqrt(g(c[1])),h(c[1]),b.shear/=b.scaley,this.determinant()<0&&(b.scalex=-b.scalex);var d=-c[0][1],f=c[1][1];return 0>f?(b.rotate=a.deg(e.acos(f)),0>d&&(b.rotate=360-b.rotate)):b.rotate=a.deg(e.asin(d)),b.isSimple=!(+b.shear.toFixed(9)||b.scalex.toFixed(9)!=b.scaley.toFixed(9)&&b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate,b},c.toTransformString=function(a){var b=a||this.split();return+b.shear.toFixed(9)?"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]:(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[+b.dx.toFixed(4),+b.dy.toFixed(4)]:f)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:f)+(b.rotate?"r"+[+b.rotate.toFixed(4),0,0]:f))}}(b.prototype),a.Matrix=b,a.matrix=function(a,c,d,e,f,g){return new b(a,c,d,e,f,g)}}),d.plugin(function(a,c,d,e,f){function g(d){return function(e){if(b.stop(),e instanceof f&&1==e.node.childNodes.length&&("radialGradient"==e.node.firstChild.tagName||"linearGradient"==e.node.firstChild.tagName||"pattern"==e.node.firstChild.tagName)&&(e=e.node.firstChild,n(this).appendChild(e),e=l(e)),e instanceof c)if("radialGradient"==e.type||"linearGradient"==e.type||"pattern"==e.type){e.node.id||p(e.node,{id:e.id});var g=q(e.node.id)}else g=e.attr(d);else if(g=a.color(e),g.error){var h=a(n(this).ownerSVGElement).gradient(e);h?(h.node.id||p(h.node,{id:h.id}),g=q(h.node.id)):g=e}else g=r(g);var i={};i[d]=g,p(this.node,i),this.node.style[d]=t}}function h(a){b.stop(),a==+a&&(a+="px"),this.node.style.fontSize=a}function i(a){for(var b=[],c=a.childNodes,d=0,e=c.length;e>d;d++){var f=c[d];3==f.nodeType&&b.push(f.nodeValue),"tspan"==f.tagName&&b.push(1==f.childNodes.length&&3==f.firstChild.nodeType?f.firstChild.nodeValue:i(f))}return b}function j(){return b.stop(),this.node.style.fontSize}var k=a._.make,l=a._.wrap,m=a.is,n=a._.getSomeDefs,o=/^url\(#?([^)]+)\)$/,p=a._.$,q=a.url,r=String,s=a._.separator,t="";b.on("snap.util.attr.mask",function(a){if(a instanceof c||a instanceof f){if(b.stop(),a instanceof f&&1==a.node.childNodes.length&&(a=a.node.firstChild,n(this).appendChild(a),a=l(a)),"mask"==a.type)var d=a;else d=k("mask",n(this)),d.node.appendChild(a.node);!d.node.id&&p(d.node,{id:d.id}),p(this.node,{mask:q(d.id)})}}),function(a){b.on("snap.util.attr.clip",a),b.on("snap.util.attr.clip-path",a),b.on("snap.util.attr.clipPath",a)}(function(a){if(a instanceof c||a instanceof f){if(b.stop(),"clipPath"==a.type)var d=a;else d=k("clipPath",n(this)),d.node.appendChild(a.node),!d.node.id&&p(d.node,{id:d.id});p(this.node,{"clip-path":q(d.node.id||d.id)})}}),b.on("snap.util.attr.fill",g("fill")),b.on("snap.util.attr.stroke",g("stroke"));var u=/^([lr])(?:\(([^)]*)\))?(.*)$/i;b.on("snap.util.grad.parse",function(a){a=r(a);var b=a.match(u);if(!b)return null;var c=b[1],d=b[2],e=b[3];return d=d.split(/\s*,\s*/).map(function(a){return+a==a?+a:a}),1==d.length&&0==d[0]&&(d=[]),e=e.split("-"),e=e.map(function(a){a=a.split(":");var b={color:a[0]};return a[1]&&(b.offset=parseFloat(a[1])),b}),{type:c,params:d,stops:e}}),b.on("snap.util.attr.d",function(c){b.stop(),m(c,"array")&&m(c[0],"array")&&(c=a.path.toString.call(c)),c=r(c),c.match(/[ruo]/i)&&(c=a.path.toAbsolute(c)),p(this.node,{d:c})})(-1),b.on("snap.util.attr.#text",function(a){b.stop(),a=r(a);for(var c=e.doc.createTextNode(a);this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.node.appendChild(c)})(-1),b.on("snap.util.attr.path",function(a){b.stop(),this.attr({d:a})})(-1),b.on("snap.util.attr.class",function(a){b.stop(),this.node.className.baseVal=a})(-1),b.on("snap.util.attr.viewBox",function(a){var c;c=m(a,"object")&&"x"in a?[a.x,a.y,a.width,a.height].join(" "):m(a,"array")?a.join(" "):a,p(this.node,{viewBox:c}),b.stop()})(-1),b.on("snap.util.attr.transform",function(a){this.transform(a),b.stop()})(-1),b.on("snap.util.attr.r",function(a){"rect"==this.type&&(b.stop(),p(this.node,{rx:a,ry:a}))})(-1),b.on("snap.util.attr.textpath",function(a){if(b.stop(),"text"==this.type){var d,e,f;if(!a&&this.textPath){for(e=this.textPath;e.node.firstChild;)this.node.appendChild(e.node.firstChild);return e.remove(),void delete this.textPath}if(m(a,"string")){var g=n(this),h=l(g.parentNode).path(a);g.appendChild(h.node),d=h.id,h.attr({id:d})}else a=l(a),a instanceof c&&(d=a.attr("id"),d||(d=a.id,a.attr({id:d})));if(d)if(e=this.textPath,f=this.node,e)e.attr({"xlink:href":"#"+d});else{for(e=p("textPath",{"xlink:href":"#"+d});f.firstChild;)e.appendChild(f.firstChild);f.appendChild(e),this.textPath=l(e)}}})(-1),b.on("snap.util.attr.text",function(a){if("text"==this.type){for(var c=this.node,d=function(a){var b=p("tspan");if(m(a,"array"))for(var c=0;c<a.length;c++)b.appendChild(d(a[c]));else b.appendChild(e.doc.createTextNode(a));return b.normalize&&b.normalize(),b};c.firstChild;)c.removeChild(c.firstChild);for(var f=d(a);f.firstChild;)c.appendChild(f.firstChild)}b.stop()})(-1),b.on("snap.util.attr.fontSize",h)(-1),b.on("snap.util.attr.font-size",h)(-1),b.on("snap.util.getattr.transform",function(){return b.stop(),this.transform()})(-1),b.on("snap.util.getattr.textpath",function(){return b.stop(),this.textPath})(-1),function(){function c(c){return function(){b.stop();var d=e.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+c);return"none"==d?d:a(e.doc.getElementById(d.match(o)[1]))}}function d(a){return function(c){b.stop();var d="marker"+a.charAt(0).toUpperCase()+a.substring(1);if(""==c||!c)return void(this.node.style[d]="none");if("marker"==c.type){var e=c.node.id;return e||p(c.node,{id:c.id}),void(this.node.style[d]=q(e))}}}b.on("snap.util.getattr.marker-end",c("end"))(-1),b.on("snap.util.getattr.markerEnd",c("end"))(-1),b.on("snap.util.getattr.marker-start",c("start"))(-1),b.on("snap.util.getattr.markerStart",c("start"))(-1),b.on("snap.util.getattr.marker-mid",c("mid"))(-1),b.on("snap.util.getattr.markerMid",c("mid"))(-1),b.on("snap.util.attr.marker-end",d("end"))(-1),b.on("snap.util.attr.markerEnd",d("end"))(-1),b.on("snap.util.attr.marker-start",d("start"))(-1),b.on("snap.util.attr.markerStart",d("start"))(-1),b.on("snap.util.attr.marker-mid",d("mid"))(-1),b.on("snap.util.attr.markerMid",d("mid"))(-1)}(),b.on("snap.util.getattr.r",function(){return"rect"==this.type&&p(this.node,"rx")==p(this.node,"ry")?(b.stop(),p(this.node,"rx")):void 0})(-1),b.on("snap.util.getattr.text",function(){if("text"==this.type||"tspan"==this.type){b.stop();var a=i(this.node);return 1==a.length?a[0]:a}})(-1),b.on("snap.util.getattr.#text",function(){return this.node.textContent})(-1),b.on("snap.util.getattr.viewBox",function(){b.stop();var c=p(this.node,"viewBox");return c?(c=c.split(s),a._.box(+c[0],+c[1],+c[2],+c[3])):void 0})(-1),b.on("snap.util.getattr.points",function(){var a=p(this.node,"points");return b.stop(),a?a.split(s):void 0})(-1),b.on("snap.util.getattr.path",function(){var a=p(this.node,"d");return b.stop(),a})(-1),b.on("snap.util.getattr.class",function(){return this.node.className.baseVal})(-1),b.on("snap.util.getattr.fontSize",j)(-1),b.on("snap.util.getattr.font-size",j)(-1)}),d.plugin(function(a,b){var c=/\S+/g,d=String,e=b.prototype;e.addClass=function(a){var b,e,f,g,h=d(a||"").match(c)||[],i=this.node,j=i.className.baseVal,k=j.match(c)||[];if(h.length){for(b=0;f=h[b++];)e=k.indexOf(f),~e||k.push(f);g=k.join(" "),j!=g&&(i.className.baseVal=g)}return this},e.removeClass=function(a){var b,e,f,g,h=d(a||"").match(c)||[],i=this.node,j=i.className.baseVal,k=j.match(c)||[];if(k.length){for(b=0;f=h[b++];)e=k.indexOf(f),~e&&k.splice(e,1);g=k.join(" "),j!=g&&(i.className.baseVal=g)}return this},e.hasClass=function(a){var b=this.node,d=b.className.baseVal,e=d.match(c)||[];return!!~e.indexOf(a)},e.toggleClass=function(a,b){if(null!=b)return b?this.addClass(a):this.removeClass(a);var d,e,f,g,h=(a||"").match(c)||[],i=this.node,j=i.className.baseVal,k=j.match(c)||[];for(d=0;f=h[d++];)e=k.indexOf(f),~e?k.splice(e,1):k.push(f);return g=k.join(" "),j!=g&&(i.className.baseVal=g),this}}),d.plugin(function(){function a(a){return a}function c(a){return function(b){return+b.toFixed(3)+a}}var d={"+":function(a,b){return a+b},"-":function(a,b){return a-b},"/":function(a,b){return a/b},"*":function(a,b){return a*b}},e=String,f=/[a-z]+$/i,g=/^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;b.on("snap.util.attr",function(a){var c=e(a).match(g);if(c){var h=b.nt(),i=h.substring(h.lastIndexOf(".")+1),j=this.attr(i),k={};b.stop();var l=c[3]||"",m=j.match(f),n=d[c[1]];if(m&&m==l?a=n(parseFloat(j),+c[2]):(j=this.asPX(i),a=n(this.asPX(i),this.asPX(i,c[2]+l))),isNaN(j)||isNaN(a))return;k[i]=a,this.attr(k)}})(-10),b.on("snap.util.equal",function(h,i){var j=e(this.attr(h)||""),k=e(i).match(g);if(k){b.stop();var l=k[3]||"",m=j.match(f),n=d[k[1]];return m&&m==l?{from:parseFloat(j),to:n(parseFloat(j),+k[2]),f:c(m)}:(j=this.asPX(h),{from:j,to:n(j,this.asPX(h,k[2]+l)),f:a})}})(-10)}),d.plugin(function(c,d,e,f){var g=e.prototype,h=c.is;g.rect=function(a,b,c,d,e,f){var g;return null==f&&(f=e),h(a,"object")&&"[object Object]"==a?g=a:null!=a&&(g={x:a,y:b,width:c,height:d},null!=e&&(g.rx=e,g.ry=f)),this.el("rect",g)},g.circle=function(a,b,c){var d;return h(a,"object")&&"[object Object]"==a?d=a:null!=a&&(d={cx:a,cy:b,r:c}),this.el("circle",d)};var i=function(){function a(){this.parentNode.removeChild(this)}return function(b,c){var d=f.doc.createElement("img"),e=f.doc.body;d.style.cssText="position:absolute;left:-9999em;top:-9999em",d.onload=function(){c.call(d),d.onload=d.onerror=null,e.removeChild(d)},d.onerror=a,e.appendChild(d),d.src=b}}();g.image=function(a,b,d,e,f){var g=this.el("image");if(h(a,"object")&&"src"in a)g.attr(a);else if(null!=a){var j={"xlink:href":a,preserveAspectRatio:"none"};null!=b&&null!=d&&(j.x=b,j.y=d),null!=e&&null!=f?(j.width=e,j.height=f):i(a,function(){c._.$(g.node,{width:this.offsetWidth,height:this.offsetHeight})}),c._.$(g.node,j)}return g},g.ellipse=function(a,b,c,d){var e;return h(a,"object")&&"[object Object]"==a?e=a:null!=a&&(e={cx:a,cy:b,rx:c,ry:d}),this.el("ellipse",e)},g.path=function(a){var b;return h(a,"object")&&!h(a,"array")?b=a:a&&(b={d:a}),this.el("path",b)},g.group=g.g=function(a){var b=this.el("g");return 1==arguments.length&&a&&!a.type?b.attr(a):arguments.length&&b.add(Array.prototype.slice.call(arguments,0)),b},g.svg=function(a,b,c,d,e,f,g,i){var j={};return h(a,"object")&&null==b?j=a:(null!=a&&(j.x=a),null!=b&&(j.y=b),null!=c&&(j.width=c),null!=d&&(j.height=d),null!=e&&null!=f&&null!=g&&null!=i&&(j.viewBox=[e,f,g,i])),this.el("svg",j)},g.mask=function(a){var b=this.el("mask");return 1==arguments.length&&a&&!a.type?b.attr(a):arguments.length&&b.add(Array.prototype.slice.call(arguments,0)),b},g.ptrn=function(a,b,c,d,e,f,g,i){if(h(a,"object"))var j=a;else j={patternUnits:"userSpaceOnUse"},a&&(j.x=a),b&&(j.y=b),null!=c&&(j.width=c),null!=d&&(j.height=d),j.viewBox=null!=e&&null!=f&&null!=g&&null!=i?[e,f,g,i]:[a||0,b||0,c||0,d||0];return this.el("pattern",j)},g.use=function(a){return null!=a?(a instanceof d&&(a.attr("id")||a.attr({id:c._.id(a)}),a=a.attr("id")),"#"==String(a).charAt()&&(a=a.substring(1)),this.el("use",{"xlink:href":"#"+a})):d.prototype.use.call(this)},g.symbol=function(a,b,c,d){var e={};return null!=a&&null!=b&&null!=c&&null!=d&&(e.viewBox=[a,b,c,d]),this.el("symbol",e)},g.text=function(a,b,c){var d={};return h(a,"object")?d=a:null!=a&&(d={x:a,y:b,text:c||""}),this.el("text",d)},g.line=function(a,b,c,d){var e={};return h(a,"object")?e=a:null!=a&&(e={x1:a,x2:c,y1:b,y2:d}),this.el("line",e)},g.polyline=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b={};return h(a,"object")&&!h(a,"array")?b=a:null!=a&&(b={points:a}),this.el("polyline",b)},g.polygon=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b={};return h(a,"object")&&!h(a,"array")?b=a:null!=a&&(b={points:a}),this.el("polygon",b)},function(){function d(){return this.selectAll("stop")}function e(a,b){var d=k("stop"),e={offset:+b+"%"};return a=c.color(a),e["stop-color"]=a.hex,a.opacity<1&&(e["stop-opacity"]=a.opacity),k(d,e),this.node.appendChild(d),this}function f(){if("linearGradient"==this.type){var a=k(this.node,"x1")||0,b=k(this.node,"x2")||1,d=k(this.node,"y1")||0,e=k(this.node,"y2")||0;return c._.box(a,d,math.abs(b-a),math.abs(e-d))}var f=this.node.cx||.5,g=this.node.cy||.5,h=this.node.r||0;return c._.box(f-h,g-h,2*h,2*h)}function h(a,c){function d(a,b){for(var c=(b-l)/(a-m),d=m;a>d;d++)g[d].offset=+(+l+c*(d-m)).toFixed(2);m=a,l=b}var e,f=b("snap.util.grad.parse",null,c).firstDefined();if(!f)return null;f.params.unshift(a),e="l"==f.type.toLowerCase()?i.apply(0,f.params):j.apply(0,f.params),f.type!=f.type.toLowerCase()&&k(e.node,{gradientUnits:"userSpaceOnUse"});var g=f.stops,h=g.length,l=0,m=0;h--;for(var n=0;h>n;n++)"offset"in g[n]&&d(n,g[n].offset);for(g[h].offset=g[h].offset||100,d(h,g[h].offset),n=0;h>=n;n++){var o=g[n];e.addStop(o.color,o.offset)}return e}function i(a,b,g,h,i){var j=c._.make("linearGradient",a);return j.stops=d,j.addStop=e,j.getBBox=f,null!=b&&k(j.node,{x1:b,y1:g,x2:h,y2:i}),j}function j(a,b,g,h,i,j){var l=c._.make("radialGradient",a);return l.stops=d,l.addStop=e,l.getBBox=f,null!=b&&k(l.node,{cx:b,cy:g,r:h}),null!=i&&null!=j&&k(l.node,{fx:i,fy:j}),l}var k=c._.$;g.gradient=function(a){return h(this.defs,a)},g.gradientLinear=function(a,b,c,d){return i(this.defs,a,b,c,d)},g.gradientRadial=function(a,b,c,d,e){return j(this.defs,a,b,c,d,e)},g.toString=function(){var a,b=this.node.ownerDocument,d=b.createDocumentFragment(),e=b.createElement("div"),f=this.node.cloneNode(!0);return d.appendChild(e),e.appendChild(f),c._.$(f,{xmlns:"http://www.w3.org/2000/svg"}),a=e.innerHTML,d.removeChild(d.firstChild),a},g.toDataURL=function(){return a&&a.btoa?"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(this))):void 0},g.clear=function(){for(var a,b=this.node.firstChild;b;)a=b.nextSibling,"defs"!=b.tagName?b.parentNode.removeChild(b):g.clear.call({node:b}),b=a}}()}),d.plugin(function(a,b){function c(a){var b=c.ps=c.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[K](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]}function d(a,b,c,d){return null==a&&(a=b=c=d=0),null==b&&(b=a.y,c=a.width,d=a.height,a=a.x),{x:a,y:b,width:c,w:c,height:d,h:d,x2:a+c,y2:b+d,cx:a+c/2,cy:b+d/2,r1:N.min(c,d)/2,r2:N.max(c,d)/2,r0:N.sqrt(c*c+d*d)/2,path:w(a,b,c,d),vb:[a,b,c,d].join(" ")}}function e(){return this.join(",").replace(L,"$1")}function f(a){var b=J(a);return b.toString=e,b}function g(a,b,c,d,e,f,g,h,j){return null==j?n(a,b,c,d,e,f,g,h):i(a,b,c,d,e,f,g,h,o(a,b,c,d,e,f,g,h,j))}function h(c,d){function e(a){return+(+a).toFixed(3)}return a._.cacher(function(a,f,h){a instanceof b&&(a=a.attr("d")),a=E(a);for(var j,k,l,m,n,o="",p={},q=0,r=0,s=a.length;s>r;r++){if(l=a[r],"M"==l[0])j=+l[1],k=+l[2];else{if(m=g(j,k,l[1],l[2],l[3],l[4],l[5],l[6]),q+m>f){if(d&&!p.start){if(n=g(j,k,l[1],l[2],l[3],l[4],l[5],l[6],f-q),o+=["C"+e(n.start.x),e(n.start.y),e(n.m.x),e(n.m.y),e(n.x),e(n.y)],h)return o;p.start=o,o=["M"+e(n.x),e(n.y)+"C"+e(n.n.x),e(n.n.y),e(n.end.x),e(n.end.y),e(l[5]),e(l[6])].join(),q+=m,j=+l[5],k=+l[6];continue}if(!c&&!d)return n=g(j,k,l[1],l[2],l[3],l[4],l[5],l[6],f-q)}q+=m,j=+l[5],k=+l[6]}o+=l.shift()+l}return p.end=o,n=c?q:d?p:i(j,k,l[0],l[1],l[2],l[3],l[4],l[5],1)},null,a._.clone)}function i(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/O;return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}}function j(b,c,e,f,g,h,i,j){a.is(b,"array")||(b=[b,c,e,f,g,h,i,j]);var k=D.apply(null,b);return d(k.min.x,k.min.y,k.max.x-k.min.x,k.max.y-k.min.y)}function k(a,b,c){return b>=a.x&&b<=a.x+a.width&&c>=a.y&&c<=a.y+a.height}function l(a,b){return a=d(a),b=d(b),k(b,a.x,a.y)||k(b,a.x2,a.y)||k(b,a.x,a.y2)||k(b,a.x2,a.y2)||k(a,b.x,b.y)||k(a,b.x2,b.y)||k(a,b.x,b.y2)||k(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)}function m(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function n(a,b,c,d,e,f,g,h,i){null==i&&(i=1),i=i>1?1:0>i?0:i;for(var j=i/2,k=12,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;k>p;p++){var q=j*l[p]+j,r=m(q,a,c,e,g),s=m(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return j*o}function o(a,b,c,d,e,f,g,h,i){if(!(0>i||n(a,b,c,d,e,f,g,h)<i)){var j,k=1,l=k/2,m=k-l,o=.01;for(j=n(a,b,c,d,e,f,g,h,m);S(j-i)>o;)l/=2,m+=(i>j?1:-1)*l,j=n(a,b,c,d,e,f,g,h,m);return m}}function p(a,b,c,d,e,f,g,h){if(!(Q(a,c)<P(e,g)||P(a,c)>Q(e,g)||Q(b,d)<P(f,h)||P(b,d)>Q(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+Q(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+Q(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+Q(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+Q(f,h).toFixed(2)))return{x:l,y:m}}}}function q(a,b,c){var d=j(a),e=j(b);if(!l(d,e))return c?0:[];for(var f=n.apply(0,a),g=n.apply(0,b),h=~~(f/8),k=~~(g/8),m=[],o=[],q={},r=c?0:[],s=0;h+1>s;s++){var t=i.apply(0,a.concat(s/h));m.push({x:t.x,y:t.y,t:s/h})}for(s=0;k+1>s;s++)t=i.apply(0,b.concat(s/k)),o.push({x:t.x,y:t.y,t:s/k});for(s=0;h>s;s++)for(var u=0;k>u;u++){var v=m[s],w=m[s+1],x=o[u],y=o[u+1],z=S(w.x-v.x)<.001?"y":"x",A=S(y.x-x.x)<.001?"y":"x",B=p(v.x,v.y,w.x,w.y,x.x,x.y,y.x,y.y);if(B){if(q[B.x.toFixed(4)]==B.y.toFixed(4))continue;q[B.x.toFixed(4)]=B.y.toFixed(4);var C=v.t+S((B[z]-v[z])/(w[z]-v[z]))*(w.t-v.t),D=x.t+S((B[A]-x[A])/(y[A]-x[A]))*(y.t-x.t);C>=0&&1>=C&&D>=0&&1>=D&&(c?r++:r.push({x:B.x,y:B.y,t1:C,t2:D}))}}return r}function r(a,b){return t(a,b)}function s(a,b){return t(a,b,1)}function t(a,b,c){a=E(a),b=E(b);for(var d,e,f,g,h,i,j,k,l,m,n=c?0:[],o=0,p=a.length;p>o;o++){var r=a[o];if("M"==r[0])d=h=r[1],e=i=r[2];else{"C"==r[0]?(l=[d,e].concat(r.slice(1)),d=l[6],e=l[7]):(l=[d,e,d,e,h,i,h,i],d=h,e=i);for(var s=0,t=b.length;t>s;s++){var u=b[s];if("M"==u[0])f=j=u[1],g=k=u[2];else{"C"==u[0]?(m=[f,g].concat(u.slice(1)),f=m[6],g=m[7]):(m=[f,g,f,g,j,k,j,k],f=j,g=k);var v=q(l,m,c);if(c)n+=v;else{for(var w=0,x=v.length;x>w;w++)v[w].segment1=o,v[w].segment2=s,v[w].bez1=l,v[w].bez2=m;n=n.concat(v)}}}}}return n}function u(a,b,c){var d=v(a);return k(d,b,c)&&t(a,[["M",b,c],["H",d.x2+10]],1)%2==1}function v(a){var b=c(a);if(b.bbox)return J(b.bbox);if(!a)return d();a=E(a);for(var e,f=0,g=0,h=[],i=[],j=0,k=a.length;k>j;j++)if(e=a[j],"M"==e[0])f=e[1],g=e[2],h.push(f),i.push(g);else{var l=D(f,g,e[1],e[2],e[3],e[4],e[5],e[6]);h=h.concat(l.min.x,l.max.x),i=i.concat(l.min.y,l.max.y),f=e[5],g=e[6]}var m=P.apply(0,h),n=P.apply(0,i),o=Q.apply(0,h),p=Q.apply(0,i),q=d(m,n,o-m,p-n);return b.bbox=J(q),q}function w(a,b,c,d,f){if(f)return[["M",+a+ +f,b],["l",c-2*f,0],["a",f,f,0,0,1,f,f],["l",0,d-2*f],["a",f,f,0,0,1,-f,f],["l",2*f-c,0],["a",f,f,0,0,1,-f,-f],["l",0,2*f-d],["a",f,f,0,0,1,f,-f],["z"]];var g=[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]];return g.toString=e,g}function x(a,b,c,d,f){if(null==f&&null==d&&(d=c),a=+a,b=+b,c=+c,d=+d,null!=f)var g=Math.PI/180,h=a+c*Math.cos(-d*g),i=a+c*Math.cos(-f*g),j=b+c*Math.sin(-d*g),k=b+c*Math.sin(-f*g),l=[["M",h,j],["A",c,c,0,+(f-d>180),0,i,k]];else l=[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]];return l.toString=e,l}function y(b){var d=c(b),g=String.prototype.toLowerCase;if(d.rel)return f(d.rel);a.is(b,"array")&&a.is(b&&b[0],"array")||(b=a.parsePathString(b));var h=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=b[0][1],j=b[0][2],k=i,l=j,m++,h.push(["M",i,j]));for(var n=m,o=b.length;o>n;n++){var p=h[n]=[],q=b[n];if(q[0]!=g.call(q[0]))switch(p[0]=g.call(q[0]),p[0]){case"a":p[1]=q[1],p[2]=q[2],p[3]=q[3],p[4]=q[4],p[5]=q[5],p[6]=+(q[6]-i).toFixed(3),p[7]=+(q[7]-j).toFixed(3);break;case"v":p[1]=+(q[1]-j).toFixed(3);break;case"m":k=q[1],l=q[2];default:for(var r=1,s=q.length;s>r;r++)p[r]=+(q[r]-(r%2?i:j)).toFixed(3)}else{p=h[n]=[],"m"==q[0]&&(k=q[1]+i,l=q[2]+j);for(var t=0,u=q.length;u>t;t++)h[n][t]=q[t]}var v=h[n].length;switch(h[n][0]){case"z":i=k,j=l;break;case"h":i+=+h[n][v-1];break;case"v":j+=+h[n][v-1];break;default:i+=+h[n][v-2],j+=+h[n][v-1]}}return h.toString=e,d.rel=f(h),h}function z(b){var d=c(b);if(d.abs)return f(d.abs);if(I(b,"array")&&I(b&&b[0],"array")||(b=a.parsePathString(b)),!b||!b.length)return[["M",0,0]];var g,h=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=+b[0][1],j=+b[0][2],k=i,l=j,m++,h[0]=["M",i,j]);for(var n,o,p=3==b.length&&"M"==b[0][0]&&"R"==b[1][0].toUpperCase()&&"Z"==b[2][0].toUpperCase(),q=m,r=b.length;r>q;q++){if(h.push(n=[]),o=b[q],g=o[0],g!=g.toUpperCase())switch(n[0]=g.toUpperCase(),n[0]){case"A":n[1]=o[1],n[2]=o[2],n[3]=o[3],n[4]=o[4],n[5]=o[5],n[6]=+o[6]+i,n[7]=+o[7]+j;break;case"V":n[1]=+o[1]+j;break;case"H":n[1]=+o[1]+i;break;case"R":for(var s=[i,j].concat(o.slice(1)),t=2,u=s.length;u>t;t++)s[t]=+s[t]+i,s[++t]=+s[t]+j;h.pop(),h=h.concat(G(s,p));break;case"O":h.pop(),s=x(i,j,o[1],o[2]),s.push(s[0]),h=h.concat(s);break;case"U":h.pop(),h=h.concat(x(i,j,o[1],o[2],o[3])),n=["U"].concat(h[h.length-1].slice(-2));break;case"M":k=+o[1]+i,l=+o[2]+j;default:for(t=1,u=o.length;u>t;t++)n[t]=+o[t]+(t%2?i:j)}else if("R"==g)s=[i,j].concat(o.slice(1)),h.pop(),h=h.concat(G(s,p)),n=["R"].concat(o.slice(-2));else if("O"==g)h.pop(),s=x(i,j,o[1],o[2]),s.push(s[0]),h=h.concat(s);else if("U"==g)h.pop(),h=h.concat(x(i,j,o[1],o[2],o[3])),n=["U"].concat(h[h.length-1].slice(-2));else for(var v=0,w=o.length;w>v;v++)n[v]=o[v];if(g=g.toUpperCase(),"O"!=g)switch(n[0]){case"Z":i=+k,j=+l;break;case"H":i=n[1];break;case"V":j=n[1];break;case"M":k=n[n.length-2],l=n[n.length-1];default:i=n[n.length-2],j=n[n.length-1]}}return h.toString=e,d.abs=f(h),h}function A(a,b,c,d){return[a,b,c,d,c,d]}function B(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]}function C(b,c,d,e,f,g,h,i,j,k){var l,m=120*O/180,n=O/180*(+f||0),o=[],p=a._.cacher(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(b,c,-n),b=l.x,c=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(O/180*f),N.sin(O/180*f),(b-i)/2),r=(c-j)/2,s=q*q/(d*d)+r*r/(e*e);s>1&&(s=N.sqrt(s),d=s*d,e=s*e);var t=d*d,u=e*e,v=(g==h?-1:1)*N.sqrt(S((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*d*r/e+(b+i)/2,x=v*-e*q/d+(c+j)/2,y=N.asin(((c-x)/e).toFixed(9)),z=N.asin(((j-x)/e).toFixed(9));y=w>b?O-y:y,z=w>i?O-z:z,0>y&&(y=2*O+y),0>z&&(z=2*O+z),h&&y>z&&(y-=2*O),!h&&z>y&&(z-=2*O)}var A=z-y;if(S(A)>m){var B=z,D=i,E=j;z=y+m*(h&&z>y?1:-1),i=w+d*N.cos(z),j=x+e*N.sin(z),o=C(i,j,d,e,f,0,h,D,E,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),J=N.tan(A/4),K=4/3*d*J,L=4/3*e*J,M=[b,c],P=[b+K*G,c-L*F],Q=[i+K*I,j-L*H],R=[i,j];if(P[0]=2*M[0]-P[0],P[1]=2*M[1]-P[1],k)return[P,Q,R].concat(o);o=[P,Q,R].concat(o).join().split(",");for(var T=[],U=0,V=o.length;V>U;U++)T[U]=U%2?p(o[U-1],o[U],n).y:p(o[U],o[U+1],n).x;return T}function D(a,b,c,d,e,f,g,h){for(var i,j,k,l,m,n,o,p,q=[],r=[[],[]],s=0;2>s;++s)if(0==s?(j=6*a-12*c+6*e,i=-3*a+9*c-9*e+3*g,k=3*c-3*a):(j=6*b-12*d+6*f,i=-3*b+9*d-9*f+3*h,k=3*d-3*b),S(i)<1e-12){if(S(j)<1e-12)continue;l=-k/j,l>0&&1>l&&q.push(l)}else o=j*j-4*k*i,p=N.sqrt(o),0>o||(m=(-j+p)/(2*i),m>0&&1>m&&q.push(m),n=(-j-p)/(2*i),n>0&&1>n&&q.push(n));for(var t,u=q.length,v=u;u--;)l=q[u],t=1-l,r[0][u]=t*t*t*a+3*t*t*l*c+3*t*l*l*e+l*l*l*g,r[1][u]=t*t*t*b+3*t*t*l*d+3*t*l*l*f+l*l*l*h;return r[0][v]=a,r[1][v]=b,r[0][v+1]=g,r[1][v+1]=h,r[0].length=r[1].length=v+2,{min:{x:P.apply(0,r[0]),y:P.apply(0,r[1])},max:{x:Q.apply(0,r[0]),y:Q.apply(0,r[1])}}}function E(a,b){var d=!b&&c(a);if(!b&&d.curve)return f(d.curve);for(var e=z(a),g=b&&z(b),h={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},j=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"].concat(C.apply(0,[b.x,b.y].concat(a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e].concat(a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"].concat(B(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"].concat(B(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"].concat(A(b.x,b.y,a[1],a[2]));break;case"H":a=["C"].concat(A(b.x,b.y,a[1],b.y));break;case"V":a=["C"].concat(A(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"].concat(A(b.x,b.y,b.X,b.Y))}return a}),k=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)m[b]="A",g&&(n[b]="A"),a.splice(b++,0,["C"].concat(c.splice(0,6)));a.splice(b,1),r=Q(e.length,g&&g.length||0)}},l=function(a,b,c,d,f){a&&b&&"M"==a[f][0]&&"M"!=b[f][0]&&(b.splice(f,0,["M",d.x,d.y]),c.bx=0,c.by=0,c.x=a[f][1],c.y=a[f][2],r=Q(e.length,g&&g.length||0))},m=[],n=[],o="",p="",q=0,r=Q(e.length,g&&g.length||0);r>q;q++){e[q]&&(o=e[q][0]),"C"!=o&&(m[q]=o,q&&(p=m[q-1])),e[q]=j(e[q],h,p),"A"!=m[q]&&"C"==o&&(m[q]="C"),k(e,q),g&&(g[q]&&(o=g[q][0]),"C"!=o&&(n[q]=o,q&&(p=n[q-1])),g[q]=j(g[q],i,p),"A"!=n[q]&&"C"==o&&(n[q]="C"),k(g,q)),l(e,g,h,i,q),l(g,e,i,h,q);var s=e[q],t=g&&g[q],u=s.length,v=g&&t.length;h.x=s[u-2],h.y=s[u-1],h.bx=M(s[u-4])||h.x,h.by=M(s[u-3])||h.y,i.bx=g&&(M(t[v-4])||i.x),i.by=g&&(M(t[v-3])||i.y),i.x=g&&t[v-2],i.y=g&&t[v-1]}return g||(d.curve=f(e)),g?[e,g]:e}function F(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=E(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a}function G(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}var H=b.prototype,I=a.is,J=a._.clone,K="hasOwnProperty",L=/,?([a-z]),?/gi,M=parseFloat,N=Math,O=N.PI,P=N.min,Q=N.max,R=N.pow,S=N.abs,T=h(1),U=h(),V=h(0,1),W=a._unit2px,X={path:function(a){return a.attr("path")},circle:function(a){var b=W(a);return x(b.cx,b.cy,b.r)},ellipse:function(a){var b=W(a);return x(b.cx||0,b.cy||0,b.rx,b.ry)},rect:function(a){var b=W(a);return w(b.x||0,b.y||0,b.width,b.height,b.rx,b.ry)},image:function(a){var b=W(a);return w(b.x||0,b.y||0,b.width,b.height)},line:function(a){return"M"+[a.attr("x1")||0,a.attr("y1")||0,a.attr("x2"),a.attr("y2")]},polyline:function(a){return"M"+a.attr("points")},polygon:function(a){return"M"+a.attr("points")+"z"},deflt:function(a){var b=a.node.getBBox();return w(b.x,b.y,b.width,b.height)}};a.path=c,a.path.getTotalLength=T,a.path.getPointAtLength=U,a.path.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return V(a,b).end;var d=V(a,c,1);return b?V(d,b).end:d},H.getTotalLength=function(){return this.node.getTotalLength?this.node.getTotalLength():void 0},H.getPointAtLength=function(a){return U(this.attr("d"),a)},H.getSubpath=function(b,c){return a.path.getSubpath(this.attr("d"),b,c)},a._.box=d,a.path.findDotsAtSegment=i,a.path.bezierBBox=j,a.path.isPointInsideBBox=k,a.closest=function(b,c,e,f){for(var g=100,h=d(b-g/2,c-g/2,g,g),i=[],j=e[0].hasOwnProperty("x")?function(a){return{x:e[a].x,y:e[a].y}}:function(a){return{x:e[a],y:f[a]}},l=0;1e6>=g&&!l;){for(var m=0,n=e.length;n>m;m++){var o=j(m);if(k(h,o.x,o.y)){l++,i.push(o);break}}l||(g*=2,h=d(b-g/2,c-g/2,g,g))}if(1e6!=g){var p,q=1/0;for(m=0,n=i.length;n>m;m++){var r=a.len(b,c,i[m].x,i[m].y);q>r&&(q=r,i[m].len=r,p=i[m])}return p}},a.path.isBBoxIntersect=l,a.path.intersection=r,a.path.intersectionNumber=s,a.path.isPointInside=u,a.path.getBBox=v,a.path.get=X,a.path.toRelative=y,a.path.toAbsolute=z,a.path.toCubic=E,a.path.map=F,a.path.toString=e,a.path.clone=f}),d.plugin(function(a){var d=Math.max,e=Math.min,f=function(a){if(this.items=[],this.bindings={},this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)a[b]&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},g=f.prototype;g.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],a&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},g.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},g.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this},g.animate=function(d,e,f,g){"function"!=typeof f||f.length||(g=f,f=c.linear),d instanceof a._.Animation&&(g=d.callback,f=d.easing,e=f.dur,d=d.attr);var h=arguments;if(a.is(d,"array")&&a.is(h[h.length-1],"array"))var i=!0;var j,k=function(){j?this.b=j:j=this.b},l=0,m=this,n=g&&function(){++l==m.length&&g.call(this)
};return this.forEach(function(a,c){b.once("snap.animcreated."+a.id,k),i?h[c]&&a.animate.apply(a,h[c]):a.animate(d,e,f,n)})},g.remove=function(){for(;this.length;)this.pop().remove();return this},g.bind=function(a,b,c){var d={};if("function"==typeof b)this.bindings[a]=b;else{var e=c||a;this.bindings[a]=function(a){d[e]=a,b.attr(d)}}return this},g.attr=function(a){var b={};for(var c in a)this.bindings[c]?this.bindings[c](a[c]):b[c]=a[c];for(var d=0,e=this.items.length;e>d;d++)this.items[d].attr(b);return this},g.clear=function(){for(;this.length;)this.pop()},g.splice=function(a,b){a=0>a?d(this.length+a,0):a,b=d(0,e(this.length-a,b));var c,g=[],h=[],i=[];for(c=2;c<arguments.length;c++)i.push(arguments[c]);for(c=0;b>c;c++)h.push(this[a+c]);for(;c<this.length-a;c++)g.push(this[a+c]);var j=i.length;for(c=0;c<j+g.length;c++)this.items[a+c]=this[a+c]=j>c?i[c]:g[c-j];for(c=this.items.length=this.length-=b-j;this[c];)delete this[c++];return new f(h)},g.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0;return!1},g.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},g.getBBox=function(){for(var a=[],b=[],c=[],f=[],g=this.items.length;g--;)if(!this.items[g].removed){var h=this.items[g].getBBox();a.push(h.x),b.push(h.y),c.push(h.x+h.width),f.push(h.y+h.height)}return a=e.apply(0,a),b=e.apply(0,b),c=d.apply(0,c),f=d.apply(0,f),{x:a,y:b,x2:c,y2:f,width:c-a,height:f-b,cx:a+(c-a)/2,cy:b+(f-b)/2}},g.clone=function(a){a=new f;for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},g.toString=function(){return"Snap‘s set"},g.type="set",a.Set=f,a.set=function(){var a=new f;return arguments.length&&a.push.apply(a,Array.prototype.slice.call(arguments,0)),a}}),d.plugin(function(a,c){function d(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}}function e(b,c,e){c=p(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];for(var f,g,h,i,l=Math.max(b.length,c.length),m=[],n=[],o=0;l>o;o++){if(h=b[o]||d(c[o]),i=c[o]||d(h),h[0]!=i[0]||"r"==h[0].toLowerCase()&&(h[2]!=i[2]||h[3]!=i[3])||"s"==h[0].toLowerCase()&&(h[3]!=i[3]||h[4]!=i[4])){b=a._.transform2matrix(b,e()),c=a._.transform2matrix(c,e()),m=[["m",b.a,b.b,b.c,b.d,b.e,b.f]],n=[["m",c.a,c.b,c.c,c.d,c.e,c.f]];break}for(m[o]=[],n[o]=[],f=0,g=Math.max(h.length,i.length);g>f;f++)f in h&&(m[o][f]=h[f]),f in i&&(n[o][f]=i[f])}return{from:k(m),to:k(n),f:j(m)}}function f(a){return a}function g(a){return function(b){return+b.toFixed(3)+a}}function h(a){return a.join(" ")}function i(b){return a.rgb(b[0],b[1],b[2])}function j(a){var b,c,d,e,f,g,h=0,i=[];for(b=0,c=a.length;c>b;b++){for(f="[",g=['"'+a[b][0]+'"'],d=1,e=a[b].length;e>d;d++)g[d]="val["+h++ +"]";f+=g+"]",i[b]=f}return Function("val","return Snap.path.toString.call(["+i+"])")}function k(a){for(var b=[],c=0,d=a.length;d>c;c++)for(var e=1,f=a[c].length;f>e;e++)b.push(a[c][e]);return b}function l(a){return isFinite(parseFloat(a))}function m(b,c){return a.is(b,"array")&&a.is(c,"array")?b.toString()==c.toString():!1}var n={},o=/[a-z]+$/i,p=String;n.stroke=n.fill="colour",c.prototype.equal=function(a,c){return b("snap.util.equal",this,a,c).firstDefined()},b.on("snap.util.equal",function(b,c){var d,q,r=p(this.attr(b)||""),s=this;if(l(r)&&l(c))return{from:parseFloat(r),to:parseFloat(c),f:f};if("colour"==n[b])return d=a.color(r),q=a.color(c),{from:[d.r,d.g,d.b,d.opacity],to:[q.r,q.g,q.b,q.opacity],f:i};if("viewBox"==b)return d=this.attr(b).vb.split(" ").map(Number),q=c.split(" ").map(Number),{from:d,to:q,f:h};if("transform"==b||"gradientTransform"==b||"patternTransform"==b)return c instanceof a.Matrix&&(c=c.toTransformString()),a._.rgTransform.test(c)||(c=a._.svgTransform2string(c)),e(r,c,function(){return s.getBBox(1)});if("d"==b||"path"==b)return d=a.path.toCubic(r,c),{from:k(d[0]),to:k(d[1]),f:j(d[0])};if("points"==b)return d=p(r).split(a._.separator),q=p(c).split(a._.separator),{from:d,to:q,f:function(a){return a}};var t=r.match(o),u=p(c).match(o);return t&&m(t,u)?{from:parseFloat(r),to:parseFloat(c),f:g(t)}:{from:this.asPX(b),to:this.asPX(b,c),f:f}})}),d.plugin(function(a,c,d,e){for(var f=c.prototype,g="hasOwnProperty",h=("createTouch"in e.doc),i=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],j={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},k=(function(a,b){var c="y"==a?"scrollTop":"scrollLeft",d=b&&b.node?b.node.ownerDocument:e.doc;return d[c in d.documentElement?"documentElement":"body"][c]}),l=function(){return this.originalEvent.preventDefault()},m=function(){return this.originalEvent.stopPropagation()},n=function(a,b,c,d){var e=h&&j[b]?j[b]:b,f=function(e){var f=k("y",d),i=k("x",d);if(h&&j[g](b))for(var n=0,o=e.targetTouches&&e.targetTouches.length;o>n;n++)if(e.targetTouches[n].target==a||a.contains(e.targetTouches[n].target)){var p=e;e=e.targetTouches[n],e.originalEvent=p,e.preventDefault=l,e.stopPropagation=m;break}var q=e.clientX+i,r=e.clientY+f;return c.call(d,e,q,r)};return b!==e&&a.addEventListener(b,f,!1),a.addEventListener(e,f,!1),function(){return b!==e&&a.removeEventListener(b,f,!1),a.removeEventListener(e,f,!1),!0}},o=[],p=function(a){for(var c,d=a.clientX,e=a.clientY,f=k("y"),g=k("x"),i=o.length;i--;){if(c=o[i],h){for(var j,l=a.touches&&a.touches.length;l--;)if(j=a.touches[l],j.identifier==c.el._drag.id||c.el.node.contains(j.target)){d=j.clientX,e=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();{var m=c.el.node;m.nextSibling,m.parentNode,m.style.display}d+=g,e+=f,b("snap.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},q=function(c){a.unmousemove(p).unmouseup(q);for(var d,e=o.length;e--;)d=o[e],d.el._drag={},b("snap.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,c),b.off("snap.drag.*."+d.el.id);o=[]},r=i.length;r--;)!function(b){a[b]=f[b]=function(c,d){if(a.is(c,"function"))this.events=this.events||[],this.events.push({name:b,f:c,unbind:n(this.node||document,b,c,d||this)});else for(var e=0,f=this.events.length;f>e;e++)if(this.events[e].name==b)try{this.events[e].f.call(this)}catch(g){}return this},a["un"+b]=f["un"+b]=function(a){for(var c=this.events||[],d=c.length;d--;)if(c[d].name==b&&(c[d].f==a||!a))return c[d].unbind(),c.splice(d,1),!c.length&&delete this.events,this;return this}}(i[r]);f.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},f.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var s=[];f.drag=function(c,d,e,f,g,h){function i(i,j,l){(i.originalEvent||i).preventDefault(),k._drag.x=j,k._drag.y=l,k._drag.id=i.identifier,!o.length&&a.mousemove(p).mouseup(q),o.push({el:k,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("snap.drag.start."+k.id,d),c&&b.on("snap.drag.move."+k.id,c),e&&b.on("snap.drag.end."+k.id,e),b("snap.drag.start."+k.id,g||f||k,j,l,i)}function j(a,c,d){b("snap.draginit."+k.id,k,a,c,d)}var k=this;if(!arguments.length){var l;return k.drag(function(a,b){this.attr({transform:l+(l?"T":"t")+[a,b]})},function(){l=this.transform().local})}return b.on("snap.draginit."+k.id,i),k._drag={},s.push({el:k,start:i,init:j}),k.mousedown(j),k},f.undrag=function(){for(var c=s.length;c--;)s[c].el==this&&(this.unmousedown(s[c].init),s.splice(c,1),b.unbind("snap.drag.*."+this.id),b.unbind("snap.draginit."+this.id));return!s.length&&a.unmousemove(p).unmouseup(q),this}}),d.plugin(function(a,c,d){var e=(c.prototype,d.prototype),f=/^\s*url\((.+)\)/,g=String,h=a._.$;a.filter={},e.filter=function(b){var d=this;"svg"!=d.type&&(d=d.paper);var e=a.parse(g(b)),f=a._.id(),i=(d.node.offsetWidth,d.node.offsetHeight,h("filter"));return h(i,{id:f,filterUnits:"userSpaceOnUse"}),i.appendChild(e.node),d.defs.appendChild(i),new c(i)},b.on("snap.util.getattr.filter",function(){b.stop();var c=h(this.node,"filter");if(c){var d=g(c).match(f);return d&&a.select(d[1])}}),b.on("snap.util.attr.filter",function(d){if(d instanceof c&&"filter"==d.type){b.stop();var e=d.node.id;e||(h(d.node,{id:d.id}),e=d.id),h(this.node,{filter:a.url(e)})}d&&"none"!=d||(b.stop(),this.node.removeAttribute("filter"))}),a.filter.blur=function(b,c){null==b&&(b=2);var d=null==c?b:[b,c];return a.format('<feGaussianBlur stdDeviation="{def}"/>',{def:d})},a.filter.blur.toString=function(){return this()},a.filter.shadow=function(b,c,d,e,f){return"string"==typeof d&&(e=d,f=e,d=4),"string"!=typeof e&&(f=e,e="#000"),e=e||"#000",null==d&&(d=4),null==f&&(f=1),null==b&&(b=0,c=2),null==c&&(c=b),e=a.color(e),a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:e,dx:b,dy:c,blur:d,opacity:f})},a.filter.shadow.toString=function(){return this()},a.filter.grayscale=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:.2126+.7874*(1-b),b:.7152-.7152*(1-b),c:.0722-.0722*(1-b),d:.2126-.2126*(1-b),e:.7152+.2848*(1-b),f:.0722-.0722*(1-b),g:.2126-.2126*(1-b),h:.0722+.9278*(1-b)})},a.filter.grayscale.toString=function(){return this()},a.filter.sepia=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:.393+.607*(1-b),b:.769-.769*(1-b),c:.189-.189*(1-b),d:.349-.349*(1-b),e:.686+.314*(1-b),f:.168-.168*(1-b),g:.272-.272*(1-b),h:.534-.534*(1-b),i:.131+.869*(1-b)})},a.filter.sepia.toString=function(){return this()},a.filter.saturate=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-b})},a.filter.saturate.toString=function(){return this()},a.filter.hueRotate=function(b){return b=b||0,a.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:b})},a.filter.hueRotate.toString=function(){return this()},a.filter.invert=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:b,amount2:1-b})},a.filter.invert.toString=function(){return this()},a.filter.brightness=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:b})},a.filter.brightness.toString=function(){return this()},a.filter.contrast=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:b,amount2:.5-b/2})},a.filter.contrast.toString=function(){return this()}}),d.plugin(function(a,b){var c=a._.box,d=a.is,e=/^[^a-z]*([tbmlrc])/i,f=function(){return"T"+this.dx+","+this.dy};b.prototype.getAlign=function(a,b){null==b&&d(a,"string")&&(b=a,a=null),a=a||this.paper;var g=a.getBBox?a.getBBox():c(a),h=this.getBBox(),i={};switch(b=b&&b.match(e),b=b?b[1].toLowerCase():"c"){case"t":i.dx=0,i.dy=g.y-h.y;break;case"b":i.dx=0,i.dy=g.y2-h.y2;break;case"m":i.dx=0,i.dy=g.cy-h.cy;break;case"l":i.dx=g.x-h.x,i.dy=0;break;case"r":i.dx=g.x2-h.x2,i.dy=0;break;default:i.dx=g.cx-h.cx,i.dy=0}return i.toString=f,i},b.prototype.align=function(a,b){return this.transform("..."+this.getAlign(a,b))}}),d});

/*!
 * VERSION: 1.18.4
 * DATE: 2016-04-26
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.18.4",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&e(p,a,q),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.18.4",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&n(l,a,o),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&0!==this._time&&(b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=new c(null,null,1,0),j=d.prototype=new a;return j.constructor=d,j.kill()._gc=!1,d.version="1.18.4",j.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},j.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},j.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},j.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},j.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:i,useFrames:this.usesFrames(),immediateRender:!1};for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new b(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},j.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},j.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&0!==this._totalTime&&(b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},j.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},j.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},j.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},j.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},j.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},j.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},j.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},j.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},j.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},j.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},j.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},j.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.5",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._round={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);
var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._round[f]&&(i=Math.round(i)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform),i._onInitTween(l.proxy,q,g._tween),h}})}},q._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.18.4",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q=/(?:\-|\.|\b)(\d|\.|e\-)+/g,r=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,s=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,t=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,u=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,y=/^(rgb|hsl)/,z=/([A-Z])/g,A=/-([a-z])/gi,B=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(a,b){return b.toUpperCase()},D=/(?:Left|Right|Width)/i,E=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,F=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,G=/,(?=[^\)]*(?:\(|$))/gi,H=/[\s,\(]/i,I=Math.PI/180,J=180/Math.PI,K={},L=document,M=function(a){return L.createElementNS?L.createElementNS("http://www.w3.org/1999/xhtml",a):L.createElement(a)},N=M("div"),O=M("img"),P=g._internals={_specialProps:i},Q=navigator.userAgent,R=function(){var a=Q.indexOf("Android"),b=M("a");return m=-1!==Q.indexOf("Safari")&&-1===Q.indexOf("Chrome")&&(-1===a||Number(Q.substr(a+8,1))>3),o=m&&Number(Q.substr(Q.indexOf("Version/")+8,1))<6,n=-1!==Q.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Q)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Q))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),S=function(a){return v.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},T=function(a){window.console&&console.log(a)},U="",V="",W=function(a,b){b=b||N;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(V=3===d?"ms":c[d],U="-"+V.toLowerCase()+"-",V+a):null},X=L.defaultView?L.defaultView.getComputedStyle:function(){},Y=g.getStyle=function(a,b,c,d,e){var f;return R||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||X(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(z,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):S(a)},Z=P.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=D.test(c),l=a,m=N.style,n=0>d;if(n&&(d=-d),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+Y(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||L.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(N),h=parseFloat(N[k?"offsetWidth":"offsetHeight"]),l.removeChild(N),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=Z(a,c,d,e,!0))}return n?-h:h},$=P.calculateOffset=function(a,b,c){if("absolute"!==Y(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=Y(a,"margin"+d,c);return a["offset"+d]-(Z(a,b,parseFloat(e),e.replace(u,""))||0)},_=function(a,b){var c,d,e,f={};if(b=b||X(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Aa===e)&&(f[e.replace(A,C)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||za===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(A,C)]=b[c]);return R||(f.opacity=S(a)),d=Na(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ca&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},aa=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(t,"")?f:0:$(a,g),void 0!==j[g]&&(h=new pa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ba={width:["Left","Right"],height:["Top","Bottom"]},ca=["marginLeft","marginRight","marginTop","marginBottom"],da=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||X(a))[b]||0;if(a.getBBox&&Ka(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ba[b],f=e.length;for(c=c||X(a,null);--f>-1;)d-=parseFloat(Y(a,"padding"+e[f],c,!0))||0,d-=parseFloat(Y(a,"border"+e[f]+"Width",c,!0))||0;return d},ea=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ea(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(t,"")),b.oy=parseFloat(f.replace(t,"")),b.v=a),b||a},fa=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ga=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ha=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:J)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ia={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ja=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ka=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ia[a])c=ia[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(q),b){if(-1!==a.indexOf("="))return a.match(r)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ja(g+1/3,d,e),c[1]=ja(g,d,e),c[2]=ja(g-1/3,d,e);else c=a.match(q)||ia.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ia.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},la=function(a,b){var c,d,e,f=a.match(ma)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ka(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},ma="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ia)ma+="|"+j+"\\b";ma=new RegExp(ma+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];ma.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=la(a[0],b),a[1]=la(a[1],b)),ma.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var na=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(ma)||[""])[0]:"",g=a.split(f).join("").match(s)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(q,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(o=a.replace(G,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(ma)||[f])[0],m=a.split(b).join("").match(s)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(f=a.replace(G,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(s)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},oa=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},pa=(P._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),qa=(P._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=K;for(c._transform=null,K=b,d=k=c.parse(a,b,d,e),K=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new pa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new pa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},P.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof qa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ra=function(a,b,c,d,e,f){var g=new qa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},sa=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"",h=new qa(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&ma.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,s,t,u,v,w,x,y,z,A,B=c.split(", ").join(",").split(" "),C=d.split(", ").join(",").split(" "),D=B.length,E=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(B=B.join(" ").replace(G,", ").split(" "),C=C.join(" ").replace(G,", ").split(" "),D=B.length),D!==C.length&&(B=(f||"").split(" "),D=B.length),h.plugin=j,h.setRatio=l,ma.lastIndex=0,m=0;D>m;m++)if(p=B[m],s=C[m],v=parseFloat(p),v||0===v)h.appendXtra("",v,fa(s,v),s.replace(r,""),E&&-1!==s.indexOf("px"),!0);else if(e&&ma.test(p))z=s.indexOf(")")+1,z=")"+(z?s.substr(z):""),A=-1!==s.indexOf("hsl")&&R,p=ka(p,A),s=ka(s,A),w=p.length+s.length>6,w&&!R&&0===s[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(C[m]).join("transparent")):(R||(w=!1),A?h.appendXtra(w?"hsla(":"hsl(",p[0],fa(s[0],p[0]),",",!1,!0).appendXtra("",p[1],fa(s[1],p[1]),"%,",!1).appendXtra("",p[2],fa(s[2],p[2]),w?"%,":"%"+z,!1):h.appendXtra(w?"rgba(":"rgb(",p[0],s[0]-p[0],",",!0,!0).appendXtra("",p[1],s[1]-p[1],",",!0).appendXtra("",p[2],s[2]-p[2],w?",":z,!0),w&&(p=p.length<4?1:p[3],h.appendXtra("",p,(s.length<4?1:s[3])-p,z,!1))),ma.lastIndex=0;else if(t=p.match(q)){if(u=s.match(r),!u||u.length!==t.length)return h;for(o=0,n=0;n<t.length;n++)y=t[n],x=p.indexOf(y,o),h.appendXtra(p.substr(o,x-o),Number(y),fa(u[n],y),"",E&&"px"===p.substr(x+y.length,2),0===n),o=x+y.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+s:s;if(-1!==d.indexOf("=")&&h.data){for(z=h.xs0+h.data.s,m=1;m<h.l;m++)z+=h["xs"+m]+h.data["xn"+m];h.e=z+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},ta=9;for(j=qa.prototype,j.l=j.pr=0;--ta>0;)j["xn"+ta]=0,j["xs"+ta]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new qa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ua=function(a,b){b=b||{},this.p=b.prefix?W(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||na(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},va=P._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new ua(f[d],b)},wa=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";va(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(T("Error: "+b+" js file not loaded."),f)}})}};j=ua.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(G.test(c)||G.test(b)?(h=b.replace(G,"|").split("|"),i=c.replace(G,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return sa(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(Y(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){va(a,{parser:function(a,d,e,f,g,h,i){var j=new qa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var xa,ya="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),za=W("transform"),Aa=U+"transform",Ba=W("transformOrigin"),Ca=null!==W("perspective"),Da=P.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ca?g.defaultForce3D||"auto":!1},Ea=window.SVGElement,Fa=function(a,b,c){var d,e=L.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ga=L.documentElement,Ha=function(){var a,b,c,d=p||/Android/i.test(Q)&&!window.chrome;return L.createElementNS&&!d&&(a=Fa("svg",Ga),b=Fa("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ba]="50% 50%",b.style[za]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ca),Ga.removeChild(a)),d}(),Ia=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Ma(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),b=ea(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==La&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ja=function(a){try{return a.getBBox()}catch(a){}},Ka=function(a){return!!(Ea&&a.getBBox&&a.getCTM&&Ja(a)&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},La=[1,0,0,1,0,0],Ma=function(a,b){var c,d,e,f,g,h=a._gsTransform||new Da,i=1e5;if(za?d=Y(a,Aa,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(E),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),h.x||0,h.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,(h.svg||a.getBBox&&Ka(a))&&(c&&-1!==(a.style[za]+"").indexOf("matrix")&&(d=a.style[za],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return La;for(e=(d||"").match(q)||[],ta=e.length;--ta>-1;)f=Number(e[ta]),e[ta]=(g=f-(f|=0))?(g*i+(0>g?-.5:.5)|0)/i+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Na=P.getTransform=function(a,c,d,f){if(a._gsTransform&&d&&!f)return a._gsTransform;var h,i,j,k,l,m,n=d?a._gsTransform||new Da:new Da,o=n.scaleX<0,p=2e-5,q=1e5,r=Ca?parseFloat(Y(a,Ba,c,!1,"0 0 0").split(" ")[2])||n.zOrigin||0:0,s=parseFloat(g.defaultTransformPerspective)||0;if(n.svg=!(!a.getBBox||!Ka(a)),n.svg&&(Ia(a,Y(a,Ba,e,!1,"50% 50%")+"",n,a.getAttribute("data-svg-origin")),xa=g.useSVGTransformAttr||Ha),h=Ma(a),h!==La){if(16===h.length){var t,u,v,w,x,y=h[0],z=h[1],A=h[2],B=h[3],C=h[4],D=h[5],E=h[6],F=h[7],G=h[8],H=h[9],I=h[10],K=h[12],L=h[13],M=h[14],N=h[11],O=Math.atan2(E,I);n.zOrigin&&(M=-n.zOrigin,K=G*M-h[12],L=H*M-h[13],M=I*M+n.zOrigin-h[14]),n.rotationX=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),t=C*w+G*x,u=D*w+H*x,v=E*w+I*x,G=C*-x+G*w,H=D*-x+H*w,I=E*-x+I*w,N=F*-x+N*w,C=t,D=u,E=v),O=Math.atan2(-A,I),n.rotationY=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),t=y*w-G*x,u=z*w-H*x,v=A*w-I*x,H=z*x+H*w,I=A*x+I*w,N=B*x+N*w,y=t,z=u,A=v),O=Math.atan2(z,y),n.rotation=O*J,O&&(w=Math.cos(-O),x=Math.sin(-O),y=y*w+C*x,u=z*w+D*x,D=z*-x+D*w,E=A*-x+E*w,z=u),n.rotationX&&Math.abs(n.rotationX)+Math.abs(n.rotation)>359.9&&(n.rotationX=n.rotation=0,n.rotationY=180-n.rotationY),n.scaleX=(Math.sqrt(y*y+z*z)*q+.5|0)/q,n.scaleY=(Math.sqrt(D*D+H*H)*q+.5|0)/q,n.scaleZ=(Math.sqrt(E*E+I*I)*q+.5|0)/q,n.skewX=C||D?Math.atan2(C,D)*J+n.rotation:n.skewX||0,Math.abs(n.skewX)>90&&Math.abs(n.skewX)<270&&(o?(n.scaleX*=-1,n.skewX+=n.rotation<=0?180:-180,n.rotation+=n.rotation<=0?180:-180):(n.scaleY*=-1,n.skewX+=n.skewX<=0?180:-180)),n.perspective=N?1/(0>N?-N:N):0,n.x=K,n.y=L,n.z=M,n.svg&&(n.x-=n.xOrigin-(n.xOrigin*y-n.yOrigin*C),n.y-=n.yOrigin-(n.yOrigin*z-n.xOrigin*D))}else if((!Ca||f||!h.length||n.x!==h[4]||n.y!==h[5]||!n.rotationX&&!n.rotationY)&&(void 0===n.x||"none"!==Y(a,"display",c))){var P=h.length>=6,Q=P?h[0]:1,R=h[1]||0,S=h[2]||0,T=P?h[3]:1;n.x=h[4]||0,n.y=h[5]||0,j=Math.sqrt(Q*Q+R*R),k=Math.sqrt(T*T+S*S),l=Q||R?Math.atan2(R,Q)*J:n.rotation||0,m=S||T?Math.atan2(S,T)*J+l:n.skewX||0,Math.abs(m)>90&&Math.abs(m)<270&&(o?(j*=-1,m+=0>=l?180:-180,l+=0>=l?180:-180):(k*=-1,m+=0>=m?180:-180)),n.scaleX=j,n.scaleY=k,n.rotation=l,n.skewX=m,Ca&&(n.rotationX=n.rotationY=n.z=0,n.perspective=s,n.scaleZ=1),n.svg&&(n.x-=n.xOrigin-(n.xOrigin*Q+n.yOrigin*S),n.y-=n.yOrigin-(n.xOrigin*R+n.yOrigin*T))}n.zOrigin=r;for(i in n)n[i]<p&&n[i]>-p&&(n[i]=0)}return d&&(a._gsTransform=n,n.svg&&(xa&&a.style[za]?b.delayedCall(.001,function(){Ra(a.style,za)}):!xa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),n},Oa=function(a){var b,c,d=this.data,e=-d.rotation*I,f=e+d.skewX*I,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,w=d.x+q*d.xPercent/100,x=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,w+=n-(n*h+o*i),x+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+w)+", Dy="+(o-(n*j+o*k)+x)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(F,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||v.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+w),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+x),ta=0;4>ta;ta++)z=ca[ta],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):Z(this.t,z,parseFloat(y),y.replace(u,""))||0,A=c!==d[z]?2>ta?-d.ieOffsetX:-d.ieOffsetY:2>ta?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===ta||2===ta?1:B)))+"px"}}},Pa=P.set3DTransformRatio=P.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,J=z.y,K=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!K&&!M&&!D&&!C&&1===G||xa&&L||!Ca)return void(B||z.skewX||L?(B*=I,x=z.skewX*I,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(b*=s,e*=s)),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,xa&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),H+=.01*z.xPercent*p.width,J+=.01*z.yPercent*p.height),p=1e-6,p>H&&H>-p&&(H=0),p>J&&J>-p&&(J=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+H+","+J+")",L&&xa?this.t.setAttribute("transform","matrix("+u):A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+J+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=I,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*I,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan(z.skewX*I),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[za]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+J+"px,"+K+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*I,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*I,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(H+=d*-o,J+=g*-o,K+=j*-o+o),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>H&&H>-p&&(H=w),p>J&&J>-p&&(J=w),p>K&&K>-p&&(K=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=H+v+J+v+K+v+(M?1+-K/M:1)+")",A[za]=u};j=Da.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,va("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k,l,m,n,o,p,q,r,s,t=a._gsTransform,u=a.style,v=1e-6,w=ya.length,x=i,y={},z="transformOrigin";if(i.display?(l=Y(a,"display"),u.display="block",j=Na(a,e,!0,i.parseTransform),u.display=l):j=Na(a,e,!0,i.parseTransform),d._transform=j,"string"==typeof x.transform&&za)l=N.style,l[za]=x.transform,l.display="block",l.position="absolute",L.body.appendChild(N),k=Na(N,null,!1),j.svg&&(q=j.xOrigin,r=j.yOrigin,k.x-=j.xOffset,k.y-=j.yOffset,(x.transformOrigin||x.svgOrigin)&&(m={},Ia(a,ea(x.transformOrigin),m,x.svgOrigin,x.smoothOrigin,!0),q=m.xOrigin,r=m.yOrigin,k.x-=m.xOffset-j.xOffset,k.y-=m.yOffset-j.yOffset),(q||r)&&(s=Ma(N),k.x-=q-(q*s[0]+r*s[2]),k.y-=r-(q*s[1]+r*s[3]))),L.body.removeChild(N),k.perspective||(k.perspective=j.perspective),null!=x.xPercent&&(k.xPercent=ga(x.xPercent,j.xPercent)),null!=x.yPercent&&(k.yPercent=ga(x.yPercent,j.yPercent));else if("object"==typeof x){if(k={scaleX:ga(null!=x.scaleX?x.scaleX:x.scale,j.scaleX),scaleY:ga(null!=x.scaleY?x.scaleY:x.scale,j.scaleY),scaleZ:ga(x.scaleZ,j.scaleZ),x:ga(x.x,j.x),y:ga(x.y,j.y),z:ga(x.z,j.z),xPercent:ga(x.xPercent,j.xPercent),yPercent:ga(x.yPercent,j.yPercent),perspective:ga(x.transformPerspective,j.perspective)},p=x.directionalRotation,null!=p)if("object"==typeof p)for(l in p)x[l]=p[l];else x.rotation=p;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(k.x=0,k.xPercent=ga(x.x,j.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(k.y=0,k.yPercent=ga(x.y,j.yPercent)),k.rotation=ha("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:j.rotation-j.skewY,j.rotation-j.skewY,"rotation",y),Ca&&(k.rotationX=ha("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":j.rotationX||0,j.rotationX,"rotationX",y),k.rotationY=ha("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":j.rotationY||0,j.rotationY,"rotationY",y)),k.skewX=ha(x.skewX,j.skewX-j.skewY),(k.skewY=ha(x.skewY,j.skewY))&&(k.skewX+=k.skewY,k.rotation+=k.skewY)}for(Ca&&null!=x.force3D&&(j.force3D=x.force3D,o=!0),j.skewType=x.skewType||j.skewType||g.defaultSkewType,n=j.force3D||j.z||j.rotationX||j.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,n||null==x.scale||(k.scaleZ=1);--w>-1;)c=ya[w],m=k[c]-j[c],(m>v||-v>m||null!=x[c]||null!=K[c])&&(o=!0,f=new qa(j,c,j[c],m,f),c in y&&(f.e=y[c]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return m=x.transformOrigin,j.svg&&(m||x.svgOrigin)&&(q=j.xOffset,r=j.yOffset,Ia(a,ea(m),k,x.svgOrigin,x.smoothOrigin),f=ra(j,"xOrigin",(t?j:k).xOrigin,k.xOrigin,f,z),f=ra(j,"yOrigin",(t?j:k).yOrigin,k.yOrigin,f,z),(q!==j.xOffset||r!==j.yOffset)&&(f=ra(j,"xOffset",t?q:j.xOffset,j.xOffset,f,z),f=ra(j,"yOffset",t?r:j.yOffset,j.yOffset,f,z)),m=xa?null:"0px 0px"),(m||Ca&&n&&j.zOrigin)&&(za?(o=!0,c=Ba,m=(m||Y(a,c,e,!1,"50% 50%"))+"",f=new qa(u,c,0,0,f,-1,z),f.b=u[c],f.plugin=h,Ca?(l=j.zOrigin,m=m.split(" "),j.zOrigin=(m.length>2&&(0===l||"0px"!==m[2])?parseFloat(m[2]):l)||0,f.xs0=f.e=m[0]+" "+(m[1]||"50%")+" 0px",f=new qa(j,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=j.zOrigin):f.xs0=f.e=m):ea(m+"",j)),o&&(d._transformType=j.svg&&xa||!n&&3!==this._transformType?2:3),f},prefix:!0}),va("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),va("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;
for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=W(y[j])),m=l=Y(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=Z(a,"borderLeft",o,t),w=Z(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=Z(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=sa(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:na("0px 0px 0px 0px",!1,!0)}),va("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return sa(a.style,c,this.format(Y(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:na("0px 0px",!1,!0)}),va("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||X(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=Y(a,"backgroundImage").replace(B,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),O.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-O.width:a.offsetHeight-O.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ea}),va("backgroundSize",{defaultValue:"0 0",formatter:ea}),va("perspective",{defaultValue:"0px",prefix:!0}),va("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),va("transformStyle",{prefix:!0}),va("backfaceVisibility",{prefix:!0}),va("userSelect",{prefix:!0}),va("margin",{parser:oa("marginTop,marginRight,marginBottom,marginLeft")}),va("padding",{parser:oa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),va("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(Y(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),va("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),va("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),va("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){return this.parseComplex(a.style,this.format(Y(a,"borderTopWidth",e,!1,"0px")+" "+Y(a,"borderTopStyle",e,!1,"solid")+" "+Y(a,"borderTopColor",e,!1,"#000")),this.format(b),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ma)||["#000"])[0]}}),va("borderWidth",{parser:oa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),va("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new qa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Qa=function(a){var b,c=this.t,d=c.filter||Y(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!Y(this.data,"filter")):(c.filter=d.replace(x,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(v,"opacity="+e))};va("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(Y(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===Y(a,"visibility",e)&&0!==b&&(h=0),R?f=new qa(i,"opacity",h,b-h,f):(f=new qa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Qa),j&&(f=new qa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Ra=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(z,"-$1").toLowerCase())):a.removeAttribute(b))},Sa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Ra(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};va("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new qa(a,d,0,0,g,2),g.setRatio=Sa,g.pr=-11,c=!0,g.b=o,k=_(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=aa(a,k,_(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Ta=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ba:i[c].p),Ra(g,c);e&&(Ra(g,za),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(va("clearProps",{parser:function(a,b,d,e,f){return f=new qa(a,d,0,0,f,2),f.setRatio=Ta,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),ta=j.length;ta--;)wa(j[ta]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=X(a,""),f=this._overwriteProps;var j,n,p,q,r,s,t,u,v,x=a.style;if(l&&""===x.zIndex&&(j=Y(a,"zIndex",e),("auto"===j||""===j)&&this._addLazySet(x,"zIndex",0)),"string"==typeof b&&(q=x.cssText,j=_(a,e),x.cssText=q+";"+b,j=aa(a,j,_(a)).difs,!R&&w.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,x.cssText=q),b.className?this._firstPT=n=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=n=this.parse(a,b,null),this._transformType){for(v=3===this._transformType,za?m&&(l=!0,""===x.zIndex&&(t=Y(a,"zIndex",e),("auto"===t||""===t)&&this._addLazySet(x,"zIndex",0)),o&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(v?"visible":"hidden"))):x.zoom=1,p=n;p&&p._next;)p=p._next;u=new qa(a,"transform",0,0,null,2),this._linkCSSP(u,null,p),u.setRatio=za?Pa:Oa,u.data=this._transform||Na(a,e,!0),u.tween=h,u.pr=-1,f.pop()}if(c){for(;n;){for(s=n._next,p=q;p&&p.pr>n.pr;)p=p._next;(n._prev=p?p._prev:r)?n._prev._next=n:q=n,(n._next=p)?p._prev=n:r=n,n=s}this._firstPT=q}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,q,r,s=a.style;for(g in b)n=b[g],h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=Y(a,g,e)+"",q="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||q&&y.test(n)?(q||(n=ka(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=sa(s,g,m,n,!0,"transparent",c,0,f)):q&&H.test(n)?c=sa(s,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=da(a,g,e),o="px"):"left"===g||"top"===g?(j=$(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),r=q&&"="===n.charAt(1),r?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(u,"")):(l=parseFloat(n),p=q?n.replace(u,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(r?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=Z(a,g,j,o),"%"===p?(j/=Z(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=Z(a,g,1,p):"px"!==p&&(l=Z(a,g,l,p),p="px"),r&&(l||0===l)&&(n=l+j+p)),r&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==s[g]&&(n||n+""!="NaN"&&null!=n)?(c=new qa(s,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):T("invalid "+g+" tween value: "+b[g]):(c=new qa(s,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Na(this._target,e,!0),this._transformType=this._transform.svg&&xa||!a&&3!==this._transformType?2:3};var Ua=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new qa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ua,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}return b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),a.prototype._kill.call(this,f)};var Va=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Va(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(_(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Va(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Va(a,k,m),i.render(c,!0,!0),Va(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=aa(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.r=1),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=1;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._roundProps(h,!0):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(a,b,c){var d;if("function"!=typeof a.setAttribute)return!1;for(d in b)this._addTween(a,"setAttribute",a.getAttribute(d)+"",b[d]+"",d,!1,d),this._overwriteProps.push(d);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(a,b,c){"object"!=typeof b&&(b={rotation:b}),this.finals={};var d,e,f,g,h,i,j=b.useRadians===!0?2*Math.PI:360,k=1e-6;for(d in b)"useRadians"!==d&&(i=(b[d]+"").split("_"),e=i[0],f=parseFloat("function"!=typeof a[d]?a[d]:a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]()),g=this.finals[d]="string"==typeof e&&"="===e.charAt(1)?f+parseInt(e.charAt(0)+"1",10)*Number(e.substr(2)):Number(e)||0,h=g-f,i.length&&(e=i.join("_"),-1!==e.indexOf("short")&&(h%=j,h!==h%(j/2)&&(h=0>h?h+j:h-j)),-1!==e.indexOf("_cw")&&0>h?h=(h+9999999999*j)%j-(h/j|0)*j:-1!==e.indexOf("ccw")&&h>0&&(h=(h-9999999999*j)%j-(h/j|0)*j)),(h>k||-k>h)&&(this._addTween(a,d,f,f+h,d),this._overwriteProps.push(d)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!c.TweenLite){var d,e,f,g,h,i=function(a){var b,d=a.split("."),e=c;for(b=0;b<d.length;b++)e[d[b]]=e=e[d[b]]||{};return e},j=i("com.greensock"),k=1e-10,l=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},m=function(){},n=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),o={},p=function(d,e,f,g){this.sc=o[d]?o[d].sc:[],o[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(j){for(var k,l,m,n,q,r=e.length,s=r;--r>-1;)(k=o[e[r]]||new p(e[r],[])).gsClass?(h[r]=k.gsClass,s--):j&&k.sc.push(this);if(0===s&&f)for(l=("com.greensock."+d).split("."),m=l.pop(),n=i(l.join("."))[m]=this.gsClass=f.apply(f,h),g&&(c[m]=n,q="undefined"!=typeof module&&module.exports,!q&&"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return n}):d===b&&q&&(module.exports=n)),r=0;r<this.sc.length;r++)this.sc[r].check()},this.check(!0)},q=a._gsDefine=function(a,b,c,d){return new p(a,b,c,d)},r=j._class=function(a,b,c){return b=b||function(){},q(a,[],function(){return b},c),b};q.globals=c;var s=[0,0,1,1],t=[],u=r("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?s.concat(b):s},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),k=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--k>-1;)for(f=i[k],e=d?r("easing."+f,null,!0):j.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(f=u.prototype,f._calcEnd=!1,f.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},d=["Linear","Quad","Cubic","Quart","Quint,Strong"],e=d.length;--e>-1;)f=d[e]+",Power"+e,w(new u(null,null,1,e),f,"easeOut",!0),w(new u(null,null,2,e),f,"easeIn"+(0===e?",easeNone":"")),w(new u(null,null,3,e),f,"easeInOut");v.linear=j.easing.Linear.easeIn,v.swing=j.easing.Quad.easeInOut;var x=r("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});f=x.prototype,f.addEventListener=function(a,b,c,d,e){e=e||0;var f,i,j=this._listeners[a],k=0;for(null==j&&(this._listeners[a]=j=[]),i=j.length;--i>-1;)f=j[i],f.c===b&&f.s===c?j.splice(i,1):0===k&&f.pr<e&&(k=i+1);j.splice(k,0,{c:b,s:c,up:d,pr:e}),this!==g||h||g.wake()},f.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},f.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(d=["ms","moz","webkit","o"],e=d.length;--e>-1&&!y;)y=a[d[e]+"RequestAnimationFrame"],z=a[d[e]+"CancelAnimationFrame"]||a[d[e]+"CancelRequestAnimationFrame"];r("Ticker",function(a,b){var c,d,e,f,i,j=this,l=A(),n=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,g,h=A()-B;h>o&&(l+=h-p),B+=h,j.time=(B-l)/1e3,b=j.time-i,(!c||b>0||a===!0)&&(j.frame++,i+=b+(b>=f?.004:f-b),g=!0),a!==!0&&(e=d(r)),g&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/k,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(n&&z?z(e):clearTimeout(e),d=m,e=null,j===g&&(h=!1))},j.wake=function(a){null!==e?j.sleep():a?l+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?m:n&&y?y:function(a){return setTimeout(a,1e3*(i-j.time)+1|0)},j===g&&(h=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),i=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),n=a,void j.fps(c)):n},j.fps(a),setTimeout(function(){"auto"===n&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),f=j.Ticker.prototype=new j.events.EventDispatcher,f.constructor=j.Ticker;var C=r("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){h||g.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});g=C.ticker=new j.Ticker,f=C.prototype,f._dirty=f._gc=f._initted=f._paused=!1,f._totalTime=f._time=0,f._rawPrevTime=-1,f._next=f._last=f._onUpdate=f._timeline=f.timeline=null,f._paused=!1;var D=function(){h&&A()-B>2e3&&g.wake(),setTimeout(D,2e3)};D(),f.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},f.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},f.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},f.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},f.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},f.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},f.render=function(a,b,c){},f.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},f.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},f._enabled=function(a,b){return h||g.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},f._kill=function(a,b){return this._enabled(!1,!1)},f.kill=function(a,b){return this._kill(a,b),this},f._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},f._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},f._callback=function(a){var b=this.vars;b[a].apply(b[a+"Scope"]||b.callbackScope||this,b[a+"Params"]||t)},f.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=n(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},f.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},f.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},f.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},f.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},f.totalTime=function(a,b,c){if(h||g.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},f.progress=f.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},f.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},f.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},f.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||k,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},f.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},f.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(h||a||g.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=r("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});f=E.prototype=new C,f.constructor=E,f.kill()._gc=!1,f._first=f._last=f._recent=null,f._sortChildren=!1,f.add=f.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},f._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},f.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},f.rawTime=function(){return h||g.wake(),this._totalTime};var F=r("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&n(b))&&"number"!=typeof b[0])for(this._targets=g=l(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(l(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-k,this.render(Math.min(0,-this._delay)))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};f=F.prototype=new C,f.constructor=F,f.kill()._gc=!1,f.ratio=0,f._firstPT=f._targets=f._overwrittenProps=f._startAt=null,f._notifyPluginsOfEnabled=f._lazy=!1,F.version="1.18.4",F.defaultEase=f._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=g,F.autoSleep=120,F.lagSmoothing=function(a,b){g.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.r?b=Math.round(b):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,r:o&&4>o}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h){var i,j,k="get"===c?a[b]:c,l=typeof a[b],m="string"==typeof d&&"="===d.charAt(1),n={t:a,p:b,s:k,f:"function"===l,pg:0,n:e||b,r:f,pr:0,c:m?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-k||0};return"number"!==l&&("function"===l&&"get"===c&&(j=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),
n.s=k=g?a[j](g):a[j]()),"string"==typeof k&&(g||isNaN(k))?(n.fp=g,i=M(k,d,h||F.defaultStringFilter,n),n={t:i,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0}):m||(n.s=parseFloat(k),n.c=parseFloat(d)-n.s||0)),n.c?((n._next=this._firstPT)&&(n._next._prev=n),this._firstPT=n,n):void 0},O=F._internals={isArray:n,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=g.time,U._startTime=g.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((g.time-V._startTime)*V._timeScale,!1,!1),U.render((g.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),g.frame>=W){W=g.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===g._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||g.sleep()}}},g.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,l=b._startTime+k,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=l&&h._startTime+h.totalDuration()/h._timeScale>l&&((o||!h._initted)&&l-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*k>f-b?k:(f+=a.totalDuration()/a._timeScale/e)>b+k?0:f-b-k};f._init=function(){var a,b,c,d,e,f=this.vars,g=this._overwrittenProps,h=this._duration,i=!!f.immediateRender,j=f.ease;if(f.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in f.startAt)e[d]=f.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=i&&f.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),i)if(this._time>0)this._startAt=null;else if(0!==h)return}else if(f.runBackwards&&0!==h)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(i=!1),c={};for(d in f)S[d]&&"autoCSS"!==d||(c[d]=f[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=i&&f.lazy!==!1,c.immediateRender=i,this._startAt=F.to(this.target,0,c),i){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=j=j?j instanceof u?j:"function"==typeof j?new u(j,f.easeParams):v[j]||F.defaultEase:F.defaultEase,f.easeParams instanceof Array&&j.config&&(this._ease=j.config.apply(j,f.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(a=this._targets.length;--a>-1;)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],g?g[a]:null)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,g);if(b&&F._onPluginEvent("_onInitAllProps",this),g&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),f.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=f.onUpdate,this._initted=!0},f._initProps=function(b,c,d,e){var f,g,h,i,j,k;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(f in this.vars)if(k=this.vars[f],S[f])k&&(k instanceof Array||k.push&&n(k))&&-1!==k.join("").indexOf("{self}")&&(this.vars[f]=k=this._swapSelfInParams(k,this));else if(P[f]&&(i=new P[f])._onInitTween(b,this.vars[f],this)){for(this._firstPT=j={_next:this._firstPT,t:i,p:"setRatio",s:0,c:1,f:1,n:f,pg:1,pr:i._priority},g=i._overwriteProps.length;--g>-1;)c[i._overwriteProps[g]]=this._firstPT;(i._priority||i._onInitAllProps)&&(h=!0),(i._onDisable||i._onEnable)&&(this._notifyPluginsOfEnabled=!0),j._next&&(j._next._prev=j)}else c[f]=N.call(this,b,f,"get",k,f,0,null,this.vars.stringFilter);return e&&this._kill(e,b)?this._initProps(b,c,d,e):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),h)},f.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===k&&"isPause"!==this.data)&&j!==a&&(c=!0,j>k&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:k);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==k||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:k)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var l=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===n?l*=l:2===n?l*=l*l:3===n?l*=l*l*l:4===n&&(l*=l*l*l*l),1===m?this.ratio=1-l:2===m?this.ratio=l:.5>a/i?this.ratio=l/2:this.ratio=1-l/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===k&&g!==k&&(this._rawPrevTime=0))}},f._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((n(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},f.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-k,this.render(Math.min(0,-this._delay))),this},f._enabled=function(a,b){if(h||g.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((n(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=r("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(f=aa.prototype,aa.version="1.18.0",aa.API=2,f._firstPT=null,f._addTween=N,f.setRatio=L,f._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},f._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},q.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},g=r("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},d=a._gsQueue){for(e=0;e<d.length;e++)d[e]();for(f in o)o[f].func||a.console.log("GSAP encountered missing dependency: com.greensock."+f)}h=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

/*!
 * VERSION: 0.0.10
 * DATE: 2016-02-11
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";function a(a,b,c,d){return c=parseFloat(c)-parseFloat(a),d=parseFloat(d)-parseFloat(b),Math.sqrt(c*c+d*d)}function b(a){return"string"!=typeof a&&a.nodeType||(a=_gsScope.TweenLite.selector(a),a.length&&(a=a[0])),a}function c(a,b,c){var d,e,f=a.indexOf(" ");return-1===f?(d=void 0!==c?c+"":a,e=a):(d=a.substr(0,f),e=a.substr(f+1)),d=-1!==d.indexOf("%")?parseFloat(d)/100*b:parseFloat(d),e=-1!==e.indexOf("%")?parseFloat(e)/100*b:parseFloat(e),d>e?[e,d]:[d,e]}function d(c){if(!c)return 0;c=b(c);var d,e,f,g,i,j,k,l=c.tagName.toLowerCase();if("path"===l){g=c.style.strokeDasharray,c.style.strokeDasharray="none",d=c.getTotalLength()||0;try{e=c.getBBox()}catch(m){}c.style.strokeDasharray=g}else if("rect"===l)d=2*c.getAttribute("width")+2*c.getAttribute("height");else if("circle"===l)d=2*Math.PI*parseFloat(c.getAttribute("r"));else if("line"===l)d=a(c.getAttribute("x1"),c.getAttribute("y1"),c.getAttribute("x2"),c.getAttribute("y2"));else if("polyline"===l||"polygon"===l)for(f=c.getAttribute("points").match(h)||[],"polygon"===l&&f.push(f[0],f[1]),d=0,i=2;i<f.length;i+=2)d+=a(f[i-2],f[i-1],f[i],f[i+1])||0;else"ellipse"===l&&(j=parseFloat(c.getAttribute("rx")),k=parseFloat(c.getAttribute("ry")),d=Math.PI*(3*(j+k)-Math.sqrt((3*j+k)*(j+3*k))));return d||0}function e(a,c){if(!a)return[0,0];a=b(a),c=c||d(a)+1;var e=g(a),f=e.strokeDasharray||"",h=parseFloat(e.strokeDashoffset),i=f.indexOf(",");return 0>i&&(i=f.indexOf(" ")),f=0>i?c:parseFloat(f.substr(0,i))||1e-5,f>c&&(f=c),[Math.max(0,-h),Math.max(0,f-h)]}var f,g=document.defaultView?document.defaultView.getComputedStyle:function(){},h=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;f=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.0.10",global:!0,overwriteProps:["drawSVG"],init:function(a,b,f){if(!a.getBBox)return!1;var g,h,i,j=d(a)+1;return this._style=a.style,b===!0||"true"===b?b="0 100%":b?-1===(b+"").indexOf(" ")&&(b="0 "+b):b="0 0",g=e(a,j),h=c(b,j,g[0]),this._length=j+10,0===g[0]&&0===h[0]?(i=Math.max(1e-5,h[1]-j),this._dash=j+i,this._offset=j-g[1]+i,this._addTween(this,"_offset",this._offset,j-h[1]+i,"drawSVG")):(this._dash=g[1]-g[0]||1e-6,this._offset=-g[0],this._addTween(this,"_dash",this._dash,h[1]-h[0]||1e-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-h[0],"drawSVG")),!0},set:function(a){this._firstPT&&(this._super.setRatio.call(this,a),this._style.strokeDashoffset=this._offset,1===a||0===a?this._style.strokeDasharray=this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._style.strokeDasharray=this._dash+"px,"+this._length+"px")}}),f.getLength=d,f.getPosition=e}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

/*!
 * VERSION: 0.8.4
 * DATE: 2016-02-16
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=Math.PI/180,b=180/Math.PI,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,e=/[achlmqstvz]/gi,f=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,g=_gsScope._gsDefine.globals.TweenLite,h=function(a){window.console&&console.log(a)},i=function(b,c){var d,e,f,g,h,i,j=Math.ceil(Math.abs(c)/90),k=0,l=[];for(b*=a,c*=a,d=c/j,e=4/3*Math.sin(d/2)/(1+Math.cos(d/2)),i=0;j>i;i++)f=b+i*d,g=Math.cos(f),h=Math.sin(f),l[k++]=g-e*h,l[k++]=h+e*g,f+=d,g=Math.cos(f),h=Math.sin(f),l[k++]=g+e*h,l[k++]=h-e*g,l[k++]=g,l[k++]=h;return l},j=function(c,d,e,f,g,h,j,k,l){if(c!==k||d!==l){e=Math.abs(e),f=Math.abs(f);var m=g%360*a,n=Math.cos(m),o=Math.sin(m),p=(c-k)/2,q=(d-l)/2,r=n*p+o*q,s=-o*p+n*q,t=e*e,u=f*f,v=r*r,w=s*s,x=v/t+w/u;x>1&&(e=Math.sqrt(x)*e,f=Math.sqrt(x)*f,t=e*e,u=f*f);var y=h===j?-1:1,z=(t*u-t*w-u*v)/(t*w+u*v);0>z&&(z=0);var A=y*Math.sqrt(z),B=A*(e*s/f),C=A*-(f*r/e),D=(c+k)/2,E=(d+l)/2,F=D+(n*B-o*C),G=E+(o*B+n*C),H=(r-B)/e,I=(s-C)/f,J=(-r-B)/e,K=(-s-C)/f,L=Math.sqrt(H*H+I*I),M=H;y=0>I?-1:1;var N=y*Math.acos(M/L)*b;L=Math.sqrt((H*H+I*I)*(J*J+K*K)),M=H*J+I*K,y=0>H*K-I*J?-1:1;var O=y*Math.acos(M/L)*b;!j&&O>0?O-=360:j&&0>O&&(O+=360),O%=360,N%=360;var P,Q,R,S=i(N,O),T=n*e,U=o*e,V=o*-f,W=n*f,X=S.length-2;for(P=0;X>P;P+=2)Q=S[P],R=S[P+1],S[P]=Q*T+R*V+F,S[P+1]=Q*U+R*W+G;return S[S.length-2]=k,S[S.length-1]=l,S}},k=function(a){var b,d,e,g,i,k,l,m,n,o,p,q,r,s=(a+"").replace(f,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],t=[],u=0,v=0,w=s.length,x=2,y=0;if(!a||!isNaN(s[0])||isNaN(s[1]))return h("ERROR: malformed path data: "+a),t;for(b=0;w>b;b++)if(r=i,isNaN(s[b])?(i=s[b].toUpperCase(),k=i!==s[b]):b--,e=+s[b+1],g=+s[b+2],k&&(e+=u,g+=v),0===b&&(m=e,n=g),"M"===i)l&&l.length<8&&(t.length-=1,x=0),u=m=e,v=n=g,l=[e,g],y+=x,x=2,t.push(l),b+=2,i="L";else if("C"===i)l||(l=[0,0]),l[x++]=e,l[x++]=g,k||(u=v=0),l[x++]=u+1*s[b+3],l[x++]=v+1*s[b+4],l[x++]=u+=1*s[b+5],l[x++]=v+=1*s[b+6],b+=6;else if("S"===i)"C"===r||"S"===r?(o=u-l[x-4],p=v-l[x-3],l[x++]=u+o,l[x++]=v+p):(l[x++]=u,l[x++]=v),l[x++]=e,l[x++]=g,k||(u=v=0),l[x++]=u+=1*s[b+3],l[x++]=v+=1*s[b+4],b+=4;else if("Q"===i)o=e-u,p=g-v,l[x++]=u+2*o/3,l[x++]=v+2*p/3,k||(u=v=0),u+=1*s[b+3],v+=1*s[b+4],o=e-u,p=g-v,l[x++]=u+2*o/3,l[x++]=v+2*p/3,l[x++]=u,l[x++]=v,b+=4;else if("T"===i)o=u-l[x-4],p=v-l[x-3],l[x++]=u+o,l[x++]=v+p,o=u+1.5*o-e,p=v+1.5*p-g,l[x++]=e+2*o/3,l[x++]=g+2*p/3,l[x++]=u=e,l[x++]=v=g,b+=2;else if("H"===i)g=v,l[x++]=u+(e-u)/3,l[x++]=v+(g-v)/3,l[x++]=u+2*(e-u)/3,l[x++]=v+2*(g-v)/3,l[x++]=u=e,l[x++]=g,b+=1;else if("V"===i)g=e,e=u,k&&(g+=v-u),l[x++]=e,l[x++]=v+(g-v)/3,l[x++]=e,l[x++]=v+2*(g-v)/3,l[x++]=e,l[x++]=v=g,b+=1;else if("L"===i||"Z"===i)"Z"===i&&(e=m,g=n,l.closed=!0),("L"===i||Math.abs(u-e)>.5||Math.abs(v-g)>.5)&&(l[x++]=u+(e-u)/3,l[x++]=v+(g-v)/3,l[x++]=u+2*(e-u)/3,l[x++]=v+2*(g-v)/3,l[x++]=e,l[x++]=g,"L"===i&&(b+=2)),u=e,v=g;else if("A"===i){for(q=j(u,v,1*s[b+1],1*s[b+2],1*s[b+3],1*s[b+4],1*s[b+5],(k?u:0)+1*s[b+6],(k?v:0)+1*s[b+7]),d=0;d<q.length;d++)l[x++]=q[d];u=l[x-2],v=l[x-1],b+=7}else h("Error: malformed path data: "+a);return t.totalPoints=y+x,t},l=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q=0,r=.999999,s=a.length,t=b/((s-2)/6);for(o=2;s>o;o+=6)for(q+=t;q>r;)c=a[o-2],d=a[o-1],e=a[o],f=a[o+1],g=a[o+2],h=a[o+3],i=a[o+4],j=a[o+5],p=1/(Math.floor(q)+1),k=c+(e-c)*p,m=e+(g-e)*p,k+=(m-k)*p,m+=(g+(i-g)*p-m)*p,l=d+(f-d)*p,n=f+(h-f)*p,l+=(n-l)*p,n+=(h+(j-h)*p-n)*p,a.splice(o,4,c+(e-c)*p,d+(f-d)*p,k,l,k+(m-k)*p,l+(n-l)*p,m,n,g+(i-g)*p,h+(j-h)*p),o+=6,s+=6,q--;return a},m=function(a){var b,c,d,e,f="",g=a.length,h=100;for(c=0;g>c;c++){for(e=a[c],f+="M"+e[0]+","+e[1]+" C",b=e.length,d=2;b>d;d++)f+=(e[d++]*h|0)/h+","+(e[d++]*h|0)/h+" "+(e[d++]*h|0)/h+","+(e[d++]*h|0)/h+" "+(e[d++]*h|0)/h+","+(e[d]*h|0)/h+" ";e.closed&&(f+="z")}return f},n=function(a){for(var b=[],c=a.length-1,d=0;--c>-1;)b[d++]=a[c],b[d++]=a[c+1],c--;for(c=0;d>c;c++)a[c]=b[c];a.reversed=a.reversed?!1:!0},o=function(a){var b,c=a.length,d=0,e=0;for(b=0;c>b;b++)d+=a[b++],e+=a[b];return[d/(c/2),e/(c/2)]},p=function(a){var b,c,d,e=a.length,f=a[0],g=f,h=a[1],i=h;for(d=6;e>d;d+=6)b=a[d],c=a[d+1],b>f?f=b:g>b&&(g=b),c>h?h=c:i>c&&(i=c);return a.centerX=(f+g)/2,a.centerY=(h+i)/2,a.size=(f-g)*(h-i)},q=function(a){for(var b,c,d,e,f,g=a.length,h=a[0][0],i=h,j=a[0][1],k=j;--g>-1;)for(f=a[g],b=f.length,e=6;b>e;e+=6)c=f[e],d=f[e+1],c>h?h=c:i>c&&(i=c),d>j?j=d:k>d&&(k=d);return a.centerX=(h+i)/2,a.centerY=(j+k)/2,a.size=(h-i)*(j-k)},r=function(a,b){return b.length-a.length},s=function(a,b){var c=a.size||p(a),d=b.size||p(b);return Math.abs(d-c)<(c+d)/20?b.centerX-a.centerX||b.centerY-a.centerY:d-c},t=function(a,b){var c,d,e=a.slice(0),f=a.length,g=f-2;for(b=0|b,c=0;f>c;c++)d=(c+b)%g,a[c++]=e[d],a[c]=e[d+1]},u=function(a,b,c,d,e){var f,g,h,i,j=a.length,k=0,l=j-2;for(c*=6,g=0;j>g;g+=6)f=(g+c)%l,i=a[f]-(b[g]-d),h=a[f+1]-(b[g+1]-e),k+=Math.sqrt(h*h+i*i);return k},v=function(a,b,c){var d,e,f,g=a.length,h=o(a),i=o(b),j=i[0]-h[0],k=i[1]-h[1],l=u(a,b,0,j,k),m=0;for(f=6;g>f;f+=6)e=u(a,b,f/6,j,k),l>e&&(l=e,m=f);if(c)for(d=a.slice(0),n(d),f=6;g>f;f+=6)e=u(d,b,f/6,j,k),l>e&&(l=e,m=-f);return m/6},w=function(a,b,c){for(var d,e,f,g,h,i,j=a.length,k=99999999999,l=0,m=0;--j>-1;)for(d=a[j],i=d.length,h=0;i>h;h+=6)e=d[h]-b,f=d[h+1]-c,g=Math.sqrt(e*e+f*f),k>g&&(k=g,l=d[h],m=d[h+1]);return[l,m]},x=function(a,b,c,d,e,f){var g,h,i,j,k,l=b.length,m=0,n=Math.min(a.size||p(a),b[c].size||p(b[c]))*d,o=999999999999,q=a.centerX+e,r=a.centerY+f;for(h=c;l>h&&(g=b[h].size||p(b[h]),!(n>g));h++)i=b[h].centerX-q,j=b[h].centerY-r,k=Math.sqrt(i*i+j*j),o>k&&(m=h,o=k);return k=b[m],b.splice(m,1),k},y=function(a,b,c,d){var e,f,g,i,j,k,m,o=b.length-a.length,u=o>0?b:a,y=o>0?a:b,z=0,A="complexity"===d?r:s,B="position"===d?0:"number"==typeof d?d:.8,C=y.length,D="object"==typeof c&&c.push?c.slice(0):[c],E="reverse"===D[0]||D[0]<0,F="log"===c;if(y[0]){if(u.length>1&&(a.sort(A),b.sort(A),k=u.size||q(u),k=y.size||q(y),k=u.centerX-y.centerX,m=u.centerY-y.centerY,A===s))for(C=0;C<y.length;C++)u.splice(C,0,x(y[C],u,C,B,k,m));if(o)for(0>o&&(o=-o),u[0].length>y[0].length&&l(y[0],(u[0].length-y[0].length)/6|0),C=y.length;o>z;)i=u[C].size||p(u[C]),g=w(y,u[C].centerX,u[C].centerY),i=g[0],j=g[1],y[C++]=[i,j,i,j,i,j,i,j],y.totalPoints+=8,z++;for(C=0;C<a.length;C++)e=b[C],f=a[C],o=e.length-f.length,0>o?l(e,-o/6|0):o>0&&l(f,o/6|0),E&&!f.reversed&&n(f),c=D[C]||0===D[C]?D[C]:"auto",c&&(f.closed||Math.abs(f[0]-f[f.length-2])<.5&&Math.abs(f[1]-f[f.length-1])<.5?"auto"===c||"log"===c?(D[C]=c=v(f,e,0===C),0>c&&(E=!0,n(f),c=-c),t(f,6*c)):"reverse"!==c&&(C&&0>c&&n(f),t(f,6*(0>c?-c:c))):!E&&("auto"===c&&Math.abs(e[0]-f[0])+Math.abs(e[1]-f[1])+Math.abs(e[e.length-2]-f[f.length-2])+Math.abs(e[e.length-1]-f[f.length-1])>Math.abs(e[0]-f[f.length-2])+Math.abs(e[1]-f[f.length-1])+Math.abs(e[e.length-2]-f[0])+Math.abs(e[e.length-1]-f[1])||c%2)?(n(f),D[C]=-1,E=!0):"auto"===c?D[C]=0:"reverse"===c&&(D[C]=-1),f.closed!==e.closed&&(f.closed=e.closed=!1));return F&&h("shapeIndex:["+D.join(",")+"]"),D}},z=function(a,b,c,d){var e=k(a[0]),f=k(a[1]);y(e,f,b||0===b?b:"auto",c)&&(a[0]=m(e),a[1]=m(f),("log"===d||d===!0)&&h('precompile:["'+a[0]+'","'+a[1]+'"]'))},A=function(a,b,c){return b||c||a||0===a?function(d){z(d,a,b,c)}:z},B=function(a,b){if(!b)return a;var c,e,f,g=a.match(d)||[],h=g.length,i="";for("reverse"===b?(e=h-1,c=-2):(e=(2*(parseInt(b,10)||0)+1+100*h)%h,c=2),f=0;h>f;f+=2)i+=g[e-1]+","+g[e]+" ",e=(e+c)%h;return i},C=function(a,b){var c,d,e,f,g,h,i,j=0,k=parseFloat(a[0]),l=parseFloat(a[1]),m=k+","+l+" ",n=.999999;for(e=a.length,c=.5*b/(.5*e-1),d=0;e-2>d;d+=2){if(j+=c,h=parseFloat(a[d+2]),i=parseFloat(a[d+3]),j>n)for(g=1/(Math.floor(j)+1),f=1;j>n;)m+=(k+(h-k)*g*f).toFixed(2)+","+(l+(i-l)*g*f).toFixed(2)+" ",j--,f++;m+=h+","+i+" ",k=h,l=i}return m},D=function(a){var b=a[0].match(d)||[],c=a[1].match(d)||[],e=c.length-b.length;e>0?a[0]=C(b,e):a[1]=C(c,-e)},E=function(a){return isNaN(a)?D:function(b){D(b),b[1]=B(b[1],parseInt(a,10))}},F=function(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg","path"),d=Array.prototype.slice.call(a.attributes),e=d.length;for(b=","+b+",";--e>-1;)-1===b.indexOf(","+d[e].nodeName+",")&&c.setAttributeNS(null,d[e].nodeName,d[e].nodeValue);return c},G=function(a,b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=a.tagName.toLowerCase(),z=.552284749831;return"path"!==y&&a.getBBox?(i=F(a,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),"rect"===y?(g=+a.getAttribute("rx")||0,h=+a.getAttribute("ry")||0,e=+a.getAttribute("x")||0,f=+a.getAttribute("y")||0,m=(+a.getAttribute("width")||0)-2*g,n=(+a.getAttribute("height")||0)-2*h,g||h?(o=e+g*(1-z),p=e+g,q=p+m,r=q+g*z,s=q+g,t=f+h*(1-z),u=f+h,v=u+n,w=v+h*z,x=v+h,c="M"+s+","+u+" V"+v+" C"+[s,w,r,x,q,x,q-(q-p)/3,x,p+(q-p)/3,x,p,x,o,x,e,w,e,v,e,v-(v-u)/3,e,u+(v-u)/3,e,u,e,t,o,f,p,f,p+(q-p)/3,f,q-(q-p)/3,f,q,f,r,f,s,t,s,u].join(",")+"z"):c="M"+(e+m)+","+f+" v"+n+" h"+-m+" v"+-n+" h"+m+"z"):"circle"===y||"ellipse"===y?("circle"===y?(g=h=+a.getAttribute("r")||0,k=g*z):(g=+a.getAttribute("rx")||0,h=+a.getAttribute("ry")||0,k=h*z),e=+a.getAttribute("cx")||0,f=+a.getAttribute("cy")||0,j=g*z,c="M"+(e+g)+","+f+" C"+[e+g,f+k,e+j,f+h,e,f+h,e-j,f+h,e-g,f+k,e-g,f,e-g,f-k,e-j,f-h,e,f-h,e+j,f-h,e+g,f-k,e+g,f].join(",")+"z"):"line"===y?c="M"+a.getAttribute("x1")+","+a.getAttribute("y1")+" L"+a.getAttribute("x2")+","+a.getAttribute("y2"):("polyline"===y||"polygon"===y)&&(l=(a.getAttribute("points")+"").match(d)||[],e=l.shift(),f=l.shift(),c="M"+e+","+f+" L"+l.join(","),"polygon"===y&&(c+=","+e+","+f+"z")),i.setAttribute("d",c),b&&a.parentNode&&(a.parentNode.insertBefore(i,a),a.parentNode.removeChild(a)),i):a},H=function(a,b,c){var e,f,i="string"==typeof a;return(!i||(a.match(d)||[]).length<3)&&(e=i?g.selector(a):a&&a[0]?a:[a],e&&e[0]?(e=e[0],f=e.nodeName.toUpperCase(),b&&"PATH"!==f&&(e=G(e,!1),f="PATH"),a=e.getAttribute("PATH"===f?"d":"points")||"",e===c&&(a=e.getAttributeNS(null,"data-original")||a)):(h("WARNING: invalid morph to: "+a),a=!1)),a},I="Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",J=_gsScope._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.8.4",init:function(a,b,c){var d,f,g,i,j;return"function"!=typeof a.setAttribute?!1:(d=a.nodeName.toUpperCase(),j="POLYLINE"===d||"POLYGON"===d,"PATH"===d||j?(f="PATH"===d?"d":"points",("string"==typeof b||b.getBBox||b[0])&&(b={shape:b}),i=H(b.shape||b.d||b.points||"","d"===f,a),j&&e.test(i)?(h("WARNING: a <"+d+"> cannot accept path data. "+I),!1):(i&&(this._target=a,a.getAttributeNS(null,"data-original")||a.setAttributeNS(null,"data-original",a.getAttribute(f)),g=this._addTween(a,"setAttribute",a.getAttribute(f)+"",i+"","morphSVG",!1,f,"object"==typeof b.precompile?function(a){a[0]=b.precompile[0],a[1]=b.precompile[1]}:"d"===f?A(b.shapeIndex,b.map||J.defaultMap,b.precompile):E(b.shapeIndex)),g&&(this._overwriteProps.push("morphSVG"),g.end=i,g.endProp=f)),!0)):(h("WARNING: cannot morph a <"+d+"> SVG element. "+I),!1))},set:function(a){var b;if(this._super.setRatio.call(this,a),1===a)for(b=this._firstPT;b;)b.end&&this._target.setAttribute(b.endProp,b.end),b=b._next}});J.pathFilter=z,J.pointsFilter=D,J.subdivideRawBezier=l,J.defaultMap="size",J.pathDataToRawBezier=function(a){return k(H(a,!0))},J.equalizeSegmentQuantity=y,J.convertToPath=function(a,b){"string"==typeof a&&(a=g.selector(a));for(var c=a&&0!==a.length?a.length&&a[0]&&a[0].nodeType?Array.prototype.slice.call(a,0):[a]:[],d=c.length;--d>-1;)c[d]=G(c[d],b!==!1);return c},J.pathDataToBezier=function(a,b){var c,d,e,f,h,i,j,l,m=k(H(a,!0))[0]||[],n=0;if(b=b||{},l=b.align||b.relative,f=b.matrix||[1,0,0,1,0,0],h=b.offsetX||0,i=b.offsetY||0,"relative"===l||l===!0?(h-=m[0]*f[0]+m[1]*f[2],i-=m[0]*f[1]+m[1]*f[3],n="+="):(h+=f[4],i+=f[5],l&&(l="string"==typeof l?g.selector(l):l&&l[0]?l:[l],l&&l[0]&&(j=l[0].getBBox()||{x:0,y:0},h-=j.x,i-=j.y))),c=[],e=m.length,f)for(d=0;e>d;d+=2)c.push({x:n+(m[d]*f[0]+m[d+1]*f[2]+h),y:n+(m[d]*f[1]+m[d+1]*f[3]+i)});else for(d=0;e>d;d+=2)c.push({x:n+(m[d]+h),y:n+(m[d+1]+i)});return c}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();

/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c():a[b]=c()}(this,"verge",function(){function a(){return{width:k(),height:l()}}function b(a,b){var c={};return b=+b||0,c.width=(c.right=a.right+b)-(c.left=a.left-b),c.height=(c.bottom=a.bottom+b)-(c.top=a.top-b),c}function c(a,c){return a=a&&!a.nodeType?a[0]:a,a&&1===a.nodeType?b(a.getBoundingClientRect(),c):!1}function d(b){b=null==b?a():1===b.nodeType?c(b):b;var d=b.height,e=b.width;return d="function"==typeof d?d.call(b):d,e="function"==typeof e?e.call(b):e,e/d}var e={},f="undefined"!=typeof window&&window,g="undefined"!=typeof document&&document,h=g&&g.documentElement,i=f.matchMedia||f.msMatchMedia,j=i?function(a){return!!i.call(f,a).matches}:function(){return!1},k=e.viewportW=function(){var a=h.clientWidth,b=f.innerWidth;return b>a?b:a},l=e.viewportH=function(){var a=h.clientHeight,b=f.innerHeight;return b>a?b:a};return e.mq=j,e.matchMedia=i?function(){return i.apply(f,arguments)}:function(){return{}},e.viewport=a,e.scrollX=function(){return f.pageXOffset||h.scrollLeft},e.scrollY=function(){return f.pageYOffset||h.scrollTop},e.rectangle=c,e.aspect=d,e.inX=function(a,b){var d=c(a,b);return!!d&&d.right>=0&&d.left<=k()},e.inY=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.top<=l()},e.inViewport=function(a,b){var d=c(a,b);return!!d&&d.bottom>=0&&d.right>=0&&d.top<=l()&&d.left<=k()},e});
/****************************************************************************************************
 * @name:       LivIconsEvo.defaults.js - the default options for LivIcons (Live Icons) Evolution
 * @version:    2.0.345
 * @URL:        http://livicons.com
 * @copyright:  (c) 2013-2016 DeeThemes (http://codecanyon.net/user/DeeThemes)
 * @licenses:   http://codecanyon.net/licenses/regular
                http://codecanyon.net/licenses/extended
*****************************************************************************************************/
;if (typeof jQuery === 'undefined') {
  throw new Error('LivIcons Evolution Script requires jQuery!');
};

function LivIconsEvoDefaults () {
	
	"use strict";
	
	var default_options = {
		
		pathToFolder: '/LivIconsEvo/', //the path from root of your site to folder with icons. Also may be as URL, like 'http://yoursite.com/path/to/LivIconsEvo/svg/'
		name: 'bell.svg', //the default icon name

		//visualization options

		style: 'original', //'original', 'solid', filled', 'lines' or ('lines-alt' / 'linesAlt')
		size: '60px', //default size
		
		strokeStyle: 'original', //'original', 'round' or 'square'
		strokeWidth: 'original', //'original' or any value in pixels
		
		tryToSharpen: true, //apply or not micro shifts of SVG shapes to try to make them more sharp (crisp)

		rotate: 'none', //'none' or any value in deg [0 ... 360]
		flipHorizontal: false,
		flipVertical: false,
		
		strokeColor: '#22A7F0', //when style opt is 'filled' or 'lines' or ('lines-alt' / 'linesAlt')
		strokeColorAction: '#b3421b', //when 'style' is 'original', 'filled' or 'lines' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		strokeColorAlt: '#F9B32F', //when style opt is ('lines-alt' / 'linesAlt')
		strokeColorAltAction: '#ab69c6', //when 'style' is ('lines-alt' / 'linesAlt') and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		fillColor: '#91e9ff', //when style opt is 'filled'
		fillColorAction: '#ff926b', //when 'style' is 'original' or 'filled' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		solidColor: '#6C7A89', //when style opt is 'solid'
		solidColorAction: '#4C5A69', //when 'style' is 'solid' and 'colorsOnHover' or 'colorsWhenMorph' is 'custom'
		solidColorBg: '#ffffff', //when style opt is 'solid'
		solidColorBgAction: '#ffffff', //when 'style' is 'solid'
		
		colorsOnHover: 'none', //'none', 'lighter', 'darker', 'custom' or 'hue0' ... 'hue360'
		colorsHoverTime: 0.3, //seconds
		
		colorsWhenMorph: 'none', //'none', 'lighter', 'darker', 'custom' or 'hue0' ... 'hue360'
		
		brightness: 0.10, // brightness change when 'lighter' or 'darker' (10% by default)
		saturation: 0.07, // saturation change when 'lighter' or 'darker' (7% by default)
		
		morphState: 'start', //'start' or 'end' (initial state for animating position)
		morphImage: 'none', //'none' or a URL to your image (better to use an image with equal width and height)
		allowMorphImageTransform: false, //if true the inside image will rotate and/or flip with a morph icon together

		strokeWidthFactorOnHover: 'none', //'none' or numeric value. For ex., for increase twice set the option to 2
		strokeWidthOnHoverTime: 0.3, //seconds
		keepStrokeWidthOnResize: false,

		//animation options

		animated: true, //if false, an icon is static
		eventType: 'hover', //'click', 'hover' or 'none'
		eventOn: 'self', //'self', 'parent', 'grandparent' or any ID (#some_id) or class (.some_class)
		
		autoPlay: false, //be careful with true value
		delay: 0, //value in seconds
		duration: 'default', //'default' or value in seconds
		repeat: 'default', //'default', 'loop' or integer number of repeats
		repeatDelay: 'default', //'default' or value in seconds

		drawOnViewport: false,
		viewportShift: 'oneHalf', //'none', ('one-half' / 'oneHalf'), ('one-third' / 'oneThird') or 'full'
		drawDelay: 0, //seconds
		drawTime: 1, //seconds
		drawStagger: 0.1, //seconds
		drawStartPoint: 'middle', //'start', 'middle' or 'end'
		drawColor: 'same', //'same' or any desired color value (HEX)
		drawColorTime: 1, //seconds
		drawReversed: false, //true will reverse the order of shapes drawing
		drawEase: 'Power1.easeOut', //default ease

		eraseDelay: 0, //seconds
		eraseTime: 1, //seconds
		eraseStagger: 0.1, //seconds
		eraseStartPoint: 'middle', //'start', 'middle' or 'end'
		eraseReversed: true, //true will reverse the order of shapes erasing
		eraseEase: 'Power1.easeOut', //default ease

		touchEvents: false, //apply or not special events handlers for touch devices

		//callback functions

		beforeAdd: false,
		afterAdd: false,

		beforeUpdate: false,
		afterUpdate: false,

		beforeRemove: false,
		afterRemove: false,

		beforeDraw: false,
		afterDraw: false,
		duringDraw: false,

		beforeErase: false,
		afterErase: false,
		duringErase: false,

		beforeAnim: false,
		afterAnim: false,
		duringAnim: false
	};

	if (default_options.pathToFolder === '/EDIT THIS OPTION!/') {
		alert('LivIcons Evolution: Please edit "pathToFolder" option in the "LivIconsEvo.defaults.js" file!');
		throw new Error('LivIcons Evolution: Please edit "pathToFolder" option in the "LivIconsEvo.defaults.js" file!');
	};

	return default_options;
};
/********************************************************************************************
 * @name:       LivIconsEvo.min.js - the main JS file of LivIcons (Live Icons) Evolution
 * @version:    2.0.345
 * @URL:        http://livicons.com
 * @copyright:  (c) 2013-2016 DeeThemes (http://codecanyon.net/user/DeeThemes)
 * @licenses:   http://codecanyon.net/licenses/regular
                http://codecanyon.net/licenses/extended
*********************************************************************************************/

;(function(){function H(a,b){a.css("visibility","hidden");var e=Snap(a.find("svg")[0]);e.attr({preserveAspectRatio:"xMinYMin meet"});var c=e.attr("viewBox").w/2+" "+e.attr("viewBox").h/2;e.selectAll("desc").forEach(function(b){"Created with Snap"==b.innerSVG()&&jQuery(b.node).text("LivIcons Evolution")});var g=jQuery(e.node),r=e.select("g.lievo-main"),f=e.g().addClass("lievo-setrotation");e.prepend(f);f=f.g().addClass("lievo-setsharp");f=f.g().addClass("lievo-setflip");f.append(r);b.morph?"end"===
b.morphState?(g.find("g.lievo-main g.lievo-morphstartstate").remove(),b.curMorphState="end"):(g.find("g.lievo-main g.lievo-morphendstate").remove(),b.curMorphState="start"):b.curMorphState="not morph";switch(b.style){case "solid":g.find("g.lievo-main g.lievo-solidicon").siblings(":not(g.lievo-common)").remove();break;case "lines":case "lines-alt":case "linesAlt":g.find("g.lievo-main g.lievo-lineicon").siblings(":not(g.lievo-common)").remove();break;default:g.find("g.lievo-main g.lievo-filledicon").siblings(":not(g.lievo-common)").remove()}g=
r.rect(-19,-19,4,4).addClass("lievo-checkshift lievo-donotdraw lievo-nohoverstroke lievo-nohovercolor").attr({fill:"none",stroke:"#ffffff","stroke-width":2,"stroke-linecap":"butt","stroke-linejoin":"round",opacity:0});e.attr("data-shift")&&("x"===e.attr("data-shift")?g.attr("x",-20):"y"===e.attr("data-shift")?g.attr("y",-20):"xy"===e.attr("data-shift")&&g.attr({x:-20,y:-20}));"solid"===b.style&&e.attr("data-solidshift")&&("x"===e.attr("data-solidshift")?g.attr("x",-19.5):"y"===e.attr("data-solidshift")?
g.attr("y",-19.5):"xy"===e.attr("data-solidshift")&&g.attr({x:-19.5,y:-19.5}));if(b.morph&&b.morphImage)if(e.select(".lievo-morphimage")){var d=e.ptrn(0,0,"100%","100%",0,0,0,0);d.node.removeAttribute("viewBox");var h=d.attr("patternUnits","userSpaceOnUse").addClass("lievo-morphpattern").toDefs().g()}else b.morphImage=!1;var p=e.selectAll("circle, ellipse, image, line, path, polygon, polyline, rect, text, use");p.forEach(function(b){b.attr("stroke")||b.attr({stroke:"none","stroke-width":0});b.attr("fill")||
b.attr("fill","none")});"round"===b.strokeStyle?p.forEach(function(b){"none"===b.attr("stroke").toLowerCase()||b.hasClass("lievo-savelinecap")||(b.node.setAttribute("stroke-linecap","round"),b.node.setAttribute("stroke-linejoin","round"))}):"square"===b.strokeStyle&&p.forEach(function(b){"none"===b.attr("stroke").toLowerCase()||b.hasClass("lievo-savelinecap")||(b.node.setAttribute("stroke-linecap","square"),b.node.setAttribute("stroke-linejoin","miter"),b.attr("stroke-miterlimit")||b.attr("stroke-miterlimit",
"10"))});p.forEach(function(b){b.data("initStrokeWidth",b.attr("stroke-width"));b.data("initStrokeLinecap",b.attr("stroke-linecap"));b.data("initStrokeLinejoin",b.attr("stroke-linejoin"))});switch(b.style){case "filled":p.forEach(function(a){"none"===a.attr("stroke").toLowerCase()||a.hasClass("lievo-savestroke")||a.attr("stroke",b.strokeColor);"none"===a.attr("fill").toLowerCase()||a.hasClass("lievo-savefill")||a.attr("fill",b.fillColor);a.hasClass("lievo-likestroke")&&a.attr("fill",b.strokeColor)});
break;case "lines":p.forEach(function(a){"none"===a.attr("stroke").toLowerCase()||a.hasClass("lievo-savestroke")||a.attr("stroke",b.strokeColor);a.hasClass("lievo-savefill")||a.attr("fill","none");a.hasClass("lievo-likestroke")&&a.attr("fill",b.strokeColor)});break;case "lines-alt":case "linesAlt":p.forEach(function(a){a.hasClass("lievo-altstroke")?("none"!==a.attr("stroke").toLowerCase()&&a.attr("stroke",b.strokeColorAlt),a.hasClass("lievo-likestroke")?a.attr("fill",b.strokeColorAlt):a.hasClass("lievo-savefill")||
a.attr("fill","none")):("none"===a.attr("stroke").toLowerCase()||a.hasClass("lievo-savestroke")||a.attr("stroke",b.strokeColor),a.hasClass("lievo-likestroke")?a.attr("fill",b.strokeColor):a.hasClass("lievo-savefill")||a.attr("fill","none"))});break;case "solid":p.forEach(function(a){a.hasClass("lievo-solidbg")?("none"===a.attr("stroke").toLowerCase()||a.hasClass("lievo-savestroke")||a.attr("stroke",b.solidColorBg),"none"===a.attr("fill").toLowerCase()||a.hasClass("lievo-savefill")||a.attr("fill",
b.solidColorBg)):("none"===a.attr("stroke").toLowerCase()||a.hasClass("lievo-savestroke")||a.attr("stroke",b.solidColor),"none"===a.attr("fill").toLowerCase()||a.hasClass("lievo-savefill")||a.attr("fill",b.solidColor))})}a.css("width",b.size);b.morph&&b.morphImage&&(g=e.select(".lievo-morphimage").attr("fill"),h.rect(0,0,60,60).attr({fill:g,stroke:"#ffffff","stroke-width":0}).addClass("lievo-donotdraw"),h.image(b.morphImage,0,0,"100%","100%"),d.select("image").attr("preserveAspectRatio","xMidYMid slice"),
e.select(".lievo-morphimage").attr("fill",d));var l,I=function(){b.scaleStrokeFactor=a.width()/60;0>=b.scaleStrokeFactor&&(b.scaleStrokeFactor=1);"original"!==b.strokeWidth?(p.forEach(function(a){if("none"!==a.attr("stroke").toLowerCase()){var c=(""+b.strokeWidth).replace(/[0-9.]/g,""),d=a.data("initStrokeWidth").replace(/[^0-9.]/g,"")/2,d=+(""+b.strokeWidth).replace(/[^0-9.]/g,"")/b.scaleStrokeFactor*d;a.node.setAttribute("stroke-width",d+c);a.data("curStrokeWidth",d+c)}}),l=(""+b.strokeWidth).replace(/[^0-9.]/g,
"")/b.scaleStrokeFactor/2):b.tryToSharpen&&.5>b.scaleStrokeFactor?(p.forEach(function(a){if("none"!==a.attr("stroke").toLowerCase()){var c=a.data("initStrokeWidth").replace(/[0-9.]/g,""),d=a.data("initStrokeWidth").replace(/[^0-9.]/g,"")/2,d=1/b.scaleStrokeFactor*d;a.node.setAttribute("stroke-width",d+c);a.data("curStrokeWidth",d+c)}}),l=1/b.scaleStrokeFactor/2):(p.forEach(function(b){"none"!==b.attr("stroke").toLowerCase()&&b.data("curStrokeWidth",b.data("initStrokeWidth"))}),l=e.select(".lievo-checkshift").attr("stroke-width").replace(/[^0-9.]/g,
"")/2);(0===b.strokeWidthFactorOnHover||b.strokeWidthFactorOnHover)&&p.forEach(function(a){if("none"!==a.attr("stroke").toLowerCase()&&!a.hasClass("lievo-nohoverstroke")){var c=a.data("curStrokeWidth");if(c){var d=(""+c).replace(/[0-9.]/g,""),c=+(""+c.replace(/[^0-9.]/g,""))*b.strokeWidthFactorOnHover;a.data("hoverStrokeWidth",c+d)}}})};I();if(b.keepStrokeWidthOnResize)jQuery(window).on("resize",function(){I()});if(b.colorsOnHover)var k=b.colorsOnHover;b.morph&&b.colorsWhenMorph&&(b.colorsOnHover=
!1,k=b.colorsWhenMorph);p.forEach(function(a){a.data("curFill",a.attr("fill"));a.data("curStroke",a.attr("stroke"));a.data("curOpacity",a.attr("opacity"));if(k){if("none"===a.attr("fill").toLowerCase())a.data("actionFill","none");else if(a.attr("fill").toLowerCase().match(/url\(/))a.data("actionFill",a.attr("fill"));else{if("lighter"===k)var c="solid"===b.style&&a.hasClass("lievo-solidbg")?b.solidColorBgAction:y(a.attr("fill"),-b.saturation,b.brightness);else if("darker"===k)c="solid"===b.style&&
a.hasClass("lievo-solidbg")?b.solidColorBgAction:y(a.attr("fill"),b.saturation,-b.brightness);else if("hue"===k.replace(/[^hue]/g,""))c="solid"===b.style&&a.hasClass("lievo-solidbg")?b.solidColorBgAction:J(a.attr("fill"),k.replace(/[^0-9.]/g,"")?k.replace(/[^0-9.]/g,""):0);else if("custom"===k)switch(b.style){case "solid":c=a.hasClass("lievo-solidbg")?b.solidColorBgAction:b.solidColorAction;break;case "lines":c=b.strokeColorAction;break;case "lines-alt":case "linesAlt":c=a.hasClass("lievo-altstroke")?
b.strokeColorAltAction:b.strokeColorAction;break;default:c=a.hasClass("lievo-likestroke")?b.strokeColorAction:b.fillColorAction}a.data("actionFill",c)}if("none"===a.attr("stroke").toLowerCase())a.data("actionStroke","none");else{if("lighter"===k)c="solid"===b.style&&a.hasClass("lievo-solidbg")?b.solidColorBgAction:y(a.attr("stroke"),-b.saturation,b.brightness);else if("darker"===k)c="solid"===b.style&&a.hasClass("lievo-solidbg")?b.solidColorBgAction:y(a.attr("stroke"),b.saturation,-b.brightness);
else if("hue"===k.replace(/[^hue]/g,""))c="solid"===b.style&&a.hasClass("lievo-solidbg")?b.solidColorBgAction:J(a.attr("stroke"),k.replace(/[^0-9.]/g,"")?k.replace(/[^0-9.]/g,""):0);else if("custom"===k)switch(b.style){case "solid":c=a.hasClass("lievo-solidbg")?b.solidColorBgAction:b.solidColorAction;break;case "lines":c=b.strokeColorAction;break;case "lines-alt":case "linesAlt":c=a.hasClass("lievo-altstroke")?b.strokeColorAltAction:b.strokeColorAction;break;default:c=b.strokeColorAction}a.data("actionStroke",
c)}}});b.rotate&&(TweenMax.set(e.select("g.lievo-setrotation").node,{rotation:b.rotate,svgOrigin:c}),b.morph&&b.morphImage&&!b.allowMorphImageTransform&&(h=d.select("g"),!b.flipVertical&&b.flipHorizontal?h.transform("r"+b.rotate+",30,30"):b.flipVertical&&!b.flipHorizontal?h.transform("r"+b.rotate+",30,30"):h.transform("r"+-b.rotate+",30,30")));b.flipVertical&&!b.flipHorizontal?(e.select("g.lievo-setflip").transform("s1,-1,30,30"),b.morph&&b.morphImage&&!b.allowMorphImageTransform&&d.select("image").transform("s1,-1,30,30")):
b.flipHorizontal&&!b.flipVertical?(e.select("g.lievo-setflip").transform("s-1,1,30,30"),b.morph&&b.morphImage&&!b.allowMorphImageTransform&&d.select("image").transform("s-1,1,30,30")):b.flipVertical&&b.flipHorizontal&&(e.select("g.lievo-setflip").transform("s-1,-1,30,30"),b.morph&&b.morphImage&&!b.allowMorphImageTransform&&d.select("image").transform("s-1,-1,30,30"));b.animated&&(e.attr("data-animoptions")?(d=JSON.parse(e.attr("data-animoptions").replace(/\'/g,'"')),b.def_duration=d.duration?m(d.duration):
1,b.def_repeat=d.repeat?"loop"===d.repeat?-1:m(d.repeat):0,b.def_repeatDelay=d.repeatDelay?m(d.repeatDelay):.5):(b.def_duration=1,b.def_repeat=0,b.def_repeatDelay=.5),b.use_duration="default"===b.duration?b.def_duration:m(b.duration),isNaN(b.use_duration)&&(b.use_duration=1),b.use_repeat="default"===b.repeat?b.def_repeat:"loop"===b.repeat?-1:m(b.repeat),isNaN(b.use_repeat)&&(b.use_repeat=0),-1!==b.use_repeat&&0>b.use_repeat&&(b.use_repeat=0),b.use_repeatDelay="default"===b.repeatDelay?b.def_repeatDelay:
m(b.repeatDelay),isNaN(b.use_repeatDelay)&&(b.use_repeatDelay=b.def_repeatDelay),0>=b.delay&&(b.delay=.001),0>=b.use_repeatDelay&&(b.use_repeatDelay=.001),0>=b.drawDelay&&(b.drawDelay=.001),0>=b.eraseDelay&&(b.eraseDelay=.001),b.morph&&(b.def_repeat=0,b.use_repeat=0,b.def_repeatDelay=0,b.use_repeatDelay=0));var q=a.data("drawTL");q?q.pause().kill().clear():q=new TimelineMax({paused:!0});var n=a.data("mainTL");n?n.pause().kill().clear():n=new TimelineMax({paused:!0});if(b.animated){var d=e.selectAll("circle, ellipse, g, image, line, path, polygon, polyline, rect, text, use"),
w=new TimelineMax;if(b.morph&&b.colorsWhenMorph){var u=new TimelineMax;d.forEach(function(a){if("end"!==b.morphState){if(!a.hasClass("lievo-nohovercolor")&&"g"!==a.type.toLowerCase()){var c=a.data("actionStroke"),d=a.data("actionFill");c&&"none"!==c&&(c=TweenMax.to(a.node,b.use_duration,{stroke:c}),u.add(c,0));d&&"none"!==d&&!d.match(/url\(/)&&(a=TweenMax.to(a.node,b.use_duration,{fill:d}),u.add(a,0))}}else a.hasClass("lievo-nohovercolor")||"g"===a.type.toLowerCase()||(c=a.data("actionStroke"),d=
a.data("actionFill"),c&&"none"!==c&&TweenMax.set(a.node,{stroke:c}),d&&"none"!==d&&!d.match(/url\(/)&&TweenMax.set(a.node,{fill:d}),c=a.data("curStroke"),d=a.data("curFill"),c&&"none"!==c&&(c=TweenMax.to(a.node,b.use_duration,{stroke:c}),u.add(c,0)),d&&"none"!==d&&!d.match(/url\(/)&&(a=TweenMax.to(a.node,b.use_duration,{fill:d}),u.add(a,0)))})}d.forEach(function(b){if(b.attr("data-animdata")){var a=JSON.parse(b.attr("data-animdata").replace(/\'/g,'"')),c=new TimelineMax;a.steps.forEach(function(a,
d){for(var f in a.vars)a.vars.hasOwnProperty(f)&&(a.vars[f]=m(a.vars[f]),"none"!==a.vars[f]&&(a.vars[f]=x(a.vars[f])));0===m(a.duration)&&(a.duration=.001);a.vars.ease="none"!==a.vars.ease&&a.vars.ease?E(a.vars.ease):Power0.easeNone;a.vars.path&&(a.vars.morphSVG=a.vars.path);if(a.vars.bezier&&a.vars.bezier.values&&"string"===typeof a.vars.bezier.values)for(f=Snap.path.toCubic(a.vars.bezier.values).toString(),f=f.replace(/[M|m]/g,"").replace(/[C|c]/g,","),f=f.split(","),a.vars.bezier.values=[],d=0;d<
f.length;d+=2){var e={};e.x=f[d];e.y=f[d+1];a.vars.bezier.values.push(e)}F||G?a.vars.drawSVG?"0%"===a.vars.drawSVG||0===a.vars.drawSVG?(f=TweenMax.to(b.node,+a.duration,a.vars),f.eventCallback("onStart",function(){"square"===b.data("initStrokeLinecap").toLowerCase()&&TweenMax.set(b.node,{attr:{"stroke-linecap":"round"}});"miter"===b.data("initStrokeLinejoin").toLowerCase()&&TweenMax.set(b.node,{attr:{"stroke-linejoin":"round"}})})):"100%"===a.vars.drawSVG?(f=TweenMax.to(b.node,+a.duration,a.vars),
f.eventCallback("onComplete",function(){"square"===b.data("initStrokeLinecap").toLowerCase()&&TweenMax.set(b.node,{attr:{"stroke-linecap":"square"}});"miter"===b.data("initStrokeLinejoin").toLowerCase()&&TweenMax.set(b.node,{attr:{"stroke-linejoin":"miter"}})})):f=TweenMax.to(b.node,+a.duration,a.vars):f=TweenMax.to(b.node,+a.duration,a.vars):f=TweenMax.to(b.node,+a.duration,a.vars);c.add(f,a.position||"+=0");w.add(c,0)});b.node.removeAttribute("data-animdata")}});n.add(w,0);w.duration(b.use_duration);
b.morph&&b.colorsWhenMorph&&(n.add(u,0),u.duration(b.use_duration));n.delay(b.delay).repeat(b.use_repeat).repeatDelay(b.use_repeatDelay)}else p=e.selectAll("circle, ellipse, g, image, line, path, polygon, polyline, rect, text, use"),p.forEach(function(b){b.node.removeAttribute("data-animdata")});a.data("drawTL",q);a.data("mainTL",n);b.event_elem="self"!==b.eventOn&&b.eventOn?"parent"===b.eventOn?a.parent():"grandparent"===b.eventOn?a.parent().parent():jQuery(b.eventOn):a;if(b.animated)if(!b.morph)if("click"===
b.eventType)b.event_elem.on("click.LiviconEvo",function(){-1===b.use_repeat?b.ending?n.isActive()&&n.tweenTo(n.duration(),{onComplete:function(){n.pause().totalProgress(0);"function"==typeof b.afterAnim&&b.afterAnim();b.ending=!1}}):b.drawn&&(b.ending=!0,a.playLiviconEvo()):b.drawn&&(a.playLiviconEvo(),b.ending=!1)});else{if("hover"===b.eventType)if(d=function(){b.ending||b.drawn&&a.playLiviconEvo()},h=function(){n.isActive()&&(b.ending=!0,n.tweenTo(n.duration(),{onComplete:function(){n.pause().totalProgress(0);
-1===b.use_repeat&&"function"==typeof b.afterAnim&&b.afterAnim();b.ending=!1}}))},-1===b.use_repeat)b.event_elem.on("mouseenter.LiviconEvo",d).on("mouseleave.LiviconEvo",h);else b.event_elem.on("mouseenter.LiviconEvo",function(){b.drawn&&a.playLiviconEvo()})}else if(b.morph)if("click"===b.eventType)b.event_elem.on("click.LiviconEvo",function(){b.drawn&&a.playLiviconEvo()});else"hover"===b.eventType&&(h=function(){b.drawn&&n.reverse()},b.event_elem.on("mouseenter.LiviconEvo",function(){b.drawn&&a.playLiviconEvo()}).on("mouseleave.LiviconEvo",
h));if(b.colorsOnHover)b.event_elem.on("mouseenter.LiviconEvo",function(){!q.isActive()&&b.drawn&&p.forEach(function(a){if(!a.hasClass("lievo-nohovercolor")){var c=a.data("actionStroke"),d=a.data("actionFill");c&&"none"!==c&&TweenMax.to(a.node,b.colorsHoverTime,{stroke:c});d&&"none"!==d&&!d.match(/url\(/)&&TweenMax.to(a.node,b.colorsHoverTime,{fill:d})}})}).on("mouseleave.LiviconEvo",function(){!q.isActive()&&b.drawn&&p.forEach(function(a){if(!a.hasClass("lievo-nohovercolor")){var c=a.data("curStroke"),
d=a.data("curFill");c&&"none"!==c&&TweenMax.to(a.node,b.colorsHoverTime,{stroke:c});d&&"none"!==d&&!d.match(/url\(/)&&TweenMax.to(a.node,b.colorsHoverTime,{fill:d})}})});if(0===b.strokeWidthFactorOnHover||b.strokeWidthFactorOnHover)b.event_elem.on("mouseenter.LiviconEvo",function(){!q.isActive()&&b.drawn&&p.forEach(function(a){if(!a.hasClass("lievo-nohoverstroke")){var c=a.data("hoverStrokeWidth");c&&TweenMax.to(a.node,b.strokeWidthOnHoverTime,{attr:{"stroke-width":c}})}})}).on("mouseleave.LiviconEvo",
function(){!q.isActive()&&b.drawn&&p.forEach(function(a){if(!a.hasClass("lievo-nohoverstroke")){var c=a.data("curStrokeWidth");c&&TweenMax.to(a.node,b.strokeWidthOnHoverTime,{attr:{"stroke-width":c}})}})});if(b.touchEvents&&(b.animated||b.colorsOnHover||0===b.strokeWidthFactorOnHover||b.strokeWidthFactorOnHover))b.event_elem.on("touchstart.LiviconEvo",function(a){a.preventDefault();b.event_elem.trigger("mouseenter.LiviconEvo")}).on("touchend.LiviconEvo",function(){b.event_elem.trigger("mouseleave.LiviconEvo");
try{b.event_elem[0].click()}catch(a){if("function"==typeof document.createEvent){var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null);b.event_elem.get(0).dispatchEvent(c)}else"function"==typeof window.MouseEvent&&(c=new MouseEvent("click",{bubbles:!0,cancelable:!0}),b.event_elem.get(0).dispatchEvent(c))}});if(d=a.find("svg")[0].getScreenCTM())h=-d.e%1,g=-d.f%1,0==h?h=0:-.5>=h&&(h+=1),0==g?g=0:-.5>=g&&(g+=1),a.find("svg").css({left:h+"px",top:g+
"px"}),b.tryToSharpen&&(h=e.select(".lievo-checkshift"),g=e.select(".lievo-morphpattern"),r=Snap.matrix(),h&&(h=h.getBBox(),0!==(h.x+l)*d.a%1&&(TweenMax.set(e.select("g.lievo-setsharp").node,{x:"-="+((h.x-l)*d.a%1/d.a||0),svgOrigin:c}),r.e=(h.x-l)*d.a%1/d.a||0),0!==(h.y+l)*d.d%1&&(TweenMax.set(e.select("g.lievo-setsharp").node,{y:"-="+((h.y-l)*d.d%1/d.d||0),svgOrigin:c}),r.f=(h.y-l)*d.d%1/d.d||0),g&&g.attr("patternTransform",r.toString())));if(b.drawOnViewport&&!b.drawOnce){var t,c=a.find("svg").get(0).getBoundingClientRect().height;
switch(b.viewportShift){case "none":case !1:t=1;break;case "one-half":case "oneHalf":t=c/2;break;case "one-third":case "oneThird":t=c/3;break;case "full":t=c;break;default:t=c/2}var B=function(){if(!b.drawOnce){var c=jQuery(window).height();t>c&&(t=c-10);verge.inViewport(a,-t)&&(a.pauseLiviconEvo(),a.drawLiviconEvo(),b.drawOnce=!0)}};B();jQuery(window).on("resize, scroll",function(){B()})}else a.css("visibility","visible"),b.drawOnce=!0,b.drawn=!0,b.autoPlay&&a.playLiviconEvo()}function C(){return C.counter++}
function D(a){if(null==a||"object"!=typeof a)return a;var b=new a.constructor,e;for(e in a)b[e]=D(a[e]);return b}function x(a){if("string"==typeof a||a instanceof String)switch(a.toLowerCase()){case "true":case "yes":return!0;case "false":case "no":case "none":return!1;default:return a}else return a}function m(a){return"string"==typeof a||a instanceof String?+a||"0"==a?+a:a:a}function E(a){var b=a.split(".");if(2===b.length&&"SteppedEase"!==b[0])return window[b[0]][b[1]];a=a.match(/true|false|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig).map(JSON.parse);
return"SteppedEase"!==b[0]?window[b[0]][b[1]].config.apply(null,a):window[b[0]].config.apply(null,a)}function y(a,b,e){a=Snap.color(a);a=Snap.rgb2hsb(a.r,a.g,a.b);a.s+=b;0>a.s&&(a.s=0);1<a.s&&(a.s=1);a.b+=e;0>a.b&&(a.b=0);1<a.b&&(a.b=1);return Snap.hsb(a.h,a.s,a.b)}function J(a,b){var e=Snap.color(a),e=Snap.rgb2hsb(e.r,e.g,e.b);b=Math.abs(b)/360%1;e.h=(e.h+b)%1;return Snap.hsb(e.h,e.s,e.b)}var v=LivIconsEvoDefaults();v.pathToFolder.match(/(\/)$/)||""===v.pathToFolder.trim()||(v.pathToFolder+="/");
var F="ActiveXObject"in window?!0:!1,G=navigator.userAgent.match(/Edge\/\d+/)?!0:!1;jQuery.fn.extend({addLiviconEvo:function(a,b){if(2>arguments.length)var e=a===Object(a)?a:{};else a===Object(a)?e=a:(e={},e[a]=b);return this.each(function(){var b=jQuery(this),a=b.data("options"),r=b.data("saved_options"),f={};b.addClass("livicon-evo-holder");r&&r.event_elem&&(r.event_elem.off(".LiviconEvo"),r.event_elem=void 0);a&&(a=a.split(";"),a.forEach(function(b){b=b.trim().split(/:(.+)/);b[0]&&b[1]&&(f[b[0].trim()]=
b[1].trim())}));f=jQuery.extend(D(v),f,e);if(f.name){f.name.match(/(\.svg)$/)||(f.name+=".svg");for(var d in f)f.hasOwnProperty(d)&&(f[d]=m(f[d]),f[d]=x(f[d]));f.name.match(/morph+(-)/)?f.morph=!0:f.morph=!1;f.drawOnce=!1;f.drawn=!1;f.ending=!1;b.removeData("saved_options");b.data("saved_options",f);"function"==typeof f.beforeAdd&&f.beforeAdd();jQuery.ajax({url:f.pathToFolder+f.name,type:"GET",dataType:"text",global:!0,success:function(a){b.removeClass("livicon-evo-error");var d=a.match(/(id=[\"'](.*?)[\"'])/gi);
d&&d.forEach(function(b){b=b.replace(/id=[\"']/i,"").replace(/[\"']/,"");a=a.replace(new RegExp(b,"g"),b+"_"+C())});a=Snap.parse(a);d=b.empty().append("<div>").children().addClass("lievo-svg-wrapper");try{d[0].appendChild(a.node)}catch(e){d.html(a.node)}H(b,f);"function"==typeof f.afterAdd&&f.afterAdd()},error:function(a,d){b.addClass("livicon-evo-error");0===a.status&&"error"===d?b.html('<span><acronym title="Please use LivIconsEvo script on a working local or internet connected webserver, it does NOT work directly opened from a HDD.">Network Error</acronym></span>'):
404===a.status&&"error"===d?b.html('<span><acronym title="Please check the &quot;name&quot; option and/or default &quot;pathToFolder&quot; one where all SVG LivIconEvo files are placed.">Not Found</acronym></span>'):b.html('<span><acronym title="There is an unknown error. Please check for messages in Console (F12 key).">Unknown Error</acronym></span>')}})}else b.addClass("livicon-evo-error").html('<span><acronym title="Please check the &quot;name&quot; option of your SVG LivIconEvo file.">Name Error</acronym></span>')})},
updateLiviconEvo:function(a,b){if(2>arguments.length)var e=a===Object(a)?a:{};else a===Object(a)?e=a:(e={},e[a]=b);return this.each(function(){var b=jQuery(this),a=b.data("saved_options");if(a){a.event_elem&&a.event_elem.off(".LiviconEvo");a.event_elem=void 0;a=D(a);a=jQuery.extend(a,e);a.name.match(/(\.svg)$/)||(a.name+=".svg");for(var r in a)a.hasOwnProperty(r)&&(a[r]=m(a[r]),a[r]=x(a[r]));a.name.match(/morph+(-)/)?a.morph=!0:a.morph=!1;a.drawOnce=!1;a.drawn=!1;a.ending=!1;b.data("saved_options",
a);"function"==typeof a.beforeUpdate&&a.beforeUpdate();jQuery.ajax({url:a.pathToFolder+a.name,type:"GET",dataType:"text",global:!0,success:function(f){b.addClass("livicon-evo-holder").removeClass("livicon-evo-error");var d=f.match(/(id=[\"'](.*?)[\"'])/gi);d&&d.forEach(function(a){a=a.replace(/id=[\"']/i,"").replace(/[\"']/,"");f=f.replace(new RegExp(a,"g"),a+"_"+C())});f=Snap.parse(f);d=b.empty().append("<div>").children().addClass("lievo-svg-wrapper");try{d[0].appendChild(f.node)}catch(e){d.html(f.node)}H(b,
a);"function"==typeof a.afterUpdate&&a.afterUpdate()},error:function(a,d){b.addClass("livicon-evo-error");0===a.status&&"error"===d?b.html('<span><acronym title="Please use LivIconsEvo script on a working local or internet connected webserver, it does NOT work directly opened from a HDD.">Network Error</acronym></span>'):404===a.status&&"error"===d?b.html('<span><acronym title="Please check the &quot;name&quot; option and/or default &quot;pathToFolder&quot; one where all SVG LivIconEvo files are placed.">Not Found</acronym></span>'):
b.html('<span><acronym title="There is an unknown error. Please check for messages in Console (F12 key).">Unknown Error</acronym></span>')}})}else b.addLiviconEvo(e)})},changeLiviconEvo:function(a,b){if(2>arguments.length)var e=a===Object(a)?a:{};else a===Object(a)?e=a:(e={},e[a]=b);for(var c in e)e.hasOwnProperty(c)&&(e[c]=m(e[c]),e[c]=x(e[c]));return this.each(function(){var a=jQuery(this),b=a.data(),c=b.saved_options;if(c){var d=b.drawTL,b=b.mainTL,h=a.find("circle, ellipse, line, path, polygon, polyline, rect");
c.event_elem&&c.event_elem.off(".LiviconEvo");c.event_elem=void 0;c=D(c);c=jQuery.extend(c,e);d.pause().totalProgress(0).clear();b.pause().totalProgress(0);c.drawn=!0;c.drawOnViewport=0==e.drawOnViewport?!1:!0;a.eraseLiviconEvo(c);var p=setTimeout(function(){a.updateLiviconEvo(c);clearTimeout(p)},1E3*(c.eraseDelay+c.eraseTime+c.eraseStagger*h.length))}else a.addLiviconEvo(e)})},drawLiviconEvo:function(a,b,e){if(1>=arguments.length)if(a===Object(a))var c=a;else c={},c.force=a;else 2===arguments.length?
a===Object(a)?(c=a,c.force=b):(c={},c[a]=b,c.force||(c.force=!1)):(c={},c[a]=b,c.force=e);for(var g in c)c.hasOwnProperty(g)&&(c[g]=m(c[g]),c[g]=x(c[g]));return this.each(function(){var a=jQuery(this),b=a.data(),d=b.saved_options;if(d){var e=b.drawTL,g=b.mainTL,b=0===c.drawDelay||c.drawDelay?c.drawDelay:d.drawDelay,l=0===c.drawTime||c.drawTime?c.drawTime:d.drawTime,m=0===c.drawStagger||c.drawStagger?c.drawStagger:d.drawStagger,k=c.drawStartPoint?c.drawStartPoint:d.drawStartPoint,q=c.drawColor?c.drawColor:
d.drawColor,n=0===c.drawColorTime||c.drawColorTime?c.drawColorTime:d.drawColorTime,w=c.drawEase?c.drawEase:d.drawEase,u=c.beforeDraw?c.beforeDraw:d.beforeDraw,t=c.afterDraw?c.afterDraw:d.afterDraw,B=c.duringDraw?c.duringDraw:d.duringDraw,A="undefined"!=typeof c.drawReversed?c.drawReversed:d.drawReversed,z=a.find("circle, ellipse, line, path, polygon, polyline, rect").not(".lievo-morphpattern").not(".lievo-donotdraw").not(".lievo-nohovercolor").get();e.eventCallback("onStart",null);e.eventCallback("onComplete",
null);e.eventCallback("onUpdate",null);0>=b&&(b=.001);0>=l&&(l=.001);x(c.force)&&(e.clear(),e.pause().totalProgress(0),g.pause().totalProgress(0),d.drawn=!1);if(!e.isActive()&&!g.isActive()&&!d.drawn){A&&z.reverse();if(d.morph&&d.colorsWhenMorph){Snap(a.find("svg")[0]).selectAll("circle, ellipse, image, line, path, polygon, polyline, rect, text, use").forEach(function(a){a.data("curFill",a.attr("fill"));a.data("curStroke",a.attr("stroke"));a.data("curOpacity",a.attr("opacity"))});var v=Snap(a.find("svg")[0]).select(".lievo-checkshift"),
v=v.data("actionStroke")}var g=function(){var a=Snap(this.target);if(F||G)"square"===a.data("initStrokeLinecap").toLowerCase()&&TweenMax.set(this.target,{attr:{"stroke-linecap":"round"}}),"miter"===a.data("initStrokeLinejoin").toLowerCase()&&TweenMax.set(this.target,{attr:{"stroke-linejoin":"round"}});"same"!==q?(TweenMax.set(this.target,{strokeOpacity:1,stroke:q}),"none"===a.data("curStroke")&&a.attr({"stroke-width":1/d.scaleStrokeFactor})):(TweenMax.set(this.target,{strokeOpacity:1}),"none"===a.data("curStroke")&&
a.attr({"stroke-width":1/d.scaleStrokeFactor,stroke:a.data("curFill")}),"solid"===d.style&&a.hasClass("lievo-solidbg")&&(d.morph&&d.colorsWhenMorph&&"end"===d.morphState?v?a.attr({stroke:v}):a.attr({stroke:d.solidColorAction}):a.attr({stroke:d.solidColor})))},A=function(){var a=Snap(this.target);if(F||G)"square"===a.data("initStrokeLinecap").toLowerCase()&&TweenMax.set(this.target,{attr:{"stroke-linecap":"square"}}),"miter"===a.data("initStrokeLinejoin").toLowerCase()&&TweenMax.set(this.target,{attr:{"stroke-linejoin":"miter"}});
TweenMax.to(this.target,n,{stroke:a.data("curStroke"),fillOpacity:1})},y=function(){d.drawn=!0};e.clear();"function"==typeof u&&e.eventCallback("onStart",u);"function"==typeof B&&e.eventCallback("onUpdate",B);e.eventCallback("onComplete",function(){"function"==typeof t&&t();d.autoPlay&&a.playLiviconEvo()});e.delay(b);TweenMax.set(z,{strokeOpacity:0,fillOpacity:0});a.css("visibility","visible");"string"==typeof w&&(w=E(w));switch(k){case "middle":TweenMax.set(z,{drawSVG:"0% 100%"});e.staggerFrom(z,
l,{drawSVG:"50% 50%",ease:w,onStart:g,onComplete:A},m,0,y);break;case "end":e.staggerFromTo(z,l,{drawSVG:"100% 100%"},{drawSVG:"0% 100%",ease:w,onStart:g,onComplete:A},m,0,y);break;default:e.staggerFromTo(z,l,{drawSVG:"0% 0%"},{drawSVG:"0% 100%",ease:w,onStart:g,onComplete:A},m,0,y)}e.restart(!0)}}else c.drawOnViewport=!0,a.addLiviconEvo(c)})},eraseLiviconEvo:function(a,b,e){if(1>=arguments.length)if(a===Object(a))var c=a;else c={},c.force=a;else 2===arguments.length?a===Object(a)?(c=a,c.force=b):
(c={},c[a]=b,c.force||(c.force=!1)):(c={},c[a]=b,c.force=e);for(var g in c)c.hasOwnProperty(g)&&(c[g]=m(c[g]),c[g]=x(c[g]));return this.each(function(){var a=jQuery(this),b=a.data(),d=b.saved_options;if(d){var e=b.drawTL,g=b.mainTL,b=0===c.eraseDelay||c.eraseDelay?c.eraseDelay:d.eraseDelay,l=0===c.eraseTime||c.eraseTime?c.eraseTime:d.eraseTime,m=c.eraseStartPoint?c.eraseStartPoint:d.eraseStartPoint,k=c.eraseEase?c.eraseEase:d.eraseEase,q=c.beforeErase?c.beforeErase:d.beforeErase,n=c.afterErase?c.afterErase:
d.afterErase,w=c.duringErase?c.duringErase:d.duringErase,u="undefined"!=typeof c.eraseReversed?c.eraseReversed:d.eraseReversed,t=a.find("circle, ellipse, line, path, polygon, polyline, rect").not(".lievo-donotdraw").not(".lievo-nohovercolor").get();0>=b&&(b=.001);e.eventCallback("onStart",null);e.eventCallback("onComplete",null);e.eventCallback("onUpdate",null);x(c.force)&&(e.clear(),e.pause().totalProgress(0),g.pause().totalProgress(0),d.drawn=!0);if(!e.isActive()&&!g.isActive()&&d.drawn){u&&t.reverse();
d.morph&&d.colorsWhenMorph&&Snap(a.find("svg")[0]).selectAll("circle, ellipse, image, line, path, polygon, polyline, rect, text, use").forEach(function(a){a.data("curFill",a.attr("fill"));a.data("curStroke",a.attr("stroke"));a.data("curOpacity",a.attr("opacity"))});var g=function(){"none"===Snap(this.target).data("curStroke")&&Snap(this.target).attr({"stroke-width":1/d.scaleStrokeFactor,stroke:Snap(this.target).data("curFill")});TweenMax.to(this.target,l,{fillOpacity:0})},u=function(){TweenMax.set(this.target,
{strokeOpacity:0,fillOpacity:0});"none"===Snap(this.target).data("curStroke")&&TweenMax.set(this.target,{"stroke-width":0,stroke:"none"})},v=function(){d.drawn=!1};e.clear();"function"==typeof q&&e.eventCallback("onStart",q);"function"==typeof n&&e.eventCallback("onComplete",n);"function"==typeof w&&e.eventCallback("onUpdate",w);"string"==typeof k&&(k=E(k));e.delay(b);TweenMax.set(t,{strokeOpacity:1,fillOpacity:1});a.css("visibility","visible");switch(m){case "middle":e.staggerFromTo(t,l,{drawSVG:"0% 100%"},
{drawSVG:"50% 50%",ease:k,onStart:g,onComplete:u},d.eraseStagger,0,v);break;case "end":e.staggerFromTo(t,l,{drawSVG:"0% 100%"},{drawSVG:"100% 100%",ease:k,onStart:g,onComplete:u},d.eraseStagger,0,v);break;default:e.staggerFromTo(t,l,{drawSVG:"0% 100%"},{drawSVG:0,ease:k,onStart:g,onComplete:u},d.eraseStagger,0,v)}e.restart(!0)}}else a.addLiviconEvo(c)})},playLiviconEvo:function(a,b,e){if(1>=arguments.length)if(a===Object(a))var c=a;else c={},c.force=a;else 2===arguments.length?a===Object(a)?(c=a,
c.force=b):(c={},c[a]=b,c.force||(c.force=!1)):(c={},c[a]=b,c.force=e);for(var g in c)c.hasOwnProperty(g)&&(c[g]=m(c[g]),c[g]=x(c[g]));return this.each(function(){var a=jQuery(this),b=a.data(),d=b.saved_options;if(d){var a=b.drawTL,b=b.mainTL,e=0===c.duration||c.duration?c.duration:d.duration,g=0===c.delay||c.delay?c.delay:d.delay,l=0===c.repeat||c.repeat?c.repeat:d.repeat,m=0===c.repeatDelay||c.repeatDelay?c.repeatDelay:d.repeatDelay,k=c.beforeAnim?c.beforeAnim:d.beforeAnim,q=c.afterAnim?c.afterAnim:
d.afterAnim,n=c.duringAnim?c.duringAnim:d.duringAnim;d.animated&&(x(c.force)&&(a.pause().totalProgress(1),b.pause().totalProgress(0),d.drawn=!0),"default"===e&&(e=d.def_duration),b.getChildren(!1,!1,!0).forEach(function(a){a.duration(e)}),0>=g&&(g=.001),b.delay(g),"default"===l?l=d.def_repeat:"loop"===l&&(l=-1),"default"===m&&(m=d.def_repeatDelay),0>=m&&(m=.001),d.morph?(b.repeat(0).repeatDelay(0),"function"==typeof k&&b.eventCallback("onStart",k),"function"==typeof n&&b.eventCallback("onUpdate",
n),b.eventCallback("onComplete",function(){d.curMorphState="end"===d.morphState?"start":"end";"function"==typeof q&&q()}),b.eventCallback("onReverseComplete",function(){d.curMorphState="end"===d.morphState?"end":"start";"function"==typeof q&&q()}),a.isActive()||b.isActive()||!d.drawn||(a=b.progress(),0===a?b.restart(!0):b.paused()&&0<a&&1>a?b.resume():b.pause().reverse(0))):(b.repeat(l).repeatDelay(m),"function"==typeof k&&b.eventCallback("onStart",k),"function"==typeof q&&-1!==l&&b.eventCallback("onComplete",
q),"function"==typeof n&&b.eventCallback("onUpdate",n),a.isActive()||b.isActive()||!d.drawn||(a=b.totalProgress(),b.paused()&&0<a&&1>a?b.resume():(b.restart(!0),d.ending=!0))))}else a.addLiviconEvo(c)})},stopLiviconEvo:function(){return this.each(function(){var a=jQuery(this),b=a.data(),e=b.saved_options;e?(a=b.mainTL,e.morph?a.pause().progress(0):(a.pause().totalProgress(0),e.ending=!1)):a.addLiviconEvo()})},pauseLiviconEvo:function(){return this.each(function(){var a=jQuery(this).data("mainTL");
a&&a.pause()})},resumeLiviconEvo:function(){return this.each(function(){var a=jQuery(this).data("mainTL");a&&a.resume()})},removeLiviconEvo:function(a,b,e){if(1>=arguments.length)if(a===Object(a))var c=a;else c={},c.total=a;else 2===arguments.length?a===Object(a)?(c=a,c.total=b):(c={},c[a]=b,c.total||(c.total=!1)):(c={},c[a]=b,c.total=e);return this.each(function(){var a=jQuery(this),b=a.data("saved_options");if(b){var e=c.beforeRemove?c.beforeRemove:b.beforeRemove,d=c.afterRemove?c.afterRemove:b.afterRemove;
b.event_elem&&b.event_elem.off(".LiviconEvo");b.event_elem=void 0;"function"==typeof e&&e();a.removeData("saved_options drawTL mainTL");x(c.total)?a.remove():a.empty();"function"==typeof d&&d()}})},liviconEvoState:function(a){if(0===arguments.length)return jQuery(this).data("saved_options").curMorphState;if(1<=arguments.length)return this.each(function(){var b=jQuery(this).data("saved_options"),e=jQuery(this).data("mainTL");"start"===a.toLowerCase()?e&&b.morph&&("end"===b.morphState?e.pause().progress(1):
e.pause().progress(0),b.curMorphState="start"):"end"===a.toLowerCase()&&e&&b.morph&&("end"===b.morphState?e.pause().progress(0):e.pause().progress(1),b.curMorphState="end")})},liviconEvoOptions:function(){var a=jQuery(this).data("saved_options");if(a){var b={};b.afterAdd=a.afterAdd;b.afterAnim=a.afterAnim;b.afterDraw=a.afterDraw;b.afterErase=a.afterErase;b.afterRemove=a.afterRemove;b.afterUpdate=a.afterUpdate;b.allowMorphImageTransform=a.allowMorphImageTransform;b.animated=a.animated;b.autoPlay=a.autoPlay;
b.beforeAdd=a.beforeAdd;b.beforeAnim=a.beforeAnim;b.beforeDraw=a.beforeDraw;b.beforeErase=a.beforeErase;b.beforeRemove=a.beforeRemove;b.beforeUpdate=a.beforeUpdate;b.brightness=a.brightness;b.colorsHoverTime=a.colorsHoverTime;b.colorsOnHover=!1===a.colorsOnHover?"none":a.colorsOnHover;b.colorsWhenMorph=!1===a.colorsWhenMorph?"none":a.colorsWhenMorph;b.delay=.001===a.delay?0:a.delay;b.drawColor=a.drawColor;b.drawColorTime=a.drawColorTime;b.drawDelay=.001===a.drawDelay?0:a.drawDelay;b.drawEase=a.drawEase;
b.drawOnViewport=a.drawOnViewport;b.drawReversed=a.drawReversed;b.drawStagger=a.drawStagger;b.drawStartPoint=a.drawStartPoint;b.drawTime=a.drawTime;b.duration=a.duration;b.duringAnim=a.duringAnim;b.duringDraw=a.duringDraw;b.duringErase=a.duringErase;b.eraseDelay=.001===a.eraseDelay?0:a.eraseDelay;b.eraseEase=a.eraseEase;b.eraseReversed=a.eraseReversed;b.eraseStagger=a.eraseStagger;b.eraseStartPoint=a.eraseStartPoint;b.eraseTime=a.eraseTime;b.eventOn=a.eventOn;b.eventType=!1===a.eventType?"none":a.eventType;
b.fillColor=a.fillColor;b.fillColorAction=a.fillColorAction;b.flipHorizontal=a.flipHorizontal;b.flipVertical=a.flipVertical;b.keepStrokeWidthOnResize=a.keepStrokeWidthOnResize;b.morphImage=!1===a.morphImage?"none":a.morphImage;b.morphState=a.morphState;b.name=a.name;b.pathToFolder=a.pathToFolder;b.repeat=a.repeat;b.repeatDelay=a.repeatDelay;b.rotate=!1===a.rotate?"none":a.rotate;b.saturation=a.saturation;b.size=a.size;b.solidColor=a.solidColor;b.solidColorAction=a.solidColorAction;b.solidColorBg=
a.solidColorBg;b.solidColorBgAction=a.solidColorBgAction;b.strokeColor=a.strokeColor;b.strokeColorAction=a.strokeColorAction;b.strokeColorAlt=a.strokeColorAlt;b.strokeColorAltAction=a.strokeColorAltAction;b.strokeStyle=a.strokeStyle;b.strokeWidth=a.strokeWidth;b.strokeWidthFactorOnHover=!1===a.strokeWidthFactorOnHover?"none":a.strokeWidthFactorOnHover;b.strokeWidthOnHoverTime=a.strokeWidthOnHoverTime;b.style=a.style;b.touchEvents=a.touchEvents;b.tryToSharpen=a.tryToSharpen;b.viewportShift=!1===a.viewportShift?
"none":a.viewportShift;b.def_duration=a.def_duration;b.def_repeat=a.def_repeat;b.def_repeatDelay=a.def_repeatDelay;return b}}});jQuery(document).ready(function(){jQuery(".livicon-evo").addLiviconEvo()});jQuery(window).on("orientationchange",function(){jQuery(window).resize()});C.counter=1})();
Vue.transition('fade', {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});

Vue.transition('slide', {
    enterClass: 'slideInLeft',
    leaveClass: 'slideOutLeft'
});

Vue.transition('slide-right', {
    enterClass: 'slideInRight',
    leaveClass: 'slideOutRight'
});

Vue.transition('fade-slide', {
    enterClass: 'fadeInDown',
    leaveClass: 'fadeOutUp'
});

Vue.transition('slide-down', {
    enterClass: 'slideInDown',
    leaveClass: 'slideOutUp'
});
Vue.directive('autofit-tabs', {
    bind: function () {
        var self = this;
        var $tabs = $(self.el);

        // Dynamically create a hidden container to hold collapsed tabs
        $tabs.append('<li role="presentation" class="collapse-box dropdown">' +
            '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">' +
            '<i class="fa fa-angle-down"></i>' +
            '</a>' +
            '<ul class="dropdown-menu animated fadeInDownSmall"></ul>' +
            '</li>');

        // Initialize instance vars
        self._dropDownButtonWidth = 60; // in px
        self._hasHeadings = ($tabs.children('li').size() > 0); // Do we even have headings?
        self._$hiddenContainer = $tabs.children('li:last-child').children('ul'); // the $el that we want to put our collapsed tabs in
        self._collapsedTabs = [];
        self._collapsedTabWidths = []; // holds the widths of hidden tabs if they weren't hidden
        self._combinedTabWidth = 0; // Width of all visisble tabs

        // Checks to see if any collapsed tabs exist - adds class to show dropdown button if one does
        function setDropDownClass() {
            if (self._$hiddenContainer.children('li').size() == 0) {
                $tabs.children('.collapse-box').addClass('empty');
            } else {
                $tabs.children('.collapse-box').removeClass('empty');
            }
        }

        // Click Handler
        function hiddenTabClickedEventHandler() {
            var hiddenIndex = $(this).index();

            hideTabsToFit(); // Hide a single tab
            unhideTabsToFit($(this));

            // Remove all active list items (uncollapsed and collapsed)
            $tabs.children('li').removeClass('active');
            $tabs.children('li').children('ul').children('li').removeClass('active');

            // Re-add class programatically
            $(this).children('a').tab('show');
        }

        // Bind click Event
        function bindClick($el) {
            $el.on('click', hiddenTabClickedEventHandler);
        }

        function unbindClick($el) {
            $el.off('click', hiddenTabClickedEventHandler);
        }

        // Sort func
        function sortHeadings() {
            var sorted = $tabs.children('li').sort(function (a, b) {
                return $(a).children('a')[0].originalIndex > $(b).children('a')[0].originalIndex;
            });
            $tabs.html(sorted);
            // rebind click
            _.forEach($tabs.children('li:last-child').children('ul').children('li'), function (nestedItem) {
                bindClick($(nestedItem));
            });
        }

        // Fits tab headings to available widthds
        function hideTabsToFit() {

            // Hide a tab
            var children = $tabs.children('li:not(:last-child)');
            var count = children.size();
            var pickedChild = $(children[count - 1]);
            if (pickedChild.hasClass('active')) pickedChild = $(children[count - 2]);   // Repick - We don't pick (hide) active kids
            var childIndex = (pickedChild.hasClass('active')) ? count - 2 : count - 1;  // store child index to change widths later
            bindClick(pickedChild);
            pickedChild.prependTo(self._$hiddenContainer);
            self._collapsedTabs.push(pickedChild);

            // Update values
            var pickedTabWidth = self._visibleTabWidths[childIndex];
            self._collapsedTabWidths.unshift(pickedTabWidth);
            self._visibleTabWidths.splice(childIndex, 1);
            self._combinedTabWidth -= pickedTabWidth;

            if (getSpace() < 0) hideTabsToFit();

            setDropDownClass();
        }

        function unhideTabsToFit($tab) {
            // Physically move the tab out
            $tab.insertBefore($tabs.children('li:last-child'));
            _.remove(self._collapsedTabs, $tab);

            unbindClick($tab);

            var unhideTabWidth = self._collapsedTabWidths[0];

            self._combinedTabWidth += unhideTabWidth;
            self._visibleTabWidths.push(unhideTabWidth);
            self._collapsedTabWidths.shift();

            sortHeadings();

            if (getSpace() > self._collapsedTabWidths[0]) unhideTabsToFit($(self._collapsedTabs[0]));

            setDropDownClass();
        }

        function getSpace() {
            self._containerWidth = $tabs.width();
            return self._containerWidth - self._combinedTabWidth - self._dropDownButtonWidth;
        }


        function optimizeTabWidths() {
            // This is the function that just checks if there is space
            if (!self._hasHeadings) return;
            // If thers is not enough space
            if (getSpace() < 0) {
                // Hide all the tabs to fit
                hideTabsToFit();
            } else {
                // If there is enough space for a collapsed item and we actually have collapsed items
                if (getSpace() > self._collapsedTabWidths[0] && self._collapsedTabs.length > 0) {
                    unhideTabsToFit($(self._collapsedTabs[0])); // unhide the first one
                }
            }


        }


        // When doucment is all loaded and good
        $(document).on('ready page:load', function () {
            var tabHeadings = $tabs.children('li:not(.collapse-box)').children('a').toArray();
            // Make an array of tab widths
            self._visibleTabWidths = tabHeadings.map(function (c) {
                self._combinedTabWidth += c.offsetWidth;    // get the combined width of all tabs
                c.originalIndex = $(c).parent().index();    // bind the index for sorting later
                return c.offsetWidth;                       // return tab width
            });
            setDropDownClass();
            optimizeTabWidths();
        });

        $(window).on('resize.setAutoTabSizes', _.debounce(optimizeTabWidths, 50, {
            leading: true
        }));

    }
});
Vue.directive('datepicker', {
    params: ['button-only'],
    bind: function() {
        if(this.params.buttonOnly) {
            $(this.el).datepicker({
                dateFormat: "dd/mm/yy",
                minDate: 0,
                buttonImage: '/images/icons/calendar.png',
                buttonImageOnly: true,
                showOn: 'both'
            });
        } else {
            $(this.el).datepicker({
                dateFormat: "dd/mm/yy",
                minDate: 0
            });
        }
    }
});
Vue.directive('dropdown-toggle', {
    twoWay: true,
    bind: function () {

        var self = this;

        self.className = $(self.el).attr('class').replace(' ', '.');

        var selector = '.' + self.className + ' button';

        $(document).on('click.' + self.className, selector, function (e) {
            e.stopPropagation();
            $(document).trigger('hideAllDropdowns');

            self.set(true);
            $(document).on('click.checkHideDropdown', function (event) {
                if (!$(event.target).closest('.dropdown-container').length && !$(event.target).is('.dropdown-container')) {
                    self.set(false);
                    $(document).off('click.checkHideDropdown');
                }
            })
        });

        $(document).on('hideAllDropdowns', function () {
            self.set(false);
        });
    },
    unbind: function () {
        $(document).off('click.' + this.className);
        $(document).off('hideAllDropdowns');
    }
});

Vue.directive('fancybox', function() {
    // Init fancy box on elements that may be loaded dynamically using Vue
    $(this.el).fancybox();
});
/**
 * Bootstrap popover
 */
Vue.directive('popover', function () {
    var self = this;
    $(self.el).popover({
        html: true,
        content: function() {
            return $(this).siblings('.popover-content').html();
        }
    });
});



Vue.directive('rule-property-select', {
    twoWay: true,
    bind: function () {
        $(this.el).addClass('bootstrap-select-el');

        $(this.el).selectpicker().on("change", function (e) {
            this.set($(this.el).val());
            $('.rule-trigger-selector').trigger('property:selected');
        }.bind(this));

        $(this.el).on('option:loaded', function () {
            $(this.el).selectpicker('refresh')
        }.bind(this));
    },
    update: function (newVal, oldVal) {
        $(this.el).selectpicker('refresh').trigger("change");
    },
    unbind: function () {
        $(this.el).off().selectpicker('destroy');
    }
});

Vue.directive('rule-trigger-select', {
    twoWay: true,
    bind: function () {
        var self = this;
        $(self.el).addClass('rule-trigger-selector');

        $(self.el).on('property:selected', function () {
            Vue.nextTick(function () {
                $(self.el).selectpicker('refresh').selectpicker('deselectAll');
            });
        });

        $(self.el).selectpicker().on("change", function (e) {
            self.set($(this.el).val());
            self.vm.ruleLimit = ''
        });

    },
    unbind: function () {
        $(this.el).off().selectpicker('destroy');
    }
});
Vue.directive('selectize', {
    twoWay: true,
    bind: function () {
        $(this.el).selectize({
                sortField: 'text',
                placeholder: 'Type to select...'
            })
            .on("change", function (e) {
                this.set($(this.el).val());
            }.bind(this));
    },
    update: function (newValue, oldValue) {
//            $(this.el).trigger("change");
        $(this.el)[0].selectize.clear();
    },
    unbind: function () {
        $(this.el)[0].selectize.destroy(); // remove bindings
    }
});
Vue.directive('selectpicker', {
    twoWay: true,
    bind: function () {
        $(this.el).addClass('bootstrap-select-el');

        $(this.el).selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check'
        }).on("change", function (e) {
            this.set($(this.el).val());
        }.bind(this));

        $(this.el).on('option:loaded', function () {
            $(this.el).selectpicker('refresh')
        }.bind(this));
    },
    update: function (newVal, oldVal) {
        $(this.el).selectpicker('refresh').trigger("change");
    },
    unbind: function () {
        $(this.el).off().selectpicker('destroy');
    }
});

Vue.directive('selectoption', {
    twoWay: true,
    bind: function () {
        Vue.nextTick(function () {
            $('.bootstrap-select-el').trigger("option:loaded");
        });
    }
});
Vue.directive('table-bulk-actions', function () {

    var $this = $(this.el),
        $parent = $($(this.el).parents('tr'));


    function setWidthToParent() {

        var parentWidth = $parent.width();

        // Do we have a width? (els might not have loaded)
        if (parentWidth > 0) {
            $this.width(parentWidth);
        } else {
            setTimeout(function () {
                setWidthToParent();
            }, 200);
        }
    }

    $(window).on("resize.resizeBulkActionsDiv", _.debounce(setWidthToParent, 50, {
        leading: true
    }));

    setWidthToParent();
});
Vue.directive('tooltip', function() {
    $(this.el).tooltip();
});
var modalSinglePR = {
    created: function () {
    },
    methods: {
        showSinglePR: function (purchaseRequest) {
            vueEventBus.$emit('modal-single-pr-show', purchaseRequest);
        }
    }
};
var numberFormatter = {
    created: function () {
    },
    methods: {
        formatNumber: function (number, decimalPoints, currencySymbol) {

            // Default decimal points
            if(decimalPoints === null || decimalPoints === '') decimalPoints = 2;

            // If we gave a currency symbol - format it as money
            if(currencySymbol) return accounting.formatMoney(number, currencySymbol, decimalPoints, ',');

            // otherwise just a norma lnumber format will do
            return accounting.formatNumber(number, decimalPoints, ',');
        }
    }
};
var userCompany = {
    props: ['user'],
    computed: {
        company: function () {
            return this.user.company;
        },
        availableCurrencies: function() {
            if(! this.user.id) return [];
            return this.user.company.settings.currencies;
        },
        companyCurrencies: function() {
            if(! this.user.id) return [];
            return this.user.company.currencies;
        },
        currencyDecimalPoints: function () {
            return this.user.company.settings.currency_decimal_points;
        },
        companyAddress: function () {
            if (_.isEmpty(this.user.company.address)) return false;
            return this.user.company.address;
        },
        PORequiresAddress: function () {
            return this.user.company.settings.po_requires_address;
        },
        PORequiresBankAccount: function () {
            return this.user.company.settings.po_requires_bank_account;
        }
    }
};
Vue.filter('capitalize', function (str) {
    if(str && str.length > 0) return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
});
Vue.filter('chunk', function (array, length) {
    if(! array) return;
    var totalChunks = [];
    var chunkLength = parseInt(length, 10);

    if (chunkLength <= 0) {
        return array;
    }

    for (var i = 0; i < array.length; i += chunkLength) {
        totalChunks.push(array.slice(i, i + chunkLength));
    }


    return totalChunks;
});
Vue.filter('diffHuman', function (value) {
    if(! value || value == '') return;
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").fromNow();
    }
    return value;
});
Vue.filter('properDateModel', {
    // model -> view
    // formats the value when updating the input element.
    read: function (value) {
        if (value.replace(/\s/g, "").length > 0) {
            return moment(value, "YYYY-MM-DD").format('DD/MM/YYYY');
        }
        return value;
    },
    // view -> model
    // formats the value when writing to the data.
    write: function (val, oldVal) {
        if(val.replace(/\s/g, "").length > 0) {
            return moment(val, "DD/MM/YYYY").format("YYYY-MM-DD");
        }
        return val;
    }
});
Vue.filter('dateTime', function (value) {
    if(! value || value == '') return;
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY, h:mm a');
    }
    return value;
});

Vue.filter('date', function (value) {
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").format('DD/MM/YYYY');
    }
    return value;
});
Vue.filter('easyDate', function (value) {
    if(!value) return;
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
    }
    return value;
});

Vue.filter('easyDateModel', {
    // model -> view
    // formats the value when updating the input element.
    read: function (value) {
        console.log(value);
        var date = moment(value, "DD-MM-YYYY");
        if (value && date) {
            return moment(value, "DD-MM-YYYY").format('DD MMM YYYY');
        }
        return value;
    },
    // view -> model
    // formats the value when writing to the data.
    write: function (val, oldVal) {
        return val;
    }
});
Vue.filter('limitString', function (val, limit) {
    if (val && val.length > limit) {
        var trimmedString = val.substring(0, limit);
        trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
        return trimmedString
    }

    return val;
});
Vue.filter('numberFormat', function (val) {
    if(isNaN(parseFloat(val))) return val;
    //Seperates the components of the number
    var n = val.toString().split(".");
    //Comma-fies the first part
    n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Combines the two sections
    return n.join(".");
});
Vue.filter('numberModel', {
    read: function (val) {
        if(val) {
            //Seperates the components of the number
            var n = val.toString().split(".");
            //Comma-fies the first part
            n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            //Combines the two sections
            return n.join(".");
        }
    },
    write: function (val, oldVal, limit) {
        val = val.replace(/\s/g, ''); // remove spaces
        limit = limit || 0; // is there a limit?
        if(limit) {
            val = val.substring(0, limit); // if there is a limit, trim the value
        }
        //val = val.replace(/[^0-9.]/g, ""); // remove characters
        // Trim invalid characters, and round to 2 decimal places
        return Math.round(val.replace(/[^0-9\.]/g, "") * 100) / 100;
    }
});
Vue.filter('percentage', {
    read: function(val) {
        return (val * 100);
    },
    write: function(val, oldVal){
        val = val.replace(/[^0-9.]/g, "");
        return val / 100;
    }
});
Vue.component('checkbox', {
    name: 'styledCheckbox',
    template: '<div class="checkbox-component">'+
    '<div class="checkbox styled" :class="{' +
    "'with-label': label," +
    "'checked': model" +
    '}">' +
    '<label>' +
    '<i class="fa fa-check-square-o checked"></i>' +
    '<i class="fa fa-square-o empty"></i>' +
    '<input class="clickable hidden" type="checkbox" @change="callFunction" :checked="model">' +
    '</label>' +
    '</div>' +
    '<h4 v-if="label" class="no-wrap clickable checkbox-label" @click="callFunction">{{{ label }}}</h4>' +
    '</div>',
    props: ['model', 'label', 'change-function', 'function-params'],
    methods: {
        callFunction: function() {

            this.changeFunction.apply(this.changeFunction, this.functionParams);

            /*
             We wrap our function call because Vue doesn't let us pass parameters with our
             functions so we have to pass it in separately in functionParams (array)
             */

        }
    }
});
Vue.component('form-errors', {
    template: '<div class="validation-errors" v-show="errors.length > 0">' +
    '<h5 class="errors-heading"><i class="fa fa-warning"></i>Could not process request due to</h5>' +
    '<ul class="errors-list list-unstyled"' +
    'v-show="errors.length > 0"' +
    '>' +
    '<li v-for="error in errors">{{ error }}</li>' +
    '</ul>' +
    '</div>',
    data: function () {
        return {
            errors: []
        }
    },
    events: {
        'new-errors': function(errors) {
            var self = this;
            var newErrors = [];
            _.forEach(errors, function (error) {
                if(newErrors.indexOf(error[0]) == -1) newErrors.push(error[0]);
            });
            self.errors = newErrors;
        },
        'clear-errors': function() {
            this.errors = [];
        }
    }
});
Vue.component('paginator', {
    name: 'paginator',
    template: '<div class="api-paginator">' +
    '<ul class="list-unstyled list-inline">' +
    '   <li class="paginate-nav to-first"' +
    '       :class="{' +
    "           'disabled': currentPage < 3  || currentPage > lastPage" +
    '       }"' +
    '       @click="goToPage(1)"' +
    '   >'+
    '       <i class="fa fa-angle-double-left"></i>' +
    '   </li>'+
    '   <li class="paginate-nav prev"' +
    '       :class="{'+
    "           'disabled': (currentPage - 1) < 1 || currentPage > lastPage" +
    '       }"'+
    '       @click="goToPage(currentPage - 1)"'+
    '   >'+
    '       <i class="fa fa-angle-left"></i>'+
    '   </li>'+
    '   <li class="paginate-link"'+
    '       v-for="page in paginatedPages"'+
    '       :class="{' +
                "'current_page': currentPage === page,"+
                "'disabled': page > lastPage"+
    '       }"'+
    '       @click="goToPage(page)"'+
    '   >'+
    '       {{ page }}'+
    '   </li>'+
    '   <li class="paginate-nav next"'+
    '       :class="{'+
                "'disabled': currentPage >= lastPage"+
    '       }"'+
    '       @click="goToPage(currentPage + 1)"'+
    '    >'+
    '       <i class="fa fa-angle-right"></i>'+
    '   </li>'+
    '   <li class="paginate-nav to-last"'+
    '       :class="{'+
    "           'disabled': currentPage > (lastPage - 2)"+
    '       }"'+
    '       @click="goToPage(lastPage)"'+
    '   >'+
    '       <i class="fa fa-angle-double-right"></i>'+
    '   </li>'+
    '</ul>'+
    '</div>',
    data: function() {
        return {

        };
    },
    props: ['response', 'reqFunction', 'event-name'],
    computed: {
        currentPage: function() {
            return this.response.current_page;
        },
        lastPage: function() {
            return this.response.last_page
        },
        paginatedPages: function () {
            var startPage;
            var endPage;
            switch (this.currentPage) {
                case 1:
                case 2:
                    // First 2 pages - always return first 5 pages
                    return this.makePagesArray(1, 5);
                    break;
                case this.lastPage:
                case this.lastPage - 1:
                    // Last 2 pages - return last 5 pages
                        // If we have more than 5 pages count back 4 pages. Else start at page 1
                        startPage = (this.lastPage > 5) ? this.lastPage - 4 : 1;
                        endPage = (this.lastPage > 5 ) ? this.lastPage : 5;
                    return this.makePagesArray(startPage, endPage);
                    break;
                default:
                    startPage = this.currentPage - 2;
                    endPage = this.currentPage + 2;
                    return this.makePagesArray(startPage, endPage);
            }
        }
    },
    methods: {
        makePagesArray: function (startPage, endPage) {
            var pagesArray = [];
            for (var i = startPage; i <= endPage; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        },
        goToPage: function (page) {
            // if we get a custom event name - fire it
            if(this.eventName) vueEventBus.$emit(this.eventName, page);
            vueEventBus.$emit('go-to-page', page);
            this.$dispatch('go-to-page', page);         // TODO ::: REMOVE WILL BE DEPRACATED Vue 2.0 <
            if (0 < page && page <= this.lastPage && typeof(this.reqFunction) == 'function') this.reqFunction(updateQueryString('page', page));
        }
    },
    events: {

    },
    ready: function() {

    }
});
Vue.component('per-page-picker', {
    name: 'itemsPerPagePicker',
    template: '<div class="per-page-picker">' +
    '<span>Results Per Page</span>' +
    '<select-picker :name.sync="newItemsPerPage" :options.sync="itemsPerPageOptions" :function="changeItemsPerPage"></select-picker>' +
    '</div>',
    el: function() {
        return ''
    },
    data: function() {
        return {
            newItemsPerPage: '',
            itemsPerPageOptions: [
                {
                    value: 8,
                    label: 8
                }, {
                    value: 16,
                    label: 16
                },
                {
                    value: 32,
                    label: 32
                }
            ]
        };
    },
    props: ['response', 'reqFunction'],
    computed: {
        itemsPerPage: function() {
            return this.response.per_page;
        }
    },
    methods: {
        changeItemsPerPage: function() {
            var self = this;
            if(self.newItemsPerPage !== self.itemsPerPage) {
                self.reqFunction(updateQueryString({
                    page: 1, // Reset to page 1
                    per_page: self.newItemsPerPage // Update items per page
                }));
            }
        }
    }
});
Vue.component('power-table', {
    name: 'powerTable',
    template: '<div class="table-responsive">' +
    '<table class="table power-table"' +
    '       :class="{' +
    "           'table-hover': hover" +
    '       }"' +
    '>' +
    '<thead>' +
    '<tr>' +
    '<template v-for="header in headers">' +
    '<th v-if="header.sort"' +
    '    @click="changeSort(header.sort)"' +
    '    :class="{' +
    "       'active': sortField === header.sort," +
    "       'asc'   : sortAsc === 1," +
    "       'desc'  : sortAsc === -1," +
    "       'clickable'  : sort" +
    '    }"' +
    '>' +
    '{{ header.label }}' +
    '</th>' +
    '<th v-else>' +
    '{{ header.label }}' +
    '</th>' +
    '</template>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    '<template' +
    '   v-for="item in data | orderBy sortField sortAsc"' +
    '>' +
    '<tr>' +
    '<td v-for="header in headers" ' +
    '    @click="clickEvent(item, field, parseItemValue(header, item))"' +
    '    :class="{' +
    "       'clickable': header.click === true" +
    '    }"' +
    '> {{{ parseItemValue(header, item) }}}</td>' +
    '</tr>' +
    '' +
    '</template>' +
    '</tbody>' +
    '' +
    '</table>' +
    '</div>',
    data: function() {
        return {
            sortField: '',
            sortAsc: 1
        };
    },
    props: [
        'headers',
        'data',
        'filter',    // TO DO ::: Hook up way to filter data
        'sort',
        'hover'     // Set table-hover class
    ],
    computed: {

    },
    methods: {
        parseItemValue: function(header, item) {
            var value;
            _.forEach(header.path, function (path, key) {
                value = (key === 0) ? item[path] : value[path];
            });
            return value;
        },
        changeSort: function(field) {
            if(! this.sort) return;

            if(this.sortField === field) {
                this.sortAsc = (this.sortAsc === 1) ? -1 : 1;
            } else {
                this.sortField = field;
                this.sortAsc = 1;
            }
        },
        clickEvent: function(item, field, value) {
            this.$dispatch('click-table-cell', {
                item: item,
                field: field,
                value: value
            });
        }
    },
    events: {

    },
    ready: function() {

    }
});
Vue.component('select-picker', {
    template: '<select v-model="name" class="themed-select" @change="callChangeFunction">' +
    '<option v-if="placeholder" value="" selected disabled>{{ placeholder }}</option>' +
    '<option v-if="option && option.value" value="{{ option.value }}" v-for="option in options">{{ option.label }}</option>' +
    '</select>',
    name: 'selectpicker',
    props: ['options', 'name', 'function', 'placeholder'],
    methods: {
        callChangeFunction: function () {
            if (this.function && typeof this.function === 'function') {
                this.function();
            }
        }
    },
    ready: function () {

        // Init our picker
        $(this.$el).selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check'
        });

        this.$watch('name', function (val) {
            $(this.$el).val(val);
            $(this.$el).selectpicker('render');
        });

        // Update whenever options change
        this.$watch('options', function (val) {
            // Refresh our picker UI
            $(this.$el).selectpicker('refresh');
            // Update manually because v-model won't catch
            this.name = $(this.$el).selectpicker('val');
        }.bind(this))
    }
});
Vue.component('select-type', {
    name: 'selectType',
    template: '<select class="select-type" v-show="receivedOptions">' +
    '<option></option>' +
    '               <option value="{{ option.value }}" v-for="option in options">{{ option.label }}</option>' + '' +
    '          </select>',
    data: function () {
        return {
            receivedOptions: false,
            selectize: {}
        };
    },
    props: [
        'name',
        'options',
        'create',
        'unique',
        'placeholder'
    ],
    ready: function () {


        var self = this;

        var unique = this.unique !== false,
            create = this.create !== false;
            placeholder = this.placeholder || 'Type to select...';

        this.$watch('name', function (value) {
            if(! value)this.selectize.clear();
        });

        this.$watch('options', function () {
            this.receivedOptions = true;
            if (!_.isEmpty(this.selectize)) this.selectize.destroy();
            this.selectize = $(this.$el).selectize({
                create: create,
                sortField: 'text',
                placeholder: placeholder,
                createFilter: function (input) {
                    input = input.toLowerCase();
                    var optionsArray = $.map(unique.options, function (value) {
                        return [value];
                    });
                    var unmatched = true;
                    _.forEach(optionsArray, function (option) {
                        if ((option.text).toLowerCase() === input) {
                            unmatched = false;
                        }
                    });
                    return unmatched;   // true if unmatched (ie. new) value
                },
                onChange: function (value) {
                    // When we select / enter a new value - enter it into our data
                    self.name = value;
                }
            })[0].selectize;
            // Let parent component know select is loaded
            this.$dispatch('select-loaded');
        });


        // TODO :: Add ability to re-render when options changes
        //      - Maybe define options on selectize and render options / item through plugin (instead of Vue)
        //      - Call clearOption()?
        //      - Clear Cache? Some bug, unknown if fixed

    },
    beforeDestroy: function () {
        this.selectize.destroy();   // TODO :: Check if valid & necessary
    }
});
Vue.component('text-clipper', {
    name: 'textClipper',
    template: '<div class="text-clipper"' +
    '               :class="{' +
    "                   'expanded': !clip" +
    '               }"' +
    '           >' +
    '               <div v-if="isClipped" class="clipped">' +
    '                   {{ text | limitString limit }}' +
    '                   <a class="btn-show-more-text" @click.prevent.stop="unclip">' +
    '                       <span class="clickable">...</span>' +
    '                   </a>' +
    '               </div>' +
    '               <div v-else class="unclipped">' +
    '                   {{ text }}' +
    '               </div>' +
    '            </div>',
    data: function() {
        return {
            limit: 150,
            clip: true
        };
    },
    props: ['text'],
    computed: {
        isClipped: function() {
            return this.text.length > this.limit && this.clip;
        }
    },
    methods: {
        unclip: function() {
            // Set max-height dynamically - depending on amount of text
            $(this.$el).css('max-height', $(this.$el).height());
            // Playing it safe
            setTimeout(function() {
                this.clip = false;
            }.bind(this), 150);
        }
    },
    ready: function() {
        // If the data changes but we're still using the same Component instance
        this.$watch('text', function () {
            // Reset it - ie. clip text
            this.clip = true;
        });
    }
});
Vue.component('toast-alert', {
    name: 'toaster',
    template: '<div id="toast-plate">' +
    '               <div class="toast animated"' +
    '                    v-for="(index, alert) in alerts"' +
    '                    transition="fade"' +
    '                    :class="alert.type">' +
    '<button type="button" class="btn-close" @click="dismiss(alert) "><i class="fa fa-close"></i></button>' +
    '{{{ alert.content }}}' +
    '</div>' +
    '</div>',
    data: function() {
        return {
            alerts: []
        };
    },
    methods: {
        addToQueue: function(alert) {
            // Attach a timeout ID and use it as unique id
            alert.timerID = setTimeout(function () {
                // dismiss (hide) the alert after 3 secs...
                this.dismiss(alert);
            }.bind(this), 3000);
            // finally push alert
            this.alerts.push(alert);
        },
        dismiss: function(alert) {
            // if we prematurely cleared it.. clear the timeout
            clearTimeout(alert.timerID);
            // Remove it from array (will work because of unique timerID)
            this.alerts = _.reject(this.alerts, alert);
        }
    },
    events: {
        'serve-toast': function(alert) {
            this.addToQueue(alert);
        }
    },
    ready: function() {
        /*
        TODO ::: Implement this component to handle alerts if/when we
        make the jump to Vue for handling all client-side. Which
        includes routing, auth etc.
         */
    }
});
Vue.component('date-range-field', {
    name: 'dateRangeField',
    template: '<div class="date-range-field">' +
    '<div class="starting">' +
    '<label>starting</label>'+
    '<input type="text" class="filter-datepicker" v-model="min | properDateModel" placeholder="date">'+
    '</div>' +
    '<span class="dash">-</span>' +
    '<div class="ending">' +
    '<label>Ending</label>' +
    '<input type="text" class="filter-datepicker" v-model="max | properDateModel" placeholder="date">' +
    '</div>'+
    '</div>',
    props: ['min', 'max']
});
Vue.component('integer-range-field', {
    name: 'integerRangeField',
    template: '<div class="integer-range-field">'+
    '<input type="number" class="form-control" v-model="min" min="0">'+
    '<span class="dash">-</span>'+
    '<input type="number" class="form-control" v-model="max" min="0">'+
    '</div>',
    props: ['min', 'max']
});
Vue.component('number-input', {
    name: 'numberInput',
    template: '<input type="text" :class="class" v-model="inputVal" :placeholder="placeholder" :disabled="disabled">',
    props: ['model', 'placeholder', 'decimal', 'currency', 'class', 'disabled', 'on-change-event-name', 'on-change-event-data'],
    computed: {
        precision: function() {
            return this.decimal || 0;
        },
        inputVal: {
            get: function() {
                if(this.model === 0) return 0;
                if(! this.model) return;
                if(this.currency) return accounting.formatMoney(this.model, this.currency + ' ', this.precision);
                return accounting.formatNumber(this.model, this.precision, ",");
            },
            set: function(newVal) {
                // Acts like a 2 way filter
                var decimal = this.decimal || 0;
                this.model = accounting.toFixed(newVal, this.precision);

                if(this.onChangeEventName) {
                    var data = this.onChangeEventData || null;
                    vueEventBus.$emit(this.onChangeEventName, {
                        newVal: newVal,
                        attached: data
                    });
                }
            }
        }
    },
    ready: function() {
    }
});
Vue.component('add-address-modal', {
    name: 'addAddressModal',
    template: '<button type="button"' +
    '                  class="btn btn-add-address btn-outline-blue"' +
    '                  @click="showModal"' +
    '                  >' +
    '                  <i class="fa fa-plus"></i> Address' +
    '          </button>' +
    '          <div class="modal-overlay modal-address-add modal-form" v-show="visible" @click="hideModal">' +
    '               <form class="modal-body form-address-add main-form" v-show="loaded" @click.stop="" @submit.prevent="addAddress">' +
    '                   <button type="button" @click="hideModal" class="btn button-hide-modal"><i class="fa fa-close"></i></button>' +
    '                   <form-errors></form-errors>' +
    '                   <h2>Add Address</h2>' +
    '                   <div class="row">' +
    '                       <div class="col-sm-6">' +
    '                           <div class="shift-label-input">' +
    '                               <input type="text" ' +
    '                                      class="not-required" ' +
    '                                      v-model="contactPerson" ' +
    '                                      :class="{' +
    "                                           'filled': contactPerson }" +
    '                               ">' +
    '                               <label placeholder="Contact Person"></label>' +
    '                           </div>' +
    '                       </div>' +
    '                       <div class="col-sm-6">' +
    '                           <div class="shift-label-input">' +
    '                               <input type="text" required v-model="phone">' +
    '                               <label placeholder="Phone" class="required"></label>' +
    '                           </div>' +
    '                       </div>' +
    '                   </div>' +
    '                   <div class="shift-label-input no-validate">' +
    '                       <input type="text" v-model="address1" required>' +
    '                       <label class="required" placeholder="Address"></label>' +
    '                   </div>' +
    '                   <div class="shift-label-input no-validate">' +
    '                       <input class="not-required"' +
    '                              type="text"' +
    '                              v-model="address2"' +
    '                              :class="{' +
    "                                  'filled': address2.length > 0" +
    '                              }"' +
    '                       >' +
    '                       <label placeholder="Address 2"></label>' +
    '                   </div>' +
    '                   <div class="row">' +
    '                       <div class="col-sm-6">' +
    '                           <div class="shift-label-input no-validate">' +
    '                               <input type="text" v-model="city" required>' +
    '                               <label class="required" placeholder="City"></label>' +
    '                           </div>' +
    '                       </div>' +
    '                       <div class="col-sm-6">' +
    '                           <div class="shift-label-input no-validate">' +
    '                               <input type="text" v-model="zip" required>' +
    '                               <label class="required" placeholder="Zip"></label>' +
    '                           </div>' +
    '                       </div>' +
    '                   </div>' +
    '                   <div class="row">' +
    '                       <div class="col-sm-6">' +
    '                           <div class="form-group shift-select">' +
    '                               <label class="required">Country</label>' +
    '                               <country-selecter :name.sync="countryID"></country-selecter>' +
    '                           </div>' +
    '                       </div>' +
    '                       <div class="col-sm-6">' +
    '                           <div class="form-group shift-select">' +
    '                               <label class="required">State</label>' +
    '                               <state-selecter :name.sync="state""></state-selecter>'+
    '                           </div>' +
    '                       </div>' +
    '                   </div>' +
    '                   <div class="form-group align-end">' +
    '                       <button type="submit" class="btn btn-solid-green" :disabled="! canSaveAddress">Save Address</button>' +
    '                   </div>' +
    '               </form>' +
    '          </div>',
    data: function () {
        return {
            ajaxReady: true,
            ajaxObject: {},
            visible: false,
            loaded: false,
            contactPerson: '',
            phone: '',
            address1: '',
            address2: '',
            city: '',
            zip: '',
            countryID: '',
            state: ''
        };
    },
    props: ['owner-id', 'owner-type'],
    computed: {
        canSaveAddress: function () {
            return this.address1.length > 0 && this.city.length > 0 && this.countryID.length > 0 && this.zip.length > 0 && this.phone.length > 0;
        }
    },
    methods: {
        showModal: function () {
            this.visible = true;
        },
        hideModal: function () {
            this.visible = false;
        },
        addAddress: function () {
            var self = this;
            vueClearValidationErrors(self);
            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            $.ajax({
                url: '/api/address',
                method: 'POST',
                data: {
                    "owner_id": self.ownerId,
                    "owner_type": self.ownerType,
                    "contact_person": self.contactPerson,
                    "phone": self.phone,
                    "address_1": self.address1,
                    "address_2": self.address2,
                    "city": self.city,
                    "zip": self.zip,
                    "country_id": self.countryID,
                    "state": self.state
                },
                success: function (data) {
                    // success
                    self.visible = false;
                    flashNotify('success', 'Added a new address');
                    self.$dispatch('address-added', data);
                    self.ajaxReady = true;

                    // reset fields
                    self.contactPerson = '';
                    self.phone = '';
                    self.address1 = '';
                    self.address2 = '';
                    self.city = '';
                    self.zip = '';
                    self.countryID = '';
                    self.state = '';

                },
                error: function (response) {
                    console.log(response);

                    vueValidation(response, self);
                    self.ajaxReady = true;
                }
            });
        }
    },
    events: {},
    ready: function () {
        var self = this;
        self.loaded = true;
    }
});
Vue.component('add-item-modal', {
    name: 'addItemModal',
    template: '<div class="add-item">' +
    '<button type="button"' +
    '               class="btn button-add-item"' +
    '               :class="{' +
    "                   'btn-outline-blue': this.buttonType === 'blue'," +
    "                   'btn-solid-green': ! this.buttonType"+
    '}"' +
    '               @click="showModal"' +
    '               >' +
    '               Add New Item' +
    '</button>'+
    '<div class="modal-item-add modal-form modal-overlay" v-show="visible" @click="hideModal">' +
    '<form class="form-item-add main-form modal-body" v-show="loaded" @click.stop="">' +
    '<button type="button" @click="hideModal" class="btn button-hide-modal"><i class="fa fa-close"></i></button>' +
    '<form-errors></form-errors>' +
    '<h2>Add New Item</h2>' +
    '<div class="form-group">' +
    '<div class="row">' +
    '<div class="col-sm-6">' +
    '<label>Category</label>' +
    '<product-category-selecter :value.sync="productCategoryId"></product-category-selecter>' +
    '</div>' +
    '<div class="col-sm-6">' +
    '<label class="required">Subcategory</label>' +
    '<product-subcategory-selecter :category="productCategoryId" :value.sync="productSubcategoryId"></product-subcategory-selecter>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '   <div class="form-group">' +
    '       <label>SKU</label>' +
    '       <input class="form-control" type="text" v-model="sku">' +
    '   </div>' +
    '<div class="form-group brand-name-wrap">' +
    '<div class="brand-selection"><label>Brand</label><select class="item-add-brand-select"><option></option></select></div>' +
    '<div class="enter-name"><label  class="required">Name</label><input class="form-control" type="text" v-model="name"></div>' +
    '</div>' +
    '   <div class="form-group">' +
    '       <label  class="required">Specification</label>' +
    '       <textarea class="form-control" v-model="specification" rows="5"></textarea>' +
    '   </div>' +
    '<div class="form-group">' +
    '<div class="item-photo-uploader">' +
    '<label>Photos</label>' +
    '<div class="dropzone-errors" v-show="fileErrors.length > 0">' +
    '<span class="error-heading">Could not add the following files</span>' +
    '<span class="button-clear" @click="clearErrors">clear</span>' +
    '<ul class="file-upload-errors">' +
    '<li v-for="error in fileErrors" track-by="$index">{{ error }}</li>' +
    '</ul>' +
    '</div>' +
    '<div class="item-photo-dropzone dropzone">' +
    '<div class="dz-message"><i class="fa fa-image"></i>' +
    'Click or drop images to upload' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="bottom align-end">' +
    '   <button type="button"' +
    '           class="btn btn-solid-green"' +
    '           @click.prevent="submitAddItemForm"' +
    '           :disabled="! canSubmitForm"' +
    '   >' +
    '       Save Item' +
    '   </button>' +
    '</div>' +
    '</form>' +
    '</div>' +
    '</div>',
    data: function () {
        return {
            visible: false,
            ajaxReady: true,
            loaded: false,
            existingBrands: null,
            sku: '',
            brand: '',
            name: '',
            productCategoryId: '',
            productSubcategoryId: '',
            specification: '',
            uploadedFiles: [],
            fileErrors: [],
            dropzone: {}
        };
    },
    props: ['buttonType'],
    computed: {
        canSubmitForm: function () {
            return this.name.length > 0 && this.specification.length > 0;
        }
    },
    methods: {
        showModal: function() {
            this.visible = true;
        },
        hideModal: function() {
            this.visible = false;
        },
        clearErrors: function () {
            this.fileErrors = []
        },
        submitAddItemForm: function () {
            var self = this;

            // Create new FormData Instance
            var fd = new FormData();

            // Attach our previously uploaded files to data
            _.forEach(self.uploadedFiles, function (file) {
                fd.append('item_photos[]', file);
            });

            // Append our other data
            fd.append('sku', self.sku);
            fd.append('brand', self.brand);
            fd.append('name', self.name);
            fd.append('specification', self.specification);
            fd.append('product_subcategory_id', self.productSubcategoryId);

            // Send Req. via Ajax
            vueClearValidationErrors(self);
            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            $.ajax({
                url: '/api/items',
                method: 'POST',
                data: fd,
                contentType: false,
                processData: false,
                success: function (data) {
                    // success
                    console.log('success!');
                    console.log(data);
                    self.ajaxReady = true;
                    self.clearFields(); // Clear selected fields
                    self.$dispatch('added-new-item', data);   // Send out event for parent component
                    self.visible = false;
                    flashNotify('success', 'Added new Item');
                },
                error: function (response) {
                    console.log(response);

                    vueValidation(response, self);
                    self.ajaxReady = true;
                }
            });
        },
        clearFields: function () {
            this.sku = '';
            this.brand = '';
            this.name = '';
            this.specification = '';
            this.uploadedFiles = '';
            this.fileErrors = [];
            this.dropzone.removeAllFiles();
        }
    },
    events: {},
    ready: function () {
        var self = this;

        // Brand selectize init
        $('.item-add-brand-select').selectize({
            valueField: 'brand',
            searchField: 'brand',
            create: true,
            placeholder: 'Find or enter a new brand',
            render: {
                option: function(item, escape) {
                    return '<div class="single-brand-option">' + escape(item.brand) + '</div>'
                },
                item: function(item, escape) {
                    return '<div class="selected-brand">' + escape(item.brand) + '</div>'
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/items/search/brands/' + encodeURIComponent(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function(value) {
                self.brand = value;
            }
        });

        // File Upload
        var dzMaxFileSize = 5 * (1000000);
        self.dropzone = new Dropzone("div.item-photo-dropzone", {
            autoProcessQueue: false,
            url: "#",
            acceptedFiles: 'image/*',
            accept: function (file, done) {
                if (self.uploadedFiles.length > 12) {
                    self.fileErrors.push("Maximum of 12 Photos reached");
                    this.removeFile(file);
                } else if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
                    self.fileErrors.push('"' + file.name + '" not a valid image type (.jpeg, .png, .gif)');
                    this.removeFile(file);
                } else if (file.size > dzMaxFileSize) {
                    self.fileErrors.push('"' + file.name + '" file size over 5MB');
                    this.removeFile(file);
                }
                else {
                    done();
                }
            },
            previewTemplate: '<div class="dz-image-row"><div class="dz-image"><img data-dz-thumbnail></div><div class="dz-file-details"><span data-dz-name class="file-name"></span><span class="file-size" data-dz-size></span></div><div class="link-remove"><i class="fa fa-close" data-dz-remove></i></div></div>',
            init: function () {
                this.on("addedfile", function (file) {
                    self.uploadedFiles.push(file);
                });
                this.on("removedfile", function (file) {
                    self.uploadedFiles = _.reject(self.uploadedFiles, file);
                })
            }
        });

        self.loaded = true;
    }
});
Vue.component('modal', {
    data: function () {
        return {
            title: '',
            body: '',
            buttonText: '',
            buttonClass: '',
            callbackEventName: ''
        }
    },
    template: '<div class="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
    '<div class="vertical-alignment-helper">' +
    '<div class="modal-dialog vertical-align-center">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="text-center">{{ title }}</h5>' +
    '</div>' +
    '<div class="modal-body">' +
    '<p>{{ body }}</p>' +
    '</div>' +
    '<div class="modal-footer">' +
    '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>' +
    '<a class="btn btn-ok btn-confirm {{ buttonClass }}"' +
    '   @click="fireEvent" data-dismiss="modal"' +
    '>' +
    '{{ buttonText }}' +
    '</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>',
    methods: {
        fireEvent: function() {
            this.$dispatch(this.callbackEventName);
        }
    },
    events: {
        'new-modal': function (settings) {
            var self = this;
            self.title = settings.title;
            self.body = settings.body;
            self.buttonClass = settings.buttonClass;
            self.buttonText = settings.buttonText;
            self.callbackEventName = settings.callbackEventName;

            // show the modal
            $(this.$el).modal('show');

        }
    }
});
Vue.component('single-pr-modal', {
    name: 'singlePurchaseRequestModal',
    template: '<div class="modal-overlay single-pr" tabindex="-1" role="dialog" aria-labelledby="singlePRModal" aria-hidden="true" v-show="visible" @click="hideModal">' +
    '               <div class="modal-body" @click.stop="">'+
    '                   <modal-close-button></modal-close-button>' +
    '                       <h3>Purchase Request #{{ purchaseRequest.number }} <span'+
    '                           class="badge-state {{ purchaseRequest.state }}">{{ purchaseRequest.state }}</span>' +
    '                       </h3>' +
    '                       <div class="pr">' +
    '                           <div class="request-info">' +
    '                               <span class="requested">Requested {{ purchaseRequest.created_at | diffHuman }}</span>' +
    '                               <span class="requester">{{ purchaseRequest.user.name }}</span>' +
    '                           </div>' +
    '                           <div class="due">' +
    '                               <h5>Due Date</h5>' +
    '                               <span class="date">{{ purchaseRequest.due | easyDate }}</span>' +
    '                           </div>' +
    '                           <div class="quantity">' +
    '                               <h5>Quantity</h5>' +
    '                               <span class="number">{{ purchaseRequest.quantity }}</span>' +
    '                           </div>' +
    '                       </div>' +
    '                       <div class="item">' +
    '                           <h5>Item</h5>' +
    '                           <div class="main-photo">' +
    '                               <a v-if="purchaseRequest.item.photos.length > 0" :href="purchaseRequest.item.photos[0].path" class="fancybox image-item-main" rel="group">' +
    '                                   <img :src="purchaseRequest.item.photos[0].thumbnail_path" alt="Item Main Photo">' +
    '                               </a>' +
    '                               <div class="placeholder" v-else>'+
    '                                   <i class="fa fa-image"></i>'+
    '                               </div>' +
    '                           </div>' +
    '                           <div class="details">' +
    '                               <span class="sku display-block" v-if="purchaseRequest.item.sku">{{ purchaseRequest.item.sku }}</span>' +
    '                               <span class="brand" v-if="purchaseRequest.item.brand">{{ purchaseRequest.item.brand }} - </span>' +
    '                               <span class="name">{{ purchaseRequest.item.name }}</span>' +
    '                               <p class="specification">{{ purchaseRequest.item.specification }} </p>' +
    '                               <div class="item-images" v-if="purchaseRequest.item.photos.length > 0">' +
    '                                   <ul class="image-gallery list-unstyled list-inline">' +
    '                                       <li class="single-item-image" v-for="photo in purchaseRequest.item.photos">' +
    '                                           <a :href="photo.path" v-fancybox rel="group">' +
    '                                               <img :src="photo.thumbnail_path" alt="item image">' +
    '                                           </a>' +
    '                                       </li>' +
    '                                   </ul>' +
    '                               </div>' +
    '                          </div>' +
    '                      </div>'+
    '             </div>' +
    '       </div>',
    data: function() {
        return {
            purchaseRequest: {
                user: {},
                item: {
                    photos: []
                }
            },
            visible: false
        }
    },
    props: [],
    computed: {

    },
    methods: {
        hideModal: function() {
            this.visible = false;
        }
    },
    events: {
        'click-close-modal': function() {
            this.hideModal();
        }
    },
    ready: function() {
        var self = this;
        vueEventBus.$on('modal-single-pr-show', function(purchaseRequest) {
            self.purchaseRequest = purchaseRequest;
            self.$nextTick(function () {
                self.visible = true;
            });
        });
        vueEventBus.$on('modal-close', function() {
            self.hideModal();
        });
    }
});


var apiRequestAllBaseComponent = Vue.extend({
    name: 'APIRequestall',
    data: function () {
        return {
            ajaxReady: true,
            request: {},
            response: {},
            params: {},
            showFiltersDropdown: false,
            filter: '',
            filterValue: '',
            minFilterValue: '',
            maxFilterValue: ''
        };
    },
    props: [],
    computed: {},
    methods: {
        checkSetup: function() {
            if(!this.requestUrl) throw new Error("No Request URL set as 'requestUrl' ");
            if(this.hasFilter && _.isEmpty(this.filterOptions)) throw new Error("Need filterOptions[] defined to use filters");
        },
        makeRequest: function (query) {
            var self = this,
                url = this.requestUrl;

            // If we got a new query parameter, use it in our request - otherwise, try get query form address bar
            query = query || window.location.href.split('?')[1];
            // If we had a query (arg or parsed) - attach it to our url
            if (query) url = url + '?' + query;

            // self.finishLoading = false;

            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            self.request = $.ajax({
                url: url,
                method: 'GET',
                success: function (response) {
                    // Update data
                    self.response = response;

                    // Attach filters
                    // Reset obj
                    self.params = {};
                    // Loop through and attach everything (Only pre-defined keys in data obj above will be accessible with Vue)
                    _.forEach(response.data.query_parameters, function (value, key) {
                        self.params[key] = value;
                    });


                    // push state (if query is different from url)
                    pushStateIfDiffQuery(query);

                    document.getElementById('body-content').scrollTop = 0;

                    self.ajaxReady = true;
                },
                error: function (res, status, req) {
                    console.log(status);
                    self.ajaxReady = true;
                }
            });
        },
        changeSort: function (sort) {
            if (this.params.sort === sort) {
                var order = (this.params.order === 'asc') ? 'desc' : 'asc';
                this.makeRequest(updateQueryString('order', order));
            } else {
                this.makeRequest(updateQueryString({
                    sort: sort,
                    order: 'asc',
                    page: 1
                }));
            }
        },
        searchTerm: _.debounce(function () {
            if (this.request && this.request.readyState != 4) this.request.abort();
            var term = this.params.search || null;
            this.makeRequest(updateQueryString({
                search: term,
                page: 1
            }))
        }, 200),
        clearSearch: function () {
            this.params.search = '';
            this.searchTerm();
        },
        resetFilterInput: function() {
            this.filter = '';
            this.filterValue = '';
            this.minFilterValue = '';
            this.maxFilterValue = '';
        },
        addFilter: function () {
            var queryObj = {
                page: 1
            };
            queryObj[this.filter] = this.filterValue || [this.minFilterValue, this.maxFilterValue];
            this.makeRequest(updateQueryString(queryObj));
            this.resetFilterInput();
            this.showFiltersDropdown = false;
        },
        removeFilter: function(filter) {
            var queryObj = {
                page: 1
            };
            queryObj[filter] = null;
            this.makeRequest(updateQueryString(queryObj));
        },
        removeAllFilters: function() {
            var self = this;
            var queryObj = {};
            _.forEach(self.filterOptions, function (option) {
                queryObj[option.value] = null;
            });
            this.makeRequest(updateQueryString(queryObj));
        }
    },
    events: {},
    ready: function () {
        this.checkSetup();
        this.makeRequest();
        onPopCallFunction(this.makeRequest);
    }
});
var baseChart = Vue.extend({
    name: 'BaseChart',
    template: '<canvas v-el:canvas class="canvas-chart"></canvas>',
    data: function () {
        return {
            mode: 'url',
            chartLabel: '',
            showZeroValues: false,
            chartType: 'bar',
            chart: '',
            theme: 'red'
        }
    },
    props: [],
    computed: {
        colors: function() {
            switch(this.theme) {
                case 'red':
                    return {
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        hoverBackgroundColor: "rgba(255,99,132,0.4)",
                        hoverBorderColor: "rgba(255,99,132,1)"
                    };
                    break;
                case 'blue':
                    return {
                        backgroundColor: "rgba(52,152,219,0.2)",
                        borderColor: "rgba(52,152,219,1)",
                        hoverBackgroundColor: "rgba(52,152,219,0.4)",
                        hoverBorderColor: "rgba(52,152,219,1)"
                    };
                    break;
                case 'green':
                    return {
                        backgroundColor: "rgba(46,204,113,0.2)",
                        borderColor: "rgba(46,204,113,1)",
                        hoverBackgroundColor: "rgba(46,204,113,0.4)",
                        hoverBorderColor: "rgba(46,204,113,1)"
                    };
                    break;
                default:
                    break;
            }

        },
        backgroundColor: function() {
            return this.colors.backgroundColor;
        },
        borderColor: function(){
            return this.colors.borderColor;
        },
        hoverBackgroundColor: function() {
            return this.colors.hoverBackgroundColor;
        },
        hoverBorderColor: function() {
            return this.colors.hoverBorderColor;
        }
    },
    methods: {
        load: function () {
            var self = this;

            if(this.mode === 'url') {
                this.fetchData().done(function (data) {
                    self.render(data);
                });
            }
            self.render(this.chartData);
        },
        fetchData: function () {
            return $.get(this.chartURL);
        },
        render: function (data) {

            // Remove 0 values from our data
            if (!this.showZeroValues) data = this.removeZeroValues(data);

            this.chart = new Chart(this.$els.canvas.getContext('2d'), {
                type: this.chartType,
                data: {
                    labels: Object.keys(data),
                    datasets: [
                        {
                            data: _.map(data, function (val) {
                                return val;
                            }),
                            label: this.chartLabel,
                            backgroundColor: this.backgroundColor,
                            borderColor: this.borderColor,
                            borderWidth: 1,
                            hoverBackgroundColor: this.hoverBackgroundColor,
                            hoverBorderColor: this.hoverBorderColor
                        }
                    ]
                }
            });
        },
        removeZeroValues: function(data) {
            return _.pickBy(data, function (value) {
                return value > 0
            });
        },
        reload: function () {
            if (!_.isEmpty(this.chart)) this.chart.destroy();
            this.load();
        }
    },
    events: {},
    ready: function () {
        if(this.mode === 'url' && !this.chartURL) throw new Error("Chart Mode: url - no URL to retrieve chart data");

        var watchVariable = this.mode === 'url' ? 'chartURL' : 'chartData';

        this.$watch(watchVariable, function () {
            this.reload();
        }.bind(this));

        this.load();


    }
});
Vue.component('address', {
    name: 'singleAddress',
    template: '<div class="address">' +
    '<div class="contact-person">' +
    '<h3 class="left">Contact Person</h3>' +
    '<span class="name">{{ address.contact_person }}</span>' +
    '</div>' +
    '<div class="phone">' +
    '<h3 class="left">Phone</h3>' +
    '<span class="phone">{{ address.phone }}</span>' +
    '</div>' +
    '<div class="address">' +
    '<h3 class="left">Address</h3>' +
    '<span class="address_1 block">{{ address.address_1 }}</span>' +
    '<span class="address_2 block" v-if="address.address_2">{{ address.address_2 }}</span>' +
    '<span class="city">{{ address.city }}</span>' +
    '<span class="zip">{{ address.zip }}</span>' +
    '<div class="state-country block">' +
    '<span class="state">{{ address.state }}</span>,' +
    '<span class="country">{{ address.country }}</span>' +
    '</div>' +
    '</div>' +
    '</div>',
    props: ['address', 'company']
});
Vue.component('bank-account', {
    name: 'singleBankAccount',
    template: '<div class="bank-account card">' +
    '<p class="card-title">{{ account.bank_name }}</p>' +
    '<hr>' +
    '<h3>Account</h3>' +
    '<div class="account-name text-center">' +
    '{{ account.account_name }}' +
    '</div>' +
    '<div class="account-number text-center">' +
    '{{ account.account_number }}' +
    '</div>' +
    '<hr>' +
    '<h3>Bank</h3>' +
    '<div class="extra-info text-center">' +
    '<div class="bank-name"><strong>{{ account.bank_name }}</strong></div>' +
    '<div class="bank-phone">' +
    '<span class="bank-label">Phone Number: </span>' +
    '<span v-if="account.bank_phone">{{ account.bank_phone }}</span>' +
    '<span v-else>-</span>' +
    '</div>' +
    '<div class="bank-address">' +
    '<span class="bank-label">Branch Address: </span>' +
    '<span v-if="account.bank_address">{{ account.bank_address }}</span>' +
    '<span v-else>-</span>' +
    '</div>' +
    '<div class="swift">' +
    '<span class="bank-label">SWIFT / IBAN: </span>' +
    '<span v-if="account.swift swift">{{ account.swift }}</span>' +
    '<span v-else>-</span>' +
    '</div>' +
    '</div>' +
    '</div>',
    props: ['account']
});
Vue.component('company-currency-selecter', {
    template: '<select v-model="id" class="themed-select" v-el:select>' +
    '<option :value="currency.id" v-for="currency in currencies">{{ currency.code }} - {{ currency.symbol }}</option>' +
    '</select>',
    name: 'selectpicker',
    props: ['currencies', 'currency-object', 'id'],
    methods: {
        getCurrency: function(currencyID) {
            return _.find(this.currencies, function(currency) {
                return currency.id == currencyID;
            });
        },
        refresh: function() {
            this.$nextTick(function() {
                // Refresh our picker UI
                $(this.$els.select).selectpicker('refresh');
                // Update manually because v-model won't catch
                var currencyID = this.id = $(this.$els.select).selectpicker('val');
                this.currencyObject = this.getCurrency(currencyID);
            });
        }
    },
    ready: function () {
        var self = this;
        $(self.$els.select).selectpicker({
            iconBase: 'fa',
            tickIcon: 'fa-check'
        }).on('changed.bs.select', function () {
            self.currencyObject = self.getCurrency($(self.$els.select).selectpicker('val'));
        });

        self.$watch('currencies', this.refresh);

        vueEventBus.$on('updated-company-currency', this.refresh);
    }
});
Vue.component('company-search-selecter', {
    name: 'companySearchSelecter',
    template: '<select class="company-search-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name'],
    ready: function() {
        var self = this;
        $('.company-search-selecter').selectize({
            valueField: 'id',
            searchField: ['name'],
            create: false,
            placeholder: 'Search by Company Name',
            render: {
                option: function (item, escape) {

                    var optionClass = 'class="option company-single-option ',
                        connectionSpan;

                    switch (item.connection) {
                        case 'pending':
                            optionClass += 'disabled"';
                            connectionSpan = '<span class="vendor-connection pending">pending</span>';
                            break;
                        case 'verified':
                            optionClass += 'disabled"';
                            connectionSpan = '<span class="vendor-connection verified">verified</span>';
                            break;
                        default:
                            optionClass += '"';
                            connectionSpan = '';
                    }


                    return '<div ' + optionClass +'>' +
                        '       <span class="name">' + escape(item.name) + '</span>' +
                        connectionSpan +
                        '   </div>'
                },
                item: function (item, escape) {

                    var selectedClass = 'class="company-selected ',
                        connectionSpan;

                    switch (item.connection) {
                        case 'pending':
                            selectedClass += 'disabled"';
                            connectionSpan = '<span class="vendor-connection pending">pending</span>';
                            break;
                        case 'verified':
                            selectedClass += 'disabled"';
                            connectionSpan = '<span class="vendor-connection verified">verified</span>';
                            break;
                        default:
                            selectedClass += '"';
                            connectionSpan = '';
                    }

                    return '<div ' + selectedClass + '>' +
                        '           <label>Selected Company</label>' +
                        '           <div class="name">' + escape(item.name) +
                        connectionSpan +
                        '           </div>' +
                        '           <span class="description">' + escape(item.description) + '</span>' +
                        '       </div>' +
                        '</div>'
                }
            },
            load: function (query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/company/search/' + encodeURIComponent(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function (value) {
                self.name = value;
            }
        });
    }
});
Vue.component('country-selecter', {
    name: 'countrySelecter',
    template: '<select class="country-selecter"><option></option></select>',
    data: function() {
        return {

        };
    },
    props: ['name', 'event', 'default'],
    computed: {

    },
    methods: {

    },
    events: {

    },
    ready: function() {
        var self = this,
            select_country;
        $select_country = $(self.$el).selectize({
            valueField: 'id',
            searchField: 'name',
            create: false,
            placeholder: 'Country',
            render: {
                option: function (item, escape) {
                    return '<div class="single-country-option">' + escape(item.name) + '</div>'
                },
                item: function (item, escape) {
                    return '<div class="selected-country">' + escape(item.name) + '</div>'
                }
            },
            load: function (query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/countries/search/' + encodeURIComponent(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function (value) {
                // Update the name prop to pass data onto parent component
                self.name = value;
                var eventName = self.event || 'selected-country';
                // Fire event
                vueEventBus.$emit(eventName, value);
            }
        });

        select_country = $select_country[0].selectize;
        // IF we got a default country ID
        self.$watch('default', function (countryID) {
            // fetch associated country
            $.get('/countries/' + countryID, function(data) {
                // Add option
                select_country.addOption(data);

                // Select the option - we set to silent because there may be other
                // selecters watching this one for changes, and they may have
                // their own default values: ie. state-selecter
                select_country.setValue(countryID, true);

                // Update the name value
                self.name = countryID;
            });
        });
    }
});
Vue.component('currency-selecter', {
    name: 'currencySelecter',
    template: '<select class="currency-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name', 'default', 'id'],
    ready: function() {
        var self = this;
        var selecter = $('.currency-selecter').selectize({
            valueField: 'id',
            searchField: ['country_name', 'name', 'code', 'symbol'],
            create: false,
            placeholder: 'Search for a currency',
            maxItems: 1,
            render: {
                option: function(item, escape) {
                    return '<div class="option-currency">' + escape(item.country_name) + ' - ' + escape(item.symbol) + '</div>'
                },
                item: function(item, escape) {
                    return '<div class="selected-currency">' + escape(item.country_name) + ' - ' + escape(item.symbol)  + '</div>'
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/countries/currency/search/' + encodeURI(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function(value) {
                self.id = value;

                if(! value) {
                    self.name = '';
                    return;
                }

                $.get('/countries/' + value, function (data) {
                    self.name = data;
                });
            }
        });

        // Setting the default (company's saved) currency
        var _selecter = selecter[0].selectize;
        var defaultCurrency;

        self.$watch('default', function (value) {
            // if we've already added it, return
            if(defaultCurrency && defaultCurrency.id === value.id) return;
            defaultCurrency = value;
            _selecter.addOption(value);
            _selecter.setValue(value.id);
        });
    }
});
Vue.component('form-credit-card', {
    name: 'creditCardform',
    template: '<form id="form-registration-billing" @submit.prevent="submitCard" v-el:stripe-form class="credit-card-form">'+
    '<div class="shift-label-input validated-input" '+
    ':class="{'+
        "'is-filled': ccNumber,"+
        "'is-error': cardError.param === 'number'"+
    '}">'+
    '<input data-stripe="number" type="text" required size="20" v-model="ccNumber" >'+
    '<label placeholder="Card Number"></label>'+
    '</div>'+
    '<div class="row">'+
    '<div class="col-sm-6">'+
    '<div class="shift-label-input">'+
    '<input data-stripe="name" type="text" required v-model="ccName">'+
    '<label placeholder="Name On Card"></label>'+
    '</div>'+
    '</div>'+
    '<div class="col-sm-6 expiry">'+
    '<div class="shift-label-input month validated-input" '+
    ':class="{'+
        "'is-filled': ccExpMonth,"+
        "'is-error': cardError.param === 'exp_month'"+
    '}">'+
    '<input data-stripe="exp_month" type="text" required size="2" v-model="ccExpMonth">'+
    '<label placeholder="MM"></label>'+
    '</div>'+
    '<span class="separator">/</span>'+
    '<div class="shift-label-input year validated-input" '+
    ':class="{'+
        "'is-filled': ccExpYear,"+
        "'is-error': cardError.param === 'exp_year'"+
    '}">'+
    '<input data-stripe="exp_year" type="text" required size="4" v-model="ccExpYear">'+
    '<label placeholder="YYYY"></label>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '<div class="shift-label-input validated-input" '+
    ':class="{'+
        "'is-filled': ccCVC,"+
        "'is-error': cardError.param === 'cvc'"+
    '}">'+
    '<input data-stripe="cvc" type="text" required size="4" v-model="ccCVC">'+
    '<label placeholder="CVC"></label>'+
    '</div>'+
    '<div class="billing-buttons align-end">'+
    '<button type="submit" class="btn btn-solid-green" :disabled="! validCardDetails">{{ submitButtonText }}</button>'+
    '</div>'+
    '</form>',
    data: function() {
        return {
            cardError: '',
            waitingStripeResponse: false,
            ccName: '',
            ccNumber: '',
            ccExpMonth: '',
            ccExpYear: '',
            ccCVC: ''
        };
    },
    props: [],
    computed: {
        validCardDetails: function() {
            return ! this.waitingStripeResponse && this.ccName && this.ccNumber && this.ccExpMonth && this.ccExpYear && this.ccCVC;
        },
        submitButtonText: function() {
            if(this.waitingStripeResponse) return 'processing...';
            return 'Add card';
        }
    },
    methods: {
        submitCard: function() {
            var $form = $(this.$els.stripeForm);

            this.cardError = '';
            this.waitingStripeResponse = true;

            Stripe.card.createToken($form, function(status, response) {

                if(response.error) { // Card error
                    this.cardError = response.error;
                    this.waitingStripeResponse = false;
                        
                } else {
                    vueEventBus.$emit('new-cc-token', response.id);
                }
            }.bind(this));
        }
    },
    events: {

    },
    ready: function() {
        // Set stripe public key
        Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
    }
});
Vue.component('item-brand-selecter', {
    name: 'itemBrandSelecter',
    template: '<select class="item-brand-search-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name'],
    ready: function() {
        var self = this;
        $('.item-brand-search-selecter').selectize({
            valueField: 'brand',
            searchField: 'brand',
            create: false,
            placeholder: 'Search for a brand',
            render: {
                option: function(item, escape) {
                    return '<div class="single-brand-option">' + escape(item.brand) + '</div>'
                },
                item: function(item, escape) {
                    return '<div class="selected-brand">' + escape(item.brand) + '</div>'
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/items/search/brands/' + encodeURI(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function(value) {
                self.name = value;
            }
        });
    }
});
Vue.component('item-name-selecter', {
    name: 'itemNameSelecter',
    template: '<select class="item-name-search-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name'],
    ready: function() {
        var self = this;
        $('.item-name-search-selecter').selectize({
            valueField: 'name',
            searchField: 'name',
            create: false,
            placeholder: 'Search for a name',
            render: {
                option: function(item, escape) {
                    return '<div class="single-name-option">' + escape(item.name) + '</div>'
                },
                item: function(item, escape) {
                    return '<div class="selected-name">' + escape(item.name) + '</div>'
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/items/search/names/' + encodeURI(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function(value) {
                self.name = value;
            }
        });
    }
});
Vue.component('item-sku-selecter', {
    name: 'itemSKUSelecter',
    template: '<select class="item-sku-search-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name'],
    ready: function() {
        var self = this;
        $('.item-sku-search-selecter').selectize({
            valueField: 'sku',
            searchField: 'sku',
            create: false,
            placeholder: 'Search for SKU',
            render: {
                option: function(item, escape) {
                    return '<div class="single-sku-option">' + escape(item.sku) + ' - ' + escape(item.name) + '</div>'
                },
                item: function(item, escape) {
                    return '<div class="selected-sku">' + escape(item.sku) + ' - ' + escape(item.name) + '</div>'
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/items/search/sku/' + encodeURI(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function(value) {
                self.name = value;
            }
        });
    }
});
Vue.component('line-item-price-input', {
    name: 'lineItemPriceInput',
    template: '<input type="text" class="input-price form-control" v-model="inputVal" placeholder="price" @change="updateOtherLineItemPrices()">',
    props: ['model', 'line-items', 'current-line-item', 'decimal'],
    computed: {
        precision: function() {
            return this.decimal || 0;
        },
        inputVal: {
            get: function() {
                if(this.model === 0) return 0;
                if(! this.model) return;
                return accounting.formatNumber(this.model, this.precision, ",");
            },
            set: function(newVal) {
                // Acts like a 2 way filter
                var decimal = this.decimal || 0;
                this.model = accounting.toFixed(newVal, this.precision);
            }
        }
    },
    methods: {
        updateOtherLineItemPrices: function () {
            console.log('changed!');

            var self = this;

            var otherLineItemsWithSameItem = _.filter(self.lineItems, function (lineItem) {
                return lineItem.item.id === self.currentLineItem.item.id;
            });

            console.log(otherLineItemsWithSameItem);

            _.forEach(otherLineItemsWithSameItem, function (lineItem) {

                if(lineItem.id === self.currentLineItem.id) return;

                var index = _.indexOf(self.lineItems, lineItem);
                console.log('index is: ' + index);

                var updatedLineItem = lineItem;
                updatedLineItem.order_price = self.currentLineItem.order_price;
                console.log('updated price is: ' + updatedLineItem.order_price);

                self.lineItems.splice(index, 1, updatedLineItem);

            });
        }
    },
    ready: function() {
    }
});
Vue.component('modal-select-address', {
    name: 'modalSelectAddress',
    template: '<div><button type="button" v-show="! selected" class="btn btn-small button-select-address btn-outline-blue" @click="showModal">Select Address</button>' +
    '<div class="modal-select-address modal-overlay" v-show="visible" @click="hideModal">' +
    '<div class="modal-body" @click.stop="">' +
    '<button type="button" @click="hideModal" class="btn button-hide-modal"><i class="fa fa-close"></i></button>' +
    '<h2>Select an Address</h2>' +
    '<ul class="list-unstyled list-address" v-if="addresses.length > 0">' +
    '<li class="single-address clickable" v-for="address in addresses" @click="select(address)">' +
    '<address :address="address"></address>' +
    '</div>' +
    '</li>' +
    '</ul>' +
    '<em v-if="addresses.length == 0">No Addresses found, add an address to a Vendor to select it here.</em>' +
    '</div>' +
    '</div>' +
    '<div class="single-address clickable selected" v-show="selected">' +
    '<div class="change-overlay" @click="remove">' +
    '<i class="fa fa-close"></i>' +
    '<h3>Remove</h3>' +
    '</div>' +
    '<address :address="selected"></address>' +
    '</div>' +
    '</div>'+
    '</div>',
    data: function () {
        return {
            visible: false
        };
    },
    props: ['selected', 'addresses'],
    computed: {},
    methods: {
        showModal: function () {
            this.visible = true;
        },
        hideModal: function () {
            this.visible = false;
        },
        select: function (address) {
            this.selected = address;
            this.hideModal();
        },
        remove: function () {
            this.selected = '';
        }
    },
    events: {},
    ready: function () {

    }
});
Vue.component('modal-select-bank-account', {
    name: 'modalSelectBankAccount',
    template: '<button type="button" v-show="! selected" class="btn btn-small button-select-account btn-outline-blue" @click="showModal">Select Bank Account</button>' +
    '<div class="modal-select-account modal-overlay" v-show="visible" @click="hideModal">' +
    '<div class="modal-body" @click.stop="">' +
    '<button type="button" @click="hideModal" class="btn button-hide-modal"><i class="fa fa-close"></i></button>' +
    '<h2>Select a Bank Account</h2>' +
    '<ul class="list-unstyled list-accounts" v-if="accounts.length > 0">' +
    '<li class="single-account clickable" v-for="account in accounts" @click="select(account)">' +
    '<bank-account :account="account"></bank-account>' +
    '</li>' +
    '</ul>' +
    '<em v-else>No Bank Accounts found. Add one to Vendor before selecting it here.</em>' +
    '</div>' +
    '</div>' +
    '<div class="single-account clickable selected" v-show="selected">' +
    '<div class="change-overlay" @click="remove">' +
    '<i class="fa fa-close"></i>' +
    '<h3>Remove</h3>' +
    '</div>' +
    '<bank-account :account="selected"></bank-account>' +
    '</div>',
    data: function () {
        return {
            visible: false
        };
    },
    props: ['selected', 'accounts'],
    methods: {
        showModal: function () {
            this.visible = true;
        },
        hideModal: function () {
            this.visible = false;
        },
        select: function (account) {
            this.selected = account;
            this.hideModal();
        },
        remove: function () {
            this.selected = '';
        }
    },
    events: {},
    ready: function () {

    }
});
Vue.component('notes', {
    name: 'Notes',
    template: '<div class="notes">' +
    '<form-errors></form-errors>' +
    '<form class="form-post-note" @submit.prevent="add">' +
    '<div class="form-group">' +
    '<textarea class="form-control autosize" placeholder="Add a new note..." v-model="content"></textarea>' +
    '</div>' +
    '<div class="form-group align-end">' +
    '<button type="submit" class="btn btn-solid-blue btn-small" :disabled="! content">Post</button>' +
    '</div>' +
    '</form>' +
    '<div class="existing-notes" v-show="notes.length > 0">' +
    '<ul class="list-unstyled list-notes">' +
    '<li v-for="note in notes" class="single-note">' +
    '<a v-if="canDelete(note)" @click="deleteNote(note)" class="btn-close small"><i class="fa fa-close"></i></a>' +
    '<div class="notes-meta">'+
    '<span class="poster">{{ note.poster.name }}</span><span class="posted">{{ note.created_at | diffHuman }}</span>' +
    '</div>' +
    '<p class="content">{{ note.content }}</p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>',
    data: function () {
        return {
            ajaxReady: true,
            notes: [],
            content: ''
        };
    },
    props: ['subject', 'subject_id'],
    computed: {
        url: function () {
            return '/notes/' + this.subject + '/' + this.subject_id;
        }
    },
    methods: {
        fetch: function () {
            $.get(this.url, function (data) {
                this.notes = data;
            }.bind(this));
        },
        add: function () {
            var self = this;
            vueClearValidationErrors(self);
            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            $.ajax({
                url: this.url,
                method: 'POST',
                data: {
                    "content": self.content
                },
                success: function (data) {
                    // success
                    self.content = '';
                    self.notes.unshift(data);
                    self.ajaxReady = true;
                },
                error: function (response) {
                    console.log(response);

                    vueValidation(response, self);
                    self.ajaxReady = true;
                }
            });
        },
        canDelete: function(note) {
          if(this.user.role.position === 'admin') return true;
            return this.user.id === note.user_id;
        },
        deleteNote: function (note) {
            var self = this;
            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            $.ajax({
                url: self.url + '/' + note.id,
                method: 'DELETE',
                success: function (data) {
                    // success
                    self.notes = _.reject(self.notes, note);
                    self.ajaxReady = true;
                },
                error: function (response) {
                    self.ajaxReady = true;
                }
            });
        }
    },
    mixins: [userCompany],
    events: {},
    ready: function () {
        this.fetch();
    }
});
Vue.component('po-mark-received-popover', {
    name: 'purchaseOrderMarkReceivedPopover',
    template: '<div class="popover-container">' +
    '<button type="button" class="btn-popup btn-mark-received btn btn-small btn-solid-green" :disabled="! (purchaseOrder.status === ' + "'approved'" + ')" @click="togglePopover">Received</button>'+
    '<div class="popover-content popover right" v-show="showPopover">' +
    '<div class="arrow"></div>'+
    '<button type="button" class="btn btn-accept btn-outline-green btn-small" @click="markReceived(lineItem, ' + "'accepted'" + ')">Accept</button>'+
    '<button type="button" class="btn btn-return btn-outline-red btn-small"  @click="markReceived(lineItem, ' + "'returned'" + ')">Return</button>'+
    '</div>' +
    '</div>',
    data: function() {
        return {
            showPopover: false
        };
    },
    props: ['purchase-order', 'line-item'],
    computed: {
        
    },
    methods: {
        togglePopover: function() {
            this.showPopover = !this.showPopover;
        },
        markReceived: function(lineItem, status) {
            if(status !== 'accepted' && status !== 'returned') return;
            $.get('/purchase_orders/' + this.purchaseOrder.id + '/line_item/' + lineItem.id + '/received/' + status, function(data) {
                lineItem.status = data.status;
                lineItem.received = data.received;
                lineItem.accepted = data.accepted;
                lineItem.returned = data.returned;
            });
        }
    },
    events: {
        
    },
    ready: function() {
        var self = this;
        $(document).on('click.hidePopovers', function (event) {
            if (!$(event.target).closest('.btn-popup').length && !$(event.target).closest('.popover-container').length && !$(event.target).is('.popover-container')) {
                self.showPopover = false;
            }
        })
    }
});
Vue.component('po-single-rule', {
    template: '<tr>' +
    '<td class="col-description">' +
    '{{ rule.property.label }} - {{ rule.trigger.label }} <span ' +
    'v-if="rule.trigger.has_limit">{{ formatRuleLimit(rule) }}</span>' +
    '</td>' +
    '<td class="col-approve col-controls">' +
    '<i v-if="approved" class="fa fa-check icon-check"></i>' +
    '<button type="button" class="btn btn-approve" v-if="! set && allowedUser"  @click="processRule(' + "'approve'" + ', rule)"><i class="fa fa-check"></i></button>' +
    '<i v-if="! set && allowedUser" class="fa fa-check placeholder"></i></button>' +
    '<i v-if="! approved && ! allowedUser" class="fa fa-warning"></i>' +
    '</td>' +
    '<td class="col-reject col-controls">' +
    '<i v-if="rejected" class="fa fa-close icon-close"></i>' +
    '<button type="button" class="btn btn-reject" v-if="!set && allowedUser"  @click="processRule(' + "'reject'" + ', rule)"><i class="fa fa-close"></i></button>' +
    '<i v-if="!set && allowedUser" class="fa fa-close placeholder"></i></button>' +
    '<i v-if="! rejected && ! allowedUser" class="fa fa-warning"></i>' +
    '</td>' +
    '</tr>',
    name: 'purchaseOrderSingleRule',
    data: function () {
        return {

        };
    },
    props: ['xhr', 'purchase-order', 'rule'],
    computed: {
        set: function () {
            return this.rule.pivot.approved !== null;
        },
        approved: function () {
            return this.rule.pivot.approved;
        },
        rejected: function () {
            return this.rule.pivot.approved === 0;
        },
        allowedUser: function () {
            var self = this;
            return _.findIndex(this.rule.roles, function (role) {
                    return role.id == self.user.role_id;
                }) !== -1;
        }
    },
    methods: {
        formatRuleLimit: function (rule) {
            var currencySymbol = rule.trigger.has_currency ? rule.currency.symbol : null;
            return this.formatNumber(rule.limit, this.currencyDecimalPoints, currencySymbol);
        },
        processRule: function (action, rule) {
            var self = this;

            console.log(self.xhr);
            if(self.xhr) return;

            function updatePOStatus(data) {
                self.purchaseOrder.status = data.status;
                self.purchaseOrder.pending = data.pending;
                self.purchaseOrder.approved = data.approved;
                self.purchaseOrder.rejected = data.rejected;
            }

            if (action === 'approve') {
                self.xhr = $.get('/purchase_orders/' + self.purchaseOrder.id + '/rule/' + rule.id + '/approve', function (data) {
                    rule.pivot.approved = 1;
                    updatePOStatus(data);
                    self.xhr = '';
                })
            } else {
                self.xhr = $.get('/purchase_orders/' + self.purchaseOrder.id + '/rule/' + rule.id + '/reject', function (data) {
                    rule.pivot.approved = 0;
                    updatePOStatus(data);
                    self.xhr = '';
                })
            }
        }
    },
    mixins: [numberFormatter, userCompany],
    events: {},
    ready: function () {

    }
});
Vue.component('product-category-selecter', {
    name: 'ProductCategorySelecter',
    template: '<div class="product-category-selecter">' +
    '<select class="product-category-select" v-el:select>' +
    '<option></option>' +
    '</select>' +
    '</div>',
    props: ['value'],
    ready: function() {
        var self = this,
            $select,
            select;

        $select = $(self.$els.select).selectize({
            valueField: 'id',
            searchField: 'label',
            labelField: 'label',
            create: false,
            placeholder: 'Category',
            onChange: function (value) {
                self.value = value;
            }
        });

        select = $select[0].selectize;

        select.load(function(callback) {
            $.get('/product_categories', function (data) {
                callback(data);
            });
        });
    }
});
Vue.component('product-subcategory-selecter', {
    name: 'productSubcategorySelecter',
    template: '<div class="product-subcategory-selecter">' +
    '<select class="product-subcategory-select" v-el:select>' +
    '<option></option>' +
    '</select>' +
    '</div>',
    props: ['value', 'category'],
    ready: function() {
        var self = this,
            xhr,
            $select,
            select;

        this.$watch('category', function(value) {
            if (!value.length) return;
            select.disable();
            select.clearOptions();
            select.load(function(callback) {
                xhr && xhr.abort();
                xhr = $.ajax({
                    url: '/product_categories/' + value + '/subcategories',
                    success: function(results) {
                        select.enable();
                        callback(results);
                    },
                    error: function() {
                        callback();
                    }
                })
            });
        });

        $select = $(self.$els.select).selectize({
            valueField: 'id',
            searchField: 'label',
            labelField: 'label',
            create: false,
            placeholder: 'Subcategory',
            onChange: function (value) {
                self.value = value;
            }
        });

        select = $select[0].selectize;

        select.disable();


    }
});
Vue.component('profile-photo', {
    name: 'ProfilePhoto',
    template: '<div class="profile-photo" v-el:profile-photo>' +
    '<div class="image-container" v-if="user.photo">' +
    '<img :src="user.photo.thumbnail_path" alt="User Profile Image" class="img-circle">' +
    '</div>' +
    '<div class="initials" v-else>' +
    '<span>{{ initials }}</span>' +
    '</div>' +
    '</div>',
    data: function() {
        return {

        };
    },
    props: ['user'],
    computed: {
        initials: function() {
            if(! this.user.name) return;
            var names = this.user.name.split(' ');
            return names.map(function (name, index) {
                if(index === 0 || index === names.length - 1) return name.charAt(0);
            }).join('');
        }
    },
    methods: {
        resizeInitials: function() {
            var $el = $(this.$els.profilePhoto);
            var width = $el.width();
            $el.height(width);
            $el.children('.initials').css('font-size', width / 2);
        }
    },
    events: {

    },
    ready: function() {
        this.$nextTick(function() {
            this.resizeInitials();
        });
        $(window).on('resize', _.debounce(this.resizeInitials, 150));
    }
});
Vue.component('settings-dropdown-nav', {
    name: 'settingsDropdownNav',
    template: '<div id="settings-mobile-nav">' +
    '<select class="themed-select visible-sm visible-xs" v-selectpicker="selectedLink">' +
    '<option  v-for="link in links" :selected="isSelected(link)" class="capitalize">{{ link }}</option>' +
    '</select>' +
    '</div>',
    data: function() {
        return {
            selectedLink: '',
            links: [
                'company', 'roles', 'purchasing'
            ]
        };
    },
    props: ['page'],
    computed: {},
    methods: {
        isSelected: function(link) {
            return link === this.page;
        }
    },
    events: {},
    ready: function() {
        this.$watch('selectedLink', function () {
            location.href = "/settings/" + this.selectedLink;
        }.bind(this));
    }
});
Vue.component('side-menu', {
    name: 'sideMenu',
    el: function () {
        return '#side-menu'
    },
    data: function () {
        return {
            show: false,
            userPopup: false,
            userInitials: '',
            companyName: '',
            finishedCompiling: false,
            expandedSection: ''
        };
    },
    props: ['user'],
    computed: {},
    methods: {
        toggleUserPopup: function() {
            this.userPopup = !this.userPopup;
        },
        expand: function(section) {
            this.expandedSection = (this.expandedSection ===  section) ? '' : section;
        }
    },
    events: {
        'toggle-side-menu': function() {
            this.show = !this.show;
        },
        'hide-side-menu': function() {
            this.show = false;
        }
    },
    ready: function () {
        var self = this;
        $(window).on('resize', _.debounce(function() {
            if($(window).width() > 1670) self.show = false;
        }, 50));

        // To hide popup
        $(document).click(function (event) {
            if (!$(event.target).closest('.user-popup').length && !$(event.target).is('.user-popup')) {
                self.userPopup = false;
            }
        });

        // When user prop is loaded
        self.$watch('user', function (user) {
            // set initials
            var names = user.name.split(' ');
            self.userInitials = names.map(function (name, index) {
                if(index === 0 || index === names.length - 1) return name.charAt(0);
            }).join('');
            // set name
            self.companyName = user.company.name;
            // set flag
            self.finishedCompiling = true;
        });
    }
});
Vue.component('staff-selecter', {
    name: 'staffSelecter',
    template: '<select class="staff-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name'],
    ready: function() {
        var self = this;
        $('.staff-selecter').selectize({
            valueField: 'id',
            searchField: ['name', 'email'],
            create: false,
            placeholder: 'Name or email',
            render: {
                option: function(item, escape) {
                    // TODO ::: Add email info
                    return '<div class="single-name-option">' + escape(item.name) + '</div>'
                },
                item: function(item, escape) {
                    return '<div class="selected-name">' + escape(item.name) + '</div>'
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/staff/search/' + encodeURI(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function(value) {
                self.name = value;
            }
        });
    }
});
Vue.component('state-selecter', {
    name: 'stateSelecter',
    template: '<select class="state-selecter"><option></option></select>',
    data: function () {
        return {};
    },
    props: ['name', 'listen', 'event', 'default'],
    computed: {},
    methods: {},
    ready: function () {
        var xhr,
            select_state,
            self = this,
            listenEvent = self.listen || 'selected-country';

        $select_state = $(self.$el).selectize({
            valueField: 'name',
            labelField: 'name',
            searchField: ['name'],
            placeholder: 'State',
            create: true,
            onChange: function (value) {
                self.name = value;
                var selectedEventName = self.event || 'selected-state';
                vueEventBus.$emit(selectedEventName);
            }
        });

        select_state = $select_state[0].selectize;

        window.select_state = $select_state[0].selectize;


        vueEventBus.$on(listenEvent, function (value) {
            select_state.disable();
            select_state.clearOptions();
            select_state.load(function (callback) {
                // Jump queue
                if (!_.isEmpty(xhr) && xhr.readyState != 4) xhr.abort();
                // Fire req
                xhr = $.ajax({
                    url: '/countries/' + value + '/states',
                    success: function (results) {
                        select_state.enable();
                        callback(results);
                    },
                    error: function () {
                        callback();
                    }
                })
            });
        });

        self.$watch('default', function (state) {
            select_state.createItem(state);
        });
    }
});
Vue.component('team-member-selecter', {
    name: 'teamMemberSelecter',
    template: '<select class="team-member-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name'],
    ready: function() {
        var self = this;
        $('.team-member-selecter').selectize({
            valueField: 'id',
            searchField: ['name', 'email'],
            create: false,
            placeholder: 'Name or email',
            render: {
                option: function(item, escape) {
                    // TODO ::: Add email info?
                    return '<div class="single-name-option">' + escape(item.name) + '</div>'
                },
                item: function(item, escape) {
                    return '<div class="selected-name">' + escape(item.name) + '</div>'
                }
            },
            load: function(query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/staff/team/search/' + encodeURI(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function(value) {
                self.name = value;
            }
        });
    }
});
Vue.component('user-projects-selecter', {
    name: 'userProjectsSelecter',
    template: '<div class="project-selecter">' +
    '<select-picker :options="projects" ' +
    '               :name.sync="name"'+
    '               :placeholder="' + "'Pick a Project...'" + '">' +
    '           </select-picker>' +
    '</div>',
    data: function() {
        return {
            projects: []
        };
    },
    props: ['name'],
    ready: function() {
        var self = this;
        $.ajax({
            url: '/api/user/projects',
            method: 'GET',
            success: function (data) {
                // success
                self.projects = _.map(data, function (project) {
                    if (project.name) {
                        project.value = project.id;
                        project.label = strCapitalize(project.name);
                        return project;
                    }
                });
            },
            error: function (response) {
                console.log(response);
            }
        });
    }
});
Vue.component('vendor-connection', {
    name: 'vendorConnection',
    template: '<span v-if="vendor.linked_company" class="vendor-connection {{ vendor.linked_company.connection }}">{{ vendor.linked_company.connection }}</span>',
    props: ['vendor']
});
Vue.component('vendor-selecter', {
    name: 'vendorSelecter',
    template: '<select class="vendor-search-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['vendor'],
    methods: {
        clearVendor: function () {
            this.vendor = {
                linked_company: {},
                addresses: [],
                bank_accounts: []
            };
        },
        fetchVendor: function(vendorID) {
            $.get('/api/vendors/' + vendorID, function (data) {
                this.vendor = data;
            }.bind(this));
        }
    },
    ready: function () {
        var self = this;
        $('.vendor-search-selecter').selectize({
            valueField: 'id',
            searchField: 'name',
            maxItems: 1,
            create: false,
            placeholder: 'Search for vendor',
            render: {
                option: function (item, escape) {
                    return '<div class="single-vendor-option">' + escape(item.name) + '</div>'
                },
                item: function (item, escape) {
                    return '<div class="selected-vendor">' + escape(item.name) + '</div>'
                }
            },
            load: function (query, callback) {
                if (!query.length) return callback();
                $.ajax({
                    url: '/api/vendors/search/' + encodeURI(query),
                    type: 'GET',
                    error: function () {
                        callback();
                    },
                    success: function (res) {
                        callback(res);
                    }
                });
            },
            onChange: function (value) {
                vueEventBus.$emit('po-submit-selected-vendor');
                value ? self.fetchVendor(value) : self.clearVendor();
            }
        });
    }
});
Vue.component('modal-close-button', {
    name: 'modalClose',
    template: '<button type="button" @click="hideModal" class="btn button-hide-modal"><i class="fa fa-close"></i></button>',
    methods: {
        hideModal: function() {
            vueEventBus.$emit('modal-close');
        }
    }
});
var spendingsReport = Vue.extend({
    name: 'SpendingsReport',
    template: '',
    data: function() {
        return {
            currency: '',
            currencyId: 840,
            dateMin: '',
            dateMax:'',
            spendingsData: ''
        };
    },
    props: [],
    computed: {

    },
    methods: {
        fetchSpendingsData: function() {
            $.get(this.dataURL).then(function (data) {
                this.spendingsData = data;
            }.bind(this));
        },
        clearDateRange: function() {
            this.dateMin = '';
            this.dateMax = '';
        }
    },
    events: {},
    mixins: [userCompany],
    ready: function () {
        this.fetchSpendingsData();
        // Use direct watcher because the inputs are in separate, shared
        // components so we can't bind events directly on them
        this.$watch('dataURL', this.fetchSpendingsData);
    }
});

Vue.component('registration-account', {
    name: 'registrationAccountDetails',
    template: '<div class="#registration-account">' +
    '<form id="form-registration-account">' +
    '<div class="shift-label-input validated-input"' +
    ':class="{' +
    "'is-filled': validCompanyName !== 'unfilled'," +
    "'is-loading': validCompanyName === 'loading'," +
    "'is-success': validCompanyName," +
    "'is-error': validCompanyName === false" +
    '}"' +
    '>' +
    '<input id="register-popup-company-name" type="text" name="company_name" required @blur="checkCompanyName" v-model="companyName">' +
    '<label for="register_name" placeholder="Company Name" class="label_auth"></label>' +
    '<span class="error-msg" v-show="companyNameError">@{{ companyNameError }}</span>' +
    '</div>' +
    '<div class="shift-label-input validated-input" :class="{' +
    "'is-filled': validName !== 'unfilled'," +
    "'is-success': validName," +
    "'is-error': ! validName" +
    '}">' +
    '<input id="register_name" type="text" name="name" required @blur="checkName" v-model="name" >' +
    '<label alt="register_name" placeholder="Full Name" class="label_auth"></label>' +
    '</div>' +
    '<div class="shift-label-input validated-input" :class="{' +
    "'is-filled': validEmail !== 'unfilled'," +
    "'is-success': validEmail," +
    "'is-loading': validEmail === 'loading'," +
    "'is-error': !validEmail" +
    '}">' +
    '<input id="register-popup-email" type="text" name="email" required @blur="checkEmail" v-model="email" >' +
    '<label for="register_email" placeholder="Email" class="label_auth"></label>' +
    '<span class="error-msg" v-show="emailError">@{{ emailError }}</span>' +
    '</div>' +
    '<div class="shift-label-input validated-input" :class="{' +
    "'is-filled': validPassword !== 'unfilled'," +
    "'is-success': validPassword," +
    "'is-error': ! validPassword" +
    '}">' +
    '<input id="register_password" type="password" name="password" required @blur="checkPassword" v-model="password" >' +
    '<label alt="register_password" placeholder="Password" class="label_auth"></label>' +
    '</div>' +
    '<button type="button" class="btn btn-solid-green  button-register-company" :disabled="validCompanyName !== true || validName !== true || validEmail !== true || validPassword !== true" @click="registerNewCompany" >Enter billing details</button>' +
    '</form>' +
    '</div>',
    data: function () {
        return {};
    },
    props: [],
    computed: {},
    methods: {},
    events: {},
    ready: function () {

    }
});
Vue.component('registration-popup', {
    name: 'registration-popup',
    el: function () {
        return '#registration-popup'
    },
    data: function () {
        return {
            ajaxReady: true,
            showRegisterPopup: false,
            section: 'account',
            companyName: '',
            validCompanyName: 'unfilled',
            companyNameError: '',
            email: '',
            validEmail: 'unfilled',
            emailError: '',
            password: '',
            validPassword: 'unfilled',
            name: '',
            validName: 'unfilled'
        };
    },
    props: [],
    computed: {},
    methods: {
        toggleShowRegistrationPopup: function () {
            this.showRegisterPopup = !this.showRegisterPopup;
        },
        checkCompanyName: function () {
            var self = this;
            self.validCompanyName = 'unfilled';
            if (self.companyName.length > 0) {
                // No symbols in name
                if (!alphaNumeric(self.companyName)) {
                    self.validCompanyName = false;
                    self.companyNameError = 'Company name cannot contain symbols';
                    return;
                }
                self.validCompanyName = 'loading';
                if (!self.ajaxReady) return;
                self.ajaxReady = false;
                $.ajax({
                    url: '/api/company/profile/' + encodeURI(self.companyName),
                    method: '',
                    success: function (data) {
                        // success
                        if (!_.isEmpty(data)) {
                            self.validCompanyName = false;
                            self.companyNameError = 'That Company name is already taken'
                        } else {
                            self.validCompanyName = true;
                            self.companyNameError = '';
                        }
                        self.ajaxReady = true;
                    },
                    error: function (response) {
                        console.log(response);
                        self.ajaxReady = true;
                    }
                });
            }
        },
        checkEmail: function () {
            var self = this;
            self.validEmail = 'unfilled';
            if (self.email.length > 0) {
                if (validateEmail(self.email)) {
                    self.validEmail = 'loading';
                    if (!self.ajaxReady) return;
                    self.ajaxReady = false;
                    $.ajax({
                        url: '/user/email/' + self.email + '/check',
                        method: 'GET',
                        success: function (data) {
                            // success
                            if (data) {
                                self.validEmail = true;
                                self.emailError = '';
                            }
                            self.ajaxReady = true;
                        },
                        error: function (response) {
                            console.log(response);
                            self.ajaxReady = true;
                            self.validEmail = false;
                            self.emailError = 'Account already exists for that email';
                        }
                    });
                } else {
                    self.validEmail = false;
                    self.emailError = 'Invalid email format - you@example.com';
                }
            }
        },
        checkPassword: function () {
            this.validPassword = 'unfilled';
            if (this.password.length > 0) {
                this.validPassword = (this.password.length >= 6);
            }
        },
        checkName: function () {
            this.validName = this.name.length > 0 ? true : 'unfilled';
        },
        goToSection: function(section) {
            this.section = section;
        },
        registerNewCompany: function (creditCardToken) {
            var self = this;
            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            $.ajax({
                url: '/company',
                method: 'POST',
                data: {
                    company_name: self.companyName,
                    name: self.name,
                    email: self.email,
                    password: self.password,
                    credit_card_token: creditCardToken
                },
                success: function (data) {
                    // success
                    location.href = "/";
                    self.ajaxReady = true;
                },
                error: function (response) {
                    flashNotify('Registration error - please contact support');
                    console.log(response);
                    self.ajaxReady = true;
                }
            });
        }
    },
    ready: function () {

        var self = this;

        vueEventBus.$on('clicked-join-button', function() {
            self.toggleShowRegistrationPopup();
        });

        vueEventBus.$on('new-cc-token', function (creditCardToken) {
            self.registerNewCompany(creditCardToken);
        });

        this.$watch('showRegisterPopup', function (val) {
            if (val) $('#register-popup-icon').playLiviconEvo();
        });
    }
});
//# sourceMappingURL=dependencies.js.map
