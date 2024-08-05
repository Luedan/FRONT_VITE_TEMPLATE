import { Autocomplete } from "@mui/material";
import { AutocompleteUIProps, ControlledAutoCompleteProps } from "./types";
import { Controller } from "react-hook-form";
import { TextFieldUI } from "./input";

/**
 * AutocompleteUI component.
 *
 * @remarks
 * This component is a wrapper around the Autocomplete component.
 *
 * @param props - The props for the AutocompleteUI component.
 * @param ref - The ref for the AutocompleteUI component.
 * @returns The rendered AutocompleteUI component.
 *
 * @example
 * // Usage:
 * <AutocompleteUI
 *   disablePortal
 *   id="combo-box-demo"
 *   options={top100Films}
 *   sx={{ width: 300 }}
 *   renderInput={(params) => <TextField {...params} label="Movie" />}
 *   />
 */
export const AutocompleteUI = ({
  label,
  autoCompleteProps,
  ...props
}: AutocompleteUIProps) => {
  return (
    <Autocomplete
      renderInput={(params) => (
        <TextFieldUI {...params} label={label} size="small" />
      )}
      {...props}
      {...autoCompleteProps}
    />
  );
};

/**
 * ControlledAutoCompleteUI component.
 *
 * @remarks
 * This component is a wrapper around the ControlledAutoCompleteProps component.
 *
 * @param props - The props for the ControlledAutoCompleteUI component.
 * @returns The rendered ControlledAutoCompleteUI component.
 *
 * @example
 * // Usage:
 * <ControlledAutoCompleteUI
 *   control={control}
 *   name="autoComplete"
 *   options={options}
 *   label="AutoComplete"
 *   key="autoComplete"
 * />
 */
export function ControlledAutoCompleteUI(props: ControlledAutoCompleteProps) {
  const { control, options, name, label, key, value: Value } = props;
  return (
    <Controller
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      render={({ field: { value, ref, onChange, ...field } }) => (
        <Autocomplete
          {...field}
          {...(Value?.value
            ? { value: options.find((o) => o.value === Value.value) }
            : {})}
          size="small"
          fullWidth
          options={options}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextFieldUI
              {...params}
              {...field}
              inputRef={ref}
              label={label}
              error={props.error}
              helperText={props?.helperText}
            />
          )}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_, data) => onChange(data?.value)}
        />
      )}
      key={key}
      control={control}
      name={name}
    />
  );
}
