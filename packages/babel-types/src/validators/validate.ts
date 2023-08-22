import {
  NODE_FIELDS,
  NODE_PARENT_VALIDATIONS,
  type FieldOptions,
} from "../definitions";
import type * as t from "..";

export default function validate(
  node: t.Node | undefined | null,
  key: string,
  val: unknown,
): void {
  if (!node) return;

  const fields = NODE_FIELDS[node.type];
  if (!fields) return;

  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}

export function validateInternal(
  field: FieldOptions,
  node: t.Node | undefined | null,
  key: string,
  val: unknown,
  maybeNode?: boolean,
): void {
  if (!field?.validate) return;
  if (field.optional && val == null) return;

  field.validate(node, key, val);

  if (maybeNode) {
    const type = node?.type;
    if (type == null) return;
    NODE_PARENT_VALIDATIONS[type]?.(node, key, val);
  }
}

export function validateField(
  node: t.Node | undefined | null,
  key: string,
  val: unknown,
  field: FieldOptions | undefined | null,
): void {
  if (!field?.validate) return;
  if (field.optional && val == null) return;

  field.validate(node, key, val);
}

export function validateChild(
  node: t.Node | undefined | null,
  key: string,
  val?: unknown,
) {
  const type = node?.type;
  if (type == null) return;
  NODE_PARENT_VALIDATIONS[type]?.(node, key, val);
}
