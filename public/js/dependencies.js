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
        format: "dd/mm/yyyy",
        startDate: 'today',
        language: 'en'      // TODO ::: Change according to client Lang
    });

    $('.filter-datepicker').datepicker({
        format: "dd/mm/yyyy",
        language: 'en'      // TODO ::: Change according to client Lang
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
$(document).ready(function () {
    $.noty.themes.customTheme = {
        name    : 'customTheme',
        helpers : {
            borderFix: function() {
                if(this.options.dismissQueue) {
                    var selector = this.options.layout.container.selector + ' ' + this.options.layout.parent.selector;
                    switch(this.options.layout.name) {
                        case 'top':
                        case 'topCenter':
                        case 'topLeft':
                        case 'topRight':
                        case 'bottomCenter':
                            $(selector).css({
                                borderRadius: '0',
                                width: '100%'
                            });
                            $(selector).first().css({
                                'border-top-left-radius': '0',
                                'border-top-right-radius': '0',
                                width: '100%'
                            });
                            $(selector).last().css({'border-bottom-left-radius': '0', 'border-bottom-right-radius': '0'});
                            break;
                        case 'bottomLeft':
                        case 'bottomRight':
                        case 'center':
                        case 'centerLeft':
                        case 'centerRight':
                        case 'inline':
                        case 'bottom':
                        default:
                            break;
                    }
                }
            }
        },
        modal   : {
            css: {
                position       : 'fixed',
                width          : '100%',
                height         : '100%',
                backgroundColor: '#000',
                zIndex         : 10000,
                opacity        : 0.6,
                display        : 'none',
                left           : 0,
                top            : 0
            }
        },
        style   : function() {

            this.$bar.css({
                overflow  : 'hidden'
            });

            this.$message.css({
                fontSize  : '16px',
                lineHeight: '16px',
                textAlign : 'center',
                padding   : '8px 10px 9px',
                width     : 'auto',
                position  : 'relative',
                height: '60px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            });

            this.$closeButton.css({
                position  : 'absolute',
                top       : 4, right: 4,
                width     : 10, height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display   : 'none',
                cursor    : 'pointer'
            });

            this.$buttons.css({
                padding        : 5,
                textAlign      : 'right',
                borderTop      : '1px solid #ccc',
                backgroundColor: '#fff'
            });

            this.$buttons.find('button').css({
                marginLeft: 5
            });

            this.$buttons.find('button:first').css({
                marginLeft: 0
            });

            this.$bar.on({
                mouseenter: function() {
                    $(this).find('.noty_close').stop().fadeTo('normal', 1);
                },
                mouseleave: function() {
                    $(this).find('.noty_close').stop().fadeTo('normal', 0);
                }
            });

            switch(this.options.layout.name) {
                case 'top':
                case 'topCenter':
                case 'center':
                case 'bottomCenter':
                    this.$bar.css({
                        borderRadius: '0',
                        borderTop      : '2px solid #eee',
                        boxShadow   : "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case 'inline':
                case 'topLeft':
                case 'topRight':
                case 'bottomLeft':
                case 'bottomRight':
                case 'centerLeft':
                case 'centerRight':
                case 'bottom':
                default:
                    this.$bar.css({
                        border   : '2px solid #eee',
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
            }

            switch(this.options.type) {
                case 'alert':
                case 'notification':
                    this.$bar.css({backgroundColor: '#A1A4AA', borderColor: '#989898', color: '#FFF'});
                    break;
                case 'warning':
                    this.$bar.css({backgroundColor: '#F1C40F', borderColor: '#F39C12', color: '#FFF'});
                    this.$buttons.css({borderTop: '1px solid #FFC237'});
                    break;
                case 'error':
                    this.$bar.css({
                        backgroundColor: '#E74C3C', borderColor: '#C0392B', color: '#FFFFFF'
                    });
                    this.$buttons.css({borderTop: '1px solid darkred'});
                    break;
                case 'information':
                    this.$bar.css({backgroundColor: '#3498DB', borderColor: '#2980B9', color: '#FFFFFF'});
                    this.$buttons.css({borderTop: '1px solid #0B90C4'});
                    break;
                case 'success':
                    this.$bar.css({backgroundColor: '#2ECC71', borderColor: '#27AE60', color: '#FFF'});
                    this.$buttons.css({borderTop: '1px solid #50C24E'});
                    break;
                default:
                    this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'});
                    break;
            }
        },
        callback: {
            onShow : function() {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
            },
            onClose: function() {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this);
            }
        }
    };
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
Vue.transition('fade', {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
});

Vue.transition('slide', {
    enterClass: 'slideInLeft',
    leaveClass: 'slideOutLeft'
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

        $(window).on('resize', _.debounce(optimizeTabWidths, 50, {
            leading: true
        }));

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
Vue.filter('date', function (value) {
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").format('DD/MM/YYYY');
    }
    return value;
});
Vue.filter('easyDate', function (value) {
    if (value !== '0000-00-00 00:00:00') {
        return moment(value, "YYYY-MM-DD HH:mm:ss").format('DD MMM YYYY');
    }
    return value;
});

Vue.filter('easyDateModel', {
    // model -> view
    // formats the value when updating the input element.
    read: function (value) {
        if (value) {
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
        return parseInt(val.replace(/[^0-9.]/g, ""))
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
Vue.component('add-address-modal', {
    name: 'addAddressModal',
    template: '<button type="button"' +
    '                  class="btn btn-add-address btn-outline-green"' +
    '                  @click="showModal"' +
    '                  >' +
    '                  <i class="fa fa-plus"></i> Address' +
    '          </button>' +
    '          <div class="modal-address-add modal-form" v-show="visible" @click="hideModal">' +
    '               <form class="form-item-add main-form" v-show="loaded" @click.stop="" @submit.prevent="addAddress">' +
    '                   <button type="button" @click="hideModal" class="btn button-hide-modal"><i class="fa fa-close"></i></button>' +
    '                   <form-errors></form-errors>' +
    '                   <h3>Add Address</h3>' +
    '                   <div class="form-group">' +
    '                       <label class="required">Address</label>' +
    '                       <input class="form-control" type="text" v-model="address1" required>' +
    '                   </div>' +
    '                   <div class="form-group">' +
    '                       <label>Address 2</label>' +
    '                       <input class="form-control" type="text" v-model="address2">' +
    '                   </div>' +
    '                   <div class="row">' +
    '                       <div class="col-sm-6">' +
    '                           <div class="form-group">' +
    '                               <label class="required">City</label>' +
    '                               <input class="form-control" type="text" v-model="city" required>' +
    '                           </div>' +
    '                       </div>' +
    '                       <div class="col-sm-6">' +
    '                           <div class="form-group">' +
    '                               <label class="required">Zip</label>' +
    '                               <input class="form-control" type="text" v-model="zip" required>' +
    '                           </div>' +
    '                       </div>' +
    '                   </div>' +
    '                   <div class="row">' +
    '                       <div class="col-sm-6">' +
    '                           <div class="form-group">' +
    '                               <label class="required">Country</label>' +
    '                               <select class="address-country-selecter"><option></option></select>' +
    '                           </div>' +
    '                       </div>' +
    '                       <div class="col-sm-6">' +
    '                           <div class="form-group">' +
    '                               <label class="required">State</label>' +
    '                               <select class="address-state-selecter"><option></option></select>' +
    '                           </div>' +
    '                       </div>' +
    '                   </div>' +
    '                   <div class="form-group">' +
    '                       <label class="required">Phone Number</label>' +
    '                       <input class="form-control" type="text" v-model="phone" required>' +
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
            address1: '',
            address2: '',
            city: '',
            state: '',
            countryID: '',
            zip: '',
            phone: ''
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
                    "address_1": self.address1,
                    "address_2": self.address2,
                    "city": self.city,
                    "state": self.state,
                    "country_id": self.countryID,
                    "zip": self.zip,
                    "phone": self.phone
                },
                success: function (data) {
                    // success
                    self.visible = false;
                    flashNotify('success', 'Added a new address');
                    self.$dispatch('address-added', data);
                    self.ajaxReady = true;

                    // reset fields
                    self.address1 = '';
                    self.address2 = '';
                    self.city = '';
                    self.state = '';
                    self.countryID = '';
                    self.zip = '';
                    self.phone = '';
                    
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
        var $select_country, select_country;
        var $select_state, select_state;

        // Init Country Selecter
        $select_country = $('.address-country-selecter').selectize({
            valueField: 'id',
            searchField: 'name',
            create: false,
            placeholder: 'Type to select a Country',
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
                if (!value.length) return;

                self.countryID = value;

                select_state.disable();
                select_state.clearOptions();
                select_state.load(function (callback) {
                    if (!_.isEmpty(self.ajaxObject) && self.ajaxObject.readyState != 4) self.ajaxObject.abort();
                    self.ajaxObject = $.ajax({
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
            }
        });

        $select_state = $('.address-state-selecter').selectize({
            valueField: 'name',
            labelField: 'name',
            searchField: ['name'],
            placeholder: 'Select or add a state',
            create: true,
            onChange: function (value) {
                self.state = value;
            }
        });

        select_country = $select_country[0].selectize;
        select_state = $select_state[0].selectize;
        select_state.disable();

        self.loaded = true;
    }
});
Vue.component('add-item-modal', {
    name: 'addItemModal',
    template: '<button type="button"' +
    '               class="btn button-add-item"' +
    '               :class="{' +
    "                   'btn-outline-blue': this.buttonType === 'blue'," +
    "                   'btn-solid-green': ! this.buttonType"+
    '}"' +
    '               @click="showModal"' +
    '               >' +
    '               Add New Item' +
    '</button>'+
    '<div class="modal-item-add modal-form" v-show="visible" @click="hideModal">' +
    '<form class="form-item-add main-form" v-show="loaded" @click.stop="">' +
    '<button type="button" @click="hideModal" class="btn button-hide-modal"><i class="fa fa-close"></i></button>' +
    '<form-errors></form-errors>' +
    '<h3>Add New Item</h3>' +
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
                    url: '/api/items/brands/search/' + encodeURIComponent(query),
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
                newErrors.push(error);
            });
            self.errors = newErrors;
        },
        'clear-errors': function() {
            this.errors = [];
        }
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
                    url: '/api/items/brands/search/' + encodeURI(query),
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
                    url: '/api/items/names/search/' + encodeURI(query),
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
    template: '<div class="modal-roles modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
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
Vue.component('paginator', {
    name: 'paginatoe',
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
    props: ['response', 'reqFunction'],
    computed: {
        currentPage: function() {
            return this.response.current_page;
        },
        lastPage: function() {
            return this.response.last_page
        },
        paginatedPages: function () {
            switch (this.currentPage) {
                case 1:
                case 2:
                    if(this.lastPage > 0) {
                        var endPage = (this.lastPage < 5) ? this.lastPage : 5;
                        return this.makePagesArray(1, endPage);
                    } else {
                        return this.makePagesArray(1, 5);
                    }
                    break;
                case this.lastPage:
                case this.lastPage - 1:
                    var startPage = (this.lastPage > 5) ? this.lastPage - 4 : 1;
                    var endPage = this.lastPage;
                    return this.makePagesArray(startPage, endPage);
                    break;
                default:
                    var startPage = this.currentPage - 2;
                    var endPage = this.currentPage + 2;
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
            this.$dispatch('go-to-page', page);
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
                    label: '8 Requests / Page'
                }, {
                    value: 16,
                    label: '16 Requests / Page'
                },
                {
                    value: 32,
                    label: '32 Requests / Page'
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
Vue.component('registration-popup', {
    name: 'registration-popup',
    el: function () {
        return '#registration-popup'
    },
    data: function () {
        return {
            showRegisterPopup: false,
            companyName: '',
            validCompanyName: 'unfilled',
            companyNameError: '',
            email: '',
            validEmail: 'unfilled',
            emailError: '',
            password: '',
            validPassword: 'unfilled',
            name: '',
            validName: 'unfilled',
            ajaxReady: true
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
                        url: '/api/user/email/' + self.email + '/check',
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
        registerNewCompany: function () {
            var self = this;
            if (!self.ajaxReady) return;
            self.ajaxReady = false;
            $.ajax({
                url: '/api/company',
                method: 'POST',
                data: {
                    company_name: self.companyName,
                    name: self.name,
                    email: self.email,
                    password: self.password
                },
                success: function (data) {
                    // success
                    window.location.href = "/dashboard";
                    self.ajaxReady = true;
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
    }
});
Vue.component('select-picker', {
    template: '<select v-model="name" class="themed-select" @change="callChangeFunction">' +
    ' <option v-if="placeholder" value="" selected disabled>{{ placeholder }}</option>' +
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
    '               <option value="{{ option }}" v-for="option in options">{{ option }}</option>' + '' +
    '          </select>',
    data: function () {
        return {
            receivedOptions: false,
            selectize: {}
        };
    },
    props: [
        'options',
        'name',
        'create',
        'unique',
        'placeholder'
    ],
    ready: function () {


        var self = this;

        var unique = this.unique || true,
            create = this.create || true,
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
            finishedCompiling: false
        };
    },
    props: ['user'],
    computed: {},
    methods: {
        toggleUserPopup: function() {
            this.userPopup = !this.userPopup;
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
Vue.component('team-member-selecter', {
    name: 'teamMemberSelecter',
    template: '<select class="team-member-search-selecter">' +
    '<option></option>' +
    '</select>',
    props: ['name'],
    ready: function() {
        var self = this;
        $('.team-member-search-selecter').selectize({
            valueField: 'id',
            searchField: 'name',
            create: false,
            placeholder: 'Search for Team Member',
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
                    url: '/api/team/members/search/' + encodeURI(query),
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
Vue.component('user-projects-selecter', {
    name: 'userProjectsSelecter',
    template: '<select-picker :options="projects" ' +
    '               :name.sync="name"'+
    '               :placeholder="' + "'Pick a Project...'" + '">' +
    '           </select-picker>',
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
Vue.component('date-range-field', {
    name: 'dateRangeField',
    template: '<div class="date-range-field">'+
    '<input type="text" class="filter-datepicker" v-model="min | properDateModel">'+
    '<span class="dash">-</span>'+
    '<input type="text" class="filter-datepicker" v-model="max | properDateModel">' +
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
//# sourceMappingURL=dependencies.js.map
