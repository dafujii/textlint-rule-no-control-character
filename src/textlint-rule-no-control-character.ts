import { matchCaptureGroupAll } from "match-index";
import { TextlintRuleModule } from "@textlint/types";

export interface Options {
    allows?: string[];
}

const report: TextlintRuleModule<Options> = (context, options = {}) => {
    const { Syntax, RuleError, report, fixer, getSource } = context;
    const allows = options.allows || [];
    return {
        [Syntax.Str](node) {
            const text = getSource(node);

            const isIgnored = allows.some(allow => text.includes(allow));
            if (isIgnored) {
                return;
            }

            matchCaptureGroupAll(text, /([\u0000]|[\u0001]|[\u0002]|[\u0003]|[\u0004]|[\u0005]|[\u0006]|[\u0007]|[\u0008]|[\u000b]|[\u000c]|[\u000d]|[\u000e]|[\u000f]|[\u0010]|[\u0011]|[\u0012]|[\u0013]|[\u0014]|[\u0015]|[\u0016]|[\u0017]|[\u0018]|[\u0019]|[\u001a]|[\u001b]|[\u001c]|[\u001d]|[\u001e]|[\u001f]|[\u007f])/g).forEach(({ index }) => {
                const ruleError = new RuleError("Found control character.", {
                    index: index,
                    fix: fixer.replaceTextRange([index, index + 1], "")
                });
                report(node, ruleError);
            });
        }
    };
};

export default {
    linter: report,
    fixer: report
};
