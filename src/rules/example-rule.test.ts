import { RuleTester} from 'eslint'
import rule from './example-rule'

new RuleTester().run("example-rule", rule, {
    valid: [
        "var foo = 1;"
    ],
    invalid: [
        {
            code: "var example = 1;",
            errors: ["'example' identifier is forbidden."]
        }
    ]
});
