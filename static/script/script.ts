/**
 * The DOMContentLoaded event fires when the initial HTML document has been completely loaded
 * and parsed, without waiting for stylesheets, images, and subframes to finish loading.
 */
window.addEventListener('DOMContentLoaded', (): void => {
	createApp('.ui--wrapper')
})


/**
 * Create Vue application.
 * 
 * @param {string} selector Arguments: CSS selector string
 */
function createApp (selector: string): void {
	const VueJs: any = window?.Vue

	// __DATA
	const data: any = () => {
		return {
			mainForm: {
				a: 0,
				b: 0,
				c: 0,
				d: 0,
				e: [
					{ name: 'Guest Name 1', items: [2, 4] },
					{ name: 'Guest Name 2', items: [] }
				]
			},
			modals: {
				a: { on: false, data: {} }
			},
			currentStep: 2
		}
	}

	// __METHODS
  const methods: any = {
		isStep (input: number): boolean {
			return (input === this.currentStep)
		},

		onSwitch (from: number, to: number, data?: any): void {
			if (data) { this.mainForm = data }
			this.currentStep = to
		},

		onApply (input: any): void {},

		onClose (input: string): void {
			this.modals[input].on = false
		}
	}

	// __COMPUTED
  const computed: any = {
		steps (): any[] {
			return [
				{ id: 1, label: '01 first' },
				{ id: 2, label: '02 second' },
				{ id: 3, label: '03 third' },
				{ id: 4, label: '04 fourth' }
			]
			.map((value: any, index: number): any => {
				return {
					...value,
					active: (value.id === this.currentStep)
				}
			})
		}
	}

	// __COMPONENTS
	const components: any = {
		ChildElementFirst	: createChildElementFirst(),
		ChildElementSecond: createChildElementSecond(),
		ChildElementThird	: createChildElementThird(),
		ChildElementFourth: createChildElementFourth(),
		ModalElementSetitem: createModalElementSetitem()
	}

	// __GLOBAL_COMPONENT
	VueJs.component('input-element', createInputElement())

	// __START_APPLICATION
	new VueJs({
		data,
		methods,
		computed,
		components
	}).$mount(selector)
}


/**
 * Create Child Element for first step.
 */
function createChildElementFirst (): any {
	const name: string = 'ChildElementFirst'
	const template: string = '#ui--template-step-first'

	// __DATA
	const data: any = (_this: any): object => ({
		nodeId: 1,
		nextId: 2,
		currentForm: _this.dataset
	})

	// __PROPS
	const props: any = {
		dataset: { required: true }
	}

	// __WATCH
  const watch: any = {
		dataset (newValue: any): void {
			this.currentForm = newValue
		}
	}

	// __METHODS
	const methods: any = {
		next (): void {
			this.$emit('switch', this.nodeId, this.nextId, this.currentForm) // cb(from, to, data)
		}
	}
	
	// __COMPUTED
  const computed: any = {}

	return { data () { return data(this) }, name, props, watch, methods, computed, template }
}


/**
 * Create Child Element for second step.
 */
function createChildElementSecond (): any {
	const name: string = 'ChildElementSecond'
	const template: string = '#ui--template-step-second'

	// __DATA
	const data: any = (_this: any): object => ({
		nodeId: 2,
		nextId: 3,
		currentForm: _this.dataset
	})

	// __PROPS
	const props: any = {
		dataset: { required: true }
	}

	// __WATCH
  const watch: any = {
		dataset (newValue: any): void {
			this.currentForm = newValue
		}
	}

	// __METHODS
	const methods: any = {
		prev (): void {
			this.$emit('switch', this.nodeId, (this.nodeId - 1))
		},

		next (): void {
			this.$emit('switch', this.nodeId, this.nextId, this.currentForm) // cb(from, to, data)
		},

		hasItem (input: any[]): boolean {
			return Boolean(isArray(input) && input.length)
		}
	}
	
	// __COMPUTED
  const computed: any = {}

	return { data () { return data(this) }, name, props, watch, methods, computed, template }
}


/**
 * Create Child Element for third step.
 */
