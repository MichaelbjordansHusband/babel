/*
 * This file is auto-generated! Do not modify it directly.
 * To re-generate run 'make build'
 */
import { validateNodeInternal as validate } from "../validateNode";
import type * as t from "../..";
import deprecationWarning from "../../utils/deprecationWarning";
import {
  BUILDER_KEYS,
  NODE_FIELDS,
  type FieldDefinitions,
} from "../../definitions/utils";

const _data: Array<[FieldDefinitions, string[]]> = [];
Object.keys(BUILDER_KEYS).forEach(type => {
  const fields = NODE_FIELDS[type];
  _data.push([fields, BUILDER_KEYS[type]]);
});

export function arrayExpression(
  elements: Array<null | t.Expression | t.SpreadElement> = [],
): t.ArrayExpression {
  return validate<t.ArrayExpression>(
    {
      type: "ArrayExpression",
      elements,
    },
    _data[0],
  );
}
export function assignmentExpression(
  operator: string,
  left: t.LVal,
  right: t.Expression,
): t.AssignmentExpression {
  return validate<t.AssignmentExpression>(
    {
      type: "AssignmentExpression",
      operator,
      left,
      right,
    },
    _data[1],
  );
}
export function binaryExpression(
  operator:
    | "+"
    | "-"
    | "/"
    | "%"
    | "*"
    | "**"
    | "&"
    | "|"
    | ">>"
    | ">>>"
    | "<<"
    | "^"
    | "=="
    | "==="
    | "!="
    | "!=="
    | "in"
    | "instanceof"
    | ">"
    | "<"
    | ">="
    | "<="
    | "|>",
  left: t.Expression | t.PrivateName,
  right: t.Expression,
): t.BinaryExpression {
  return validate<t.BinaryExpression>(
    {
      type: "BinaryExpression",
      operator,
      left,
      right,
    },
    _data[2],
  );
}
export function interpreterDirective(value: string): t.InterpreterDirective {
  return validate<t.InterpreterDirective>(
    {
      type: "InterpreterDirective",
      value,
    },
    _data[3],
  );
}
export function directive(value: t.DirectiveLiteral): t.Directive {
  return validate<t.Directive>(
    {
      type: "Directive",
      value,
    },
    _data[4],
  );
}
export function directiveLiteral(value: string): t.DirectiveLiteral {
  return validate<t.DirectiveLiteral>(
    {
      type: "DirectiveLiteral",
      value,
    },
    _data[5],
  );
}
export function blockStatement(
  body: Array<t.Statement>,
  directives: Array<t.Directive> = [],
): t.BlockStatement {
  return validate<t.BlockStatement>(
    {
      type: "BlockStatement",
      body,
      directives,
    },
    _data[6],
  );
}
export function breakStatement(
  label: t.Identifier | null = null,
): t.BreakStatement {
  return validate<t.BreakStatement>(
    {
      type: "BreakStatement",
      label,
    },
    _data[7],
  );
}
export function callExpression(
  callee: t.Expression | t.Super | t.V8IntrinsicIdentifier,
  _arguments: Array<
    t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder
  >,
): t.CallExpression {
  return validate<t.CallExpression>(
    {
      type: "CallExpression",
      callee,
      arguments: _arguments,
    },
    _data[8],
  );
}
export function catchClause(
  param:
    | t.Identifier
    | t.ArrayPattern
    | t.ObjectPattern
    | null
    | undefined = null,
  body: t.BlockStatement,
): t.CatchClause {
  return validate<t.CatchClause>(
    {
      type: "CatchClause",
      param,
      body,
    },
    _data[9],
  );
}
export function conditionalExpression(
  test: t.Expression,
  consequent: t.Expression,
  alternate: t.Expression,
): t.ConditionalExpression {
  return validate<t.ConditionalExpression>(
    {
      type: "ConditionalExpression",
      test,
      consequent,
      alternate,
    },
    _data[10],
  );
}
export function continueStatement(
  label: t.Identifier | null = null,
): t.ContinueStatement {
  return validate<t.ContinueStatement>(
    {
      type: "ContinueStatement",
      label,
    },
    _data[11],
  );
}
export function debuggerStatement(): t.DebuggerStatement {
  return {
    type: "DebuggerStatement",
  };
}
export function doWhileStatement(
  test: t.Expression,
  body: t.Statement,
): t.DoWhileStatement {
  return validate<t.DoWhileStatement>(
    {
      type: "DoWhileStatement",
      test,
      body,
    },
    _data[13],
  );
}
export function emptyStatement(): t.EmptyStatement {
  return {
    type: "EmptyStatement",
  };
}
export function expressionStatement(
  expression: t.Expression,
): t.ExpressionStatement {
  return validate<t.ExpressionStatement>(
    {
      type: "ExpressionStatement",
      expression,
    },
    _data[15],
  );
}
export function file(
  program: t.Program,
  comments: Array<t.CommentBlock | t.CommentLine> | null = null,
  tokens: Array<any> | null = null,
): t.File {
  return validate<t.File>(
    {
      type: "File",
      program,
      comments,
      tokens,
    },
    _data[16],
  );
}
export function forInStatement(
  left: t.VariableDeclaration | t.LVal,
  right: t.Expression,
  body: t.Statement,
): t.ForInStatement {
  return validate<t.ForInStatement>(
    {
      type: "ForInStatement",
      left,
      right,
      body,
    },
    _data[17],
  );
}
export function forStatement(
  init: t.VariableDeclaration | t.Expression | null | undefined = null,
  test: t.Expression | null | undefined = null,
  update: t.Expression | null | undefined = null,
  body: t.Statement,
): t.ForStatement {
  return validate<t.ForStatement>(
    {
      type: "ForStatement",
      init,
      test,
      update,
      body,
    },
    _data[18],
  );
}
export function functionDeclaration(
  id: t.Identifier | null | undefined = null,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement,
  generator: boolean = false,
  async: boolean = false,
): t.FunctionDeclaration {
  return validate<t.FunctionDeclaration>(
    {
      type: "FunctionDeclaration",
      id,
      params,
      body,
      generator,
      async,
    },
    _data[19],
  );
}
export function functionExpression(
  id: t.Identifier | null | undefined = null,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement,
  generator: boolean = false,
  async: boolean = false,
): t.FunctionExpression {
  return validate<t.FunctionExpression>(
    {
      type: "FunctionExpression",
      id,
      params,
      body,
      generator,
      async,
    },
    _data[20],
  );
}
export function identifier(name: string): t.Identifier {
  return validate<t.Identifier>(
    {
      type: "Identifier",
      name,
    },
    _data[21],
  );
}
export function ifStatement(
  test: t.Expression,
  consequent: t.Statement,
  alternate: t.Statement | null = null,
): t.IfStatement {
  return validate<t.IfStatement>(
    {
      type: "IfStatement",
      test,
      consequent,
      alternate,
    },
    _data[22],
  );
}
export function labeledStatement(
  label: t.Identifier,
  body: t.Statement,
): t.LabeledStatement {
  return validate<t.LabeledStatement>(
    {
      type: "LabeledStatement",
      label,
      body,
    },
    _data[23],
  );
}
export function stringLiteral(value: string): t.StringLiteral {
  return validate<t.StringLiteral>(
    {
      type: "StringLiteral",
      value,
    },
    _data[24],
  );
}
export function numericLiteral(value: number): t.NumericLiteral {
  return validate<t.NumericLiteral>(
    {
      type: "NumericLiteral",
      value,
    },
    _data[25],
  );
}
export function nullLiteral(): t.NullLiteral {
  return {
    type: "NullLiteral",
  };
}
export function booleanLiteral(value: boolean): t.BooleanLiteral {
  return validate<t.BooleanLiteral>(
    {
      type: "BooleanLiteral",
      value,
    },
    _data[27],
  );
}
export function regExpLiteral(
  pattern: string,
  flags: string = "",
): t.RegExpLiteral {
  return validate<t.RegExpLiteral>(
    {
      type: "RegExpLiteral",
      pattern,
      flags,
    },
    _data[28],
  );
}
export function logicalExpression(
  operator: "||" | "&&" | "??",
  left: t.Expression,
  right: t.Expression,
): t.LogicalExpression {
  return validate<t.LogicalExpression>(
    {
      type: "LogicalExpression",
      operator,
      left,
      right,
    },
    _data[29],
  );
}
export function memberExpression(
  object: t.Expression | t.Super,
  property: t.Expression | t.Identifier | t.PrivateName,
  computed: boolean = false,
  optional: true | false | null = null,
): t.MemberExpression {
  return validate<t.MemberExpression>(
    {
      type: "MemberExpression",
      object,
      property,
      computed,
      optional,
    },
    _data[30],
  );
}
export function newExpression(
  callee: t.Expression | t.Super | t.V8IntrinsicIdentifier,
  _arguments: Array<
    t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder
  >,
): t.NewExpression {
  return validate<t.NewExpression>(
    {
      type: "NewExpression",
      callee,
      arguments: _arguments,
    },
    _data[31],
  );
}
export function program(
  body: Array<t.Statement>,
  directives: Array<t.Directive> = [],
  sourceType: "script" | "module" = "script",
  interpreter: t.InterpreterDirective | null = null,
): t.Program {
  return validate<t.Program>(
    {
      type: "Program",
      body,
      directives,
      sourceType,
      interpreter,
      sourceFile: null,
    },
    _data[32],
  );
}
export function objectExpression(
  properties: Array<t.ObjectMethod | t.ObjectProperty | t.SpreadElement>,
): t.ObjectExpression {
  return validate<t.ObjectExpression>(
    {
      type: "ObjectExpression",
      properties,
    },
    _data[33],
  );
}
export function objectMethod(
  kind: "method" | "get" | "set" | undefined = "method",
  key:
    | t.Expression
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement,
  computed: boolean = false,
  generator: boolean = false,
  async: boolean = false,
): t.ObjectMethod {
  return validate<t.ObjectMethod>(
    {
      type: "ObjectMethod",
      kind,
      key,
      params,
      body,
      computed,
      generator,
      async,
    },
    _data[34],
  );
}
export function objectProperty(
  key:
    | t.Expression
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.DecimalLiteral
    | t.PrivateName,
  value: t.Expression | t.PatternLike,
  computed: boolean = false,
  shorthand: boolean = false,
  decorators: Array<t.Decorator> | null = null,
): t.ObjectProperty {
  return validate<t.ObjectProperty>(
    {
      type: "ObjectProperty",
      key,
      value,
      computed,
      shorthand,
      decorators,
    },
    _data[35],
  );
}
export function restElement(argument: t.LVal): t.RestElement {
  return validate<t.RestElement>(
    {
      type: "RestElement",
      argument,
    },
    _data[36],
  );
}
export function returnStatement(
  argument: t.Expression | null = null,
): t.ReturnStatement {
  return validate<t.ReturnStatement>(
    {
      type: "ReturnStatement",
      argument,
    },
    _data[37],
  );
}
export function sequenceExpression(
  expressions: Array<t.Expression>,
): t.SequenceExpression {
  return validate<t.SequenceExpression>(
    {
      type: "SequenceExpression",
      expressions,
    },
    _data[38],
  );
}
export function parenthesizedExpression(
  expression: t.Expression,
): t.ParenthesizedExpression {
  return validate<t.ParenthesizedExpression>(
    {
      type: "ParenthesizedExpression",
      expression,
    },
    _data[39],
  );
}
export function switchCase(
  test: t.Expression | null | undefined = null,
  consequent: Array<t.Statement>,
): t.SwitchCase {
  return validate<t.SwitchCase>(
    {
      type: "SwitchCase",
      test,
      consequent,
    },
    _data[40],
  );
}
export function switchStatement(
  discriminant: t.Expression,
  cases: Array<t.SwitchCase>,
): t.SwitchStatement {
  return validate<t.SwitchStatement>(
    {
      type: "SwitchStatement",
      discriminant,
      cases,
    },
    _data[41],
  );
}
export function thisExpression(): t.ThisExpression {
  return {
    type: "ThisExpression",
  };
}
export function throwStatement(argument: t.Expression): t.ThrowStatement {
  return validate<t.ThrowStatement>(
    {
      type: "ThrowStatement",
      argument,
    },
    _data[43],
  );
}
export function tryStatement(
  block: t.BlockStatement,
  handler: t.CatchClause | null = null,
  finalizer: t.BlockStatement | null = null,
): t.TryStatement {
  return validate<t.TryStatement>(
    {
      type: "TryStatement",
      block,
      handler,
      finalizer,
    },
    _data[44],
  );
}
export function unaryExpression(
  operator: "void" | "throw" | "delete" | "!" | "+" | "-" | "~" | "typeof",
  argument: t.Expression,
  prefix: boolean = true,
): t.UnaryExpression {
  return validate<t.UnaryExpression>(
    {
      type: "UnaryExpression",
      operator,
      argument,
      prefix,
    },
    _data[45],
  );
}
export function updateExpression(
  operator: "++" | "--",
  argument: t.Expression,
  prefix: boolean = false,
): t.UpdateExpression {
  return validate<t.UpdateExpression>(
    {
      type: "UpdateExpression",
      operator,
      argument,
      prefix,
    },
    _data[46],
  );
}
export function variableDeclaration(
  kind: "var" | "let" | "const" | "using" | "await using",
  declarations: Array<t.VariableDeclarator>,
): t.VariableDeclaration {
  return validate<t.VariableDeclaration>(
    {
      type: "VariableDeclaration",
      kind,
      declarations,
    },
    _data[47],
  );
}
export function variableDeclarator(
  id: t.LVal,
  init: t.Expression | null = null,
): t.VariableDeclarator {
  return validate<t.VariableDeclarator>(
    {
      type: "VariableDeclarator",
      id,
      init,
    },
    _data[48],
  );
}
export function whileStatement(
  test: t.Expression,
  body: t.Statement,
): t.WhileStatement {
  return validate<t.WhileStatement>(
    {
      type: "WhileStatement",
      test,
      body,
    },
    _data[49],
  );
}
export function withStatement(
  object: t.Expression,
  body: t.Statement,
): t.WithStatement {
  return validate<t.WithStatement>(
    {
      type: "WithStatement",
      object,
      body,
    },
    _data[50],
  );
}
export function assignmentPattern(
  left:
    | t.Identifier
    | t.ObjectPattern
    | t.ArrayPattern
    | t.MemberExpression
    | t.TSAsExpression
    | t.TSSatisfiesExpression
    | t.TSTypeAssertion
    | t.TSNonNullExpression,
  right: t.Expression,
): t.AssignmentPattern {
  return validate<t.AssignmentPattern>(
    {
      type: "AssignmentPattern",
      left,
      right,
    },
    _data[51],
  );
}
export function arrayPattern(
  elements: Array<null | t.PatternLike | t.LVal>,
): t.ArrayPattern {
  return validate<t.ArrayPattern>(
    {
      type: "ArrayPattern",
      elements,
    },
    _data[52],
  );
}
export function arrowFunctionExpression(
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  body: t.BlockStatement | t.Expression,
  async: boolean = false,
): t.ArrowFunctionExpression {
  return validate<t.ArrowFunctionExpression>(
    {
      type: "ArrowFunctionExpression",
      params,
      body,
      async,
      expression: null,
    },
    _data[53],
  );
}
export function classBody(
  body: Array<
    | t.ClassMethod
    | t.ClassPrivateMethod
    | t.ClassProperty
    | t.ClassPrivateProperty
    | t.ClassAccessorProperty
    | t.TSDeclareMethod
    | t.TSIndexSignature
    | t.StaticBlock
  >,
): t.ClassBody {
  return validate<t.ClassBody>(
    {
      type: "ClassBody",
      body,
    },
    _data[54],
  );
}
export function classExpression(
  id: t.Identifier | null | undefined = null,
  superClass: t.Expression | null | undefined = null,
  body: t.ClassBody,
  decorators: Array<t.Decorator> | null = null,
): t.ClassExpression {
  return validate<t.ClassExpression>(
    {
      type: "ClassExpression",
      id,
      superClass,
      body,
      decorators,
    },
    _data[55],
  );
}
export function classDeclaration(
  id: t.Identifier,
  superClass: t.Expression | null | undefined = null,
  body: t.ClassBody,
  decorators: Array<t.Decorator> | null = null,
): t.ClassDeclaration {
  return validate<t.ClassDeclaration>(
    {
      type: "ClassDeclaration",
      id,
      superClass,
      body,
      decorators,
    },
    _data[56],
  );
}
export function exportAllDeclaration(
  source: t.StringLiteral,
): t.ExportAllDeclaration {
  return validate<t.ExportAllDeclaration>(
    {
      type: "ExportAllDeclaration",
      source,
    },
    _data[57],
  );
}
export function exportDefaultDeclaration(
  declaration:
    | t.TSDeclareFunction
    | t.FunctionDeclaration
    | t.ClassDeclaration
    | t.Expression,
): t.ExportDefaultDeclaration {
  return validate<t.ExportDefaultDeclaration>(
    {
      type: "ExportDefaultDeclaration",
      declaration,
    },
    _data[58],
  );
}
export function exportNamedDeclaration(
  declaration: t.Declaration | null = null,
  specifiers: Array<
    t.ExportSpecifier | t.ExportDefaultSpecifier | t.ExportNamespaceSpecifier
  > = [],
  source: t.StringLiteral | null = null,
): t.ExportNamedDeclaration {
  return validate<t.ExportNamedDeclaration>(
    {
      type: "ExportNamedDeclaration",
      declaration,
      specifiers,
      source,
    },
    _data[59],
  );
}
export function exportSpecifier(
  local: t.Identifier,
  exported: t.Identifier | t.StringLiteral,
): t.ExportSpecifier {
  return validate<t.ExportSpecifier>(
    {
      type: "ExportSpecifier",
      local,
      exported,
    },
    _data[60],
  );
}
export function forOfStatement(
  left: t.VariableDeclaration | t.LVal,
  right: t.Expression,
  body: t.Statement,
  _await: boolean = false,
): t.ForOfStatement {
  return validate<t.ForOfStatement>(
    {
      type: "ForOfStatement",
      left,
      right,
      body,
      await: _await,
    },
    _data[61],
  );
}
export function importDeclaration(
  specifiers: Array<
    t.ImportSpecifier | t.ImportDefaultSpecifier | t.ImportNamespaceSpecifier
  >,
  source: t.StringLiteral,
): t.ImportDeclaration {
  return validate<t.ImportDeclaration>(
    {
      type: "ImportDeclaration",
      specifiers,
      source,
    },
    _data[62],
  );
}
export function importDefaultSpecifier(
  local: t.Identifier,
): t.ImportDefaultSpecifier {
  return validate<t.ImportDefaultSpecifier>(
    {
      type: "ImportDefaultSpecifier",
      local,
    },
    _data[63],
  );
}
export function importNamespaceSpecifier(
  local: t.Identifier,
): t.ImportNamespaceSpecifier {
  return validate<t.ImportNamespaceSpecifier>(
    {
      type: "ImportNamespaceSpecifier",
      local,
    },
    _data[64],
  );
}
export function importSpecifier(
  local: t.Identifier,
  imported: t.Identifier | t.StringLiteral,
): t.ImportSpecifier {
  return validate<t.ImportSpecifier>(
    {
      type: "ImportSpecifier",
      local,
      imported,
    },
    _data[65],
  );
}
export function metaProperty(
  meta: t.Identifier,
  property: t.Identifier,
): t.MetaProperty {
  return validate<t.MetaProperty>(
    {
      type: "MetaProperty",
      meta,
      property,
    },
    _data[66],
  );
}
export function classMethod(
  kind: "get" | "set" | "method" | "constructor" | undefined = "method",
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression,
  params: Array<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >,
  body: t.BlockStatement,
  computed: boolean = false,
  _static: boolean = false,
  generator: boolean = false,
  async: boolean = false,
): t.ClassMethod {
  return validate<t.ClassMethod>(
    {
      type: "ClassMethod",
      kind,
      key,
      params,
      body,
      computed,
      static: _static,
      generator,
      async,
    },
    _data[67],
  );
}
export function objectPattern(
  properties: Array<t.RestElement | t.ObjectProperty>,
): t.ObjectPattern {
  return validate<t.ObjectPattern>(
    {
      type: "ObjectPattern",
      properties,
    },
    _data[68],
  );
}
export function spreadElement(argument: t.Expression): t.SpreadElement {
  return validate<t.SpreadElement>(
    {
      type: "SpreadElement",
      argument,
    },
    _data[69],
  );
}
function _super(): t.Super {
  return {
    type: "Super",
  };
}
export { _super as super };
export function taggedTemplateExpression(
  tag: t.Expression,
  quasi: t.TemplateLiteral,
): t.TaggedTemplateExpression {
  return validate<t.TaggedTemplateExpression>(
    {
      type: "TaggedTemplateExpression",
      tag,
      quasi,
    },
    _data[71],
  );
}
export function templateElement(
  value: { raw: string; cooked?: string },
  tail: boolean = false,
): t.TemplateElement {
  return validate<t.TemplateElement>(
    {
      type: "TemplateElement",
      value,
      tail,
    },
    _data[72],
  );
}
export function templateLiteral(
  quasis: Array<t.TemplateElement>,
  expressions: Array<t.Expression | t.TSType>,
): t.TemplateLiteral {
  return validate<t.TemplateLiteral>(
    {
      type: "TemplateLiteral",
      quasis,
      expressions,
    },
    _data[73],
  );
}
export function yieldExpression(
  argument: t.Expression | null = null,
  delegate: boolean = false,
): t.YieldExpression {
  return validate<t.YieldExpression>(
    {
      type: "YieldExpression",
      argument,
      delegate,
    },
    _data[74],
  );
}
export function awaitExpression(argument: t.Expression): t.AwaitExpression {
  return validate<t.AwaitExpression>(
    {
      type: "AwaitExpression",
      argument,
    },
    _data[75],
  );
}
function _import(): t.Import {
  return {
    type: "Import",
  };
}
export { _import as import };
export function bigIntLiteral(value: string): t.BigIntLiteral {
  return validate<t.BigIntLiteral>(
    {
      type: "BigIntLiteral",
      value,
    },
    _data[77],
  );
}
export function exportNamespaceSpecifier(
  exported: t.Identifier,
): t.ExportNamespaceSpecifier {
  return validate<t.ExportNamespaceSpecifier>(
    {
      type: "ExportNamespaceSpecifier",
      exported,
    },
    _data[78],
  );
}
export function optionalMemberExpression(
  object: t.Expression,
  property: t.Expression | t.Identifier,
  computed: boolean | undefined = false,
  optional: boolean,
): t.OptionalMemberExpression {
  return validate<t.OptionalMemberExpression>(
    {
      type: "OptionalMemberExpression",
      object,
      property,
      computed,
      optional,
    },
    _data[79],
  );
}
export function optionalCallExpression(
  callee: t.Expression,
  _arguments: Array<
    t.Expression | t.SpreadElement | t.JSXNamespacedName | t.ArgumentPlaceholder
  >,
  optional: boolean,
): t.OptionalCallExpression {
  return validate<t.OptionalCallExpression>(
    {
      type: "OptionalCallExpression",
      callee,
      arguments: _arguments,
      optional,
    },
    _data[80],
  );
}
export function classProperty(
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression,
  value: t.Expression | null = null,
  typeAnnotation: t.TypeAnnotation | t.TSTypeAnnotation | t.Noop | null = null,
  decorators: Array<t.Decorator> | null = null,
  computed: boolean = false,
  _static: boolean = false,
): t.ClassProperty {
  return validate<t.ClassProperty>(
    {
      type: "ClassProperty",
      key,
      value,
      typeAnnotation,
      decorators,
      computed,
      static: _static,
    },
    _data[81],
  );
}
export function classAccessorProperty(
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression
    | t.PrivateName,
  value: t.Expression | null = null,
  typeAnnotation: t.TypeAnnotation | t.TSTypeAnnotation | t.Noop | null = null,
  decorators: Array<t.Decorator> | null = null,
  computed: boolean = false,
  _static: boolean = false,
): t.ClassAccessorProperty {
  return validate<t.ClassAccessorProperty>(
    {
      type: "ClassAccessorProperty",
      key,
      value,
      typeAnnotation,
      decorators,
      computed,
      static: _static,
    },
    _data[82],
  );
}
export function classPrivateProperty(
  key: t.PrivateName,
  value: t.Expression | null = null,
  decorators: Array<t.Decorator> | null = null,
  _static: boolean = false,
): t.ClassPrivateProperty {
  return validate<t.ClassPrivateProperty>(
    {
      type: "ClassPrivateProperty",
      key,
      value,
      decorators,
      static: _static,
    },
    _data[83],
  );
}
export function classPrivateMethod(
  kind: "get" | "set" | "method" | undefined = "method",
  key: t.PrivateName,
  params: Array<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >,
  body: t.BlockStatement,
  _static: boolean = false,
): t.ClassPrivateMethod {
  return validate<t.ClassPrivateMethod>(
    {
      type: "ClassPrivateMethod",
      kind,
      key,
      params,
      body,
      static: _static,
    },
    _data[84],
  );
}
export function privateName(id: t.Identifier): t.PrivateName {
  return validate<t.PrivateName>(
    {
      type: "PrivateName",
      id,
    },
    _data[85],
  );
}
export function staticBlock(body: Array<t.Statement>): t.StaticBlock {
  return validate<t.StaticBlock>(
    {
      type: "StaticBlock",
      body,
    },
    _data[86],
  );
}
export function anyTypeAnnotation(): t.AnyTypeAnnotation {
  return {
    type: "AnyTypeAnnotation",
  };
}
export function arrayTypeAnnotation(
  elementType: t.FlowType,
): t.ArrayTypeAnnotation {
  return validate<t.ArrayTypeAnnotation>(
    {
      type: "ArrayTypeAnnotation",
      elementType,
    },
    _data[88],
  );
}
export function booleanTypeAnnotation(): t.BooleanTypeAnnotation {
  return {
    type: "BooleanTypeAnnotation",
  };
}
export function booleanLiteralTypeAnnotation(
  value: boolean,
): t.BooleanLiteralTypeAnnotation {
  return validate<t.BooleanLiteralTypeAnnotation>(
    {
      type: "BooleanLiteralTypeAnnotation",
      value,
    },
    _data[90],
  );
}
export function nullLiteralTypeAnnotation(): t.NullLiteralTypeAnnotation {
  return {
    type: "NullLiteralTypeAnnotation",
  };
}
export function classImplements(
  id: t.Identifier,
  typeParameters: t.TypeParameterInstantiation | null = null,
): t.ClassImplements {
  return validate<t.ClassImplements>(
    {
      type: "ClassImplements",
      id,
      typeParameters,
    },
    _data[92],
  );
}
export function declareClass(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined = null,
  _extends: Array<t.InterfaceExtends> | null | undefined = null,
  body: t.ObjectTypeAnnotation,
): t.DeclareClass {
  return validate<t.DeclareClass>(
    {
      type: "DeclareClass",
      id,
      typeParameters,
      extends: _extends,
      body,
    },
    _data[93],
  );
}
export function declareFunction(id: t.Identifier): t.DeclareFunction {
  return validate<t.DeclareFunction>(
    {
      type: "DeclareFunction",
      id,
    },
    _data[94],
  );
}
export function declareInterface(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined = null,
  _extends: Array<t.InterfaceExtends> | null | undefined = null,
  body: t.ObjectTypeAnnotation,
): t.DeclareInterface {
  return validate<t.DeclareInterface>(
    {
      type: "DeclareInterface",
      id,
      typeParameters,
      extends: _extends,
      body,
    },
    _data[95],
  );
}
export function declareModule(
  id: t.Identifier | t.StringLiteral,
  body: t.BlockStatement,
  kind: "CommonJS" | "ES" | null = null,
): t.DeclareModule {
  return validate<t.DeclareModule>(
    {
      type: "DeclareModule",
      id,
      body,
      kind,
    },
    _data[96],
  );
}
export function declareModuleExports(
  typeAnnotation: t.TypeAnnotation,
): t.DeclareModuleExports {
  return validate<t.DeclareModuleExports>(
    {
      type: "DeclareModuleExports",
      typeAnnotation,
    },
    _data[97],
  );
}
export function declareTypeAlias(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined = null,
  right: t.FlowType,
): t.DeclareTypeAlias {
  return validate<t.DeclareTypeAlias>(
    {
      type: "DeclareTypeAlias",
      id,
      typeParameters,
      right,
    },
    _data[98],
  );
}
export function declareOpaqueType(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null = null,
  supertype: t.FlowType | null = null,
): t.DeclareOpaqueType {
  return validate<t.DeclareOpaqueType>(
    {
      type: "DeclareOpaqueType",
      id,
      typeParameters,
      supertype,
    },
    _data[99],
  );
}
export function declareVariable(id: t.Identifier): t.DeclareVariable {
  return validate<t.DeclareVariable>(
    {
      type: "DeclareVariable",
      id,
    },
    _data[100],
  );
}
export function declareExportDeclaration(
  declaration: t.Flow | null = null,
  specifiers: Array<
    t.ExportSpecifier | t.ExportNamespaceSpecifier
  > | null = null,
  source: t.StringLiteral | null = null,
): t.DeclareExportDeclaration {
  return validate<t.DeclareExportDeclaration>(
    {
      type: "DeclareExportDeclaration",
      declaration,
      specifiers,
      source,
    },
    _data[101],
  );
}
export function declareExportAllDeclaration(
  source: t.StringLiteral,
): t.DeclareExportAllDeclaration {
  return validate<t.DeclareExportAllDeclaration>(
    {
      type: "DeclareExportAllDeclaration",
      source,
    },
    _data[102],
  );
}
export function declaredPredicate(value: t.Flow): t.DeclaredPredicate {
  return validate<t.DeclaredPredicate>(
    {
      type: "DeclaredPredicate",
      value,
    },
    _data[103],
  );
}
export function existsTypeAnnotation(): t.ExistsTypeAnnotation {
  return {
    type: "ExistsTypeAnnotation",
  };
}
export function functionTypeAnnotation(
  typeParameters: t.TypeParameterDeclaration | null | undefined = null,
  params: Array<t.FunctionTypeParam>,
  rest: t.FunctionTypeParam | null | undefined = null,
  returnType: t.FlowType,
): t.FunctionTypeAnnotation {
  return validate<t.FunctionTypeAnnotation>(
    {
      type: "FunctionTypeAnnotation",
      typeParameters,
      params,
      rest,
      returnType,
    },
    _data[105],
  );
}
export function functionTypeParam(
  name: t.Identifier | null | undefined = null,
  typeAnnotation: t.FlowType,
): t.FunctionTypeParam {
  return validate<t.FunctionTypeParam>(
    {
      type: "FunctionTypeParam",
      name,
      typeAnnotation,
    },
    _data[106],
  );
}
export function genericTypeAnnotation(
  id: t.Identifier | t.QualifiedTypeIdentifier,
  typeParameters: t.TypeParameterInstantiation | null = null,
): t.GenericTypeAnnotation {
  return validate<t.GenericTypeAnnotation>(
    {
      type: "GenericTypeAnnotation",
      id,
      typeParameters,
    },
    _data[107],
  );
}
export function inferredPredicate(): t.InferredPredicate {
  return {
    type: "InferredPredicate",
  };
}
export function interfaceExtends(
  id: t.Identifier | t.QualifiedTypeIdentifier,
  typeParameters: t.TypeParameterInstantiation | null = null,
): t.InterfaceExtends {
  return validate<t.InterfaceExtends>(
    {
      type: "InterfaceExtends",
      id,
      typeParameters,
    },
    _data[109],
  );
}
export function interfaceDeclaration(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined = null,
  _extends: Array<t.InterfaceExtends> | null | undefined = null,
  body: t.ObjectTypeAnnotation,
): t.InterfaceDeclaration {
  return validate<t.InterfaceDeclaration>(
    {
      type: "InterfaceDeclaration",
      id,
      typeParameters,
      extends: _extends,
      body,
    },
    _data[110],
  );
}
export function interfaceTypeAnnotation(
  _extends: Array<t.InterfaceExtends> | null | undefined = null,
  body: t.ObjectTypeAnnotation,
): t.InterfaceTypeAnnotation {
  return validate<t.InterfaceTypeAnnotation>(
    {
      type: "InterfaceTypeAnnotation",
      extends: _extends,
      body,
    },
    _data[111],
  );
}
export function intersectionTypeAnnotation(
  types: Array<t.FlowType>,
): t.IntersectionTypeAnnotation {
  return validate<t.IntersectionTypeAnnotation>(
    {
      type: "IntersectionTypeAnnotation",
      types,
    },
    _data[112],
  );
}
export function mixedTypeAnnotation(): t.MixedTypeAnnotation {
  return {
    type: "MixedTypeAnnotation",
  };
}
export function emptyTypeAnnotation(): t.EmptyTypeAnnotation {
  return {
    type: "EmptyTypeAnnotation",
  };
}
export function nullableTypeAnnotation(
  typeAnnotation: t.FlowType,
): t.NullableTypeAnnotation {
  return validate<t.NullableTypeAnnotation>(
    {
      type: "NullableTypeAnnotation",
      typeAnnotation,
    },
    _data[115],
  );
}
export function numberLiteralTypeAnnotation(
  value: number,
): t.NumberLiteralTypeAnnotation {
  return validate<t.NumberLiteralTypeAnnotation>(
    {
      type: "NumberLiteralTypeAnnotation",
      value,
    },
    _data[116],
  );
}
export function numberTypeAnnotation(): t.NumberTypeAnnotation {
  return {
    type: "NumberTypeAnnotation",
  };
}
export function objectTypeAnnotation(
  properties: Array<t.ObjectTypeProperty | t.ObjectTypeSpreadProperty>,
  indexers: Array<t.ObjectTypeIndexer> = [],
  callProperties: Array<t.ObjectTypeCallProperty> = [],
  internalSlots: Array<t.ObjectTypeInternalSlot> = [],
  exact: boolean = false,
): t.ObjectTypeAnnotation {
  return validate<t.ObjectTypeAnnotation>(
    {
      type: "ObjectTypeAnnotation",
      properties,
      indexers,
      callProperties,
      internalSlots,
      exact,
    },
    _data[118],
  );
}
export function objectTypeInternalSlot(
  id: t.Identifier,
  value: t.FlowType,
  optional: boolean,
  _static: boolean,
  method: boolean,
): t.ObjectTypeInternalSlot {
  return validate<t.ObjectTypeInternalSlot>(
    {
      type: "ObjectTypeInternalSlot",
      id,
      value,
      optional,
      static: _static,
      method,
    },
    _data[119],
  );
}
export function objectTypeCallProperty(
  value: t.FlowType,
): t.ObjectTypeCallProperty {
  return validate<t.ObjectTypeCallProperty>(
    {
      type: "ObjectTypeCallProperty",
      value,
      static: null,
    },
    _data[120],
  );
}
export function objectTypeIndexer(
  id: t.Identifier | null | undefined = null,
  key: t.FlowType,
  value: t.FlowType,
  variance: t.Variance | null = null,
): t.ObjectTypeIndexer {
  return validate<t.ObjectTypeIndexer>(
    {
      type: "ObjectTypeIndexer",
      id,
      key,
      value,
      variance,
      static: null,
    },
    _data[121],
  );
}
export function objectTypeProperty(
  key: t.Identifier | t.StringLiteral,
  value: t.FlowType,
  variance: t.Variance | null = null,
): t.ObjectTypeProperty {
  return validate<t.ObjectTypeProperty>(
    {
      type: "ObjectTypeProperty",
      key,
      value,
      variance,
      kind: null,
      method: null,
      optional: null,
      proto: null,
      static: null,
    },
    _data[122],
  );
}
export function objectTypeSpreadProperty(
  argument: t.FlowType,
): t.ObjectTypeSpreadProperty {
  return validate<t.ObjectTypeSpreadProperty>(
    {
      type: "ObjectTypeSpreadProperty",
      argument,
    },
    _data[123],
  );
}
export function opaqueType(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined = null,
  supertype: t.FlowType | null | undefined = null,
  impltype: t.FlowType,
): t.OpaqueType {
  return validate<t.OpaqueType>(
    {
      type: "OpaqueType",
      id,
      typeParameters,
      supertype,
      impltype,
    },
    _data[124],
  );
}
export function qualifiedTypeIdentifier(
  id: t.Identifier,
  qualification: t.Identifier | t.QualifiedTypeIdentifier,
): t.QualifiedTypeIdentifier {
  return validate<t.QualifiedTypeIdentifier>(
    {
      type: "QualifiedTypeIdentifier",
      id,
      qualification,
    },
    _data[125],
  );
}
export function stringLiteralTypeAnnotation(
  value: string,
): t.StringLiteralTypeAnnotation {
  return validate<t.StringLiteralTypeAnnotation>(
    {
      type: "StringLiteralTypeAnnotation",
      value,
    },
    _data[126],
  );
}
export function stringTypeAnnotation(): t.StringTypeAnnotation {
  return {
    type: "StringTypeAnnotation",
  };
}
export function symbolTypeAnnotation(): t.SymbolTypeAnnotation {
  return {
    type: "SymbolTypeAnnotation",
  };
}
export function thisTypeAnnotation(): t.ThisTypeAnnotation {
  return {
    type: "ThisTypeAnnotation",
  };
}
export function tupleTypeAnnotation(
  types: Array<t.FlowType>,
): t.TupleTypeAnnotation {
  return validate<t.TupleTypeAnnotation>(
    {
      type: "TupleTypeAnnotation",
      types,
    },
    _data[130],
  );
}
export function typeofTypeAnnotation(
  argument: t.FlowType,
): t.TypeofTypeAnnotation {
  return validate<t.TypeofTypeAnnotation>(
    {
      type: "TypeofTypeAnnotation",
      argument,
    },
    _data[131],
  );
}
export function typeAlias(
  id: t.Identifier,
  typeParameters: t.TypeParameterDeclaration | null | undefined = null,
  right: t.FlowType,
): t.TypeAlias {
  return validate<t.TypeAlias>(
    {
      type: "TypeAlias",
      id,
      typeParameters,
      right,
    },
    _data[132],
  );
}
export function typeAnnotation(typeAnnotation: t.FlowType): t.TypeAnnotation {
  return validate<t.TypeAnnotation>(
    {
      type: "TypeAnnotation",
      typeAnnotation,
    },
    _data[133],
  );
}
export function typeCastExpression(
  expression: t.Expression,
  typeAnnotation: t.TypeAnnotation,
): t.TypeCastExpression {
  return validate<t.TypeCastExpression>(
    {
      type: "TypeCastExpression",
      expression,
      typeAnnotation,
    },
    _data[134],
  );
}
export function typeParameter(
  bound: t.TypeAnnotation | null = null,
  _default: t.FlowType | null = null,
  variance: t.Variance | null = null,
): t.TypeParameter {
  return validate<t.TypeParameter>(
    {
      type: "TypeParameter",
      bound,
      default: _default,
      variance,
      name: null,
    },
    _data[135],
  );
}
export function typeParameterDeclaration(
  params: Array<t.TypeParameter>,
): t.TypeParameterDeclaration {
  return validate<t.TypeParameterDeclaration>(
    {
      type: "TypeParameterDeclaration",
      params,
    },
    _data[136],
  );
}
export function typeParameterInstantiation(
  params: Array<t.FlowType>,
): t.TypeParameterInstantiation {
  return validate<t.TypeParameterInstantiation>(
    {
      type: "TypeParameterInstantiation",
      params,
    },
    _data[137],
  );
}
export function unionTypeAnnotation(
  types: Array<t.FlowType>,
): t.UnionTypeAnnotation {
  return validate<t.UnionTypeAnnotation>(
    {
      type: "UnionTypeAnnotation",
      types,
    },
    _data[138],
  );
}
export function variance(kind: "minus" | "plus"): t.Variance {
  return validate<t.Variance>(
    {
      type: "Variance",
      kind,
    },
    _data[139],
  );
}
export function voidTypeAnnotation(): t.VoidTypeAnnotation {
  return {
    type: "VoidTypeAnnotation",
  };
}
export function enumDeclaration(
  id: t.Identifier,
  body:
    | t.EnumBooleanBody
    | t.EnumNumberBody
    | t.EnumStringBody
    | t.EnumSymbolBody,
): t.EnumDeclaration {
  return validate<t.EnumDeclaration>(
    {
      type: "EnumDeclaration",
      id,
      body,
    },
    _data[141],
  );
}
export function enumBooleanBody(
  members: Array<t.EnumBooleanMember>,
): t.EnumBooleanBody {
  return validate<t.EnumBooleanBody>(
    {
      type: "EnumBooleanBody",
      members,
      explicitType: null,
      hasUnknownMembers: null,
    },
    _data[142],
  );
}
export function enumNumberBody(
  members: Array<t.EnumNumberMember>,
): t.EnumNumberBody {
  return validate<t.EnumNumberBody>(
    {
      type: "EnumNumberBody",
      members,
      explicitType: null,
      hasUnknownMembers: null,
    },
    _data[143],
  );
}
export function enumStringBody(
  members: Array<t.EnumStringMember | t.EnumDefaultedMember>,
): t.EnumStringBody {
  return validate<t.EnumStringBody>(
    {
      type: "EnumStringBody",
      members,
      explicitType: null,
      hasUnknownMembers: null,
    },
    _data[144],
  );
}
export function enumSymbolBody(
  members: Array<t.EnumDefaultedMember>,
): t.EnumSymbolBody {
  return validate<t.EnumSymbolBody>(
    {
      type: "EnumSymbolBody",
      members,
      hasUnknownMembers: null,
    },
    _data[145],
  );
}
export function enumBooleanMember(id: t.Identifier): t.EnumBooleanMember {
  return validate<t.EnumBooleanMember>(
    {
      type: "EnumBooleanMember",
      id,
      init: null,
    },
    _data[146],
  );
}
export function enumNumberMember(
  id: t.Identifier,
  init: t.NumericLiteral,
): t.EnumNumberMember {
  return validate<t.EnumNumberMember>(
    {
      type: "EnumNumberMember",
      id,
      init,
    },
    _data[147],
  );
}
export function enumStringMember(
  id: t.Identifier,
  init: t.StringLiteral,
): t.EnumStringMember {
  return validate<t.EnumStringMember>(
    {
      type: "EnumStringMember",
      id,
      init,
    },
    _data[148],
  );
}
export function enumDefaultedMember(id: t.Identifier): t.EnumDefaultedMember {
  return validate<t.EnumDefaultedMember>(
    {
      type: "EnumDefaultedMember",
      id,
    },
    _data[149],
  );
}
export function indexedAccessType(
  objectType: t.FlowType,
  indexType: t.FlowType,
): t.IndexedAccessType {
  return validate<t.IndexedAccessType>(
    {
      type: "IndexedAccessType",
      objectType,
      indexType,
    },
    _data[150],
  );
}
export function optionalIndexedAccessType(
  objectType: t.FlowType,
  indexType: t.FlowType,
): t.OptionalIndexedAccessType {
  return validate<t.OptionalIndexedAccessType>(
    {
      type: "OptionalIndexedAccessType",
      objectType,
      indexType,
      optional: null,
    },
    _data[151],
  );
}
export function jsxAttribute(
  name: t.JSXIdentifier | t.JSXNamespacedName,
  value:
    | t.JSXElement
    | t.JSXFragment
    | t.StringLiteral
    | t.JSXExpressionContainer
    | null = null,
): t.JSXAttribute {
  return validate<t.JSXAttribute>(
    {
      type: "JSXAttribute",
      name,
      value,
    },
    _data[152],
  );
}
export { jsxAttribute as jSXAttribute };
export function jsxClosingElement(
  name: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
): t.JSXClosingElement {
  return validate<t.JSXClosingElement>(
    {
      type: "JSXClosingElement",
      name,
    },
    _data[153],
  );
}
export { jsxClosingElement as jSXClosingElement };
export function jsxElement(
  openingElement: t.JSXOpeningElement,
  closingElement: t.JSXClosingElement | null | undefined = null,
  children: Array<
    | t.JSXText
    | t.JSXExpressionContainer
    | t.JSXSpreadChild
    | t.JSXElement
    | t.JSXFragment
  >,
  selfClosing: boolean | null = null,
): t.JSXElement {
  return validate<t.JSXElement>(
    {
      type: "JSXElement",
      openingElement,
      closingElement,
      children,
      selfClosing,
    },
    _data[154],
  );
}
export { jsxElement as jSXElement };
export function jsxEmptyExpression(): t.JSXEmptyExpression {
  return {
    type: "JSXEmptyExpression",
  };
}
export { jsxEmptyExpression as jSXEmptyExpression };
export function jsxExpressionContainer(
  expression: t.Expression | t.JSXEmptyExpression,
): t.JSXExpressionContainer {
  return validate<t.JSXExpressionContainer>(
    {
      type: "JSXExpressionContainer",
      expression,
    },
    _data[156],
  );
}
export { jsxExpressionContainer as jSXExpressionContainer };
export function jsxSpreadChild(expression: t.Expression): t.JSXSpreadChild {
  return validate<t.JSXSpreadChild>(
    {
      type: "JSXSpreadChild",
      expression,
    },
    _data[157],
  );
}
export { jsxSpreadChild as jSXSpreadChild };
export function jsxIdentifier(name: string): t.JSXIdentifier {
  return validate<t.JSXIdentifier>(
    {
      type: "JSXIdentifier",
      name,
    },
    _data[158],
  );
}
export { jsxIdentifier as jSXIdentifier };
export function jsxMemberExpression(
  object: t.JSXMemberExpression | t.JSXIdentifier,
  property: t.JSXIdentifier,
): t.JSXMemberExpression {
  return validate<t.JSXMemberExpression>(
    {
      type: "JSXMemberExpression",
      object,
      property,
    },
    _data[159],
  );
}
export { jsxMemberExpression as jSXMemberExpression };
export function jsxNamespacedName(
  namespace: t.JSXIdentifier,
  name: t.JSXIdentifier,
): t.JSXNamespacedName {
  return validate<t.JSXNamespacedName>(
    {
      type: "JSXNamespacedName",
      namespace,
      name,
    },
    _data[160],
  );
}
export { jsxNamespacedName as jSXNamespacedName };
export function jsxOpeningElement(
  name: t.JSXIdentifier | t.JSXMemberExpression | t.JSXNamespacedName,
  attributes: Array<t.JSXAttribute | t.JSXSpreadAttribute>,
  selfClosing: boolean = false,
): t.JSXOpeningElement {
  return validate<t.JSXOpeningElement>(
    {
      type: "JSXOpeningElement",
      name,
      attributes,
      selfClosing,
    },
    _data[161],
  );
}
export { jsxOpeningElement as jSXOpeningElement };
export function jsxSpreadAttribute(
  argument: t.Expression,
): t.JSXSpreadAttribute {
  return validate<t.JSXSpreadAttribute>(
    {
      type: "JSXSpreadAttribute",
      argument,
    },
    _data[162],
  );
}
export { jsxSpreadAttribute as jSXSpreadAttribute };
export function jsxText(value: string): t.JSXText {
  return validate<t.JSXText>(
    {
      type: "JSXText",
      value,
    },
    _data[163],
  );
}
export { jsxText as jSXText };
export function jsxFragment(
  openingFragment: t.JSXOpeningFragment,
  closingFragment: t.JSXClosingFragment,
  children: Array<
    | t.JSXText
    | t.JSXExpressionContainer
    | t.JSXSpreadChild
    | t.JSXElement
    | t.JSXFragment
  >,
): t.JSXFragment {
  return validate<t.JSXFragment>(
    {
      type: "JSXFragment",
      openingFragment,
      closingFragment,
      children,
    },
    _data[164],
  );
}
export { jsxFragment as jSXFragment };
export function jsxOpeningFragment(): t.JSXOpeningFragment {
  return {
    type: "JSXOpeningFragment",
  };
}
export { jsxOpeningFragment as jSXOpeningFragment };
export function jsxClosingFragment(): t.JSXClosingFragment {
  return {
    type: "JSXClosingFragment",
  };
}
export { jsxClosingFragment as jSXClosingFragment };
export function noop(): t.Noop {
  return {
    type: "Noop",
  };
}
export function placeholder(
  expectedNode:
    | "Identifier"
    | "StringLiteral"
    | "Expression"
    | "Statement"
    | "Declaration"
    | "BlockStatement"
    | "ClassBody"
    | "Pattern",
  name: t.Identifier,
): t.Placeholder {
  return validate<t.Placeholder>(
    {
      type: "Placeholder",
      expectedNode,
      name,
    },
    _data[168],
  );
}
export function v8IntrinsicIdentifier(name: string): t.V8IntrinsicIdentifier {
  return validate<t.V8IntrinsicIdentifier>(
    {
      type: "V8IntrinsicIdentifier",
      name,
    },
    _data[169],
  );
}
export function argumentPlaceholder(): t.ArgumentPlaceholder {
  return {
    type: "ArgumentPlaceholder",
  };
}
export function bindExpression(
  object: t.Expression,
  callee: t.Expression,
): t.BindExpression {
  return validate<t.BindExpression>(
    {
      type: "BindExpression",
      object,
      callee,
    },
    _data[171],
  );
}
export function importAttribute(
  key: t.Identifier | t.StringLiteral,
  value: t.StringLiteral,
): t.ImportAttribute {
  return validate<t.ImportAttribute>(
    {
      type: "ImportAttribute",
      key,
      value,
    },
    _data[172],
  );
}
export function decorator(expression: t.Expression): t.Decorator {
  return validate<t.Decorator>(
    {
      type: "Decorator",
      expression,
    },
    _data[173],
  );
}
export function doExpression(
  body: t.BlockStatement,
  async: boolean = false,
): t.DoExpression {
  return validate<t.DoExpression>(
    {
      type: "DoExpression",
      body,
      async,
    },
    _data[174],
  );
}
export function exportDefaultSpecifier(
  exported: t.Identifier,
): t.ExportDefaultSpecifier {
  return validate<t.ExportDefaultSpecifier>(
    {
      type: "ExportDefaultSpecifier",
      exported,
    },
    _data[175],
  );
}
export function recordExpression(
  properties: Array<t.ObjectProperty | t.SpreadElement>,
): t.RecordExpression {
  return validate<t.RecordExpression>(
    {
      type: "RecordExpression",
      properties,
    },
    _data[176],
  );
}
export function tupleExpression(
  elements: Array<t.Expression | t.SpreadElement> = [],
): t.TupleExpression {
  return validate<t.TupleExpression>(
    {
      type: "TupleExpression",
      elements,
    },
    _data[177],
  );
}
export function decimalLiteral(value: string): t.DecimalLiteral {
  return validate<t.DecimalLiteral>(
    {
      type: "DecimalLiteral",
      value,
    },
    _data[178],
  );
}
export function moduleExpression(body: t.Program): t.ModuleExpression {
  return validate<t.ModuleExpression>(
    {
      type: "ModuleExpression",
      body,
    },
    _data[179],
  );
}
export function topicReference(): t.TopicReference {
  return {
    type: "TopicReference",
  };
}
export function pipelineTopicExpression(
  expression: t.Expression,
): t.PipelineTopicExpression {
  return validate<t.PipelineTopicExpression>(
    {
      type: "PipelineTopicExpression",
      expression,
    },
    _data[181],
  );
}
export function pipelineBareFunction(
  callee: t.Expression,
): t.PipelineBareFunction {
  return validate<t.PipelineBareFunction>(
    {
      type: "PipelineBareFunction",
      callee,
    },
    _data[182],
  );
}
export function pipelinePrimaryTopicReference(): t.PipelinePrimaryTopicReference {
  return {
    type: "PipelinePrimaryTopicReference",
  };
}
export function tsParameterProperty(
  parameter: t.Identifier | t.AssignmentPattern,
): t.TSParameterProperty {
  return validate<t.TSParameterProperty>(
    {
      type: "TSParameterProperty",
      parameter,
    },
    _data[184],
  );
}
export { tsParameterProperty as tSParameterProperty };
export function tsDeclareFunction(
  id: t.Identifier | null | undefined = null,
  typeParameters:
    | t.TSTypeParameterDeclaration
    | t.Noop
    | null
    | undefined = null,
  params: Array<t.Identifier | t.Pattern | t.RestElement>,
  returnType: t.TSTypeAnnotation | t.Noop | null = null,
): t.TSDeclareFunction {
  return validate<t.TSDeclareFunction>(
    {
      type: "TSDeclareFunction",
      id,
      typeParameters,
      params,
      returnType,
    },
    _data[185],
  );
}
export { tsDeclareFunction as tSDeclareFunction };
export function tsDeclareMethod(
  decorators: Array<t.Decorator> | null | undefined = null,
  key:
    | t.Identifier
    | t.StringLiteral
    | t.NumericLiteral
    | t.BigIntLiteral
    | t.Expression,
  typeParameters:
    | t.TSTypeParameterDeclaration
    | t.Noop
    | null
    | undefined = null,
  params: Array<
    t.Identifier | t.Pattern | t.RestElement | t.TSParameterProperty
  >,
  returnType: t.TSTypeAnnotation | t.Noop | null = null,
): t.TSDeclareMethod {
  return validate<t.TSDeclareMethod>(
    {
      type: "TSDeclareMethod",
      decorators,
      key,
      typeParameters,
      params,
      returnType,
    },
    _data[186],
  );
}
export { tsDeclareMethod as tSDeclareMethod };
export function tsQualifiedName(
  left: t.TSEntityName,
  right: t.Identifier,
): t.TSQualifiedName {
  return validate<t.TSQualifiedName>(
    {
      type: "TSQualifiedName",
      left,
      right,
    },
    _data[187],
  );
}
export { tsQualifiedName as tSQualifiedName };
export function tsCallSignatureDeclaration(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined = null,
  parameters: Array<t.Identifier | t.RestElement>,
  typeAnnotation: t.TSTypeAnnotation | null = null,
): t.TSCallSignatureDeclaration {
  return validate<t.TSCallSignatureDeclaration>(
    {
      type: "TSCallSignatureDeclaration",
      typeParameters,
      parameters,
      typeAnnotation,
    },
    _data[188],
  );
}
export { tsCallSignatureDeclaration as tSCallSignatureDeclaration };
export function tsConstructSignatureDeclaration(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined = null,
  parameters: Array<t.Identifier | t.RestElement>,
  typeAnnotation: t.TSTypeAnnotation | null = null,
): t.TSConstructSignatureDeclaration {
  return validate<t.TSConstructSignatureDeclaration>(
    {
      type: "TSConstructSignatureDeclaration",
      typeParameters,
      parameters,
      typeAnnotation,
    },
    _data[189],
  );
}
export { tsConstructSignatureDeclaration as tSConstructSignatureDeclaration };
export function tsPropertySignature(
  key: t.Expression,
  typeAnnotation: t.TSTypeAnnotation | null = null,
  initializer: t.Expression | null = null,
): t.TSPropertySignature {
  return validate<t.TSPropertySignature>(
    {
      type: "TSPropertySignature",
      key,
      typeAnnotation,
      initializer,
      kind: null,
    },
    _data[190],
  );
}
export { tsPropertySignature as tSPropertySignature };
export function tsMethodSignature(
  key: t.Expression,
  typeParameters: t.TSTypeParameterDeclaration | null | undefined = null,
  parameters: Array<t.Identifier | t.RestElement>,
  typeAnnotation: t.TSTypeAnnotation | null = null,
): t.TSMethodSignature {
  return validate<t.TSMethodSignature>(
    {
      type: "TSMethodSignature",
      key,
      typeParameters,
      parameters,
      typeAnnotation,
      kind: null,
    },
    _data[191],
  );
}
export { tsMethodSignature as tSMethodSignature };
export function tsIndexSignature(
  parameters: Array<t.Identifier>,
  typeAnnotation: t.TSTypeAnnotation | null = null,
): t.TSIndexSignature {
  return validate<t.TSIndexSignature>(
    {
      type: "TSIndexSignature",
      parameters,
      typeAnnotation,
    },
    _data[192],
  );
}
export { tsIndexSignature as tSIndexSignature };
export function tsAnyKeyword(): t.TSAnyKeyword {
  return {
    type: "TSAnyKeyword",
  };
}
export { tsAnyKeyword as tSAnyKeyword };
export function tsBooleanKeyword(): t.TSBooleanKeyword {
  return {
    type: "TSBooleanKeyword",
  };
}
export { tsBooleanKeyword as tSBooleanKeyword };
export function tsBigIntKeyword(): t.TSBigIntKeyword {
  return {
    type: "TSBigIntKeyword",
  };
}
export { tsBigIntKeyword as tSBigIntKeyword };
export function tsIntrinsicKeyword(): t.TSIntrinsicKeyword {
  return {
    type: "TSIntrinsicKeyword",
  };
}
export { tsIntrinsicKeyword as tSIntrinsicKeyword };
export function tsNeverKeyword(): t.TSNeverKeyword {
  return {
    type: "TSNeverKeyword",
  };
}
export { tsNeverKeyword as tSNeverKeyword };
export function tsNullKeyword(): t.TSNullKeyword {
  return {
    type: "TSNullKeyword",
  };
}
export { tsNullKeyword as tSNullKeyword };
export function tsNumberKeyword(): t.TSNumberKeyword {
  return {
    type: "TSNumberKeyword",
  };
}
export { tsNumberKeyword as tSNumberKeyword };
export function tsObjectKeyword(): t.TSObjectKeyword {
  return {
    type: "TSObjectKeyword",
  };
}
export { tsObjectKeyword as tSObjectKeyword };
export function tsStringKeyword(): t.TSStringKeyword {
  return {
    type: "TSStringKeyword",
  };
}
export { tsStringKeyword as tSStringKeyword };
export function tsSymbolKeyword(): t.TSSymbolKeyword {
  return {
    type: "TSSymbolKeyword",
  };
}
export { tsSymbolKeyword as tSSymbolKeyword };
export function tsUndefinedKeyword(): t.TSUndefinedKeyword {
  return {
    type: "TSUndefinedKeyword",
  };
}
export { tsUndefinedKeyword as tSUndefinedKeyword };
export function tsUnknownKeyword(): t.TSUnknownKeyword {
  return {
    type: "TSUnknownKeyword",
  };
}
export { tsUnknownKeyword as tSUnknownKeyword };
export function tsVoidKeyword(): t.TSVoidKeyword {
  return {
    type: "TSVoidKeyword",
  };
}
export { tsVoidKeyword as tSVoidKeyword };
export function tsThisType(): t.TSThisType {
  return {
    type: "TSThisType",
  };
}
export { tsThisType as tSThisType };
export function tsFunctionType(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined = null,
  parameters: Array<t.Identifier | t.RestElement>,
  typeAnnotation: t.TSTypeAnnotation | null = null,
): t.TSFunctionType {
  return validate<t.TSFunctionType>(
    {
      type: "TSFunctionType",
      typeParameters,
      parameters,
      typeAnnotation,
    },
    _data[207],
  );
}
export { tsFunctionType as tSFunctionType };
export function tsConstructorType(
  typeParameters: t.TSTypeParameterDeclaration | null | undefined = null,
  parameters: Array<t.Identifier | t.RestElement>,
  typeAnnotation: t.TSTypeAnnotation | null = null,
): t.TSConstructorType {
  return validate<t.TSConstructorType>(
    {
      type: "TSConstructorType",
      typeParameters,
      parameters,
      typeAnnotation,
    },
    _data[208],
  );
}
export { tsConstructorType as tSConstructorType };
export function tsTypeReference(
  typeName: t.TSEntityName,
  typeParameters: t.TSTypeParameterInstantiation | null = null,
): t.TSTypeReference {
  return validate<t.TSTypeReference>(
    {
      type: "TSTypeReference",
      typeName,
      typeParameters,
    },
    _data[209],
  );
}
export { tsTypeReference as tSTypeReference };
export function tsTypePredicate(
  parameterName: t.Identifier | t.TSThisType,
  typeAnnotation: t.TSTypeAnnotation | null = null,
  asserts: boolean | null = null,
): t.TSTypePredicate {
  return validate<t.TSTypePredicate>(
    {
      type: "TSTypePredicate",
      parameterName,
      typeAnnotation,
      asserts,
    },
    _data[210],
  );
}
export { tsTypePredicate as tSTypePredicate };
export function tsTypeQuery(
  exprName: t.TSEntityName | t.TSImportType,
  typeParameters: t.TSTypeParameterInstantiation | null = null,
): t.TSTypeQuery {
  return validate<t.TSTypeQuery>(
    {
      type: "TSTypeQuery",
      exprName,
      typeParameters,
    },
    _data[211],
  );
}
export { tsTypeQuery as tSTypeQuery };
export function tsTypeLiteral(
  members: Array<t.TSTypeElement>,
): t.TSTypeLiteral {
  return validate<t.TSTypeLiteral>(
    {
      type: "TSTypeLiteral",
      members,
    },
    _data[212],
  );
}
export { tsTypeLiteral as tSTypeLiteral };
export function tsArrayType(elementType: t.TSType): t.TSArrayType {
  return validate<t.TSArrayType>(
    {
      type: "TSArrayType",
      elementType,
    },
    _data[213],
  );
}
export { tsArrayType as tSArrayType };
export function tsTupleType(
  elementTypes: Array<t.TSType | t.TSNamedTupleMember>,
): t.TSTupleType {
  return validate<t.TSTupleType>(
    {
      type: "TSTupleType",
      elementTypes,
    },
    _data[214],
  );
}
export { tsTupleType as tSTupleType };
export function tsOptionalType(typeAnnotation: t.TSType): t.TSOptionalType {
  return validate<t.TSOptionalType>(
    {
      type: "TSOptionalType",
      typeAnnotation,
    },
    _data[215],
  );
}
export { tsOptionalType as tSOptionalType };
export function tsRestType(typeAnnotation: t.TSType): t.TSRestType {
  return validate<t.TSRestType>(
    {
      type: "TSRestType",
      typeAnnotation,
    },
    _data[216],
  );
}
export { tsRestType as tSRestType };
export function tsNamedTupleMember(
  label: t.Identifier,
  elementType: t.TSType,
  optional: boolean = false,
): t.TSNamedTupleMember {
  return validate<t.TSNamedTupleMember>(
    {
      type: "TSNamedTupleMember",
      label,
      elementType,
      optional,
    },
    _data[217],
  );
}
export { tsNamedTupleMember as tSNamedTupleMember };
export function tsUnionType(types: Array<t.TSType>): t.TSUnionType {
  return validate<t.TSUnionType>(
    {
      type: "TSUnionType",
      types,
    },
    _data[218],
  );
}
export { tsUnionType as tSUnionType };
export function tsIntersectionType(
  types: Array<t.TSType>,
): t.TSIntersectionType {
  return validate<t.TSIntersectionType>(
    {
      type: "TSIntersectionType",
      types,
    },
    _data[219],
  );
}
export { tsIntersectionType as tSIntersectionType };
export function tsConditionalType(
  checkType: t.TSType,
  extendsType: t.TSType,
  trueType: t.TSType,
  falseType: t.TSType,
): t.TSConditionalType {
  return validate<t.TSConditionalType>(
    {
      type: "TSConditionalType",
      checkType,
      extendsType,
      trueType,
      falseType,
    },
    _data[220],
  );
}
export { tsConditionalType as tSConditionalType };
export function tsInferType(typeParameter: t.TSTypeParameter): t.TSInferType {
  return validate<t.TSInferType>(
    {
      type: "TSInferType",
      typeParameter,
    },
    _data[221],
  );
}
export { tsInferType as tSInferType };
export function tsParenthesizedType(
  typeAnnotation: t.TSType,
): t.TSParenthesizedType {
  return validate<t.TSParenthesizedType>(
    {
      type: "TSParenthesizedType",
      typeAnnotation,
    },
    _data[222],
  );
}
export { tsParenthesizedType as tSParenthesizedType };
export function tsTypeOperator(typeAnnotation: t.TSType): t.TSTypeOperator {
  return validate<t.TSTypeOperator>(
    {
      type: "TSTypeOperator",
      typeAnnotation,
      operator: null,
    },
    _data[223],
  );
}
export { tsTypeOperator as tSTypeOperator };
export function tsIndexedAccessType(
  objectType: t.TSType,
  indexType: t.TSType,
): t.TSIndexedAccessType {
  return validate<t.TSIndexedAccessType>(
    {
      type: "TSIndexedAccessType",
      objectType,
      indexType,
    },
    _data[224],
  );
}
export { tsIndexedAccessType as tSIndexedAccessType };
export function tsMappedType(
  typeParameter: t.TSTypeParameter,
  typeAnnotation: t.TSType | null = null,
  nameType: t.TSType | null = null,
): t.TSMappedType {
  return validate<t.TSMappedType>(
    {
      type: "TSMappedType",
      typeParameter,
      typeAnnotation,
      nameType,
    },
    _data[225],
  );
}
export { tsMappedType as tSMappedType };
export function tsLiteralType(
  literal:
    | t.NumericLiteral
    | t.StringLiteral
    | t.BooleanLiteral
    | t.BigIntLiteral
    | t.TemplateLiteral
    | t.UnaryExpression,
): t.TSLiteralType {
  return validate<t.TSLiteralType>(
    {
      type: "TSLiteralType",
      literal,
    },
    _data[226],
  );
}
export { tsLiteralType as tSLiteralType };
export function tsExpressionWithTypeArguments(
  expression: t.TSEntityName,
  typeParameters: t.TSTypeParameterInstantiation | null = null,
): t.TSExpressionWithTypeArguments {
  return validate<t.TSExpressionWithTypeArguments>(
    {
      type: "TSExpressionWithTypeArguments",
      expression,
      typeParameters,
    },
    _data[227],
  );
}
export { tsExpressionWithTypeArguments as tSExpressionWithTypeArguments };
export function tsInterfaceDeclaration(
  id: t.Identifier,
  typeParameters: t.TSTypeParameterDeclaration | null | undefined = null,
  _extends: Array<t.TSExpressionWithTypeArguments> | null | undefined = null,
  body: t.TSInterfaceBody,
): t.TSInterfaceDeclaration {
  return validate<t.TSInterfaceDeclaration>(
    {
      type: "TSInterfaceDeclaration",
      id,
      typeParameters,
      extends: _extends,
      body,
    },
    _data[228],
  );
}
export { tsInterfaceDeclaration as tSInterfaceDeclaration };
export function tsInterfaceBody(
  body: Array<t.TSTypeElement>,
): t.TSInterfaceBody {
  return validate<t.TSInterfaceBody>(
    {
      type: "TSInterfaceBody",
      body,
    },
    _data[229],
  );
}
export { tsInterfaceBody as tSInterfaceBody };
export function tsTypeAliasDeclaration(
  id: t.Identifier,
  typeParameters: t.TSTypeParameterDeclaration | null | undefined = null,
  typeAnnotation: t.TSType,
): t.TSTypeAliasDeclaration {
  return validate<t.TSTypeAliasDeclaration>(
    {
      type: "TSTypeAliasDeclaration",
      id,
      typeParameters,
      typeAnnotation,
    },
    _data[230],
  );
}
export { tsTypeAliasDeclaration as tSTypeAliasDeclaration };
export function tsInstantiationExpression(
  expression: t.Expression,
  typeParameters: t.TSTypeParameterInstantiation | null = null,
): t.TSInstantiationExpression {
  return validate<t.TSInstantiationExpression>(
    {
      type: "TSInstantiationExpression",
      expression,
      typeParameters,
    },
    _data[231],
  );
}
export { tsInstantiationExpression as tSInstantiationExpression };
export function tsAsExpression(
  expression: t.Expression,
  typeAnnotation: t.TSType,
): t.TSAsExpression {
  return validate<t.TSAsExpression>(
    {
      type: "TSAsExpression",
      expression,
      typeAnnotation,
    },
    _data[232],
  );
}
export { tsAsExpression as tSAsExpression };
export function tsSatisfiesExpression(
  expression: t.Expression,
  typeAnnotation: t.TSType,
): t.TSSatisfiesExpression {
  return validate<t.TSSatisfiesExpression>(
    {
      type: "TSSatisfiesExpression",
      expression,
      typeAnnotation,
    },
    _data[233],
  );
}
export { tsSatisfiesExpression as tSSatisfiesExpression };
export function tsTypeAssertion(
  typeAnnotation: t.TSType,
  expression: t.Expression,
): t.TSTypeAssertion {
  return validate<t.TSTypeAssertion>(
    {
      type: "TSTypeAssertion",
      typeAnnotation,
      expression,
    },
    _data[234],
  );
}
export { tsTypeAssertion as tSTypeAssertion };
export function tsEnumDeclaration(
  id: t.Identifier,
  members: Array<t.TSEnumMember>,
): t.TSEnumDeclaration {
  return validate<t.TSEnumDeclaration>(
    {
      type: "TSEnumDeclaration",
      id,
      members,
    },
    _data[235],
  );
}
export { tsEnumDeclaration as tSEnumDeclaration };
export function tsEnumMember(
  id: t.Identifier | t.StringLiteral,
  initializer: t.Expression | null = null,
): t.TSEnumMember {
  return validate<t.TSEnumMember>(
    {
      type: "TSEnumMember",
      id,
      initializer,
    },
    _data[236],
  );
}
export { tsEnumMember as tSEnumMember };
export function tsModuleDeclaration(
  id: t.Identifier | t.StringLiteral,
  body: t.TSModuleBlock | t.TSModuleDeclaration,
): t.TSModuleDeclaration {
  return validate<t.TSModuleDeclaration>(
    {
      type: "TSModuleDeclaration",
      id,
      body,
    },
    _data[237],
  );
}
export { tsModuleDeclaration as tSModuleDeclaration };
export function tsModuleBlock(body: Array<t.Statement>): t.TSModuleBlock {
  return validate<t.TSModuleBlock>(
    {
      type: "TSModuleBlock",
      body,
    },
    _data[238],
  );
}
export { tsModuleBlock as tSModuleBlock };
export function tsImportType(
  argument: t.StringLiteral,
  qualifier: t.TSEntityName | null = null,
  typeParameters: t.TSTypeParameterInstantiation | null = null,
): t.TSImportType {
  return validate<t.TSImportType>(
    {
      type: "TSImportType",
      argument,
      qualifier,
      typeParameters,
    },
    _data[239],
  );
}
export { tsImportType as tSImportType };
export function tsImportEqualsDeclaration(
  id: t.Identifier,
  moduleReference: t.TSEntityName | t.TSExternalModuleReference,
): t.TSImportEqualsDeclaration {
  return validate<t.TSImportEqualsDeclaration>(
    {
      type: "TSImportEqualsDeclaration",
      id,
      moduleReference,
      isExport: null,
    },
    _data[240],
  );
}
export { tsImportEqualsDeclaration as tSImportEqualsDeclaration };
export function tsExternalModuleReference(
  expression: t.StringLiteral,
): t.TSExternalModuleReference {
  return validate<t.TSExternalModuleReference>(
    {
      type: "TSExternalModuleReference",
      expression,
    },
    _data[241],
  );
}
export { tsExternalModuleReference as tSExternalModuleReference };
export function tsNonNullExpression(
  expression: t.Expression,
): t.TSNonNullExpression {
  return validate<t.TSNonNullExpression>(
    {
      type: "TSNonNullExpression",
      expression,
    },
    _data[242],
  );
}
export { tsNonNullExpression as tSNonNullExpression };
export function tsExportAssignment(
  expression: t.Expression,
): t.TSExportAssignment {
  return validate<t.TSExportAssignment>(
    {
      type: "TSExportAssignment",
      expression,
    },
    _data[243],
  );
}
export { tsExportAssignment as tSExportAssignment };
export function tsNamespaceExportDeclaration(
  id: t.Identifier,
): t.TSNamespaceExportDeclaration {
  return validate<t.TSNamespaceExportDeclaration>(
    {
      type: "TSNamespaceExportDeclaration",
      id,
    },
    _data[244],
  );
}
export { tsNamespaceExportDeclaration as tSNamespaceExportDeclaration };
export function tsTypeAnnotation(typeAnnotation: t.TSType): t.TSTypeAnnotation {
  return validate<t.TSTypeAnnotation>(
    {
      type: "TSTypeAnnotation",
      typeAnnotation,
    },
    _data[245],
  );
}
export { tsTypeAnnotation as tSTypeAnnotation };
export function tsTypeParameterInstantiation(
  params: Array<t.TSType>,
): t.TSTypeParameterInstantiation {
  return validate<t.TSTypeParameterInstantiation>(
    {
      type: "TSTypeParameterInstantiation",
      params,
    },
    _data[246],
  );
}
export { tsTypeParameterInstantiation as tSTypeParameterInstantiation };
export function tsTypeParameterDeclaration(
  params: Array<t.TSTypeParameter>,
): t.TSTypeParameterDeclaration {
  return validate<t.TSTypeParameterDeclaration>(
    {
      type: "TSTypeParameterDeclaration",
      params,
    },
    _data[247],
  );
}
export { tsTypeParameterDeclaration as tSTypeParameterDeclaration };
export function tsTypeParameter(
  constraint: t.TSType | null | undefined = null,
  _default: t.TSType | null | undefined = null,
  name: string,
): t.TSTypeParameter {
  return validate<t.TSTypeParameter>(
    {
      type: "TSTypeParameter",
      constraint,
      default: _default,
      name,
    },
    _data[248],
  );
}
export { tsTypeParameter as tSTypeParameter };
/** @deprecated */
function NumberLiteral(value: number) {
  deprecationWarning("NumberLiteral", "NumericLiteral", "The node type ");
  return numericLiteral(value);
}
export { NumberLiteral as numberLiteral };
/** @deprecated */
function RegexLiteral(pattern: string, flags: string = "") {
  deprecationWarning("RegexLiteral", "RegExpLiteral", "The node type ");
  return regExpLiteral(pattern, flags);
}
export { RegexLiteral as regexLiteral };
/** @deprecated */
function RestProperty(argument: t.LVal) {
  deprecationWarning("RestProperty", "RestElement", "The node type ");
  return restElement(argument);
}
export { RestProperty as restProperty };
/** @deprecated */
function SpreadProperty(argument: t.Expression) {
  deprecationWarning("SpreadProperty", "SpreadElement", "The node type ");
  return spreadElement(argument);
}
export { SpreadProperty as spreadProperty };
