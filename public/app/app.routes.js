System.register(['./layouts/menu/menu.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var menu_component_1;
    var AppRoutes;
    return {
        setters:[
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            }],
        execute: function() {
            exports_1("AppRoutes", AppRoutes = [
                { path: '**', redirectTo: '/' },
                { path: '', component: menu_component_1.MenuComponent, outlet: 'menu' }
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map