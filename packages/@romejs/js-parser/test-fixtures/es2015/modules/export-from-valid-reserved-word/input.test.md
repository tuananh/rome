# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > export-from-valid-reserved-word`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 25
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportExternalDeclaration {
			defaultSpecifier: undefined
			exportKind: undefined
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 24
					index: 24
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			source: JSStringLiteral {
				value: "foo"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 24
						index: 24
						line: 1
					}
					start: Object {
						column: 19
						index: 19
						line: 1
					}
				}
			}
			namedSpecifiers: Array [
				JSExportExternalSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 11
							index: 11
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
					exported: JSIdentifier {
						name: "if"
						loc: Object {
							filename: "input.js"
							identifierName: "if"
							end: Object {
								column: 11
								index: 11
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
					local: JSIdentifier {
						name: "if"
						loc: Object {
							filename: "input.js"
							identifierName: "if"
							end: Object {
								column: 11
								index: 11
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
				}
			]
		}
	]
}
```
