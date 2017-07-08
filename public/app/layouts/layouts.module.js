System.register(['@angular/core', '@angular/common', '@angular/router', './layouts.routes', './layouts.component', './menu/menu.component', './jumbo/jumbo.component', './typography/typography.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, layouts_routes_1, layouts_component_1, menu_component_1, jumbo_component_1, typography_component_1;
    var LayoutsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (layouts_routes_1_1) {
                layouts_routes_1 = layouts_routes_1_1;
            },
            function (layouts_component_1_1) {
                layouts_component_1 = layouts_component_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (jumbo_component_1_1) {
                jumbo_component_1 = jumbo_component_1_1;
            },
            function (typography_component_1_1) {
                typography_component_1 = typography_component_1_1;
            }],
        execute: function() {
            LayoutsModule = (function () {
                function LayoutsModule() {
                }
                LayoutsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            router_1.RouterModule.forChild(layouts_routes_1.LayoutsRoutes)
                        ],
                        declarations: [
                            layouts_component_1.LayoutsComponent,
                            menu_component_1.MenuComponent,
                            jumbo_component_1.JumboComponent,
                            typography_component_1.TypoComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LayoutsModule);
                return LayoutsModule;
            }());
            exports_1("LayoutsModule", LayoutsModule);
        }
    }
});
//# sourceMappingURL=layouts.module.js.map