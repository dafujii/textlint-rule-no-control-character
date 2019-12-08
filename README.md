# textlint-rule-no-control-character

[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/)

[制御文字](https://ja.wikipedia.org/wiki/%E5%88%B6%E5%BE%A1%E6%96%87%E5%AD%97) を検知・除去するためのtextlintルールです。

## Install

`npm install textlint-rule-no-control-character`

## Usage

`.textlintrc`

```json
{
    "rules": {
        "textlint-rule-no-control-character": true
    }
}
```

### CLI

`textlint --rule textlint-rule-no-control-character README.md`

### Fixable

`textlint --rule textlint-rule-no-control-character README.md --fix`

## License

MIT

### Thanks

- [textlint-rule-no-nfd](https://github.com/textlint-ja/textlint-rule-no-nfd)
- [vscode-bs-ctrlchar-remover](https://github.com/satokaz/vscode-bs-ctrlchar-remover)
