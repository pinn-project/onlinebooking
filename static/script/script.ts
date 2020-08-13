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
				a: 0, b: 0, c: 0, d: 'Guest Name 1'
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
		ChildElementFourth: createChildElementFourth()
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