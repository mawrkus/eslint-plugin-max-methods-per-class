/**
 * @fileoverview Enforce a maximum number of methods per class
 * @author mawrkus <web@sparring-partner.be>
 */
"use strict";

const DEFAULT_MAX_COUNT = 6;

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "enforce a maximum number of methods per class",
      category: "Best Practices",
      recommended: false,
      url: "https://github.com/mawrkus/eslint-plugin-max-methods-per-class",
    },
    schema: [
      {
        type: "integer",
        minimum: 0,
        default: DEFAULT_MAX_COUNT,
      },
    ],
    messages: {
      maximumExceeded:
        "Class has too many methods ({{ methodsCount }}). Maximum allowed is {{ maximumCount }}.",
    },
  },
  create(context) {
    const maximumCount = context.options[0] || DEFAULT_MAX_COUNT;

    let methodsCount = 0;

    const checkClassMethodsCount = (node) => {
      if (methodsCount > maximumCount) {
        context.report({
          node,
          messageId: "maximumExceeded",
          data: {
            methodsCount,
            maximumCount,
          },
        });
      }
    };

    return {
      "ClassDeclaration, ClassExpression"() {
        methodsCount = 0;
      },
      MethodDefinition() {
        methodsCount += 1;
      },
      "ClassDeclaration:exit": checkClassMethodsCount,
      "ClassExpression:exit": checkClassMethodsCount,
    };
  },
};
