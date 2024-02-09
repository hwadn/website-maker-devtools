import Handlebars from 'handlebars'
import reactFCTemplate from './react_fc.hbs'

type IFormValuesType = Record<string, any>

export interface IAddedComponent {
	id: string
	name: string
  version: string
	props: { formValues: IFormValuesType },
	children?: IAddedComponent[]
}

interface IReactFCTemplateCompileProps {
  imports: { name: string }[]
  addedComponents: IAddedComponent[]
}

export const reactFCTemplateCompile = Handlebars.compile<IReactFCTemplateCompileProps>(reactFCTemplate)

const getComponentAlias = (name: string) => {
  const items = name.split('-')
  const aliasItems = items.slice(1)
  const upperCasedItems = aliasItems.map((str: string) => {
    const rest = str.length > 1 ? str.slice(1) : ''
    return str[0].toUpperCase() + rest
  })
  return upperCasedItems.join('').replace(/\wW/, '')
}
Handlebars.registerHelper('componentAlias_help', function(this: { name: string }) {
  // name: @chd1994/wm-button
  const { name } = this
  const componentAlias = getComponentAlias(name)
  return componentAlias
})

Handlebars.registerHelper('formValues_help', function(this: IAddedComponent) {
  const formValues = this.props.formValues
  return JSON.stringify(formValues)
})
