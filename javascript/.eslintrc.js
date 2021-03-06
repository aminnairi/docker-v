"use strict";

module.exports = {
  "env": {
    "es6": true,
    "es2017": true,
    "es2020": true,
    "es2021": true
  },
  "root": true,
  "overrides": [
    {
      "files": "*.node.ts",
      "env": {
        "node": true,
        "shared-node-browser": true,
        "commonjs": true
      },
      "parser": "/home/archlinux/.npm/lib/node_modules/@typescript-eslint/parser",
      "parserOptions": {
        "sourceType": "module"
      }
    },
    {
      "files": "*.browser.ts",
      "env": {
        "browser": true,
        "shared-node-browser": true
      },
      "parser": "/home/archlinux/.npm/lib/node_modules/@typescript-eslint/parser",
      "parserOptions": {
        "sourceType": "module"
      }
    },
    {
      "files": "*.browser.tsx",
      "parser": "/home/archlinux/.npm/lib/node_modules/@typescript-eslint/parser",
      "env": {
        "browser": true,
        "shared-node-browser": true
      },
      "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      }
    },
    {
      "files": "*.node.tsx",
      "parser": "/home/archlinux/.npm/lib/node_modules/@typescript-eslint/parser",
      "env": {
        "node": true,
        "shared-node-browser": true,
        "commonjs": true
      },
      "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      }
    },
    {
      "files": "*.browser.module.js",
      "env": {
        "browser": true,
        "shared-node-browser": true
      },
      "parserOptions": {
        "sourceType": "module"
      }
    },
    {
      "files": "*.browser.js",
      "env": {
        "browser": true,
        "shared-node-browser": true
      },
      "parserOptions": {
        "sourceType": "script"
      }
    },
    {
      "files": "*.browser.jsx",
      "env": {
        "browser": true,
        "shared-node-browser": true
      },
      "parserOptions": {
        "sourceType": "script",
        "ecmaFeatures": {
          "jsx": true
        }
      }
    },
    {
      "files": "*.worker.js",
      "parserOptions": {
        "sourceType": "script"
      },
      "env": {
        "browser": true,
        "shared-node-browser": true,
        "worker": true
      }
    },
    {
      "files": "*.worker.module.js",
      "parserOptions": {
        "sourceType": "module"
      },
      "env": {
        "browser": true,
        "shared-node-browser": true,
        "worker": true
      }
    },
    {
      "files": [
        "*.node.js",
        ".eslintrc.js"
      ],
      "parserOptions": {
        "sourceType": "script"
      },
      "env": {
        "node": true,
        "shared-node-browser": true,
        "commonjs": true
      }
    },
    {
      "files": "*.node.module.js",
      "env": {
        "node": true,
        "shared-node-browser": true
      },
      "parserOptions": {
        "sourceType": "module"
      }
    }
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "semi": ["error"],
    "for-direction": ["error"],
    "getter-return": [
      "error",
      {
        "allowImplicit": false
      }
    ],
    "no-async-promise-executor": ["error"],
    "no-await-in-loop": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "no-console": ["off"],
    "no-constant-condition": [
      "error",
      {
        "checkLoops": true
      }
    ],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": false
      }
    ],
    "no-empty-character-class": ["error"],
    "no-ex-assign": ["error"],
    "no-extra-boolean-cast": [
      "error",
      {
        "enforceForLogicalOperands": true
      }
    ],
    "no-extra-parens": ["off"],
    "no-extra-semi": ["error"],
    "no-func-assign": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": ["error"],
    "no-irregular-whitespace": [
      "error",
      {
        "skipStrings": false,
        "skipComments": false,
        "skipRegExps": false,
        "skipTemplates": false
      }
    ],
    "no-loss-of-precision": ["error"],
    "no-misleading-character-class": ["error"],
    "no-obj-calls": ["error"],
    "no-promise-executor-return": ["error"],
    "no-prototype-builtins": ["error"],
    "no-regex-spaces": ["error"],
    "no-setter-return": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unreachable": ["error"],
    "no-unreachable-loop": [
      "error",
      {
        "ignore": []
      }
    ],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": [
      "error",
      {
        "enforceForOrderingRelations": true
      }
    ],
    "no-unsafe-optional-chaining": [
      "error",
      {
        "disallowArithmeticOperators": true
      }
    ],
    "no-useless-backreference": ["error"],
    "require-atomic-updates": ["error"],
    "use-isnan": [
      "error",
      {
        "enforceForSwitchCase": true,
        "enforceForIndexOf": true
      }
    ],
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "accessor-pairs": [
      "error",
      {
        "getWithoutSet": true,
        "setWithoutGet": true,
        "enforceForClassMembers": true
      }
    ],
    "array-callback-return": [
      "error",
      {
        "allowImplicit": false,
        "checkForEach": false
      }
    ],
    "block-scoped-var": ["error"],
    "class-methods-use-this": ["error"],
    "complexity": ["off"],
    "consistent-return": [
      "error",
      {
        "treatUndefinedAsUnspecified": false
      }
    ],
    "curly": ["error"],
    "default-case": ["error"],
    "default-case-last": ["error"],
    "default-param-last": ["error"],
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "error",
      {
        "allowKeywords": false
      }
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "grouped-accessor-pairs": [
      "error",
      "getBeforeSet"
    ],
    "guard-for-in": ["error"],
    "max-classes-per-file": ["off"],
    "no-alert": ["off"],
    "no-caller": ["error"],
    "no-case-declarations": ["error"],
    "no-constructor-return": ["error"],
    "no-div-regex": ["error"],
    "no-else-return": [
      "error",
      {
        "allowElseIf": false
      }
    ],
    "no-empty-function": [
      "error",
      {
        "allow": []
      }
    ],
    "no-empty-pattern": ["error"],
    "no-eq-null": ["error"],
    "no-eval": [
      "error",
      {
        "allowIndirect": false
      }
    ],
    "no-extend-native": [
      "error",
      {
        "exceptions": []
      }
    ],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-fallthrough": ["error"],
    "no-floating-decimal": ["error"],
    "no-global-assign": [
      "error",
      {
        "exceptions": []
      }
    ],
    "no-implicit-coercion": [
      "error",
      {
        "boolean": true,
        "number": true,
        "string": true,
        "disallowTemplateShorthand": true,
        "allow": []
      }
    ],
    "no-implicit-globals": [
      "error",
      {
        "lexicalBindings": true
      }
    ],
    "no-implied-eval": ["error"],
    "no-invalid-this": [
      "error",
      {
        "capIsConstructor": true
      }
    ],
    "no-iterator": ["error"],
    "no-labels": [
      "error",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    "no-magic-numbers": ["off"],
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": false,
        "exceptions": {
        }
      }
    ],
    "no-multi-str": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-nonoctal-decimal-escape": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error"],
    "no-proto": ["error"],
    "no-redeclare": ["error"],
    "no-return-assign": [
      "error",
      "always"
    ],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-assign": [
      "error",
      {
        "props": true
      }
    ],
    "no-self-compare": ["error"],
    "no-sequences": [
      "error",
      {
        "allowInParentheses": false
      }
    ],
    "no-throw-literal": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": false,
        "allowTernary": false,
        "enforceForJSX": true,
        "allowTaggedTemplates": false
      }
    ],
    "no-unused-labels": ["error"],
    "no-useless-call": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-return": ["error"],
    "no-void": [
      "error",
      {
        "allowAsStatement": false
      }
    ],
    "no-warning-comments": [
      "error",
      {
        "terms": [
          "todo",
          "fixme"
        ],
        "location": "anywhere"
      }
    ],
    "no-with": ["error"],
    "prefer-named-capture-group": ["error"],
    "prefer-promise-reject-errors": [
      "error",
      {
        "allowEmptyReject": true
      }
    ],
    "prefer-regex-literals": ["error"],
    "radix": ["error"],
    "require-await": ["error"],
    "require-unicode-regexp": ["error"],
    "vars-on-top": ["error"],
    "wrap-iife": ["error"],
    "yoda": [
      "error",
      "always"
    ],
    "strict": [
      "error",
      "global"
    ],
    "init-declarations": [
      "error",
      "always"
    ],
    "no-delete-var": ["error"],
    "no-label-var": ["error"],
    "no-shadow": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-undef": [
      "error",
      {
        "typeof": false
      }
    ],
    "no-undef-init": ["error"],
    "no-undefined": ["error"],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": true,
        "classes": true,
        "variables": true
      }
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        "requireReturnForObjectLiteral": false
      }
    ],
    "arrow-parens": [
      "error",
      "as-needed",
      {
        "requireForBlockBody": false
      }
    ],
    "arrow-spacing": ["off"],
    "constructor-super": ["error"],
    "generator-star-spacing": ["off"],
    "no-class-assign": ["error"],
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],
    "no-const-assign": ["error"],
    "no-dupe-class-members": ["error"],
    "no-duplicate-imports": [
      "error",
      {
        "includeExports": true
      }
    ],
    "no-new-symbol": ["error"],
    "no-this-before-super": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-rename": [
      "error",
      {
        "ignoreExport": true,
        "ignoreDestructuring": true
      }
    ],
    "no-var": ["error"],
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidQuotes": true,
        "ignoreConstructors": true,
        "avoidExplicitReturnArrows": true
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": false
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
      }
    ],
    "prefer-destructuring": [
      "error",
      {
        "object": true,
        "array": true
      }
    ],
    "prefer-numeric-literals": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "require-yield": ["error"],
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    "sort-imports": ["off"],
    "symbol-description": ["error"],
    "template-curly-spacing": ["off"],
    "yield-star-spacing": ["off"],
    "array-bracket-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 2
      }
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-element-newline": [
      "error",
      {
        "ArrayExpression": "always",
        "ArrayPattern": "never"
      }
    ],
    "block-spacing": ["error"],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "camelcase": [
      "error",
      {
        "properties": "always",
        "ignoreDestructuring": false,
        "ignoreImports": false,
        "ignoreGlobals": false
      }
    ],
    "capitalized-comments": ["off"],
    "comma-dangle": [
      "error",
      {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never",
      {
        "enforceForClassMembers": true
      }
    ],
    "consistent-this": [
      "error",
      "that"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "func-name-matching": [
      "error",
      "always"
    ],
    "func-names": [
      "error",
      "always"
    ],
    "func-style": [
      "error",
      "expression"
    ],
    "function-call-argument-newline": [
      "error",
      "never"
    ],
    "function-paren-newline": [
      "error",
      "never"
    ],
    "implicit-arrow-linebreak": [
      "error",
      "beside"
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true,
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "line-comment-position": ["off"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": ["off"],
    "lines-between-class-members": [
      "error",
      "always"
    ],
    "max-depth": [
      "off",
      4
    ],
    "multiline-ternary": [
      "error",
      "always-multiline"
    ],
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "capIsNew": true,
        "properties": true
      }
    ],
    "new-parens": ["error"],
    "newline-per-chained-call": [
      "off",
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-array-constructor": ["error"],
    "no-bitwise": ["off"],
    "no-continue": "off",
    "no-inline-comments": ["off"],
    "no-lonely-if": "error",
    "no-mixed-operators": ["error"],
    "no-mixed-spaces-and-tabs": ["error"],
    "no-multi-assign": [
      "error",
      {
        "ignoreNonDeclaration": false
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0,
        "maxBOF": 0
      }
    ],
    "no-negated-condition": ["error"],
    "no-nested-ternary": ["error"],
    "no-new-object": ["error"],
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": false
      }
    ],
    "no-tabs": [
      "error",
      {
        "allowIndentationTabs": false
      }
    ],
    "no-ternary": ["error"],
    "no-trailing-spaces": ["error"],
    "no-underscore-dangle": ["error"],
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": false
      }
    ],
    "no-whitespace-before-property": ["error"],
    "nonblock-statement-body-position": [
      "error",
      "beside"
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": "always",
        "ObjectPattern": "never",
        "ImportDeclaration": "never",
        "ExportDeclaration": "never"
      }
    ],
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": true
      }
    ],
    "one-var": [
      "error",
      "never"
    ],
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],
    "operator-assignment": [
      "error",
      "never"
    ],
    "operator-linebreak": [
      "error",
      "none"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "padding-line-between-statements": ["off"],
    "prefer-exponentiation-operator": ["error"],
    "prefer-object-spread": ["error"],
    "quote-props": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "double",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": false
      }
    ],
    "semi-spacing": [
      "error",
      {
        "before": false,
        "after": false
      }
    ],
    "semi-style": [
      "error",
      "last"
    ],
    "sort-keys": ["off"],
    "sort-vars": ["off"],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": [
      "error",
      {
        "int32Hint": true
      }
    ],
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-comment": ["off"],
    "switch-colon-spacing": [
      "error",
      {
        "after": true,
        "before": false
      }
    ],
    "template-tag-spacing": [
      "error",
      "never"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "wrap-regex": ["error"]
  }
};
