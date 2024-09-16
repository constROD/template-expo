export function getKeyOrValue<TObj extends Record<string, unknown>>(
  obj: TObj,
  keyOrValue: string
): keyof TObj | TObj[keyof TObj] | undefined {
  const entries = Object.entries(obj);
  const keyEntry = entries.find(([key]) => key === keyOrValue);
  if (keyEntry) return keyEntry[1] as TObj[keyof TObj];
  const valueEntry = entries.find(([, value]) => value === keyOrValue);
  if (valueEntry) return valueEntry[0] as keyof TObj;
  return undefined;
}
