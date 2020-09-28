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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
window.addEventListener('DOMContentLoaded', function () {
    createApp('.ui--wrapper');
});
function createApp(selector) {
    var VueJs = window === null || window === void 0 ? void 0 : window.Vue;
    var data = function () {
        return {
            mainForm: {
                a: 0,
                b: 0,
                c: 0,
                d: 0,
                e: [
                    {
                        id: 1,
                        name: 'Guest Name 1',
                        items: [
                            '6543797b-0ce5-4835-9bd9-498bf919a095',
                            'da1d73f5-c3eb-4f4f-a0f8-69fb1645bc2f'
                        ]
                    },
                    {
                        id: 2,
                        name: 'Guest Name 2',
                        items: []
                    }
                ],
                f: '',
                g: '',
                h: '',
                i: '',
                j: '',
                k: ''
            },
            modals: {
                a: { on: false, data: {} }
            },
            currentStep: 1
        };
    };
    var methods = {
        axios: function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, response, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            url = '/store.json';
                            return [4, fetch(url).then(function (r) { return r.json(); })];
                        case 1:
                            response = _a.sent();
                            setState('products', response.products);
                            return [3, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            });
        },
        isStep: function (input) {
            return (input === this.currentStep);
        },
        onSwitch: function (from, to, data) {
            if (data) {
                this.mainForm = data;
            }
            this.currentStep = to;
        },
        onModals: function (modal, data) {
            this.modals[modal] = data;
        },
        onApply: function (input) {
            this.mainForm.e = this.mainForm.e.map(function (r) {
                if (r.id === input.id)
                    r = Object.assign(r, input);
                return r;
            });
        },
        onClose: function (modal) {
            this.modals[modal].on = false;
            switch (modal) {
                case 'a':
                    this.modals[modal].data = {};
                    break;
            }
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
        ChildElementFourth: createChildElementFourth(),
        ModalElementSetitem: createModalElementSetitem()
    };
    var created = function (_this) {
        _this.axios();
    };
    VueJs.prototype.$price = price;
    VueJs.component('input-element', createInputElement());
    new VueJs({
        name: 'App',
        data: data,
        methods: methods,
        computed: computed,
        components: components,
        created: function () { created(this); }
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
        addMore: function () {
            var def = { id: 0, name: '', items: [] };
            var n = (this.currentForm.e.length + 1);
            if (n > 10)
                return void 0;
            def.id = n;
            def.name = "Guest Name " + n;
            this.currentForm.e.push(def);
        },
        onModify: function (input) {
            var data = this.currentForm.e.find(function (r) { return r.id === input; });
            this.$emit('modals', 'a', { on: true, data: data });
        },
        onReset: function (input) {
            this.currentForm.e = this.currentForm.e.map(function (r) {
                if (r.id === input)
                    r.items = [];
                return r;
            });
        },
        onRemove: function (input) {
            this.currentForm.e = this.currentForm.e.filter(function (r) {
                return r.id !== input;
            });
        },
        prev: function () {
            this.$emit('switch', this.nodeId, (this.nodeId - 1));
        },
        next: function () {
            this.$emit('switch', this.nodeId, this.nextId, this.currentForm);
        },
        hasArray: function (input) {
            return Boolean(isArray(input) && input.length);
        },
        getItemsById: function (input) {
            var products = getState('products');
            return products.filter(function (r) { return (input.indexOf(r.id) > -1); });
        },
        getSummary: function (input) {
            if (!input.length)
                return 0;
            var items = this.getItemsById(input);
            return items.reduce(function (a, b) { return a + b.price; }, 0);
        }
    };
    var computed = {
        store: function () {
            var _this_1 = this;
            var results = cloneJson(this.currentForm.e);
            return results.map(function (r) { return (__assign(__assign({}, r), { items: _this_1.getItemsById(r.items), summary: _this_1.getSummary(r.items) })); });
        }
    };
    return { data: function () { return data(this); }, name: name, props: props, watch: watch, methods: methods, computed: computed, template: template };
}
function createChildElementThird() {
    var name = 'ChildElementThird';
    var template = '#ui--template-step-third';
    var data = function (_this) { return ({
        nodeId: 3,
        nextId: 4,
        payId: 0,
        currentForm: _this.dataset,
        memberLogin: false
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
        onPay: function (input) {
            this.payId = input;
        },
        loginWithMember: function () {
            this.memberLogin = true;
        },
        prev: function () {
            this.$emit('switch', this.nodeId, (this.nodeId - 1));
        },
        next: function () {
            this.$emit('switch', this.nodeId, this.nextId, this.currentForm);
        }
    };
    var computed = {
        methods: function () {
            var _this_1 = this;
            var data = [
                { id: 1, label: 'credit card', desc: 'Pay with MasterCard, Visa or Amax' },
                { id: 2, label: 'Internet Banking', desc: 'Pay directly from your bank account' },
                { id: 3, label: 'Paypal', desc: 'Faster & safer way to send money' },
                { id: 4, label: 'Member Balance', desc: 'Pay with your membership balance' }
            ];
            return data.map(function (r) { return (__assign(__assign({}, r), { active: (r.id === _this_1.payId) })); });
        },
        hasPayment: function () {
            return Boolean(this.payId);
        },
        isCreditCard: function () {
            return Boolean(this.payId === 1);
        }
    };
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
function createModalElementSetitem() {
    var name = 'ModalElementSetitem';
    var template = '#ui--template-modals-setitem';
    var data = function (_this) { return ({
        id: 4,
        ready: false,
        currentValue: cloneJson(_this.dataset),
        filters: {
            search: '',
            price: 0
        }
    }); };
    var props = {
        dataset: { type: Object, required: true }
    };
    var watch = {};
    var methods = {
        add: function (itemId) {
            var currentItems = this.currentValue.items;
            if (currentItems.indexOf(itemId) > -1) {
                currentItems = currentItems.filter(function (r) { return r !== itemId; });
            }
            else {
                currentItems.push(itemId);
            }
            this.currentValue.items = currentItems;
        },
        onApply: function () {
            this.$emit('apply', this.currentValue);
            this.onClose();
        },
        onCancel: function () {
            var w = function (a) { return JSON.stringify(a); };
            if (w(this.dataset) === w(this.currentValue)) {
                this.onClose();
            }
            else {
                if (confirm('Leave without save?'))
                    this.onClose();
            }
        },
        onClose: function () {
            var _this_1 = this;
            this.ready = false;
            setTimeout(function () {
                _this_1.$emit('close');
                scrollhidden(false);
            }, 256);
        }
    };
    var computed = {
        store: function () {
            var products = getState('products') || [];
            var items = this.currentValue.items;
            var r = this.ready;
            var n = products.map(function (r, idx) { return (__assign(__assign({}, r), { selected: (items.indexOf(r.id) > -1) })); });
            return groupBy(n, 'group');
        }
    };
    var created = function (_this) {
        scrollhidden(true);
    };
    var mounted = function (_this) {
        setTimeout(function () { _this.ready = true; });
    };
    return { name: name, props: props, watch: watch, methods: methods, computed: computed, template: template,
        data: function () { return data(this); },
        created: function () { created(this); },
        mounted: function () { mounted(this); }
    };
}
function hasProp(object, prop) {
    return object.hasOwnProperty(prop) || Object.prototype.hasOwnProperty.call(object, prop);
}
function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}
function isObject(input) {
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}
function groupBy(arr, prop) {
    return arr.reduce(function (g, i) {
        g[i[prop]] = g[i[prop]] || [];
        g[i[prop]].push(i);
        return g;
    }, {});
}
function scrollhidden(input) {
    document.body.style.overflow = (input ? 'hidden' : 'unset');
}
function cloneJson(input) {
    return JSON.parse(JSON.stringify(input));
}
function getState(field) {
    var state = sessionStorage.getItem('APP.ST4T3');
    if (state) {
        var decode = JSON.parse(state);
        return decode[field];
    }
    else {
        return void 0;
    }
}
function setState(field, data) {
    var state = sessionStorage.getItem('APP.ST4T3');
    var e = {};
    if (state) {
        var decode = JSON.parse(state);
        decode[field] = data;
        e = decode;
    }
    else {
        e[field] = data;
    }
    sessionStorage.setItem('APP.ST4T3', JSON.stringify(e));
}
function removeState(field) {
    if (field) {
        setState(field, null);
    }
    else {
        sessionStorage.removeItem('APP.ST4T3');
    }
}
function price(input, fix) {
    if (fix === void 0) { fix = 0; }
    var n = Number(input).toFixed(fix).toString();
    return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
//# sourceMappingURL=script.js.map