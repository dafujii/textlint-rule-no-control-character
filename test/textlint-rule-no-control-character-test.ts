import TextLintTester from "textlint-tester";
import rule from "../src/textlint-rule-no-control-character";
const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "text",
        {
            text: "It is bugs, but it should be ignored",
            options: {
                allows: ["it should be ignored"]
            }
        }
    ],
    invalid: [
        // single match
        {
            text: "It is bugs.",
            output: "It is bugs.",
            errors: [
                {
                    message: "Found backspace.",
                    line: 1,
                    column: 12
                }
            ]
        },
        // multiple match
        {
            text: `It has many bugs.

One more bugs`,
            output: `It has many bugs.

One more bugs`,
            errors: [
                {
                    message: "Found backspace.",
                    line: 1,
                    column: 7
                },
                {
                    message: "Found backspace.",
                    line: 1,
                    column: 13
                },
                {
                    message: "Found backspace.",
                    line: 3,
                    column: 9
                }
            ]
        }
    ]
});
