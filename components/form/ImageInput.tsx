import { Input } from "../ui/input";
import { Label } from "../ui/label";

function ImageInput({ name = "image" }: { name?: string }) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
}

export default ImageInput;
