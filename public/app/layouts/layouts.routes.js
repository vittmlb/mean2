System.register(['./layouts.component', './jumbo/jumbo.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var layouts_component_1, jumbo_component_1;
    var LayoutsRoutes;
    return {
        setters:[
            function (layouts_component_1_1) {
                layouts_component_1 = layouts_component_1_1;
            },
            function (jumbo_component_1_1) {
                jumbo_component_1 = jumbo_component_1_1;
            }],
        execute: function() {
            exports_1("LayoutsRoutes", LayoutsRoutes = [{
                    path: 'layouts',
                    component: layouts_component_1.LayoutsComponent,
                    children: [
                        { path: 'jumbo', component: jumbo_component_1.JumboComponent }
                    ]
                }]);
        }
    }
});
//# sourceMappingURL=layouts.routes.js.map