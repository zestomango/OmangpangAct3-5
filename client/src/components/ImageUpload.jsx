const MAX_SIZE = 1024 * 1024;

function ImageUpload({ image, onChange, onError }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return onError("Please choose an image file.");
    if (file.size > MAX_SIZE) return onError("Image is too large. Maximum size is 1MB.");
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    reader.readAsDataURL(file);
    onError("");
  };

  return (
    <label className="flex h-48 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-[#2a475e] bg-[#101822] text-sm text-[#8f98a0] transition hover:border-[#66c0f4] hover:text-[#66c0f4]">
      {image ? (
        <img src={image} alt="Preview" className="h-full w-full object-cover" />
      ) : (
        <span>+ Click to choose an image (max 1MB)</span>
      )}
      <input type="file" accept="image/*" onChange={handleFile} hidden />
    </label>
  );
}

export default ImageUpload;
