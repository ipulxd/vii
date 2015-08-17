'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(['$rootScope', '$state', '$stateParams', 'AuthService',
      function ($rootScope, $state, $stateParams, AuthService) {
        //$rootScope.$state = $state;
        //$rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {

          var toLogin = toState.name === 'access.signin';
          if (toLogin) { // if state to login don't continue
            return;
          }

          if (AuthService.isLoggedIn()) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            return true;
          } else {
            e.preventDefault();
            $state.go('access.signin');
          }

        });
      }
    ]
  )
  .config(['$stateProvider', '$urlRouterProvider', 'JQ_CONFIG',
    function ($stateProvider, $urlRouterProvider, JQ_CONFIG) {

      $urlRouterProvider
        .otherwise('/app/dashboard-v1');

      $stateProvider
        .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'tpl/app.html'
        })
        .state('app.dashboard-v1', {
          url: '/dashboard-v1',
          templateUrl: 'tpl/app_dashboard_v1.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(['js/controllers/chart.js']);
              }]
          }
        })
        .state('app.dashboard-v2', {
          url: '/dashboard-v2',
          templateUrl: 'tpl/app_dashboard_v2.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(['js/controllers/chart.js']);
              }]
          }
        })

        .state('app.order', {
          url: '/order',
          template: '<div ui-view></div>',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(['smart-table', 'toaster', 'ui.select', 'textAngular']).then(
                  function () {
                    return $ocLazyLoad.load(['js/controllers/order.js', JQ_CONFIG.moment]);
                  }
                )
              }]
          }
        })
        .state('app.order.list', {
          url: '/list',
          templateUrl: 'tpl/order/index.html'
        })
        .state('app.order.new', {
          url: '/new',
          templateUrl: 'tpl/order/new.html'
        })
        .state('app.order.edit', {
          url: '/:id/edit',
          templateUrl: 'tpl/order/edit.html'
        })
        .state('app.order.detail', {
          url: '/:id/detail',
          templateUrl: 'tpl/order/detail.html'
        })

        .state('app.ordergroup', {
          url: '/ordergroup',
          template: '<div ui-view></div>',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(['smart-table', 'toaster', 'ui.select', 'textAngular']).then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/ordergroup.js');
                  }
                )
              }]
          }
        })
        .state('app.ordergroup.list', {
          url: '/list',
          templateUrl: 'tpl/ordergroup/index.html'
        })
        .state('app.ordergroup.new', {
          url: '/new',
          templateUrl: 'tpl/ordergroup/new.html'
        })
        .state('app.ordergroup.edit', {
          url: '/:id/edit',
          templateUrl: 'tpl/ordergroup/edit.html'
        })
        .state('app.ordergroup.detail', {
          url: '/:id/detail',
          templateUrl: 'tpl/ordergroup/detail.html'
        })

        .state('app.customer', {
          url: '/customer',
          template: '<div ui-view></div>',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(['smart-table', 'toaster', 'ui.select']).then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/customer.js');
                  }
                )
              }]
          }
        })
        .state('app.customer.list', {
          url: '/list',
          templateUrl: 'tpl/customer/index.html'
        })
        .state('app.customer.new', {
          url: '/new',
          templateUrl: 'tpl/customer/new.html'
        })
        .state('app.customer.edit', {
          url: '/:id/edit',
          templateUrl: 'tpl/customer/edit.html'
        })
        .state('app.product', {
          url: '/product',
          template: '<div ui-view></div>',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(['smart-table', 'toaster', 'ui.select', 'textAngular']).then(
                  function () {
                    return $ocLazyLoad.load(['js/controllers/product.js', JQ_CONFIG.moment]);
                  }
                )
              }]
          }
        })
        .state('app.product.list', {
          url: '/list',
          templateUrl: 'tpl/product/index.html'
        })
        .state('app.product.new', {
          url: '/new',
          templateUrl: 'tpl/product/new.html'
        })
        .state('app.product.edit', {
          url: '/:id/edit',
          templateUrl: 'tpl/product/edit.html'
        })
        .state('app.product.detail', {
          url: '/:id/detail',
          templateUrl: 'tpl/product/detail.html'
        })
        .state('app.setting', {
          abstract: true,
          url: '/setting',
          template: '<div ui-view></div>',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(['smart-table', 'toaster', 'ui.select', 'textAngular']).then(
                  function () {
                    return $ocLazyLoad.load(JQ_CONFIG.moment);
                  }
                )
              }]
          }
        })
        .state('app.setting.user', {
          url: '/user',
          templateUrl: 'tpl/user/index.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('js/controllers/user.js');
            }]
          }
        })
        .state('app.setting.usernew', {
          url: '/user/new',
          templateUrl: 'tpl/user/new.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('js/controllers/user.js');
            }]
          }
        })
        .state('app.setting.useredit', {
          url: '/user/:id/edit',
          templateUrl: 'tpl/user/edit.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('js/controllers/user.js');
            }]
          }
        })
        .state('app.setting.userpasswd', {
          url: '/user/:id/passwd',
          templateUrl: 'tpl/user/passwd.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('js/controllers/user.js');
            }]
          }
        })
        .state('app.setting.group', {
          url: '/group',
          templateUrl: 'tpl/group/index.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('js/controllers/group.js');
            }]
          }
        })
        .state('app.setting.accesslist', {
          url: '/accesslist',
          templateUrl: 'tpl/vacl/index.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load('js/controllers/vacl.js');
            }]
          }
        })
        .state('app.setting.ordermethod', {
          url: '/ordermethod',
          templateUrl: 'tpl/ordermethod/index.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['smart-table', 'toaster']).then(
                function () {
                  return $ocLazyLoad.load('js/controllers/ordermethod.js');
                }
              )
            }]
          }
        })
        .state('app.setting.paymentmethod', {
          url: '/paymentmethod',
          templateUrl: 'tpl/paymentmethod/index.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['smart-table', 'toaster']).then(
                function () {
                  return $ocLazyLoad.load('js/controllers/paymentmethod.js');
                }
              )
            }]
          }
        })
        .state('app.setting.currency', {
          url: '/currency',
          templateUrl: 'tpl/currency/index.html',
          resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
              return $ocLazyLoad.load(['smart-table', 'toaster']).then(
                function () {
                  return $ocLazyLoad.load('js/controllers/currency.js');
                }
              )
            }]
          }
        })


        .state('app.ui', {
          url: '/ui',
          template: '<div ui-view class="fade-in-up"></div>'
        })
        .state('app.ui.buttons', {
          url: '/buttons',
          templateUrl: 'tpl/ui_buttons.html'
        })
        .state('app.ui.icons', {
          url: '/icons',
          templateUrl: 'tpl/ui_icons.html'
        })
        .state('app.ui.grid', {
          url: '/grid',
          templateUrl: 'tpl/ui_grid.html'
        })
        .state('app.ui.widgets', {
          url: '/widgets',
          templateUrl: 'tpl/ui_widgets.html'
        })
        .state('app.ui.bootstrap', {
          url: '/bootstrap',
          templateUrl: 'tpl/ui_bootstrap.html'
        })
        .state('app.ui.sortable', {
          url: '/sortable',
          templateUrl: 'tpl/ui_sortable.html'
        })
        .state('app.ui.scroll', {
          url: '/scroll',
          templateUrl: 'tpl/ui_scroll.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load('js/controllers/scroll.js');
              }]
          }
        })
        .state('app.ui.portlet', {
          url: '/portlet',
          templateUrl: 'tpl/ui_portlet.html'
        })
        .state('app.ui.timeline', {
          url: '/timeline',
          templateUrl: 'tpl/ui_timeline.html'
        })
        .state('app.ui.tree', {
          url: '/tree',
          templateUrl: 'tpl/ui_tree.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('angularBootstrapNavTree').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/tree.js');
                  }
                );
              }
            ]
          }
        })
        .state('app.ui.toaster', {
          url: '/toaster',
          templateUrl: 'tpl/ui_toaster.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('toaster').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/toaster.js');
                  }
                );
              }]
          }
        })
        .state('app.ui.jvectormap', {
          url: '/jvectormap',
          templateUrl: 'tpl/ui_jvectormap.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('js/controllers/vectormap.js');
              }]
          }
        })
        .state('app.ui.googlemap', {
          url: '/googlemap',
          templateUrl: 'tpl/ui_googlemap.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load([
                  'js/app/map/load-google-maps.js',
                  'js/app/map/ui-map.js',
                  'js/app/map/map.js']).then(
                  function () {
                    return loadGoogleMaps();
                  }
                );
              }]
          }
        })
        .state('app.chart', {
          url: '/chart',
          templateUrl: 'tpl/ui_chart.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load('js/controllers/chart.js');
              }]
          }
        })
        // table
        .state('app.table', {
          url: '/table',
          template: '<div ui-view></div>'
        })
        .state('app.table.static', {
          url: '/static',
          templateUrl: 'tpl/table_static.html'
        })
        .state('app.table.datatable', {
          url: '/datatable',
          templateUrl: 'tpl/table_datatable.html'
        })
        .state('app.table.footable', {
          url: '/footable',
          templateUrl: 'tpl/table_footable.html'
        })
        .state('app.table.grid', {
          url: '/grid',
          templateUrl: 'tpl/table_grid.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('ngGrid').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/grid.js');
                  }
                );
              }]
          }
        })
        .state('app.table.uigrid', {
          url: '/uigrid',
          templateUrl: 'tpl/table_uigrid.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('ui.grid').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/uigrid.js');
                  }
                );
              }]
          }
        })
        .state('app.table.editable', {
          url: '/editable',
          templateUrl: 'tpl/table_editable.html',
          controller: 'XeditableCtrl',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('xeditable').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/xeditable.js');
                  }
                );
              }]
          }
        })
        .state('app.table.smart', {
          url: '/smart',
          templateUrl: 'tpl/table_smart.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('smart-table').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/table.js');
                  }
                );
              }]
          }
        })
        // form
        .state('app.form', {
          url: '/form',
          template: '<div ui-view class="fade-in"></div>',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load('js/controllers/form.js');
              }]
          }
        })
        .state('app.form.elements', {
          url: '/elements',
          templateUrl: 'tpl/form_elements.html'
        })
        .state('app.form.validation', {
          url: '/validation',
          templateUrl: 'tpl/form_validation.html'
        })
        .state('app.form.wizard', {
          url: '/wizard',
          templateUrl: 'tpl/form_wizard.html'
        })
        .state('app.form.fileupload', {
          url: '/fileupload',
          templateUrl: 'tpl/form_fileupload.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('angularFileUpload').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/file-upload.js');
                  }
                );
              }]
          }
        })
        .state('app.form.imagecrop', {
          url: '/imagecrop',
          templateUrl: 'tpl/form_imagecrop.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('ngImgCrop').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/imgcrop.js');
                  }
                );
              }]
          }
        })
        .state('app.form.select', {
          url: '/select',
          templateUrl: 'tpl/form_select.html',
          controller: 'SelectCtrl',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('ui.select').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/select.js');
                  }
                );
              }]
          }
        })
        .state('app.form.slider', {
          url: '/slider',
          templateUrl: 'tpl/form_slider.html',
          controller: 'SliderCtrl',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('vr.directives.slider').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/slider.js');
                  }
                );
              }]
          }
        })
        .state('app.form.editor', {
          url: '/editor',
          templateUrl: 'tpl/form_editor.html',
          controller: 'EditorCtrl',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('textAngular').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/editor.js');
                  }
                );
              }]
          }
        })
        .state('app.form.xeditable', {
          url: '/xeditable',
          templateUrl: 'tpl/form_xeditable.html',
          controller: 'XeditableCtrl',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load('xeditable').then(
                  function () {
                    return $ocLazyLoad.load('js/controllers/xeditable.js');
                  }
                );
              }]
          }
        })
        // pages
        .state('app.page', {
          url: '/page',
          template: '<div ui-view class="fade-in-down"></div>'
        })
        .state('app.page.profile', {
          url: '/profile',
          templateUrl: 'tpl/page_profile.html'
        })
        .state('app.page.post', {
          url: '/post',
          templateUrl: 'tpl/page_post.html'
        })
        .state('app.page.search', {
          url: '/search',
          templateUrl: 'tpl/page_search.html'
        })
        .state('app.page.invoice', {
          url: '/invoice',
          templateUrl: 'tpl/page_invoice.html'
        })
        .state('app.page.price', {
          url: '/price',
          templateUrl: 'tpl/page_price.html'
        })
        .state('app.docs', {
          url: '/docs',
          templateUrl: 'tpl/docs.html'
        })
        // others
        .state('lockme', {
          url: '/lockme',
          templateUrl: 'tpl/page_lockme.html'
        })
        .state('access', {
          url: '/access',
          template: '<div ui-view class="fade-in-right-big smooth"></div>'
        })
        .state('access.signin', {
          url: '/signin',
          templateUrl: 'tpl/page_signin.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/controllers/signin.js']);
              }]
          }
        })
        .state('access.signup', {
          url: '/signup',
          templateUrl: 'tpl/page_signup.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/controllers/signup.js']);
              }]
          }
        })
        .state('access.forgotpwd', {
          url: '/forgotpwd',
          templateUrl: 'tpl/page_forgotpwd.html'
        })
        .state('access.404', {
          url: '/404',
          templateUrl: 'tpl/page_404.html'
        })

        // fullCalendar
        .state('app.calendar', {
          url: '/calendar',
          templateUrl: 'tpl/app_calendar.html',
          // use resolve to load other dependences
          resolve: {
            deps: ['$ocLazyLoad', 'uiLoad',
              function ($ocLazyLoad, uiLoad) {
                return uiLoad.load(
                  JQ_CONFIG.fullcalendar.concat('js/app/calendar/calendar.js')
                ).then(
                  function () {
                    return $ocLazyLoad.load('ui.calendar');
                  }
                )
              }]
          }
        })

        // mail
        .state('app.mail', {
          abstract: true,
          url: '/mail',
          templateUrl: 'tpl/mail.html',
          // use resolve to load other dependences
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/mail/mail.js',
                  'js/app/mail/mail-service.js',
                  JQ_CONFIG.moment]);
              }]
          }
        })
        .state('app.mail.list', {
          url: '/inbox/{fold}',
          templateUrl: 'tpl/mail.list.html'
        })
        .state('app.mail.detail', {
          url: '/{mailId:[0-9]{1,4}}',
          templateUrl: 'tpl/mail.detail.html'
        })
        .state('app.mail.compose', {
          url: '/compose',
          templateUrl: 'tpl/mail.new.html'
        })

        .state('layout', {
          abstract: true,
          url: '/layout',
          templateUrl: 'tpl/layout.html'
        })
        .state('layout.fullwidth', {
          url: '/fullwidth',
          views: {
            '': {
              templateUrl: 'tpl/layout_fullwidth.html'
            },
            'footer': {
              templateUrl: 'tpl/layout_footer_fullwidth.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/controllers/vectormap.js']);
              }]
          }
        })
        .state('layout.mobile', {
          url: '/mobile',
          views: {
            '': {
              templateUrl: 'tpl/layout_mobile.html'
            },
            'footer': {
              templateUrl: 'tpl/layout_footer_mobile.html'
            }
          }
        })
        .state('layout.app', {
          url: '/app',
          views: {
            '': {
              templateUrl: 'tpl/layout_app.html'
            },
            'footer': {
              templateUrl: 'tpl/layout_footer_fullwidth.html'
            }
          },
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/controllers/tab.js']);
              }]
          }
        })
        .state('apps', {
          abstract: true,
          url: '/apps',
          templateUrl: 'tpl/layout.html'
        })
        .state('apps.note', {
          url: '/note',
          templateUrl: 'tpl/apps_note.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/note/note.js',
                  JQ_CONFIG.moment]);
              }]
          }
        })
        .state('apps.contact', {
          url: '/contact',
          templateUrl: 'tpl/apps_contact.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/contact/contact.js']);
              }]
          }
        })
        .state('app.weather', {
          url: '/weather',
          templateUrl: 'tpl/apps_weather.html',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load(
                  {
                    name: 'angular-skycons',
                    files: ['js/app/weather/skycons.js',
                      'js/app/weather/angular-skycons.js',
                      'js/app/weather/ctrl.js',
                      JQ_CONFIG.moment]
                  }
                );
              }]
          }
        })
        .state('app.todo', {
          url: '/todo',
          templateUrl: 'tpl/apps_todo.html',
          resolve: {
            deps: ['uiLoad',
              function (uiLoad) {
                return uiLoad.load(['js/app/todo/todo.js',
                  JQ_CONFIG.moment]);
              }]
          }
        })
        .state('app.todo.list', {
          url: '/{fold}'
        })
        .state('music', {
          url: '/music',
          templateUrl: 'tpl/music.html',
          controller: 'MusicCtrl',
          resolve: {
            deps: ['$ocLazyLoad',
              function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                  'com.2fdevs.videogular',
                  'com.2fdevs.videogular.plugins.controls',
                  'com.2fdevs.videogular.plugins.overlayplay',
                  'com.2fdevs.videogular.plugins.poster',
                  'com.2fdevs.videogular.plugins.buffering',
                  'js/app/music/ctrl.js',
                  'js/app/music/theme.css'
                ]);
              }]
          }
        })
        .state('music.home', {
          url: '/home',
          templateUrl: 'tpl/music.home.html'
        })
        .state('music.genres', {
          url: '/genres',
          templateUrl: 'tpl/music.genres.html'
        })
        .state('music.detail', {
          url: '/detail',
          templateUrl: 'tpl/music.detail.html'
        })
        .state('music.mtv', {
          url: '/mtv',
          templateUrl: 'tpl/music.mtv.html'
        })
        .state('music.mtvdetail', {
          url: '/mtvdetail',
          templateUrl: 'tpl/music.mtv.detail.html'
        })
        .state('music.playlist', {
          url: '/playlist/{fold}',
          templateUrl: 'tpl/music.playlist.html'
        })


    }
  ]
);
