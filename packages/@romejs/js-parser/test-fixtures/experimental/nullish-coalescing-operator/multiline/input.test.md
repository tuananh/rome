# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > nullish-coalescing-operator > multiline`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 18
      line: 4
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ExpressionStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 7
          index: 17
          line: 3
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      expression: LogicalExpression {
        operator: '??'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 6
            index: 16
            line: 3
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        right: ReferenceIdentifier {
          name: 'c'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 6
              index: 16
              line: 3
            }
            start: Object {
              column: 5
              index: 15
              line: 3
            }
          }
        }
        left: LogicalExpression {
          operator: '??'
          loc: Object {
            filename: 'input.js'
            end: Object {
              column: 6
              index: 9
              line: 2
            }
            start: Object {
              column: 0
              index: 0
              line: 1
            }
          }
          left: ReferenceIdentifier {
            name: 'a'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 1
                index: 1
                line: 1
              }
              start: Object {
                column: 0
                index: 0
                line: 1
              }
            }
          }
          right: ReferenceIdentifier {
            name: 'b'
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 6
                index: 9
                line: 2
              }
              start: Object {
                column: 5
                index: 8
                line: 2
              }
            }
          }
        }
      }
    }
  ]
}
```