function createChildElementThird (): any {
	const name: string = 'ChildElementThird'
	const template: string = '#ui--template-step-third'

	// __DATA
	const data: any = (_this: any): object => ({
		nodeId: 3,
		nextId: 4,
		currentForm: _this.dataset
	})

	// __PROPS
	const props: any = {
		dataset: { required: true }
	}

	// __WATCH
  const watch: any = {
		dataset (newValue: any): void {
			this.currentForm = newValue
		}
	}

	// __METHODS
	const methods: any = {
		prev (): void {
			this.$emit('switch', this.nodeId, (this.nodeId - 1))
		},

		next (): void {
			this.$emit('switch', this.nodeId, this.nextId, this.currentForm) // cb(from, to, data)
		}
	}
	
	// __COMPUTED
  const computed: any = {}

	return { data () { return data(this) }, name, props, watch, methods, computed, template }
}


/**
 * Create Child Element for fourth step.
 */
function createChildElementFourth (): any {
	const name: string = 'ChildElementFourth'
	const template: string = '#ui--template-step-fourth'

	// __DATA
	const data: any = (_this: any): object => ({
		nodeId: 4,
		nextId: 0,
		currentForm: _this.dataset
	})

	// __PROPS
	const props: any = {
		dataset: { required: true }
	}

	// __WATCH
  const watch: any = {
		dataset (newValue: any): void {
			this.currentForm = newValue
		}
	}

	// __METHODS
	const methods: any = {}
	
	// __COMPUTED
  const computed: any = {}

	return { data () { return data(this) }, name, props, watch, methods, computed, template }
}


/**
 * Create Input Element.
 */
function createInputElement (): any {
	const name: string = 'InputElement'
	const template: string = '#ui--template-input'

	// __DATA
	const data: any = (_this: any): object => ({
		currentValue: _this.value,
		errors: ''
	})

	// __PROPS
	const props: any = {
		value	: { required: true },
		type  : { type: String, default: 'text' },
		vid   : { type: String, required: true },
		label : { type: String, required: true },
		desc  : { type: String },
		rules : { type: Object, default: () => Object.create(null) },
		error : { type: Object, default: () => Object.create(null) }
	}

	// __WATCH
  const watch: any = {
    value (newValue: any): void {
      this.currentValue = newValue
		},
		
		currentValue (newValue: any): void {
			this.$emit('input', newValue)
		}
  }

	// __METHODS
	const methods: any = {}

	// __COMPUTED
	const computed: any = {
		isSelectType (): boolean { return (this.type === 'select') }
	}
	
	return {
		data () { return data(this) },
		name,
		props,
		watch,
		methods,
		computed,
		template
	}
}


/**
 * Create Modal Element for Manage Treatment.
 */
function createModalElementSetitem (): any {
	const name: string = 'ModalElementSetitem'
	const template: string = '#ui--template-modals-setitem'

	// __DATA
	const data: any = (_this: any): object => ({
		id: 4,
		currentValue: cloneJson(_this.dataset)
	})

	// __PROPS
	const props: any = {
		dataset: { type: Object, required: true }
	}

	// __WATCH
  const watch: any = {}

	// __METHODS
	const methods: any = {
		onApply (): void {
			this.$emit('apply', this.currentValue)
		},

		onCancel (): void {
			const w: any = (a: any) => JSON.stringify(a)
			if (w(this.dataset) === w(this.currentValue)) {
				this.$emit('close')
			} else {
				if (confirm('Leave without save?')) this.$emit('close')
			}
		}
	}
	
	// __COMPUTED
	const computed: any = {}
	
	// __CREATED <Lifecycle Hooks>
	const created: any = (_this: any) => {
		scrollhidden(true)
	}

	return { name, props, watch, methods, computed, template,
		data () { return data(this) },
		created () { created(this) }
	}
}


/**
 * Helpers functions.
 */
function hasProp (object: any, prop: string): boolean {
  return object.hasOwnProperty(prop) || Object.prototype.hasOwnProperty.call(object, prop)
}
function isArray (input: any): boolean {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]'
}
function isObject (input: any): boolean {
  return input != null && Object.prototype.toString.call(input) === '[object Object]'
}
function scrollhidden (input?: boolean): void {
  document.body.style.overflow = (input ? 'hidden' : 'unset')
}
function cloneJson (input: any): any {
  return JSON.parse(JSON.stringify(input))
}