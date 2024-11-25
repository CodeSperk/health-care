import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps={
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
}

const HCInput = ({name, label, type = "text", size = "small", fullWidth, sx, required}: TInputProps) => {
const {control} = useFormContext();

  return (
    <Controller
        control={control}
        name={name}
        render={({ field, fieldState:{error} }) => (
          <TextField
            {...field}
            sx={{...sx}}
            id="outlined-basic"
            type={type}
            label={label} 
            variant="outlined" 
            fullWidth={fullWidth} 
            size = {size}
            placeholder={label}
            required={required}
            error={!!error?.message}
            helperText={error?.message}
          />
        )}
      />
  );
};

export default HCInput;