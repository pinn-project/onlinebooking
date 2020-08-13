"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
window.addEventListener('DOMContentLoaded', function () {
    createApp('.ui--wrapper');
});
function createApp(selector) {
    var VueJs = window === null || window === void 0 ? void 0 : window.Vue;
    var data = function () {
        return {
            mainForm: {
                a: 0, b: 0, c: 0, d: 'Guest Name 1'
            },
            currentStep: 2
        };
    };
    var methods = {
        isStep: function (input) {
            return (input === this.currentStep);
        },
        onSwitch: function (from, to, data) {
            if (data) {
                this.mainForm = data;
            }
            this.currentStep = to;
        }
    };
    var computed = {
        steps: function () {
            var _this_1 = this;
            return [
                { id: 1, label: '01 first' },
                { id: 2, label: '02 second' },
                { id: 3, label: '03 third' },
                { id: 4, label: '04 fourth' }
            ]
                .map(function (value, index) {
                return __assign(__assign({}, value), { active: (value.id === _this_1.currentStep) });
            });
        }
    };
    var components = {
        ChildElementFirst: createChildElementFirst(),
        ChildElementSecond: createChildElementSecond(),
        ChildElementThird: createChildElementThird(),
        ChildElementFourth: createChildElementFourth()
    };
    VueJs.component('input-element', createInputElement());
    new VueJs({
        data: data,
        methods: methods,
        computed: computed,
        components: components
    }).$mount(selector);
}
function createChildElementFirst() {
    var name = 'ChildElementFirst';
    var template = '#ui--template-step-first';
    var data = function (_this) { return ({
        nodeId: 1,
        nextId: 2,
        currentForm: _this.dataset
    }); };
    var props = {
        dataset: { required: true }
    };
    var watch = {
        dataset: function (newValue) {
            this.currentForm = newValue;
        }
    };
    var methods = {
        next: function () {
            this.$emit('switch', this.nodeId, this.nextId, this.currentForm);
        }
    };
    var computed = {};
    return { data: function () { return data(this); }, name: name, props: props, watch: watch, methods: methods, computed: computed, template: template };
}
function createChildElementSecond() {
    var name = 'ChildElementSecond';
    var template = '#ui--template-step-second';
    var data = function (_this) { return ({
        nodeId: 2,
        nextId: 3,
        currentForm: _this.dataset
    }); };
    var props = {
        dataset: { required: true }
    };
    var watch = {
        dataset: function (newValue) {
            this.currentForm = newValue;
        }
    };
    var methods = {
        prev: function () {
            this.$emit('switch', this.nodeId, (this.nodeId - 1));
        },
        next: function () {
            this.$emit('switch', this.nodeId, this.nextId, this.currentForm);
        }
    };
    var computed = {};
    return { data: function () { return data(this); }, name: name, props: props, watch: watch, methods: methods, computed: computed, template: template };
}
function createChildElementThird() {
    var name = 'ChildElementThird';
    var template = '#ui--template-step-third';
    var data = function (_this) { return ({
        nodeId: 3,
        nextId: 4,
        currentForm: _this.dataset
    }); };
    var props = {
        dataset: { required: true }
    };
    var watch = {
        dataset: function (newValue) {
            this.currentForm = newValue;
        }
    };
    var methods = {
        prev: function () {
            this.$emit('switch', this.nodeId, (this.nodeId - 1));
        },
        next: function () {
            this.$emit('switch', this.nodeId, this.nextId, this.currentForm);
        }
    };
    var computed = {};
    return { data: function () { return data(this); }, name: name, props: props, watch: watch, methods: methods, computed: computed, template: template };
}
function createChildElementFourth() {
    var name = 'ChildElementFourth';
    var template = '#ui--template-step-fourth';
    var data = function (_this) { return ({
        nodeId: 4,
        nextId: 0,
        currentForm: _this.dataset
    }); };
    var props = {
        dataset: { required: true }
    };
    var watch = {
        dataset: function (newValue) {
            this.currentForm = newValue;
        }
    };
    var methods = {};
    var computed = {};
    return { data: function () { return data(this); }, name: name, props: props, watch: watch, methods: methods, computed: computed, template: template };
}
function createInputElement() {
    var name = 'InputElement';
    var template = '#ui--template-input';
    var data = function (_this) { return ({
        currentValue: _this.value,
        errors: ''
    }); };
    var props = {
        value: { required: true },
        type: { type: String, "default": 'text' },
        vid: { type: String, required: true },
        label: { type: String, required: true },
        desc: { type: String },
        rules: { type: Object, "default": function () { return Object.create(null); } },
        error: { type: Object, "default": function () { return Object.create(null); } }
    };
    var watch = {
        value: function (newValue) {
            this.currentValue = newValue;
        },
        currentValue: function (newValue) {
            this.$emit('input', newValue);
        }
    };
    var methods = {};
    var computed = {
        isSelectType: function () { return (this.type === 'select'); }
    };
    return {
        data: function () { return data(this); },
        name: name,
        props: props,
        watch: watch,
        methods: methods,
        computed: computed,
        template: template
    };
}
//# sourceMappingURL=script.js.map