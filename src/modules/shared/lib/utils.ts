import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { t } from "i18next";
import { ValueAutoComplete } from "../components/atoms/forms";

export const resolver = yupResolver

const validator = yup;

const translate = t;

function createAutoCompleteOptions<T>(
  data: T[],
  keys: { label: keyof T; value: keyof T }
): ValueAutoComplete[] {
  return data.map((item) => ({
    label: item[keys.label] as string,
    value: item[keys.value] as string | number | boolean | null | undefined,
  }));
}

export { validator, translate, createAutoCompleteOptions };
