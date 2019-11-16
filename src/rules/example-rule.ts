import {Rule} from 'eslint'
import * as ESTree from 'estree'

const module: Rule.RuleModule = {
  meta: {
    docs: {
      description: 'An example rule.',
      category: 'Stylistic Issues',
      recommended: true,
      url:
        'https://github.com/mysticatea/eslint-plugin-template/blob/master/docs/rules/example-rule.md'
    },
    messages: {
      disallowExample: "'example' identifier is forbidden."
    },
    type: 'suggestion'
  },

  create(context) {
    console.dir(context)
    const ruleListener: Rule.RuleListener = {
      "Identifier[name='example']"(node: ESTree.Node) {
        context.report({
          node,
          messageId: 'disallowExample'
        })
      }
    }
    return ruleListener
  }
}

export default module
