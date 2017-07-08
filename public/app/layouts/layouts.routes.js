System.register(['./layouts.component', './jumbo/jumbo.component', './typography/typography.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var layouts_component_1, jumbo_component_1, typography_component_1;
    var LayoutsRoutes;
    return {
        setters:[
            function (layouts_component_1_1) {
                layouts_component_1 = layouts_component_1_1;
            },
            function (jumbo_component_1_1) {
                jumbo_component_1 = jumbo_component_1_1;
            },
            function (typography_component_1_1) {
                typography_component_1 = typography_component_1_1;
            }],
        execute: function() {
            exports_1("LayoutsRoutes", LayoutsRoutes = [{
                    path: 'layouts',
                    component: layouts_component_1.LayoutsComponent,
                    children: [
                        { path: 'jumbo', component: jumbo_component_1.JumboComponent },
                        { path: 'typo', component: typography_component_1.TypoComponent }
                    ]
                }]);
        }
    }
});
//# sourceMappingURL=layouts.routes.js.map