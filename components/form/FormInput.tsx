import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
};

function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
  required = false,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label ?? name}
      </Label>
      <Input
        defaultValue={defaultValue}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
}

export default FormInput;
