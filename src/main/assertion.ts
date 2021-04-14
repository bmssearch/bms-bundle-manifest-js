import Ajv from 'ajv';

export const assertForSchema = (schema: Record<string, any>) => <T>(
  input: Record<string, any>
): T => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const isValid = validate(input);
  if (!isValid) {
    throw new Error(JSON.stringify(validate.errors));
  }

  return input as T;
};
